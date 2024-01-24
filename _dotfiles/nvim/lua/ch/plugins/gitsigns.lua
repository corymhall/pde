local M = {
  'lewis6991/gitsigns.nvim',
  event = "BufReadPre",
}

local function on_attach(bufnr)
  local gs = package.loaded.gitsigns

  local function map(mode, l, r, opts)
    opts = opts or {}
    opts.buffer = bufnr
    vim.keymap.set(mode, l, r, opts)
  end

  -- Navigation
  map('n', ']c', function()
    if vim.wo.diff then return ']c' end
    vim.schedule(function() gs.next_hunk() end)
    return '<Ignore>'
  end, {expr=true})

  map('n', '[c', function()
    if vim.wo.diff then return '[c' end
    vim.schedule(function() gs.prev_hunk() end)
    return '<Ignore>'
  end, {expr=true})

  -- Actions
  map({'n', 'v'}, '<leader>hs', ':Gitsigns stage_hunk<CR>', { desc = 'Gitsigns Stage Hunk' })
  map({'n', 'v'}, '<leader>hr', ':Gitsigns reset_hunk<CR>', { desc = 'Gitsigns Reset Hunk' })
  map('n', '<leader>hS', gs.stage_buffer, { desc = 'Gitsigns Stage Buffer' })
  map('n', '<leader>hu', gs.undo_stage_hunk, { desc = 'Gitsigns Undo Stage Hunk' })
  map('n', '<leader>hR', gs.reset_buffer, { desc = 'Gitsigns Reset Buffer' })
  map('n', '<leader>hp', gs.preview_hunk, { desc = 'Gitsigns Preview Hunk' })
  map('n', '<leader>hb', function() gs.blame_line{full=true} end, { desc = 'Gitsigns Blame Line' })
  map('n', '<leader>tb', gs.toggle_current_line_blame, { desc = 'Gitsigns Toggle CL Blame' })
  map('n', '<leader>hd', gs.diffthis, { desc = 'Gitsigns Diff this' })
  map('n', '<leader>hD', function() gs.diffthis('~') end, { desc = 'Gitsigns Diff this current file' })
  map('n', '<leader>td', gs.toggle_deleted, { desc = 'Gitsigns toggle deleted' })

  -- Text object
  map({'o', 'x'}, 'ih', ':<C-U>Gitsigns select_hunk<CR>')
end

M.config = function()
  require('gitsigns').setup {
    on_attach = on_attach,
    signs = {
      add = { hl = 'GitGutterAdd', text = '+' },
      change = { hl = 'GitGutterChange', text = '~' },
      delete = { hl = 'GitGutterDelete', text = '_' },
      topdelete = { hl = 'GitGutterDelete', text = '‾' },
      changedelete = { hl = 'GitGutterChange', text = '~' },
    },
  }
end
return M
