local M = {
	event = "VeryLazy",
	"mfussenegger/nvim-dap",
	dependencies = {
		{ "rcarriga/nvim-dap-ui", opts = {} },
		{
			"leoluz/nvim-dap-go",
			config = function()
				require("dap-go").setup({
					dap_configurations = {
						{
							-- Must be "go" or it will be ignored by the plugin
							type = "go",
							name = "Attach remote",
							mode = "remote",
							request = "attach",
						},
						{
							-- Must be "go" or it will be ignored by the plugin
							type = "go",
							name = "Launch pulumi-aws",
							mode = "auto",
							request = "launch",
							program = "provider/cmd/pulumi-resource-aws/main.go",
							buildFlags = {
								'-ldflags "-X github.com/pulumi/pulumi-aws/provider/v6/pkg/version.Version=6 -X github.com/hashicorp/terraform-provider-aws/version.ProviderVersion=6"',
							},
						},
						{
							-- Must be "go" or it will be ignored by the plugin
							type = "go",
							name = "Launch pulumi-aws-tfgen",
							mode = "debug",
							request = "launch",
							program = "${fileDirname}",
							args = { "schema", "--out", "schema.json", "--skip-examples" },
						},
						{
							-- Must be "go" or it will be ignored by the plugin
							type = "go",
							name = "Attach to dlv",
							mode = "remote",
							request = "attach",
							remotePath = "${workspaceFolder}",
							port = 2345,
							host = "127.0.0.1",
						},
					},
					-- delve configurations
					delve = {
						-- the path to the executable dlv which will be used for debugging.
						-- by default, this is the "dlv" executable on your PATH.
						path = "dlv",
						-- time to wait for delve to initialize the debug session.
						-- default to 20 seconds
						initialize_timeout_sec = 20,
						-- a string that defines the port to start delve debugger.
						-- default to string "${port}" which instructs nvim-dap
						-- to start the process in a random available port
						port = "${port}",
						-- additional args to pass to dlv
						args = {},
						-- the build flags that are passed to delve.
						-- defaults to empty string, but can be used to provide flags
						-- such as "-tags=unit" to make sure the test suite is
						-- compiled during debugging, for example.
						-- passing build flags using args is ineffective, as those are
						-- ignored by delve in dap mode.
						build_flags = "-tags=all",
					},
				})
			end,
		},
		{
			"theHamsta/nvim-dap-virtual-text",
			config = function()
				require("nvim-dap-virtual-text").setup({})
			end,
		},
		{
			"mxsdev/nvim-dap-vscode-js",
			config = function()
				local utils = require("dap-vscode-js.utils")
				require("dap-vscode-js").setup({
					node_path = os.getenv("HOME") .. "/.nvm/versions/node/v18.15.0/bin/node",
					adapters = { "pwa-node", "node-terminal" },
					debugger_path = utils.join_paths(utils.get_runtime_dir(), "lazy/vscode-js-debug"),
				})
			end,
		},
		{
			"microsoft/vscode-js-debug",
			build = "git reset --hard HEAD && git clean -fqdx . && npm install --legacy-peer-deps && npx gulp vsDebugServerBundle && mv dist out",
		},
	},
}

function M.keys()
	return {
		{
			"<leader>du",
			function()
				require("dapui").toggle()
			end,
			desc = "[D]ap [U]i toggle",
		},
		{
			"<leader>db",
			function()
				require("dap").toggle_breakpoint()
			end,
			desc = "[D]ap Toggle [B]reakpoint",
		},
		{
			"<leader>di",
			function()
				require("dap").step_into()
			end,
			desc = "[D]ap step [I]nto",
		},
		{
			"<leader>dc",
			function()
				require("dap").continue()
			end,
			desc = "[D]ap [C]ontinue",
		},
		{
			"<leader>do",
			function()
				require("dap").step_over()
			end,
			desc = "[D]ap step [O]ver",
		},
		{
			"<leader>dx",
			function()
				require("dap").clear_breakpoints()
			end,
			desc = "[D]ap Clear Breakpoints",
		},
		{
			"<leader>dl",
			function()
				require("dap").list_breakpoints()
			end,
			desc = "[D]ap [L]ist Breakpoints",
		},
	}
end

function M.config()
	local dap = require("dap")

	dap.configurations.javascript = {}
	dap.configurations.typescript = {}
end

return M
