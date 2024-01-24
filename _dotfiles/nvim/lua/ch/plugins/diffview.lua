return {
  'sindrets/diffview.nvim',
  -- lazy-load plugin when these commands are called
  keys = {
    {
      '<leader>gvh',
      ':DiffviewFileHistory %<CR>',
      desc = "Diffview history of the current file",
    },
    {
      '<leader>gvo',
      ':DiffviewOpen -- %<CR>',
      desc = "Open diffview for the current file",
    },
    {
      '<leader>gvm',
      ':DiffviewOpen upstream/main %<CR>',
      desc = "Open diffview  against upstream/main",
    },
    {
      '<leader>gvc',
      ':DiffviewClose<CR>',
      desc = "Close diffview",
    },
  },
  config = function()
    local actions = require("diffview.actions")
    require('diffview').setup({
      keymaps = {
        view = {
          ["<c-n>"] = actions.select_next_entry,
          ["<c-p>"] = actions.select_prev_entry,
        },
        file_panel = {
          ["<c-n>"] = actions.select_next_entry,
          ["<c-p>"] = actions.select_prev_entry,
        },
        file_history_panel = {
          ["<c-n>"] = actions.select_next_entry,
          ["<c-p>"] = actions.select_prev_entry,
        }
      },
    })
  end,
}
