return {
  'ruifm/gitlinker.nvim',
  config = function()
    require('gitlinker').setup {
      mappings = nil,
    }
  end,
  keys = {
    '<leader>gy',
  },
}
