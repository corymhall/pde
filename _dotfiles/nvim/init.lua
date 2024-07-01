--[[
-- Setup initial configuration,
-- 
-- Primarily just download and execute lazy.nvim
--]]
vim.g.mapleader = " "

local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system {
    "git",
    "clone",
    "--filter=blob:none",
    "--single-branch",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  }
end

-- Add lazy to the `runtimepath`, this allows us to `require` it.
---@diagnostic disable-next-line: undefined-field
vim.opt.rtp:prepend(lazypath)
vim.opt.runtimepath:prepend(lazypath)

-- Mappings

-- require("ch.globals")
-- require("ch.lazy")
require("lazy").setup({ import = "custom/plugins" }, {
  change_detection = {
    enabled = true,
    notify = false,
    frequency = 86400, -- every 24 hours
  },
})

-- vim.api.nvim_create_autocmd("User", {
-- 	pattern = "VeryLazy",
-- 	callback = function()
-- 		require("ch.mappings")
-- 	end,
-- })
