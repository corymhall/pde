
local M = {
  'ray-x/go.nvim',
  event = {"CmdlineEnter"},
  ft = {"go", 'gomod'},
  dependencies = {
    "ray-x/guihua.lua",
    "neovim/nvim-lspconfig",
    "nvim-treesitter/nvim-treesitter",
  },
  build = ':lua require("go.install").update_all_sync()'
}
function M.config()
  local path = require "mason-core.path"
  local install_root_dir = path.concat { vim.fn.stdpath "data", "mason" }
  require('go').setup({
    lsp_cfg = false,
    dap_debug = true,
    dap_debug_keymap = false,
    dap_debug_gui = true,
    dap_debug_vt = true,
    lsp_gofumpt = false,
    lsp_on_attach = false,
    gopls_cmd = { install_root_dir .. '/go/gopls' },
  })
  -- Run gofmt + goimport on save

  local format_sync_grp = vim.api.nvim_create_augroup("GoImport", {})
  vim.api.nvim_create_autocmd("BufWritePre", {
    pattern = "*.go",
    callback = function()
      require('go.format').goimport()
    end,
    group = format_sync_grp,
  })
end

M.keys = {
  {
    '<leader>cgat',
    '<cmd>GoAddTag<cr>',
    desc = "Add struct tags"
  },
  {
    '<leader>cgrt',
    '<cmd>GoRmTag<cr>',
    desc = "Remove struct tags"
  },
  {
    '<leader>cgas',
    '<cmd>GoFillStruct<cr>',
    desc = "Go Fill struct"
  },
  {
    '<leader>cgaw',
    '<cmd>GoFillSwitch<cr>',
    desc = "Go Fill switch"
  },
  {
    '<leader>cgaf',
    '<cmd>GoIfErr<cr>',
    desc = "Go add if err"
  },
  {
    '<leader>cgtf',
    '<cmd>GoTestFunc<cr>',
    desc = "Go test current function"
  },
  {
    '<leader>cgtw',
    '<cmd>GoTestSum -w<cr>',
    desc = "Go gotestsum in watch mode"
  },
  {
    '<leader>cgat',
    '<cmd>GoAddTest<cr>',
    desc = "Go add test for current function"
  },
  {
    '<leader>cgam',
    '<cmd>GoImpl',
    desc = "Go generate method stubs for implementing an interface"
  },
  {
    '<leader>ga',
    '<cmd>GoAltV!<cr>',
    desc = "Go open alternative go file in vertical split"
  },
  {
    '<leader>cgai',
    function()
      require('telescope').extensions.goimpl.goimpl()
    end,
    desc = "Generate implementing methods for Go interfaces"
  }
}

return M
