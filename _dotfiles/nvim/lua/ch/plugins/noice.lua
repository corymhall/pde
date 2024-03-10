local M = {
  'folke/noice.nvim',
  event = "VeryLazy",
}

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
