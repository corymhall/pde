local M = {
  event = "VeryLazy",
  'mfussenegger/nvim-dap',
  dependencies = {
    {

      'rcarriga/nvim-dap-ui',
      config = function()
        require("dapui").setup()
      end,
    },
    {
      'theHamsta/nvim-dap-virtual-text',
      config = function()
        require('nvim-dap-virtual-text').setup({})
      end,
    },
    {
      "mxsdev/nvim-dap-vscode-js",
      config = function()
        local utils = require("dap-vscode-js.utils")
        require('dap-vscode-js').setup({
          node_path = os.getenv("HOME") .. "/.nvm/versions/node/v18.15.0/bin/node",
          adapters = { "pwa-node", "node-terminal" },
          debugger_path = utils.join_paths(utils.get_runtime_dir(), 'lazy/vscode-js-debug'),
        })
      end,
    },
    {
      'microsoft/vscode-js-debug',
      build = "git reset --hard HEAD && git clean -fqdx . && npm install --legacy-peer-deps && npx gulp vsDebugServerBundle && mv dist out",
    }
  }
}

function M.keys()
  return {
    {
      '<leader>db',
      function()
        require('dap').toggle_breakpoint()
      end,
      desc = 'dap toggle_breakpoint',
    },
    {
      '<leader>di',
      function()
        require('dap').step_into()
      end,
      desc = 'dap step into',
    },
    {
      '<leader>dc',
      function()
        require('dap').continue()
      end,
      desc = 'dap continue',
    },
    {
      '<leader>do',
      function()
        require('dap').step_over()
      end,
      desc = 'dap step over',
    }
  }
end

function M.config()
  -- local utils = require("dap-vscode-js.utils")
  local dap = require('dap')

  dap.adapters.delve = {
    type = 'server',
    port = '${port}',
    executable = {
      command = 'dlv',
      args = {'dap', '-l', '127.0.0.1:${port}'},
    }
  }

  dap.configurations.go = {
    {
      type = "delve",
      name = "Debug",
      request = "launch",
      program = "${file}",
    },
    {
      type = "delve",
      name = "Debug test",
      request = "launch",
      mode = "test",
      program = "${file}",
    },
    {
      type = "delve",
      name = "Debug test (go.mod)",
      request = "launch",
      mode = "test",
      program = "./${relativeFileDirname}",
    }
  }

  dap.configurations.javascript = {
    {
      type = "pwa-node",
      request = "attach",
      name = "remote attach",
      skipFiles = { '<node_internals>/**' },
      localRoot = '${workspaceFolder}',
      resolveSourceMapLocations = { '!**/node_modules/**' },
    },
    {
      type = "pwa-node",
      request = "launch",
      name = "Launch file",
      program = "${file}",
      cwd = "${workspaceFolder}",
      protocol = 'inspector',
      runtimeExecutable = "node",
      resolveSourceMapLocations = { '!**/node_modules/**' },
    },
  }
  dap.configurations.typescript = {
    {
      type = "pwa-node",
      request = "launch",
      name = "Launch file",
      program = "${file}",
      cwd = "${workspaceFolder}",
      runtimeArgs = { "-r", "ts-node/register"},
      protocol = 'inspector',
      runtimeExecutable = "node",
      resolveSourceMapLocations = { '!**/node_modules/**' },
    },
    {
      type = "pwa-node",
      request = "attach",
      name = "Attach",
      processId = require'dap.utils'.pick_process,
      cwd = "${workspaceFolder}",
      resolveSourceMapLocations = { '!**/node_modules/**' },
    },
    {
      type = "pwa-node",
      request = "launch",
      name = "Debug Jest Tests",
      runtimeExecutable = "node",
      runtimeArgs = {
        "${workspaceFolder}/node_modules/jest/bin/jest.js",
        "--runInBand",
      },
      rootPath = "${workspaceFolder}",
      cwd = "${workspaceFolder}",
      console = "integratedTerminal",
      internalConsoleOptions = "neverOpen",
    },
  }
end

return M
