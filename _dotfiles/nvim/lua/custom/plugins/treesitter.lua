local M = {
  "nvim-treesitter/nvim-treesitter",
  dependencies = {
    {
      'nvim-treesitter/nvim-treesitter-textobjects',
    },
    { 'nvim-treesitter/playground', cmd = "TSPlaygroundToggle" },
    {
      'nvim-treesitter/nvim-treesitter-context',
      event = 'BufReadPre',
      config = true,
    },
  }
}
function M.config()
  local ts = require 'nvim-treesitter.configs'
  local ts_context = require 'treesitter-context'
  require('ts_context_commentstring').setup({
    enable_autocmd = false,
  })
  ts.setup {
    modules = {},
    ignore_install = {},
    ensure_installed = {
      "go",
      "html",
      "javascript",
      "typescript",
      "tsx",
      "markdown",
      "markdown_inline",
      "python",
      "toml",
      "yaml",
      "bash",
      "lua",
      -- "comment",
      "graphql",
      "hcl",
      "terraform",
      "http",
      "json",
      "regex",
      "vue",
      "query",
      'diff',
      'css',
      'gitignore',
      'java',
      'jsdoc',
      'jsonc',
    },
    sync_install = false,
    auto_install = false,
    indent = {
      enable = false,
    },
    highlight = {
      enable = true,
      -- use_languagetree = false,
      -- disable = { "json" },
    },
    incremental_selection = {
      enable = true,
      keymaps = {
        init_selection = "<M-w>",
        node_incremental = "<M-w>",
        node_decremental = "<M-C-w>",
        scope_incremental = "<M-e>",
      },
    },
    playground = {
      enabled = true
    },
    textobjects = {
      select = {
        enable = true,
        -- lookahead = true, -- Automatically jump forward to textobj, similar to targets.vim
        keymaps = {
          -- You can use the capture groups defined in textobjects.scm
          ['af'] = '@function.outer',
          ['if'] = '@function.inner',
          ['ac'] = '@class.outer',
          ['ic'] = '@class.inner',
          ['aa'] = '@parameter.outer',
          ['ia'] = '@parameter.inner',
        },
      },
      move = {
        enable = true,
        set_jumps = true, -- whether to set jumps in the jumplist
        goto_next_start = {
          ["]p"] = "@parameter.inner",
          [']m'] = '@function.outer',
          [']]'] = '@class.outer',
        },
        goto_next_end = {
          [']M'] = '@function.outer',
          [']['] = '@class.outer',
        },
        goto_previous_start = {
          ["[p"] = "@parameter.inner",
          ['[m'] = '@function.outer',
          ['[['] = '@class.outer',
        },
        goto_previous_end = {
          ['[M'] = '@function.outer',
          ['[]'] = '@class.outer',
        },
      },
    },
  }
  local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
  parser_config.markdown.filetype_to_parsername = "octo"
  ts_context.setup{
    enable = true,
    throttle = true,
    patterns = {
      default = {
        "function",
        "method",
        "for",
        "while",
        "if",
        "switch",
        "case",
      },
      typescript = {
        "class_declaration",
        "abstract_class_declaration",
        "else_clause",
      }
    }
  }
end

return M
