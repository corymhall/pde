#!/usr/bin/env bash

function wt() {
  wt=$(git worktree list)
  str_split "$wt" ' '
  wtroot=${str_split_result[0]}
  echo "$wtroot"
}
