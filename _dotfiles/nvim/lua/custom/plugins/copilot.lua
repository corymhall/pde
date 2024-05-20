return {
	{
		"jackMort/ChatGPT.nvim",
		dependencies = {
			"MunifTanjim/nui.nvim",
			"nvim-lua/plenary.nvim",
			"nvim-telescope/telescope.nvim",
		},

		cmd = "ChatGPT",
		config = function()
			require("chatgpt").setup({
				api_key_cmd = "op read op://Personal/OpenAIPAT/apikey",
			})
		end,
	},
	{
		"zbirenbaum/copilot.lua",
		event = "InsertEnter",
		cmd = "Copilot",
		config = function()
			require("copilot").setup({
				suggestion = {
					enabled = false,
					auto_trigger = true,
				},
			})
		end,
		keys = {
			{
				"<leader>cpt",
				function()
					require("copilot.suggestion").toggle_auto_trigger()
				end,
				desc = "Toggle copilot auto trigger",
			},
		},
	},
	{
		"CopilotC-Nvim/CopilotChat.nvim",
		branch = "canary",
		dependencies = {
			{ "zbirenbaum/copilot.lua" }, -- or github/copilot.vim
			{ "nvim-lua/plenary.nvim" }, -- for curl, log wrapper
		},
		opts = {
			-- debug = true, -- Enable debugging
			-- See Configuration section for rest
		},
		cmd = { "CopilotChat", "CopilotChatOpen" },
		keys = {
			{
				"<leader>cq",
				function()
					local input = vim.fn.input("Quick Chat: ")
					if input ~= "" then
						require("CopilotChat").ask(input, { selection = require("CopilotChat.select").buffer })
					end
				end,
				desc = "CopilotChat - Quick chat",
			},
		},

		-- See Commands section for default commands if you want to lazy load on them
	},
}
