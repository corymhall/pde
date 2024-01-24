#!/usr/bin/env bash

function windowizer() {
  local tmux_path="$HOME/.local/bin/tmux"
  local target
  local clean_name
  local branch_name
  local session_name
  
  if [ -z "$TMUX" ]; then
    target="aws-cdk:main"
    clean_name="main"
  else
    branch_name=$(basename "$1")
    session_name=$($tmux_path display-message -p "#S")
    clean_name=$(echo "$branch_name" | tr "./" "__")
    target="$session_name:$clean_name"
  fi

  if ! $tmux_path has-session -t "$target" 2> /dev/null; then
    $tmux_path neww -dn "$clean_name"
  fi

  if [ -n "$TMUX" ]; then shift; fi
  $tmux_path send-keys -t "$target" "$*"
}

