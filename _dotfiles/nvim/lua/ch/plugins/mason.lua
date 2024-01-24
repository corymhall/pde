local M = {
  "williamboman/mason.nvim",
  dependencies = {
    "williamboman/mason-lspconfig.nvim",
  },
  cmd = "Mason",
}

local tools = {
  "stylua",
  "selene",
  "luacheck",
  "eslint_d",
  "shellcheck",
  "shfmt",
  "lua-language-server",
  "rust-analyzer",
  'codelldb',
  "gopls",
  "eslint-lsp",
  "terraform-ls",
  "typescript-language-server",
}

local function check()
  local mr = require("mason-registry")
  for _, tool in ipairs(tools) do
    local p = mr.get_package(tool)
    if not p:is_installed() then
      p:install()
    end
  end
end

function M.config()
  require("mason").setup()
  check()
  require("mason-lspconfig").setup({
    automatic_installation = false,
  })
end

return M
