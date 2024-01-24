local M = {}
local Worktree = require("git-worktree")

-- local function is_cdk(path)
--   local found = path:find(vim.env["AWSCDK"], 1, true)
--   return type(found) == "number" and found > 0
-- end

function M.yarn_test()
  local command = string.format(":silent !tm sender yarn test")
  vim.api.nvim_exec2(command, {})
end

-- function M.execute(path)
--   local command = string.format(":silent !tmux-cdk tmux %s", path, "build-lib")
--   vim.api.nvim_exec2(command, {})
-- end

-- function M.switch(path, type)
--   if is_cdk(path) then
--     local command = string.format(":silent !tmux-cdk tmux-create %s", path)
--     vim.api.nvim_exec2(command, {})
--     if type == Worktree.Operations.Create then
--       M.execute(path)
--     end
--   end
-- end

Worktree.on_tree_change(function(op, metadata)
  -- print(op)
  -- P(metadata)
  -- if op == Worktree.Operations.Switch then
  --   M.switch(metadata.path, op)
  -- elseif op == Worktree.Operations.Create then
  --   M.switch(metadata.path, op)
  -- end
end)


return M
