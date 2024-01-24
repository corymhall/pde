local wk = require("which-key")
local commands = require('ch.utils.commands')
local telescope_mapper = require('ch.plugins.telescope.mappings')

wk.setup {
  window = {
    border = { '─', '─', '─', ' ', ' ', ' ', ' ', ' ' }, -- none, single, double, shadow
    position = 'bottom', -- bottom, top
    margin = { 0, 0, 0, 0 }, -- extra window margin [top, right, bottom, left]
    padding = { 0, 0, 1, 0 }, -- extra window padding [top, right, bottom, left]
  },
}
local leader = {
  b = {
    name = "+buffer",
    d = { ':bdelete<cr>', 'delete buffer' },
  },
  g = {
    name = "+git",
    u = { function() require('ch.utils.git').git_url() end, 'Git URL' },
    p = { ':Git push<cr>', 'Git push' },
    d = { ':Gvdiffsplit!<CR>', 'Git diff' },
    e = { ':Gedit<CR>', 'Git edit' },
    rp = { function()
      local num = vim.fn.input "Commits back: "
      local args = string.format("HEAD~%s:%%", num)
      vim.api.nvim_cmd({
        cmd = 'Gread',
        args = { args }
      }, {})
    end, 'Restore previous commit' },
    -- l = { ':silent! Glog<CR>:bot copen<CR>', 'Git log'},
    -- o = { ':Git checkout<Space>', 'Git checkout <branch>'},
    s = { ':G<CR>', 'Git status' },
    fa = { ':Git fetch --all<CR>', 'Git fetch all'},
  },
  l = {
    name = "+lsp",
    r = { ':LspRestart<CR>', 'Restart LSP' },
    i = { ':LspInfo<CR>', 'LSP Info' },
    s = { ':LspStart<CR>', 'Start LSP' },
    x = { ':LspStop<CR>', 'Stop LSP' },
  },
  p = { "\"_dP", "paste without overwriting register" },
  q = {
    name = "+quickfix",
    o = { ':copen<CR>', 'Open quickfix' },
    q = { ':cclose<CR>', 'Close quickfix' },
    n = { ':cnext<CR>', 'Next item in quickfix' },
    p = { ':cprev<CR>', 'Previous item in quickfix' },
  },
  u = { function() require('telescope').extensions.undo.undo() end, "Undo history" },
  ['?'] = 'which_key_ignore',
  [';'] = 'which_key_ignore',
  [','] = 'which_key_ignore',
  ['<space>'] = 'which_key_ignore',
  ['.'] = 'which_key_ignore',
}

-- Highlight on yank
vim.api.nvim_exec(
  [[
  augroup YankHighlight
    autocmd!
    autocmd TextYankPost * silent! lua vim.highlight.on_yank()
  augroup end
]],
  false
)

vim.keymap.set('i', 'jj', '<ESC>')
vim.keymap.set('', '<C-h>', '<C-w>h')
vim.keymap.set('', '<C-j>', '<C-w>j')
vim.keymap.set('', '<C-k>', '<C-w>k')
vim.keymap.set('', '<C-l>', '<C-w>l')
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("v", "K", ":m '>-2<CR>gv=gv")
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")
vim.keymap.set('n', 'J', "mzJ`z")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")
vim.keymap.set('n', 'U', '<cmd>redo<cr>') -- redo
vim.keymap.set("n", "<leader>x", "<cmd>!chmod +x %<CR>", { silent = false, desc = "make  file executable" })


wk.register(leader, { prefix = '<leader>' })
wk.register({
  d = {
    name = "+diff",
    g = {
      name = "+get",
      t = { "<cmd>diffget //2<cr>", "diffget //2 (target parent)" },
      y = { "<cmd>diffget //3<cr>", "diffget //3 (merge parent)" }
    }
  }
})
vim.keymap.set('n', '<leader>;', telescope_mapper('buffers'), { silent=true, noremap=true })
wk.register({
  gy = { function() require('ch.utils.git').git_url("v") end, 'Git URL' },
  -- gy = { ':GBrowse@upstream<cr>', 'Copy link to code', silent = false }
}, { prefix = '<leader>', mode = "x" })

-- map :W to :w (helps which-key issue)
vim.cmd [[ command! W  execute ':w' ]]
