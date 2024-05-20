local M = {}
local Worktree = require("git-worktree")

-- local function is_cdk(path)
--   local found = path:find(vim.env["AWSCDK"], 1, true)
--   return type(found) == "number" and found > 0
-- end

-- function M.execute(path)
--   local command = string.format(":silent !tmux-cdk tmux %s", path, "build-lib")
--   vim.api.nvim_exec2(command, {})
-- end

function M.switch(path, type)
	local exists = require("lspconfig.util").root_pattern("Makefile")(path)
	require("do-the-needful").please()
	if exists ~= "" then
		-- local overseer = require("overseer")
		-- overseer.run_template({ name = "run make" }, function(task)
		-- 	if task then
		-- 		overseer.run_action(task, "retain")
		-- 	end
		-- end)
	end
end

Worktree.on_tree_change(function(op, metadata)
	-- print(op)
	-- P(metadata)
	-- if op == Worktree.Operations.Switch then
	--   M.switch(metadata.path, op)
	if op == Worktree.Operations.Create then
		M.switch(metadata.path, op)
	elseif op == Worktree.Operations.Switch then
		-- M.switch(metadata.path, op)
	end
end)

return M
