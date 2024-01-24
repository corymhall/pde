local M = {
  'folke/noice.nvim',
  event = "VeryLazy",
}

function M.init()
  local wk = require('which-key')
  wk.register({
    ['<leader>'] = {
      n = {
        name = '+noice',
      },
    }
  })
  vim.keymap.set("n", "<leader>na", function()
    require('noice').cmd('all')
  end, { desc = "Noice All" })

  vim.keymap.set("n", "<leader>nl", function()
    require('noice').cmd("last")
  end, { desc = "Noice last" })

  vim.keymap.set("n", "<c-f>", function()
    if not require('noice.lsp').scroll(4) then
      return "<c-f>"
    end
  end, { silent = true, expr = true })

  vim.keymap.set("n", "<c-b>", function()
    if not require('noice.lsp').scroll(-4) then
      return "<c-b>"
    end
  end, { silent = true, expr = true })

end

function M.config()
  require("noice").setup({
    lsp = {
      -- override markdown rendering so that **cmp** and other plugins use **Treesitter**
      override = {
        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,
        ["vim.lsp.util.stylize_markdown"] = true,
        -- ["cmp.entry.get_documentation"] = true, --only thing this does is remove the detail line (which we want)
      },
      progress = {
        enabled = true,
      },
    },
    cmdline = {
      view = 'cmdline',
    },
    presets = {
      bottom_search = true,
      long_message_to_split = true,
    },
  })
end

return M
