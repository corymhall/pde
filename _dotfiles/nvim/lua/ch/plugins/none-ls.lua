local M = {
  'nvimtools/none-ls.nvim',
}

function M.setup(options)
  local nls = require('null-ls')
  nls.setup({
    debounce = 150,
    save_after_format = false,
    sources = {
      nls.builtins.diagnostics.shellcheck,
      nls.builtins.formatting.black.with({ filetypes = { "python" } }),
      nls.builtins.diagnostics.terraform_validate.with({ filetypes = { "terraform", "terraform-vars", "hcl" } }),
      nls.builtins.formatting.terraform_fmt.with({ filetypes = { "terraform", "terraform-vars", "hcl" } }),
    },
    on_attach = options.on_attach,
  })
end

return M
