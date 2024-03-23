return {
	"stevearc/overseer.nvim",
	opts = {
		templates = { "builtin", "user.run_make" },
	},
	keys = {
		{
			"<leader>ot",
			"<cmd>OverseerToggle<cr>",
			{ desc = "[O]verseer [T]oggle" },
		},
		{
			"<leader>oh",
			function()
				local overseer = require("overseer")
				local tasks = overseer.list_tasks({ recent_first = true })
				if vim.tbl_isempty(tasks) then
					vim.notify("No tasks found", vim.log.levels.WARN)
				else
					overseer.run_action(tasks[1], "open hsplit")
				end
			end,
			{ desc = "[O]verseer open [H]split" },
		},
	},
}
