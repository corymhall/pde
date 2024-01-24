return {
  {
    "danymat/neogen",
    dependencies = "nvim-treesitter/nvim-treesitter",
    opts = {
      snippet_engine = 'luasnip',
    },
    keys = {
      {
        '<leader>cc',
        function()
          require('neogen').generate({})
        end,
        desc = 'Neogen Create comment',
      },
      -- {
      --   '<leader>cc',
      --   function()
      --     require('neogen').generate({ type = 'class' })
      --   end,
      --   desc = 'Neogen Create Class comment',
      -- },
      {
        '<leader>cf',
        function()
          require('neogen').generate({ type = 'func' })
        end,
        desc = 'Neogen Create Function comment',
      },
    }
  }
}
