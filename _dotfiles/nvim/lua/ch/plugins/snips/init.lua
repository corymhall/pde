return {
	"L3MON4D3/LuaSnip",
	version = "v2.*",
	build = "make install_jsregexp",
	config = function()
		local ls = require("luasnip")
		local types = require("luasnip.util.types")

		ls.config.set_config({
			-- this tells luasnip to remember to keep around the last snippet.
			-- you can jump back into it even if you move outside of the selection
			history = true,
			-- this one is cool cause if you have dynamic snippets, it updates as you type!
			updateevents = "TextChanged,TextChangedI",
			ext_opts = {
				[types.choiceNode] = {
					active = {
						virt_text = { { " « ", "NonTest" } },
					},
				},
			},
		})
		-- <c-k> is the expansion key
		-- this will expand the current item or jump to the next
		-- item within the snippet.
		-- FIXME: this is not working
		vim.keymap.set({ "i", "s" }, "<c-k>", function()
			if ls.expand_or_jumpable() then
				ls.expand_or_jump()
			end
		end, { silent = true })
		vim.keymap.set({ "s" }, "<Tab>", function()
			if ls.jumpable(1) then
				ls.jump(1)
			end
		end, { silent = true })

		-- this always moves to the previous item within the snippet
		vim.keymap.set({ "i", "s" }, "<c-j>", function()
			if ls.jumpable(-1) then
				ls.jump(-1)
			end
		end, { silent = true })

		vim.keymap.set({ "i", "s" }, "<c-l>", function()
			if ls.choice_active() then
				ls.change_choice(1)
			end
		end, { silent = true })

		require("ch.plugins.snips.typescript")
		require("ch.plugins.snips.go")
	end,
}
