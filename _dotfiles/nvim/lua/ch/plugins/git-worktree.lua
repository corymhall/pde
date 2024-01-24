return {
  'ThePrimeagen/git-worktree.nvim',
  config = function()
    require("git-worktree").setup({
      autopush = false,
      update_on_change_command = ':lua require("telescope.builtin").fd(require("telescope.themes").get_ivy({hidden = false, find_command={"fd", "--type", "f", "--exclude", "CHANGELOG.md", "--exclude", "vendor"}}))'
    })
    require('ch.utils.worktree')
  end,
}
