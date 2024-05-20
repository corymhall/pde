return {
	"folke/which-key.nvim",
	eveent = "VimEnter",
	config = function()
		require("which-key").setup({
			window = {
				border = { "─", "─", "─", " ", " ", " ", " ", " " }, -- none, single, double, shadow
				position = "bottom", -- bottom, top
				margin = { 0, 0, 0, 0 }, -- extra window margin [top, right, bottom, left]
				padding = { 0, 0, 1, 0 }, -- extra window padding [top, right, bottom, left]
			},
			spelling = {
				enabled = true,
			},
		})
		-- Document existing key chains
	end,
}
