return {
  'numToStr/Comment.nvim',
  keys = { { mode = "v", "gc" }, "gw" },
  dependencies = {
    {
      "JoosepAlviste/nvim-ts-context-commentstring",
    },
  },
  opts = {
    -- pre_hook = require('ts_context_commentstring.integrations.comment_nvim').create_pre_hook(),
  },
}
