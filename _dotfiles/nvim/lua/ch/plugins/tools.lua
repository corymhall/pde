return {
  {
    'LintaoAmons/scratch.nvim',
    opts = {
      filetypes = { "json", "go", "lua", "js", "ts", "py", "sh", 'txt' }
    },
    keys = {
      {
        '<leader>rc',
        function() require('scratch').scratch() end,
        desc = 'Scratch - create new scratch file',
      },
      {
        '<leader>ro',
        function() require('scratch').scratch() end,
        "Scratch - create new scratch file",
      },

    },
  },
  {
    'gbprod/yanky.nvim',
    config = true,
    keys = {
      {
        '<leader>p',
        '<Plug>(YankyPutAfter)',
        desc = 'Yanky paste after',
      },
      {
        '<leader>P',
        '<Plug>(YankyPutBefore)',
        desc = 'Yanky paste before',
      },
      {
        '<c-n>',
        '<Plug>(YankyCycleForward)',
      },
      {
        '<c-p>',
        '<Plug>(YankyCycleBackward)',
      },
      {
        '<leader>yh',
        function()
          require('telescope').extensions.yank_history.yank_history()
        end,
        desc = 'Yank History'
      }

    }
  },
}
