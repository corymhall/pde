#!/usr/bin/env bash

source $HOME/.local/bin/lib/config.sh
source $HOME/.local/bin/lib/utils.sh
source $HOME/.local/bin/lib/get.sh
source $HOME/.local/bin/lib/cht.sh
source $HOME/.local/bin/lib/tmux-startup.sh
source $HOME/.local/bin/lib/tmux-sender.sh
source $HOME/.local/bin/lib/tmux-worktree.sh
source $HOME/.local/bin/lib/tmux-windowizer.sh
source $HOME/.local/bin/lib/tmux-sessionizer.sh
source $HOME/.local/bin/lib/mind.sh

function display_help() {
  local msg
  msg="usage: tm [ $1 ]


  $(display_get_help)
  "
  echo "$msg"
}

function main() {
  declare -A -x command_table=(
    ['get']="get"
    ['wt']="wt"
    ['tmux-startup']='tmux_startup'
    ['tmux-windowizer']='windowizer'
    ['cht']='cht'
    ['sender']='sender'
    ['mind']='mind_cmd'
  )
  local commands="${!command_table[*]}"
  if [[ $# -lt 1 ]]; then exit_with_help "$(display_help "$commands")"; fi

  local command=${1}; shift
  local fn_name=${command_table[$command]}

  if [[ $fn_name == '' ]]; then exit_with_help "$msg"; fi

  if $fn_name "$@"; then return 0; else return 1; fi
}
