return {
  "folke/neodev.nvim",
  -- git commands in nvim,
  { "tpope/vim-fugitive", lazy = false },
  { "tpope/vim-sleuth", lazy = false }, -- Detect tabstop and shiftwidth automatically
  -- Fugitive-companion to interact with github,
  { "tpope/vim-rhubarb", lazy = false },
  { "tpope/vim-repeat", lazy = false },
  -- Highlight todo, notes, etc in comments
  {
    "folke/todo-comments.nvim",
    event = "VimEnter",
    dependencies = { "nvim-lua/plenary.nvim" },
    opts = { signs = false },
  },
  {
    "2kabhishek/nerdy.nvim",
    dependencies = {
      "stevearc/dressing.nvim",
      "nvim-telescope/telescope.nvim",
    },
    cmd = "Nerdy",
  },

  -- languages,
  "hashivim/vim-terraform",

  { "kylechui/nvim-surround", config = true, lazy = false, version = "*" },
  { "nvim-tree/nvim-web-devicons", opts = {} },
  { "bennypowers/nvim-regexplainer", opts = {} },
  {
    "wojciech-kulik/xcodebuild.nvim",
    dependencies = {
      "nvim-telescope/telescope.nvim",
      "MunifTanjim/nui.nvim",
      "nvim-tree/nvim-tree.lua", -- if you want the integration with file tree
    },
    config = function()
      require("xcodebuild").setup {
        -- put some options here or leave it empty to use default settings
      }
    end,
  },
  -- {
  --   "ravibrock/spellwarn.nvim",
  --   event = "VeryLazy",
  --   config = true,
  -- },
}
