local M = {
  "nvim-neotest/neotest",
  ft = { "typescript", "javascript", "go" },
  dependencies = {
    "nvim-neotest/neotest-go",
    "nvim-lua/plenary.nvim",
    "nvim-neotest/nvim-nio",
    "nvim-treesitter/nvim-treesitter",
    "haydenmeade/neotest-jest",
    "antoinemadec/FixCursorHold.nvim",
  },
  keys = {
    {
      "<leader>ta",
      function()
        require("neotest").run.run(vim.fn.expand "%")
      end,
      desc = "Neotest run current file",
    },
    {
      "<leader>tt",
      function()
        require("neotest").run.run()
      end,
      desc = "Neotest run current test",
    },
    {
      "<leader>to",
      function()
        require("neotest").output.open()
      end,
      desc = "Neotest open output",
    },
    {
      "<leader>tl",
      function()
        require("neotest").run.run_last()
      end,
      desc = "Neotest run last test",
    },
    {
      "<leader>ts",
      function()
        require("neotest").summary.toggle()
      end,
      desc = "Neotest toggle summary",
    },
    {
      "<leader>tn",
      function()
        require("neotest").jump.next { status = "failed" }
      end,
      desc = "Neotest jump to next failed test",
    },
    {
      "<leader>tp",
      function()
        require("neotest").output_panel.toggle()
      end,
      desc = "Neo[T]est toggle output [P]annel",
    },
    {
      "<leader>dt",
      function()
        require("neotest").run.run { strategy = "dap" }
      end,
      desc = "Neotest run current test with dap",
    },
  },
}

function M.config()
  -- get neotest namespace (api call creates or returns namespace)
  local neotest_ns = vim.api.nvim_create_namespace "neotest"
  vim.diagnostic.config({
    virtual_text = {
      format = function(diagnostic)
        local message = diagnostic.message:gsub("\n", " "):gsub("\t", " "):gsub("%s+", " "):gsub("^%s+", "")
        return message
      end,
    },
  }, neotest_ns)
  require("neotest").setup {
    adapters = {
      require "neotest-go" {
        experimental = {
          test_table = true,
        },
      },
      require "neotest-jest" {
        jestCommand = "yarn jest ",
        -- jestConfigFile = "custom.jest.config.ts",
        env = { CI = true },
        cwd = function(path)
          return vim.fn.getcwd()
        end,
      },
    },
  }
end

return M
