return {
  "folke/trouble.nvim",
  keys = {
    {
      '<leader>xw',
      function()
        require('trouble').toggle('workspace_diagnostics')
      end,
      desc = "Workspace diagnostics"
    },
  },
  dependencies = { "nvim-tree/nvim-web-devicons" },
}
