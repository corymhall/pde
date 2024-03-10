#!/usr/bin/env bash

function display_get_help() {
  local msg
  msg="get [owner]
  Gets a repo from the given GitHub organization
  clones it as a fresh worktree project

    where:
    owner  GitHub organization to search (default: rv-health)

    example usage:
      get pulumi
  "
  echo "$msg"
}

function get() {
  local msg="usage: tm get pulumi"
  # eval preprocess || exit_with_help "$(display_get_help)";

  local owner=$1
  local repo_name=$2

  if [ -z "$owner" ]; then
    # default to pulumi
    owner="pulumi"
  fi

  local selected
  local dir
  local repo
  if [ -z "$repo_name" ]; then
    selected=$(search_repos "$owner")
  else
    selected="$owner/$repo_name"
  fi
  dir=$(find_dir "$owner")
  
  cd "$dir" || return 1

  repo=$(basename "$selected")

  if [ -d "$repo" ]; then
    ta "$repo"
    return 0
  fi

  clone_repo "$selected" "$repo"

  ta "$repo"

  return 0
}

function clone_repo() {
  gh repo clone "$1" "$2" -- --bare

  cd "$2" || exit 1

  isValid=$(git config --get remote.origin.fetch)

  exists "$isValid" || git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
  return 0
}

function search_repos() {
  local selected
  selected=$(gh search repos \
    --owner="$1" \
    --limit 100 \
    --json fullName \
    --jq '.[].fullName' | fzf)

  if [[ -z $selected ]]; then
    exit 0
  fi
  echo "$selected"
}

function find_dir() {
  local dir
  if [[ "$1" == "corymhall" ]]; then
    dir="$HOME/personal"
  elif [[ "$1" == "pulumi" ]]; then
    dir="$HOME/work"
  fi
  echo "$dir"
}

