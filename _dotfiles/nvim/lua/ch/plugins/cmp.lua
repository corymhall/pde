local M = {
	"hrsh7th/nvim-cmp",
	event = "InsertEnter",
	dependencies = {
		"hrsh7th/cmp-nvim-lsp",
		"hrsh7th/cmp-buffer",
		"hrsh7th/cmp-path",
		"hrsh7th/cmp-nvim-lua",
		"saadparwaiz1/cmp_luasnip",
		"petertriho/cmp-git",
	},
}

function M.config()
	local cmp = require("cmp")
	cmp.setup({
		snippet = {
			expand = function(args)
				require("luasnip").lsp_expand(args.body)
			end,
		},
		completion = { completeopt = "menu,menuone,noinsert" },
		formatting = {
			format = require("ch.plugins.lsp.kind").cmp_format(),
		},
		mapping = {
			["<C-p>"] = cmp.mapping.select_prev_item(),
			["<C-n>"] = cmp.mapping.select_next_item(),
			["<C-b>"] = cmp.mapping.scroll_docs(-4),
			["<C-f>"] = cmp.mapping.scroll_docs(4),
			["<c-space>"] = cmp.mapping.complete(),
			["<CR>"] = cmp.mapping.confirm({
				behavior = cmp.ConfirmBehavior.Replace,
				select = true,
			}),
			["c-y"] = cmp.mapping(
				cmp.mapping.confirm({
					behavior = cmp.ConfirmBehavior.Insert,
					select = true,
				}),
				{ "i", "c" }
			),
		},
		sources = cmp.config.sources({
			-- { name = 'copilot' },
			{ name = "nvim_lsp" },
			{ name = "git" },
			{ name = "luasnip" },
		}, {
			{ name = "path" },
			{ name = "buffer", keyword_length = 5, max_item_count = 5 },
		}),
		-- sorting = {
		--   priority_weight = 2,
		--   comparators = {
		--     -- require('copilot_cmp.comparators').prioritize,
		--     cmp.config.compare.offset,
		--     cmp.config.compare.exact,
		--     cmp.config.compare.score,
		--     cmp.config.compare.kind,
		--     cmp.config.compare.sort_text,
		--     cmp.config.compare.length,
		--     cmp.config.compare.order,
		--   },
		-- },
		experimental = {
			native_menu = false,
			ghost_text = false,
		},
	})
	require("cmp_git").setup({
		remotes = { "origin", "upstream" },
	})
end

return M
