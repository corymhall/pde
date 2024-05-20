return {
	"Wansmer/treesj",
	config = function()
		require("treesj").setup({
			use_default_keymaps = false,
		})
	end,
	keys = {
		{
			"<leader>cj",
			function()
				require("treesj.format")._format()
			end,
			desc = "Format JSON",
		},
	},
}
