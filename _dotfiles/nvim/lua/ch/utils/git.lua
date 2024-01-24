local Job = require('plenary.job')
local gitlinker_git = require('gitlinker.git')
local gitlinker = require('gitlinker')

local M = {}

local function git(args, cwd)
  local output
  local p = Job:new({
    command = "git",
    args = args,
    cwd = cwd or gitlinker_git.get_git_root(),
  })
  p:after_success(function(j)
    output = j:result()
  end)
  p:sync()
  return output or {}
end

function M.git_remote()
  local process_ref = function(stdout)
    if vim.tbl_contains(stdout, 'upstream') then
      return 'upstream'
    end
    return stdout[1]
  end

  local output = git({ "remote" })

  local remote = process_ref(output)
  return remote
end

local function strip_dot_git(uri)
  -- P(4)
  -- P(uri)
  return uri:match("(.+)%.git$") or uri
end

local function get_remote_uri()
  local remote = M.git_remote()
  local uri = git({ "remote", "get-url", remote })
  -- P(3)
  -- P(uri)
  return strip_dot_git(uri[1])
end

function M.git_url()
  local mode = string.lower(vim.api.nvim_get_mode()["mode"])
  -- print(mode)
  gitlinker.get_buf_range_url(mode, {
    action_callback = function(url)
      -- P({ "1", url})
      local replacedUrl = M.replace_uri(url)
      -- P({ "2", replacedUrl })
      require("gitlinker.actions").copy_to_clipboard(replacedUrl)
    end
  })
end

function M.replace_uri(url)
  local splitUrl = vim.split(url, '/', { trimempty = true })
  local urlEnd = vim.list_slice(splitUrl, 5)
  return get_remote_uri()..'/'..vim.fn.join(urlEnd, '/')
end

return M
