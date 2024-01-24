#!/usr/bin/env bash

function sender() {
  local pane=$1
  local session_name
  local window_name
  local current_pane

  session_name=$(tmux display-message -p "#S")
  window_name=$(tmux display-message -p "#W")
  current_pane=$(tmux display-message -p "#P")
  if [ -z "$pane" ]; then
    current_pane="{bottom}"
  fi

  target="$session_name:$window_name.$current_pane"

  tmux send-keys -t "$target" "$*"
  return 0
}
