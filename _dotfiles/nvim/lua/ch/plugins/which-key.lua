return {
  'folke/which-key.nvim',
  config = function()
    require('which-key').setup({
      spelling = {
        enabled = true,
      }
    })
  end,
}
