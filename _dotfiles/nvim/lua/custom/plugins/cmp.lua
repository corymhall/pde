return {
  {
    "hrsh7th/nvim-cmp",
    lazy = false,
    priority = 100,
    dependencies = {
      "onsails/lspkind.nvim",
      "hrsh7th/cmp-nvim-lsp",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
      "hrsh7th/cmp-nvim-lua",
      "saadparwaiz1/cmp_luasnip",
      "petertriho/cmp-git",
      {
        "L3MON4D3/LuaSnip",
        version = "v2.*",
        build = "make install_jsrege",
      },
    },
    config = function()
      require "custom.completion"
    end,
  },
}
