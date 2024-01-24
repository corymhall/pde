#!/usr/bin/env bash
#
function tmux_startup() {
  tmux kill-server
  systemctl --user reset-failed
  tmux new-session -A -s dotfiles
}

