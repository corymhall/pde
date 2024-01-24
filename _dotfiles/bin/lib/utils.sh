#!/usr/bin/env bash
#
function exit_with_help() { echo "$1" && exit_script; }

function get_timestamp() { printf $(date '+%Y-%m-%d_%H%M%S'); }

function str_split() {
  declare -a -x -g str_split_result=()
   IFS="$2" read -r -a str_split_result <<< "$1"
  # IFS="$2"; read -ra str_split_result <<< "$1"; IFS=' '
}

function exists() {
  if [ -z "$1" ]; then return 1; else return 0; fi
}

function preprocess() {
  if [[ $# -lt 1 || "$1" == 'help' ]]; then
    return 1
  fi
  return 0
}

function join_by {
  local IFS="$1"
  shift
  echo "$*"
}
