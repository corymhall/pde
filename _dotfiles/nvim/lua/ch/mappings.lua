local wk = require("which-key")
local commands = require("ch.utils.commands")
local telescope_mapper = require("ch.plugins.telescope.mappings")

-- Highlight when yanking (copying) text
--  Try it with `yap` in normal mode
--  See `:help vim.highlight.on_yank()`
vim.api.nvim_create_autocmd("TextYankPost", {
	desc = "Highlight when yanking (copying) text",
	group = vim.api.nvim_create_augroup("kickstart-highlight-yank", { clear = true }),
	callback = function()
		vim.highlight.on_yank()
	end,
})

wk.register({
	c = {
		name = "[C]ode",
		g = {
			name = "[G]o",
			a = { name = "[A]dd" },
			r = { name = "[R]emove" },
			t = { name = "[T]est" },
		},
		_ = "which_key_ignore",
	},
	x = { name = "Trouble", _ = "which_key_ignore" },
	d = { name = "[D]ocument", _ = "which_key_ignore" },
	r = { name = "[R]ename", _ = "which_key_ignore" },
	s = { name = "[S]earch", _ = "which_key_ignore" },
	w = { name = "[W]orkspace", _ = "which_key_ignore" },
	t = { name = "[T]est", _ = "which_key_ignore" },
	o = { name = "[O]cto", _ = "which_key_ignore" },
	h = { name = "Gitsigns", _ = "which_key_ignore" },
	b = {
		name = "[B]uffer",
		d = { ":bdelete<cr>", "delete buffer" },
	},
	g = {
		name = "[G]it",
		u = {
			function()
				require("ch.utils.git").git_url()
			end,
			"Git URL",
		},
		p = { ":Git push<cr>", "Git push" },
		d = { ":Gvdiffsplit!<CR>", "Git diff" },
		e = { ":Gedit<CR>", "Git edit" },
		rp = {
			function()
				local num = vim.fn.input("Commits back: ")
				local args = string.format("HEAD~%s:%%", num)
				vim.api.nvim_cmd({
					cmd = "Gread",
					args = { args },
				}, {})
			end,
			"Restore previous commit",
		},
		-- l = { ':silent! Glog<CR>:bot copen<CR>', 'Git log'},
		-- o = { ':Git checkout<Space>', 'Git checkout <branch>'},
		s = { ":G<CR>", "Git status" },
		fa = { ":Git fetch --all<CR>", "Git fetch all" },
	},
	l = {
		name = "[L]sp",
		r = { ":LspRestart<CR>", "Restart LSP" },
		i = { ":LspInfo<CR>", "LSP Info" },
		s = { ":LspStart<CR>", "Start LSP" },
		x = { ":LspStop<CR>", "Stop LSP" },
	},
	q = {
		name = "[Q]uickfix",
		o = { ":copen<CR>", "Open quickfix" },
		q = { ":cclose<CR>", "Close quickfix" },
		n = { ":cnext<CR>", "Next item in quickfix" },
		p = { ":cprev<CR>", "Previous item in quickfix" },
	},
	u = {
		function()
			require("telescope").extensions.undo.undo()
		end,
		"Undo history",
	},
	["?"] = "which_key_ignore",
	[";"] = "which_key_ignore",
	[","] = "which_key_ignore",
	["<space>"] = "which_key_ignore",
	["."] = "which_key_ignore",
}, { prefix = "<leader>" })

vim.keymap.set("n", "<leader>u", function()
	require("telescope").extensions.undo.undo()
end, { desc = "Undo history" })

vim.keymap.set("i", "jj", "<ESC>")
vim.keymap.set("", "<C-h>", "<C-w>h")
vim.keymap.set("", "<C-j>", "<C-w>j")
vim.keymap.set("", "<C-k>", "<C-w>k")
vim.keymap.set("", "<C-l>", "<C-w>l")
vim.keymap.set("n", "<C-d>", "<C-d>zz")
vim.keymap.set("v", "K", ":m '>-2<CR>gv=gv")
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")
vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")
vim.keymap.set("n", "U", "<cmd>redo<cr>") -- redo
vim.keymap.set("n", "<leader>x", "<cmd>!chmod +x %<CR>", { silent = false, desc = "make  file executable" })
vim.keymap.set("n", "<Esc>", "<cmd>nohlsearch<CR>")
-- Diagnostic keymaps
vim.keymap.set("n", "[d", vim.diagnostic.goto_prev, { desc = "Go to previous [D]iagnostic message" })
vim.keymap.set("n", "]d", vim.diagnostic.goto_next, { desc = "Go to next [D]iagnostic message" })
vim.keymap.set("n", "<leader>e", vim.diagnostic.open_float, { desc = "Show diagnostic [E]rror messages" })
vim.keymap.set("n", "<leader>q", vim.diagnostic.setloclist, { desc = "Open diagnostic [Q]uickfix list" })

vim.keymap.set("n", "<leader>dgt", "<cmd>diffget //2<cr>", { desc = "diffget //2 (target parent)" })
vim.keymap.set("n", "<leader>dgy", "<cmd>diffget //3<cr>", { desc = "diffget //3 (merge parent)" })

vim.keymap.set("n", "<leader>gy", function()
	require("ch.utils.git").git_url("v")
end, { desc = "Git URL" })

-- map :W to :w (helps which-key issue)
vim.cmd([[ command! W  execute ':w' ]])
