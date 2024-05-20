-- Telescope

local M = {}

function M.setup()
	local actions = require("telescope.actions")
	local previewers = require("telescope.previewers")
	local lga_actions = require("telescope-live-grep-args.actions")
	require("telescope").setup({
		defaults = {
			prompt_prefix = "❯ ",
			selection_caret = "❯ ",

			winblend = 0,

			layout_strategy = "horizontal",
			layout_config = {
				width = 0.95,
				height = 0.85,
				prompt_position = "top",

				horizontal = {
					preview_width = function(_, cols, _)
						if cols > 200 then
							return math.floor(cols * 0.4)
						else
							return math.floor(cols * 0.6)
						end
					end,
				},
				vertical = {
					width = 0.9,
					height = 0.95,
					preview_height = 0.5,
				},
				flex = {
					horizontal = {
						preview_width = 0.9,
					},
				},
			},

			selection_strategy = "reset",
			color_devicons = true,
			sorting_strategy = "descending",
			file_previewer = previewers.vim_buffer_cat.new,
			qflist_previewer = previewers.vim_buffer_qflist.new,

			-- file_ignore_patterns = {
			--   "^node_modules/",
			--   "^vendor/",
			--   "^dist/",
			--   "^.git/",
			-- },

			mappings = {
				i = {
					["<C-n>"] = actions.move_selection_next,
					["<C-q>"] = false,
					["<C-t"] = false,
					["<C-p>"] = actions.move_selection_previous,
					["<C-j>"] = actions.cycle_history_next,
					["<C-k>"] = actions.cycle_history_prev,
					["<C-q>"] = actions.smart_send_to_qflist + actions.open_qflist,
					["<c-g>a"] = actions.add_selection,
					["<M-t>"] = lga_actions.quote_prompt({
						postfix = " --iglob !*.d.ts"
							.. " --iglob !**/*.integ.snapshot"
							.. " --iglob !*.test.ts"
							.. " --iglob *.ts",
					}),
					["<M-m>"] = lga_actions.quote_prompt({
						postfix = " --iglob *.md",
					}),
					["<M-o>"] = lga_actions.quote_prompt({
						postfix = " --iglob **/*/team-internal/main/**/*.md" .. " --iglob **/*/cdk-ops/master/**/*.md",
					}),
				},
				n = {
					["<C-n>"] = actions.move_selection_next,
					["<C-p>"] = actions.move_selection_previous,
					["<C-t"] = false,
					["<C-sq>"] = actions.send_selected_to_qflist + actions.open_qflist,
				},
			},
		},
		extensions = {
			undo = {
				side_by_side = true,
				layout_strategy = "vertical",
				layout_config = {
					preview_height = 0.8,
				},
			},
			file_browser = {
				hijack_netrw = true,
			},
			fzf = {
				override_file_sorter = true,
				override_generic_sorter = true,
			},
			live_grep_args = {
				auto_quoting = true,
			},
			["ui-select"] = {
				require("telescope.themes").get_dropdown({
					-- even more opts
				}),
			},
		},
	})

	require("telescope").load_extension("fzf")
	require("telescope").load_extension("git_worktree")
	require("telescope").load_extension("gh")
	require("telescope").load_extension("harpoon")
	require("telescope").load_extension("file_browser")
	require("telescope").load_extension("noice")
	require("telescope").load_extension("emoji")
	require("telescope").load_extension("undo")
	require("telescope").load_extension("ui-select")
	require("telescope").load_extension("fzf_writer")
	require("telescope").load_extension("live_grep_args")
	require("telescope").load_extension("goimpl")
	require("telescope").load_extension("do-the-needful")
end

return M
