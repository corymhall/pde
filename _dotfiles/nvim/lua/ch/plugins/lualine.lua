return {
	{
		"hoob3rt/lualine.nvim",
		event = "VeryLazy",
		dependencies = {
			{ "EdenEast/nightfox.nvim" },
		},
		config = function()
			require("lualine").setup({
				options = {
					theme = "catppuccin",
					globalstatus = true,
				},
				winbar = {
					lualine_c = { "filename" },
				},
				inactive_winbar = {
					lualine_c = { { "filename", path = 2 } },
				},
				sections = {
					lualine_c = {
						{
							"filename",
							path = 2,
						},
					},
					lualine_x = { "filetype", "overseer" },
				},
				extensions = { "fugitive" },
			})
		end,
	},
}
