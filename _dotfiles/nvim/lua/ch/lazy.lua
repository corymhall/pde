require('lazy').setup({
  spec = {
    {
      import = "ch.plugins",
    },
  },
  dev = {
    path = "~/plugins",
  },
  checker = {
    enabled = true,
    frequency = 86400,
    notify = false,
  },
  performance = {
    rtp = {
      disabled_plugins = {
        -- "gzip",
        "matchit",
        "matchparen",
        "netrwPlugin",
        "tarPlugin",
        "tohtml",
        "tutor",
        -- "zipPlugin",
      },
    },
  },
})

vim.keymap.set("n", "<leader>l", "<cmd>:Lazy<cr>")
