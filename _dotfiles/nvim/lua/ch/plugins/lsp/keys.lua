local wk = require('which-key')

local M = {}

local lsp_rename = function()
  vim.lsp.buf.rename()
  vim.cmd("wa")
end
function M.setup(client, buffer)
  local telescope_mapper = require "ch.plugins.telescope.mappings"
  -- local cap = client.server_capabilities
  wk.register({
    buffer = buffer,
    ['<leader>'] = {
      c = {
        name = "+code",
        {
          cond = client.name == "tsserver",
          o = { "<cmd>:TypescriptOrganizeImports<CR>", "Organize Imports" },
          R = { "<cmd>:TypescriptRenameFile<CR>", "Rename File" },
        },
        s = { vim.lsp.buf.signature_help, 'Signature help' },
        r = { lsp_rename, 'Rename' },
        a = {
          { vim.lsp.buf.code_action, "Code Action" },
          { vim.lsp.buf.code_action, "Code Action", mode = "v" },
        },
      },
      d = {
        name = "+diagnostic",
        l = { vim.diagnostic.open_float, 'Line Diagnostic'},
        p = { function()
          vim.diagnostic.goto_prev({ severity = vim.diagnostic.severity.ERROR })
        end, 'Go to prev' },
        n = { function()
          vim.diagnostic.goto_next({ severity = vim.diagnostic.severity.ERROR })
        end, 'Go to next' },
      },
    },
    g = {
      name = "+goto",
      d = { vim.lsp.buf.definition, 'LSP Go to definition' },
      s = { vim.lsp.buf.signature_help, 'LSP Signature help' },
      r = { telescope_mapper('lsp_references'),'Telescope LSP References' },
      i = { telescope_mapper('lsp_implementations'), 'Telescope LSP Implementations' },
      t = { telescope_mapper('lsp_type_definitions'), 'Telescope LSP Type Definitions' },
      w = { telescope_mapper('lsp_dynamic_workspace_symbols'), 'Telescope LSP Dynamic Workspace Symbols' },
      c = {
        i = {
          telescope_mapper('lsp_incoming_calls'), 'Telescope LSP Outgoing calls',
        },
        o = {
          telescope_mapper('lsp_outgoing_calls'), 'Telescope LSP Outgoing calls',
        },
      },
    },
    K = { vim.lsp.buf.hover, "Hover" },
  })
end

return M
