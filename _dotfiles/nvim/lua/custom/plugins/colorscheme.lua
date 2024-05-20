return {
	{
		"ptdewey/darkearth-nvim",
		priority = 1000,
	},
	{
		"rebelot/kanagawa.nvim",
		lazy = false,
		init = function()
			vim.api.nvim_cmd({
				cmd = "colorscheme",
				args = { "terafox" },
			}, {})
			vim.opt.laststatus = 3
			vim.opt.fillchars:append({
				horiz = "━",
				horizup = "┻",
				horizdown = "┳",
				vert = "┃",
				vertleft = "┨",
				vertright = "┣",
				verthoriz = "╋",
			})
		end,
		opts = {
			globalStatus = true,
			dimInactive = true,
			commentStyle = { italic = true },
			theme = "dragon",
		},
		priority = 1000,
	},
	{
		"catppuccin/nvim",
		name = "catppuccin",
		priority = 1000,
		config = function()
			require("catppuccin").setup({
				integrations = {
					noice = true,
					mason = true,
					neotest = true,
					which_key = true,
				},
			})
		end,
	},
	{
		"rktjmp/lush.nvim",
		cmd = "Lushify",
	},
	{
		dir = "~/plugins/autumn-theme",
		lazy = false,
		priority = 1000,
	},
	{
		"projekt0n/github-nvim-theme",
		lazy = false, -- make sure we load this during startup if it is your main colorscheme
		priority = 1000, -- make sure to load this before all the other start plugins
		config = function()
			require("github-theme").setup({
				-- ...
			})
		end,
	},

	--'arcticicestudio/nord-vim',
	"rose-pine/neovim",
	-- {"adisen99/apprentice.nvim", requires = {"rktjmp/lush.nvim"}},
	-- 'rmehri01/onenord.nvim',
	"fenetikm/falcon",
	{
		"EdenEast/nightfox.nvim",
		lazy = false,
		priority = 1000,
		opts = {
			options = {
				styles = {
					comments = "italic",
					conditionals = "NONE",
					constants = "NONE",
					functions = "NONE",
					keywords = "italic",
					numbers = "NONE",
					operators = "NONE",
					strings = "NONE",
					types = "NONE",
					variables = "NONE",
				},
			},
		},
		init = function() end,
	},
	{
		-- 'sainnhe/everforest',
		"neanias/everforest-nvim",
		config = function()
			require("everforest").setup({
				background = "hard",
				dim_inactive_windows = true,
			})
		end,
		lazy = false,
		priority = 1000,
	},
	{
		"AlexvZyl/nordic.nvim",
		lazy = false,
		priority = 1000,
		opts = {
			telescope = {
				style = "classic",
			},
		},
		init = function()
			-- vim.api.nvim_cmd({
			--   cmd = 'colorscheme',
			--   args = {'nordic'},
			-- }, {})
		end,
	},
}
