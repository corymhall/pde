local M = {
	"neovim/nvim-lspconfig",
	dependencies = {
		-- Automatically install LSPs and related tools to stdpath for neovim
		"williamboman/mason.nvim",
		"williamboman/mason-lspconfig.nvim",
		"WhoIsSethDaniel/mason-tool-installer.nvim",
		{ "j-hui/fidget.nvim", opts = {} },
	},
}

function M.config()
	require("neodev").setup({})
	require("ch.plugins.lsp.diagnostics").setup()
	local lspconfig = require("lspconfig")
	local telescope_mapper = require("ch.plugins.telescope.mappings")

	vim.api.nvim_create_autocmd("LspAttach", {
		group = vim.api.nvim_create_augroup("kickstart-lsp-attach", { clear = true }),
		callback = function(event)
			local map = function(keys, func, desc)
				vim.keymap.set("n", keys, func, { buffer = event.buf, desc = "LSP: " .. desc })
			end
			local lsp_rename = function()
				vim.lsp.buf.rename()
				vim.cmd("wa")
			end

			map("gd", telescope_mapper("lsp_definitions"), "[G]oto [D]efinition")
			map("gr", telescope_mapper("lsp_references"), "[G]oto [R]eferences")
			map("gi", telescope_mapper("lsp_implementations"), "[G]oto [I]mplementations")
			map("gt", telescope_mapper("lsp_type_definitions"), "[G]oto [T]ype Definitions")
			map("<leader>ws", telescope_mapper("lsp_dynamic_workspace_symbols"), "[W]workspace [S]ymbols")
			map("<leader>ds", telescope_mapper("lsp_document_symbols"), "[D]ocument [S]ymbols")
			map("<leader>dl", vim.diagnostic.open_float, "[D]iagnostics [L]ine")
			map("<leader>ca", vim.lsp.buf.code_action, "[C]ode [A]ction")
			map("<leader>rn", lsp_rename, "[R]e[n]ame")
			map("K", vim.lsp.buf.hover, "Hover")

			-- The following two autocommands are used to highlight references of the
			-- word under your cursor when your cursor rests there for a little while.
			--    See `:help CursorHold` for information about when this is executed
			--
			-- When you move your cursor, the highlights will be cleared (the second autocommand).
			local client = vim.lsp.get_client_by_id(event.data.client_id)
			if client and client.server_capabilities.documentHighlightProvider then
				vim.api.nvim_create_autocmd({ "CursorHold", "CursorHoldI" }, {
					buffer = event.buf,
					callback = vim.lsp.buf.document_highlight,
				})

				vim.api.nvim_create_autocmd({ "CursorMoved", "CursorMovedI" }, {
					buffer = event.buf,
					callback = vim.lsp.buf.clear_references,
				})
			end
		end,
	})

	-- LSP servers and clients are able to communicate to each other what features they support.
	--  By default, Neovim doesn't support everything that is in the LSP Specification.
	--  When you add nvim-cmp, luasnip, etc. Neovim now has *more* capabilities.
	--  So, we create new capabilities with nvim cmp, and then broadcast that to the servers.
	local capabilities = vim.lsp.protocol.make_client_capabilities()
	capabilities = vim.tbl_deep_extend("force", capabilities, require("cmp_nvim_lsp").default_capabilities())

	local servers = {
		pyright = {},
		terraformls = {},
		lua_ls = {
			single_file_support = true,
			settings = {
				Lua = {
					runtime = { version = "LuaJIT" },
					completion = {
						callSnippet = "Replace",
					},
					workspace = {
						checkThirdParty = false,
						unusedLocalExclude = { "*_" },
						-- Tells lua_ls where to find all the Lua files that you have loaded
						-- for your neovim configuration
						library = {
							"${3rd}/luv/library",
							unpack(vim.api.nvim_get_runtime_file("", true)),
						},
					},
				},
			},
		},
		eslint = {
			root_dir = lspconfig.util.root_pattern(".eslintrc", ".eslintrc.js", ".eslintrc.json"),
			settings = {
				format = {
					enable = true,
				},
			},
			handlers = {
				-- this error shows up occasionally when formatting
				-- formatting actually works, so this will supress it
				["window/showMessageRequest"] = function(_, result)
					if result.message:find("ENOENT") then
						return vim.NIL
					end

					return vim.lsp.handlers["window/showMessageRequest"](nil, result)
				end,
			},
		},
		tsserver = {
			settings = {
				typescript = {},
				javascript = {},
				completions = {
					completeFunctionCalls = true,
				},
			},
		},
		rust_analyzer = {},
		gopls = {
			settings = {
				gopls = {
					buildFlags = { "--tags=all" },
					codelenses = { test = true },
				},
			},
			flags = {
				debounce_text_changes = 200,
			},
		},
	}

	require("mason").setup()
	local ensure_installed = vim.tbl_keys(servers or {})
	vim.list_extend(ensure_installed, {
		"stylua", -- Used to format lua code
		"shellcheck",
		"shfmt",
		"codelldb",
	})
	require("mason-tool-installer").setup({ ensure_installed = ensure_installed })
	require("mason-lspconfig").setup({
		handlers = {
			function(server_name)
				local server = servers[server_name] or {}

				-- This handles overriding only values explicitly passed
				-- by the server configuration above. Useful when disabling
				-- certain features of an LSP (for example, turning off formatting for tsserver)
				server.capabilities = vim.tbl_deep_extend("force", {}, capabilities, server.capabilities or {})
				require("lspconfig")[server_name].setup(server)
			end,
		},
	})
end

return M
