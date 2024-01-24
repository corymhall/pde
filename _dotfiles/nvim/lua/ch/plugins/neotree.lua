return {
  "nvim-neo-tree/neo-tree.nvim",
  branch = "v3.x",
  lazy = true,
  dependencies = {
    { dir = '~/plugins/neo-tree-dummy-extension' },
    { dir = '~/plugins/mind-tree.nvim' },
    "nvim-lua/plenary.nvim",
    -- "nvim-tree/nvim-web-devicons", -- not strictly required, but recommended
    "MunifTanjim/nui.nvim",
    'corymhall/mind-tree.nvim',
  },
  config = function()
    require("neo-tree").setup({
      sources = { 'filesystem', 'mind', 'neo-tree-dummy-extension' },
      mind_tree = {}
    })

  end,
}
