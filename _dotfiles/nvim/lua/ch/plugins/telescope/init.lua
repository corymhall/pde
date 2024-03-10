local telescope_mapper = require("ch.plugins.telescope.mappings")
local M = {
	lazy = false,
	"nvim-telescope/telescope.nvim",
	dependencies = {
		{ "nvim-telescope/telescope-file-browser.nvim" },
		{ "nvim-telescope/telescope-symbols.nvim" },
		{ "nvim-telescope/telescope-fzf-native.nvim", build = "make" },
		{ "nvim-telescope/telescope-github.nvim" },
		{ "nvim-telescope/telescope-ui-select.nvim" },
		{ "nvim-telescope/telescope-fzf-writer.nvim" },
		{ "nvim-telescope/telescope-live-grep-args.nvim" },
		{ "xiyaowong/telescope-emoji.nvim" },
		{ "debugloop/telescope-undo.nvim" },
		{
			"edolphin-ydf/goimpl.nvim",
			dependencies = {
				{ "nvim-lua/popup.nvim" },
			},
		},
	},
}

function M.config()
	require("ch.plugins.telescope.setup").setup()
end

function M.init()
	local wk = require("which-key")
	vim.keymap.set("n", "<leader>;", telescope_mapper("buffers"), { silent = true, noremap = true })
	wk.register({
		r = {
			name = "[R]andom",
			e = { ":Telescope emoji", "Emoji picker" },
			u = { ":Telescope undo", "Undo history" },
		},
		f = {
			name = "[F]ile",
			d = { telescope_mapper("fd"), "Find files" },
			f = { telescope_mapper("fd_current_dir"), "Find files current dir" },
			n = { telescope_mapper("fd_node_package"), "Find files in node package" },
			b = { telescope_mapper("file_browser"), "File browser" },
			g = { telescope_mapper("git_files"), "Git files" },
			a = { telescope_mapper("search_all_files"), "Find all files" },
		},
		g = {
			b = { telescope_mapper("git_branches"), "Git branches" },
			c = { telescope_mapper("git_bcommits"), "Git buffer commits" },
			g = { telescope_mapper("git_status"), "Git status" },
			w = {
				name = "[W]orktrees",
				l = { telescope_mapper("git_worktrees"), "Git worktrees" },
				c = { telescope_mapper("create_git_worktree"), "Create git worktree" },
			},
		},
		s = {
			name = "[S]earch",
			e = { telescope_mapper("resume"), "Resume last search" },
			b = { telescope_mapper("curbuf"), "Live search current buffer" },
			g = { telescope_mapper("live_grep"), "Live [G]rep" },
			p = { telescope_mapper("live_grep_node_project"), "Live grep in current node package" },
			f = { telescope_mapper("search_only_certail_files"), "Live grep in file type" },
			s = { telescope_mapper("lsp_document_symbols"), "[S]earch document [S]ymbols" },
			w = { telescope_mapper("lsp_dynamic_workspace_symbols"), "[S]earch [W]orkspace symbols" },
			r = { telescope_mapper("grep_raw"), "[R]aw [G]rep" },
			h = { telescope_mapper("help_tags"), "[S]earch [H]elp" },
			k = { telescope_mapper("keymaps"), "[S]earch [K]eymaps" },
		},
		["/"] = { telescope_mapper("fuzzy_buffer"), "[/] Fuzzily search in current buffer" },
	}, { prefix = "<leader>" })
end

return M
