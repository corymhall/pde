return {
  {
    "jackMort/ChatGPT.nvim",
    dependencies = {
      "MunifTanjim/nui.nvim",
      "nvim-lua/plenary.nvim",
      "nvim-telescope/telescope.nvim"
    },

    cmd = "ChatGPT",
    config = function()
      require('chatgpt').setup({
        api_key_cmd = "op read op://Personal/OpenAIPAT/apikey",
      })
    end,
  },
  {
    "zbirenbaum/copilot.lua",
    event = "InsertEnter",
    cmd = "Copilot",
    config = function()
      require('copilot').setup({
        suggestion = {
          enabled = true,
          auto_trigger = true,
        },
        -- panel = { enabled = false },
      })
    end,
    keys = {
      {
        '<leader>cpt',
        function()
          require("copilot.suggestion").toggle_auto_trigger()
        end,
        desc = 'Toggle copilot auto trigger',
      }
    }
  },
  -- {
  --   "zbirenbaum/copilot-cmp",
  --   event = { "InsertEnter", "LspAttach" },
  --   config = function()
  --     require("copilot_cmp").setup()
  --   end,
  -- }
}
