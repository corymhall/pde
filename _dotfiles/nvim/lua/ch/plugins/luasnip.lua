local M = {
  "L3MON4D3/LuaSnip",
}

function M.config()
  local ls = require "luasnip"
  local types = require "luasnip.util.types"

  ls.config.set_config {
    -- this tells luasnip to remember to keep around the last snippet.
    -- you can jump back into it even if you move outside of the selection
    history = true,
    -- this one is cool cause if you have dynamic snippets, it updates as you type!
    updateevents = 'TextChanged,TextChangedI',
    ext_opts = {
      [types.choiceNode] = {
        active = {
          virt_text = { { " <- Current Choice", "NonTest" } },
        },
      },
    },
  }
  -- <c-k> is the expansion key
  -- this will expand the current item or jump to the next
  -- item within the snippet.
  vim.keymap.set({ 'i', 's' }, "<c-k>", function()
    if ls.expand_or_jumpable() then
      ls.expand_or_jump()
    end
  end, { silent = true })

  -- this always moves to the previous item within the snippet
  vim.keymap.set({ 'i', 's' }, '<c-j>', function()
    if ls.jumpable(-1) then
      ls.jump(-1)
    end
  end, { silent = true })

  vim.keymap.set({ 'i', 's' }, '<c-l>', function()
    if ls.choice_active() then
      ls.change_choice(1)
    end
  end, { silent = true })

  vim.keymap.set('n', '<leader><leader>s', '<cmd>source ~/.config/nvim/after/plugin/luasnip.lua<cr>')

  -- this is a snippet creator
  -- s(<trigger>, <nodes>)
  local s = ls.s
  local snippet_from_nodes = ls.sn

  -- this is a format node
  -- it takes a format string, a list of nodes
  -- fmt(<fmt_string>, {...nodes})
  local fmt = require('luasnip.extras.fmt').fmt

  -- this is an insert node
  -- it takes a position (like $1) and optionally some default text
  -- i(<position>, [default_text])
  local i = ls.insert_node
  local t = ls.text_node
  local f = ls.function_node
  local c = ls.choice_node
  local d = ls.dynamic_node

  local insert_interface = function(args, _)
    local arg = args[1][1] or ''
    local type = args[2][1] or ''
    if type ~= '' then
      type = vim.split(type, 'extends ', true)[2]
    end
    if arg ~= '' then
      local props = vim.split(arg, ':', true, true)[2]
      if props ~= '' then
        local name = vim.trim(props)
        if name ~= '' then
          if name ~= 'StackProps' and type == 'Stack' then name = name..' extends StackProps' end

          return snippet_from_nodes(nil, {
            t('export interface '),
            t(name),
            t(' {}'),
          })
        end
      end
    end

    return snippet_from_nodes(nil, { t('') })
  end

  local stack_props = function(args, _)
    local arg = args[1][1] or ''
    if type ~= '' then
      local type = vim.split(arg, ' ', true)

      if type[3] == 'Stack' then
        return snippet_from_nodes(nil, {
          t(', props'),
        })
      else
        return snippet_from_nodes(nil, { t('') })
      end
    end
  end

  local stack_or_construct = function(args, _)
    local arg = args[1][1] or ''
    if type ~= '' then
      local type = vim.split(arg, ' ', true)

      if type[3] == 'Construct' then
        return snippet_from_nodes(nil, {
          c(1, {
            fmt(', props{}: {}', {
              c(1, {
                t('?'),
                t(''),
              }),
              i(2),
            }),
            t(''),
          }),
        })
      elseif type[3] == 'Stack' then
        return snippet_from_nodes(nil, {
          c(1, {
            fmt(', props{}: {}', {
              c(1, {
                t('?'),
                t(''),
              }),
              i(2, 'StackProps'),
            }),
            t(''),
          }),
        })
      else
        return snippet_from_nodes(nil, { t('') })
      end
    end
  end

  local is_async = function(args)
    local arg = args[1][1] or ''
    if type ~= '' then
      local type = vim.split(arg, ' ', true)
      if vim.tbl_contains(type, 'async') then
        return snippet_from_nodes(nil, {
          t 'Promise<',
          i(1, 'void'),
          t '>',
        })
      else
        return snippet_from_nodes(nil, {
          i(1, 'void')
        })
      end
    end
  end

  -- repeats a node
  -- rep(<position>)
  local rep = require('luasnip.extras').rep
  ls.add_snippets(nil, {
    vimwiki = {
      s('ln', fmt('[{}]({})', { i(1), i(2) })),
      s('ti', {
        c(1, {
          t '# ',
          t '## ',
          t '### ',
          t '#### ',
        }),
        i(0),
      }),
    },
    typescript = {
      s('cb', fmt(
        [[
        /**
         * {}
         */
      ]],
        {
          i(0),
        }
      )),
      s('newmeth', fmt(
        [[
        {}{}{}({}): {} {{
          {}
        }}
      ]],
        {
          c(1, {
            t 'public ',
            t 'private ',
            t 'protected ',
          }),
          c(2, {
            t 'async ',
            t '',
          }),
          i(3),
          i(4),
          d(5, is_async, { 2 }),
          i(0),
        }
      )),
      s('fn', fmt(
        [[
        {}function {}({}): {} {{
          {}
        }}
      ]],
        {
          c(1, {
            t 'export ',
            t 'export async ',
            t '',
          }),
          i(2),
          i(3),
          d(4, is_async, { 1 }),
          i(0),
        }
      )),
      s('newcl', fmt(
        [[
        export class {} {{
          constructor({}) {{
            {}
          }}
        }}
      ]],
        {
          i(1),
          i(2),
          i(0),
        }
      )),
      s('imp', fmt("import * as {} from '@aws-cdk/{}';", { f(function(args)
        local parts = vim.split(args[1][1], '-');
        return parts[#parts] or ""
      end, { 1 }), i(1) })),
      s("newcon", fmt(
        [[
        {}

        export class {}{} {{
          constructor(scope: Construct, id: string{}) {{
            super(scope, id{});
            {}
          }}
        }}
      ]],
        {
          d(4, insert_interface, { 3, 2 }),
          i(1),
          c(2, {
            t(' extends Construct'),
            t(' extends Stack'),
          }),
          d(3, stack_or_construct, { 2 }),
          d(5, stack_props, { 2 }),
          i(0),
        }
      )),
    },
    -- lua specific snippets go here.
    lua = {
      -- s("req", fmt("local {} = require('{}')", { i(1, "default"), rep(1)})),
    },
    octo = {
      s("p1", t {
        "It seems like this issue impacts a significant number of customers, and I've tagged it as P1, which means it should be on our near-term roadmap.",
        "",
        "We welcome community contributions! If you are able, we encourage you to [contribute](https://github.com/aws/aws-cdk/blob/main/CONTRIBUTING.md) a bug fix or new feature to the CDK. If you decide to contribute, please start an engineering discussion in this issue to ensure there is a commonly understood design before submitting code. This will minimize the number of review cycles and get your code merged faster.",
      }
      ),
      s("p2", t{
        "This issue has been classified as *p2*. That means a workaround is available or it is deemed a nice-to-have feature. Given the amount of work there is to do and the relative priority of this issue, the CDK team is unlikely to address it. That does not mean the issue will never be fixed! If someone from the community submits a PR to fix this issue, and the PR is small and straightforward enough, and meets the quality bars to be reviewed and merged with little effort we will accept that PR. PRs that do not build or need complex or multiple rounds of reviews are unlikely to be merged and will be closed to keep our backlog manageable.",
        "",
        "In the mean time, remember that you can always use the escape hatch (https://docs.aws.amazon.com/cdk/v2/guide/cfn_layer.html) mechanism to have fine control over the CloudFormation output you want. We will keep the issue open for discoverability, to collect upvotes, and to facilitate discussion around this topic.",
        "",
        'We use +1s *on this issue* to help prioritize our work, and are happy to re-evaluate the prioritization of this issue based on community feedback. You can reach out to the cdk.dev community on Slack (https://cdk.dev/) to solicit support for reprioritization.',
      }
      ),
    },
  })

end

return M
