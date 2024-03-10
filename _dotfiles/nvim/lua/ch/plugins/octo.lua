local M = {
  'pwntester/octo.nvim',
}

local getRepo = function()
  local folder = vim.api.nvim_cmd({
    cmd = 'Git',
    args = {'ls-remote --get-url origin'},
  }, { output = true })
  print("folder", folder)
  local withoutExt = vim.split(folder, '.git', { plain = true })
  P({'withoutExt', withoutExt})
  local withoutHost = vim.split(withoutExt[1], '//', { plain = true })
  P({'withoutHost', withoutHost})
  local orgRepo = vim.split(withoutHost[2], '/', { plain = true })
  P({'orgrepo', orgRepo})
  local org = orgRepo[2]
  local repo = orgRepo[3]
  return {
    repo = repo,
    org = org,
  }
end

M.cmd = "Octo"
function M.config()
  require"octo".setup {
    mappings = {
      submit_win = {
        approve_review = { lhs = '<M-a>', "approve review" },
        comment_review = { lhs = '<M-m>', "comment review" },
        request_changes = { lhs = '<M-r>', "request changes" },
      },
    },
  }
end

function M.init()
  local wk = require('which-key')
  wk.register({
    o = {
      name = "[O]cto",
      r = {
        name = "[R]eview",
        s = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'review', 'start' },
          }, {})
        end, 'Start PR review' },
        r = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'review', 'resume' },
          }, {})
        end, 'Resume PR review' },
        c = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'review', 'comments' },
          }, {})
        end, 'Review PR comments' },

        p = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'review', 'submit' },
          }, {})
        end, 'Submit PR review' },
        x = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'review', 'discard' },
          }, {})
        end, 'Discard PR review' },
      },
      p = {
        name = "[P]r",
        c = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'pr', 'create' },
          }, {})
        end, 'Create PR' },
        b = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'pr', 'browser' },
          }, {})
        end, 'Open PR in Browser' },
        s = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'pr', 'search' },
          }, {})
        end, 'Search PRs' },
        o = { function()
          local num = vim.fn.input "PR: "
          local url = string.format("octo://aws/aws-cdk/pull/%s", num)
          vim.api.nvim_cmd({
            cmd = 'buffer',
            args = {'%'}
          }, {})
          vim.api.nvim_cmd({
            cmd = 'edit',
            args = {url},
          }, {})
        end, 'Open issue' },
        l = {
          name = "+list",
          n = {
            function()
              local repo = getRepo()
              local prompt = string.format("is:pr sort:updated-desc status:success is:open repo:%s/%s", repo.org, repo.repo)
              print(prompt)
              require("octo.pickers.telescope.provider").search({prompt=prompt})
            end, 'Open PRs that need review' },
          r = { function()
            local repo = getRepo()
            local prompt = string.format("is:pr sort:updated-desc reviewed-by:corymhall is:open repo:%q/%q", repo.org, repo.repo)
            require("octo.pickers.telescope.provider").search({prompt=prompt})
          end, "Open PRs that i've reviewed"},
        },
      },
      i = {
        name = "[I]ssue",
        o = { function()
          local num = vim.fn.input "Issue: "
          local url = string.format("octo://aws/aws-cdk/issue/%s", num)
          vim.api.nvim_cmd({
            cmd = 'buffer',
            args = {'%'}
          }, {})
          vim.api.nvim_cmd({
            cmd = 'edit',
            args = {url},
          }, {})
        end, 'Open issue' },
        s = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'issue', 'search' },
          }, {})
        end, 'Search issues' },
        aa = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'assignee', 'add', 'corymhall' },
          }, {})
        end, 'Remove assignment' },
        ra = { function()
          vim.api.nvim_cmd({
            cmd = 'Octo',
            args = { 'assignee', 'remove', 'corymhall' },
          }, {})
        end, 'Remove assignment' },
        l = {
          name = "+list",
          ai = { function()
            vim.api.nvim_cmd({
              cmd = 'Octo',
              args = { 'issue', 'list', 'aws/aws-cdk', 'is:open', 'assignee=corymhall' },
            }, {})
          end, 'Assigned open issues' },
          t = { function()
            vim.api.nvim_cmd({
              cmd = 'Octo',
              args = { 'issue', 'list', 'aws/aws-cdk', 'assignee=corymhall', 'labels=needs-triage' },
            }, {})
          end, 'Ownership issue triage' },
        },
      },
    },
  }, { prefix = '<leader>' })
end

return M
