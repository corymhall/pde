local M = {
  'ThePrimeagen/harpoon',
  branch = 'harpoon2',
  config = function()
    require('harpoon'):setup()
  end,
}
local conf = require('telescope.config').values
local function toggle_telescope(harpoon_files)
  local file_paths = {}
  for _, item in ipairs(harpoon_files.items) do
    table.insert(file_paths, item.value)
  end

  require("telescope.pickers").new({}, {
    prompt_title = "Harpoon",
    finder = require("telescope.finders").new_table({
      results = file_paths,
    }),
    previewer = conf.file_previewer({}),
    sorter = conf.generic_sorter({}),
  }):find()
end

M.keys = {
  {
    '<leader>ha',
    function()
      require('harpoon'):list():append()
    end,
    desc = 'Add file to harpoon',
  },
  {
    '<leader>hl',
    function()
      toggle_telescope(require('harpoon'):list())
    end,
    desc = 'Open harpoon window',
  },
}

return M
