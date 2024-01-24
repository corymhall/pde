local M = {
  "neovim/nvim-lspconfig",
  name = "lsp",
  event = "BufReadPre",
  dependencies = {
    "hrsh7th/cmp-nvim-lsp",
  }
}

function M.config()
  require('neodev').setup({})
  require("mason")
  require("ch.plugins.lsp.diagnostics").setup()

  local lspconfig = require('lspconfig')

  local autocmd = require('ch.utils.auto').autocmd
  local autocmd_clear = vim.api.nvim_clear_autocmds

  local augroup_highlight = vim.api.nvim_create_augroup("custom-lsp-references", { clear = true })
  local augroup_codelens = vim.api.nvim_create_augroup("custom-lsp-codelens", { clear = true })
  local inlays = require "ch.plugins.lsp.inlay"
  local augroup_format = vim.api.nvim_create_augroup('custom-lsp-format', { clear = true })
  local autocmd_format = function(async, filter, callback)
    vim.api.nvim_clear_autocmds { buffer = 0, group = augroup_format }
    if callback == nil then
      callback = function()
        vim.lsp.buf.format { async = async, filter = filter }
      end
    end
    vim.api.nvim_create_autocmd("BufWritePre", {
      buffer = 0,
      callback = callback,
      group = augroup_format,
    })
  end


  local filetype_attach = setmetatable({
    go = function()
      autocmd_format(false, nil, require('go.format').goimport())
    end,
    typescript = function()
      autocmd_format(false, function(client)
        return client.name ~= "tsserver"
      end, function()
          vim.cmd("EslintFixAll")
        end)
    end,
  }, {
      __index = function()
        return function() end
      end,
    })

  local custom_attach = function(client, bufnr)
    local filetype = vim.api.nvim_buf_get_option(0, "filetype")
    require("ch.plugins.lsp.keys").setup(client, bufnr)
    vim.bo.omnifunc = "v:lua.vim.lsp.omnifunc"


    -- Set autocommands conditional on server_capabilities
    if client.server_capabilities.document_highlight then
      autocmd_clear { group = augroup_highlight, buffer = bufnr }
      autocmd { "CursorHold", augroup_highlight, vim.lsp.buf.document_highlight, buffer = bufnr }
      autocmd { "CursorMoved", augroup_highlight, vim.lsp.buf.clear_references, buffer = bufnr }
    end

    if false and client.server_capabilities.codeLensProvider then
      autocmd_clear { group = augroup_codelens, buffer = bufnr }
      autocmd { "BufEnter", augroup_codelens, vim.lsp.codelens.refresh, bufnr, once = true }
      autocmd { { "BufWritePost", "CursorHold" }, augroup_codelens, vim.lsp.codelens.refresh, bufnr }
    end

    filetype_attach[filetype]()
  end

  -- nvim-cmp supports additional completion capabilities
  local updated_capabilities = vim.lsp.protocol.make_client_capabilities()
  updated_capabilities.textDocument.completion.completionItem.snippetSupport = true
  vim.tbl_deep_extend("force", updated_capabilities, require("cmp_nvim_lsp").default_capabilities())

  updated_capabilities.textDocument.codeLens = { dynamicRegistration = false }

  local servers = {
    pyright = true,
    terraformls = {
      -- filetypes = { "terraform", "hcl", "terraform-vars" },
    },
    java_language_server = true,
    lua_ls = {
      single_file_support = true,
      settings = {
        Lua = {
          workspace = {
            checkThirdParty = false,
            completion = {
              workspaceWord = true,
              callSnippet = "Both",
            },
            unusedLocalExclude = {"*_"},
            format = {
              enable = false,
              defaultConfig = {
                indent_style = "space",
                indent_size = "2",
                continuation_indent_size = "2",
              }
            }
          }
        }
      }
    },
    eslint = {
      root_dir = lspconfig.util.root_pattern(".eslintrc", ".eslintrc.js", ".eslintrc.json"),
      settings = {
        format = {
          enable = true,
        },
      },
      handlers = {
        -- this error shows up occasionally when formatting
        -- formatting actually works, so this will supress it
        ["window/showMessageRequest"] = function(_, result)
          if result.message:find("ENOENT") then
            return vim.NIL
          end

          return vim.lsp.handlers["window/showMessageRequest"](nil, result)
        end,
      },
    },
    tsserver = {
      settings = {
        typescript = {
          format = {
            indentSize = vim.o.shiftwidth,
            convertTabsToSpaces = vim.o.expandtab,
            tabSize = vim.o.tabstop,
          },
        },
        javascript = {
          format = {
            indentSize = vim.o.shiftwidth,
            convertTabsToSpaces = vim.o.expandtab,
            tabSize = vim.o.tabstop,
          },
        },
        completions = {
          completeFunctionCalls = true,
        },
      },
    },
    rust_analyzer = {},
    gopls = {
      codelenses = { test = true },
      hints = inlays and {
        assignVariableTypes = true,
        compositeLiteralFields = true,
        compositeLiteralTypes = true,
        constantValues = true,
        functionTypeParameters = true,
        parameterNames = true,
        rangeVariableTypes = true,
      } or nil,
      -- root_dir = function(fname)
      --   local Path = require "plenary.path"
      --
      --   local absolute_cwd = Path:new(vim.loop.cwd()):absolute()
      --   local absolute_fname = Path:new(fname):absolute()
      --
      --   if string.find(absolute_cwd, "/cmd/", 1, true) and string.find(absolute_fname, absolute_cwd, 1, true) then
      --     return absolute_cwd
      --   end
      --
      --   return lspconfig_util.root_pattern("go.mod", ".git")(fname)
      -- end,

      settings = {
        gopls = {
          codelenses = { test = true },
        },
      },

      flags = {
        debounce_text_changes = 200,
      },
    },
  }

  local setup_server = function(server, config)
    if not config then
      return
    end

    if type(config) ~= "table" then
      config = {}
    end

    config = vim.tbl_deep_extend("force", {
      on_attach = custom_attach,
      capabilities = updated_capabilities,
      flags = {
        debounce_text_changes = 150,
      },
    }, config)

    if server == "rust_analyzer" then
      require('rust-tools').setup({ server = config })
    else
      lspconfig[server].setup(config)
    end
  end

  for server, config in pairs(servers) do
    setup_server(server, config)
  end

  require('ch.plugins.none-ls').setup({
    on_attach = custom_attach,
  })
end

return M
