vim.opt.completeopt = 'menuone,noselect'
vim.opt.spell = true
vim.opt.spelllang = 'en'

-- Cool floating window popup menu for completion on command line
vim.opt.pumblend = 17
vim.opt.wildmode = "longest:full"
vim.opt.wildoptions = "pum"

vim.opt.list = true -- show some invisible characters
-- limited
vim.opt.listchars = {
  eol = '↲',
  tab = '» ',
  trail = '·',
  extends = '<',
  precedes = '>',
  conceal = '┊',
  nbsp ='␣',
}

--busy
-- opt.listchars = {
--   eol: '↲',
--   tab: '»·',
--   space: '␣',
--   trail: '-',
--   extends: '☛',
--   precedes: '☚',
--   conceal: '┊',
--   nbsp: '☠',
-- }

vim.opt.expandtab = true -- use spaces instead of tabs
vim.opt.hidden = true -- enable background buffers
vim.opt.ignorecase = true -- ignore case
vim.opt.joinspaces = false -- non double spaces with join
vim.opt.relativenumber = true -- Show line numbers
vim.opt.number = true -- But show the actual number for the line we're on
vim.opt.scrolloff = 4 -- lines of context
vim.opt.shiftround = true -- round indent
vim.opt.shiftwidth = 2 --size of indent
vim.opt.sidescrolloff = 8 -- columns of context
vim.opt.smartcase = true                -- Do not ignore case with capitals
vim.opt.smartindent = true              -- Insert indents automatically
vim.opt.splitbelow = true               -- Put new windows below current
vim.opt.splitright = true               -- Put new windows right of current
vim.opt.tabstop = 2                     -- Number of spaces tabs count for
vim.opt.termguicolors = true            -- True color support
--opt.wildmode = {'list', 'longest'}  -- Command-line completion mode
vim.opt.wrap = false                    -- Disable line wrap
vim.opt.mouse = 'a'
vim.opt.updatetime = 1000
vim.wo.signcolumn = 'yes'
vim.opt.formatoptions = vim.opt.formatoptions
  - "a" -- Auto formatting is BAD.
  - "t" -- Don't auto format my code. I got linters for that.
  + "c" -- In general, I like it when comments respect textwidth
  + "q" -- Allow formatting comments w/ gq
  - "o" -- O and o, don't continue comments
  + "r" -- But do continue when pressing enter.
  + "n" -- Indent past the formatlistpat, not underneath it.
  + "j" -- Auto-remove comments if possible.
  - "2" -- I'm not in gradeschool anymore

vim.g.clipboard = {
  name = 'clipboard',
  copy = {
    ['+'] = 'tmux load-buffer -w -',
    ['*'] = 'tmux load-buffer -w -'
  },
  paste = {
    ['+'] = 'tmux save-buffer -',
    ['*'] = 'tmux save-buffer -'
  },
  cache_enabled = 1
}

vim.opt.clipboard = vim.o.clipboard .. 'unnamedplus'


--Remap space as leader key
vim.api.nvim_set_keymap('', ' ', '<Nop>', { noremap = true, silent = true })

vim.g.loaded_python3_provider = 0
vim.g.loaded_perl_provider = 0
vim.g.loaded_ruby_provider = 0
vim.g.loaded_node_provider = 0
