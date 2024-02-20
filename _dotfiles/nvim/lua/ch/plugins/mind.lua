local M = {
  dir = '~/plugins/mind.nvim',
  keys = {
    {
      '<leader>mm',
      function()
        require('mind').open_main()
      end,
      desc = 'Mind - open main tree',
    },
    {
      '<leader>mp',
      function() require('mind').open_project({use_global=true}) end,
      desc = 'Mind - open project tree',
    },
    -- {
    --   '<leader>mr',
    -- },
    {
      '<leader>ms',
      function()
        require('mind').wrap_main_tree_fn(function(args)
          require('mind.commands').open_data_index(args.get_tree(), args.data_dir, args.save_tree, args.opts)
        end)
      end,
      desc = 'Mind - Search trees',
    },
    {
      '<leader>mc',
      function()
        require('mind').wrap_main_tree_fn(function(args)
          require('mind.commands').create_node_index(
            args.get_tree(),
            require('mind.node').MoveDir.INSIDE_END,
            args.save_tree,
            args.opts
          )
        end)
      end,
      desc = 'Mind - Create node in the main tree',
    },
    {
      '<leader>ml',
      function()
        require'mind'.wrap_main_tree_fn(function(args)
          require'mind.commands'.copy_node_link_index(args.get_tree(), nil, args.opts)
        end)
      end,
      desc = 'Mind - Get a node link',
    },
  },
}

function M.config()
  require('mind').setup({
    persistence = {
      state_path = "~/personal/mind/mind.json",
      data_dir = "~/personal/mind/data",
    },
    ui =  {
      width = 40,
    },
    keymaps = {

    },
  })
end

return M


