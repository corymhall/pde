return {
  'rcarriga/nvim-notify',
  'nvim-lua/plenary.nvim',
  "folke/neodev.nvim",
  {
    'daenikon/marknav.nvim',
    config = true,
    ft = {'markdown', 'vimwiki'},
  },
  {
    'tpope/vim-fugitive', -- git commands in nvim,
    lazy = false,
  },
  {
    'tpope/vim-rhubarb', -- Fugitive-companion to interact with github,
    lazy = false,
  },
  {
    'tpope/vim-repeat',
    lazy = false,
  },
  {
    'bennypowers/nvim-regexplainer',
    config = true,
  },
  {
    '2kabhishek/nerdy.nvim',
    dependencies = {
        'stevearc/dressing.nvim',
        'nvim-telescope/telescope.nvim',
    },
    cmd = 'Nerdy',
  },
  "MunifTanjim/nui.nvim",

  -- languages,
  'hashivim/vim-terraform',
  'preservim/vim-markdown',
  {
    'saifulapm/chartoggle.nvim',
    lazy = false,
    config = function()
      require('chartoggle').setup ({
        leader = '<localleader>', -- you can use any key as Leader
        keys = {',', ';' } -- Which keys will be toggle end of the line
      })
    end,
  },
  {
    'kylechui/nvim-surround',
    config = true,
    lazy = false,
    version = '*',
  },
  { "JoosepAlviste/nvim-ts-context-commentstring", lazy = true },
  {
    'nvim-tree/nvim-web-devicons',
    config = function()
      require'nvim-web-devicons'.setup {
        default = true;
      }
    end,
  },
}
