local M = {}

local themes = require("telescope.themes")

SHOULD_RELOAD_TELESCOPE = true

local reloader = function()
	if SHOULD_RELOAD_TELESCOPE then
		RELOAD("plenary")
		RELOAD("telescope")
		RELOAD("ch.telescope.setup")
	end
end
function M.fd()
	local opts = themes.get_ivy({
		hidden = false,
		find_command = {
			"fd",
			"--type",
			"f",
			"--exclude",
			"CHANGELOG.md", -- aws-cdk changelog is so big it slows down the preview :(
			"--exclude",
			"vendor",
		},
	})
	require("telescope.builtin").fd(opts)
end

function M.fuzzy_buffer()
	require("telescope.builtin").current_buffer_fuzzy_find(require("telescope.themes").get_dropdown({
		winblend = 10,
		previewer = false,
	}))
end

function M.grep_raw()
	require("telescope").extensions.live_grep_args.live_grep_args({
		vimgrep_arguments = {
			"rg",
			"--color=never",
			"--no-heading",
			"--with-filename",
			"--line-number",
			"--column",
			"--smart-case",
		},
	})
end

function M.grep_raw_docs()
	require("telescope.builtin").live_grep({
		glob_pattern = {
			"**/*/team-internal/main/**/*.md",
			"**/*/cdk-ops/master/**/*.md",
		},
	})
end

function M.grep_raw_typescript()
	require("telescope").extensions.live_grep_args.live_grep_args({
		vimgrep_arguments = {
			"rg",
			"--color=never",
			"--no-heading",
			"--with-filename",
			"--line-number",
			"--column",
			"--smart-case",
			"--iglob '!*.d.ts",
			"--iglob '!**/*.integ.snapshot",
			"--iglob '*.ts",
		},
	})
end

function M.live_grep_node_project()
	local opts = {
		search_dirs = {
			require("lspconfig.util").root_pattern("README.md")(vim.fn.expand("%:p")),
		},
	}
	require("telescope.builtin").live_grep(opts)
end

function M.fd_current_dir()
	local opts = themes.get_ivy({
		hidden = false,
		cwd = vim.fn.expand("%:h"),
		find_command = {
			"fd",
			"--type",
			"f",
			"--exclude",
			"CHANGELOG.md", -- aws-cdk changelog is so big it slows down the preview :(
		},
	})
	require("telescope.builtin").fd(opts)
end

function M.fd_node_package()
	local opts = themes.get_ivy({
		hidden = false,
		find_command = {
			"fd",
			"--type",
			"f",
			"--exclude",
			"CHANGELOG.md", -- aws-cdk changelog is so big it slows down the preview :(
		},
		cwd = require("lspconfig.util").root_pattern("README.md")(vim.fn.expand("%:p")),
	})
	require("telescope.builtin").fd(opts)
end

function M.search_all_files()
	require("telescope.builtin").fd(themes.get_ivy({
		hidden = true,
		no_ignore = true,
		find_command = {
			"fd",
			"--type",
			"f",
			"--exclude",
			"CHANGELOG.md", -- aws-cdk changelog is so big it slows down the preview :(
		},
	}))
end

function M.search_only_certain_files()
	require("telescope.builtin").find_files({
		find_command = {
			"rg",
			"--files",
			"--type",
			vim.fn.input("Type: "),
		},
	})
end

function M.lsp_references()
	require("telescope.builtin").lsp_references({
		fname_width = 100,
		layout_strategy = "vertical",
		layout_config = {
			prompt_position = "top",
		},
		sorting_strategy = "ascending",
		ignore_filename = false,
	})
end

function M.lsp_implementations()
	require("telescope.builtin").lsp_implementations({
		fname_width = 100,
		layout_strategy = "vertical",
		layout_config = {
			prompt_position = "top",
		},
		sorting_strategy = "ascending",
		ignore_filename = false,
	})
end

function M.lsp_outgoing_calls()
	require("telescope.builtin").lsp_outgoing_calls({
		fname_width = 100,
		layout_strategy = "vertical",
		layout_config = {
			prompt_position = "top",
		},
		sorting_strategy = "ascending",
		ignore_filename = false,
	})
end

function M.lsp_incoming_calls()
	require("telescope.builtin").lsp_incoming_calls({
		fname_width = 100,
		layout_strategy = "vertical",
		layout_config = {
			prompt_position = "top",
		},
		sorting_strategy = "ascending",
		ignore_filename = false,
	})
end

function M.lsp_type_definitions()
	require("telescope.builtin").lsp_type_definitions({
		fname_width = 100,
		layout_strategy = "vertical",
		layout_config = {
			prompt_position = "top",
		},
		sorting_strategy = "ascending",
		ignore_filename = false,
	})
end

function M.git_files()
	require("telescope.builtin").git_files(themes.get_ivy({
		hidden = true,
		cwd = vim.fn.expand("%:h"),
		winblend = 10,
		border = true,
		shorten_path = false,
	}))
end

function M.buffers()
	require("telescope.builtin").buffers({ ignore_current_buffer = true, sort_mru = true })
end

function M.grep_string()
	require("telescope.builtin").grep_string({ search = vim.fn.expand("<cword>") })
end

function M.git_worktrees()
	require("telescope").extensions.git_worktree.git_worktrees()
end

function M.create_git_worktree()
	require("telescope").extensions.git_worktree.create_git_worktree()
end

function M.file_browser()
	require("telescope").extensions.file_browser.file_browser({
		cwd = vim.fn.expand("%:p:h"),
	})
end

function M.curbuf()
	local opts = themes.get_dropdown({
		winblend = 10,
		border = true,
		previewer = false,
		shorten_path = false,
	})
	require("telescope.builtin").current_buffer_fuzzy_find(opts)
end

return setmetatable({}, {
	__index = function(_, k)
		reloader()

		if M[k] then
			return M[k]
		else
			return require("telescope.builtin")[k]
		end
	end,
})
