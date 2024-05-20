return { -- Autoformat
	"stevearc/conform.nvim",
	opts = {
		notify_on_error = false,
		format_on_save = {
			timeout_ms = 500,
			lsp_fallback = true,
		},
		formatters_by_ft = {
			swift = { "swiftformat" },
			lua = { "stylua" },
			-- typescript = { "prettierd" },
			typescript = function(bufnr)
				local files = require("conform.util").root_file({ ".prettierrc.json" })

				local git_dir =
					vim.fs.find(".git", { upward = true, path = vim.fs.dirname(vim.api.nvim_buf_get_name(bufnr)) })
				if vim.tbl_isempty(git_dir) then
					return {}
				end
				local found = vim.fs.find(
					{ ".prettierrc.json", ".prettierrc" },
					{ upward = true, path = vim.fs.dirname(vim.api.nvim_buf_get_name(bufnr)), stop = git_dir[0] }
				)[1]
				P(found)
				if found then
					return { "prettierd" }
				end
				return {}
			end,
			-- Conform can also run multiple formatters sequentially
			-- python = { "isort", "black" },
			--
			-- You can use a sub-list to tell conform to run *until* a formatter
			-- is found.
			-- javascript = { { "prettierd", "prettier" } },
		},
	},
}
