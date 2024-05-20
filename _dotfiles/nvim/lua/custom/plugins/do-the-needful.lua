return {
	"catgoose/do-the-needful.nvim",
	event = "BufReadPre",
	keys = {
		{ "<leader>rt", [[<cmd>Telescope do-the-needful please<cr>]], "n", desc = "Needful [R]un [T]ask" },
		-- { "<leader>:", [[<cmd>Telescope do-the-needful<cr>]], "n" },
	},
	dependencies = "nvim-lua/plenary.nvim",
	opts = {
		global_tokens = {
			["${cwd}"] = vim.fn.getcwd,
			["${projectname}"] = function()
				return vim.fn.system("basename $(git rev-parse --show-toplevel)")
			end,
		},
		ask_functions = {
			get_cwd = function()
				return vim.fn.getcwd()
			end,
			current_file = function()
				return vim.fn.expand("%")
			end,
		},
		tasks = {
			{
				name = "upstream",
				cmd = 'tmux-newbranch "make upstream" ${cwd}',
				cwd = "${cwd}",
				window = {
					name = "newbranch",
					close = false,
					keep_current = false, -- switch to window when running task
					open_relative = true,
					relative = "after",
				},
			},
			{
				name = "provider",
				cmd = 'tmux-newbranch "make provider" ${cwd}',
				cwd = "${cwd}",
				window = {
					name = "provider",
					close = false,
					keep_current = false, -- switch to window when running task
					open_relative = true,
					relative = "after",
				},
			},
			{
				name = "newbranch",
				cmd = 'tmux-newbranch "ls" ${cwd}',
				cwd = "${cwd}",
				window = {
					name = "newbranch",
					close = false,
					keep_current = false, -- switch to window when running task
					open_relative = true,
					relative = "after",
				},
			},
		},
	},
}
