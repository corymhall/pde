#!/usr/bin/env bash

source $HOME/.local/bin/lib/utils.sh
source $HOME/.local/bin/lib/config.sh

# Create a new entry in Mind at /Notes/Triage to be moved back later to something more specific.
function note() {
  mind ins -fos /notes/triage -n "$(date +%Y%m%d-%H%M%S)"

}
function display_help() {
  local msg
  msg="usage: tm [ $1 ]


  $(display_get_help)
  "
  echo "$msg"
}

function mind_cmd() {
  declare -A -x command_table=(
    ['note']='note'
    ['backlog']='backlog'
    ['wip']='wip'
    ['parse']='parse_item'
    ['ins']='ins'
    ['open']='ins_or_open'
  )
  local commands="${!command_table[*]}"
  if [[ $# -lt 1 ]]; then exit_with_help "$(display_help "$commands")"; fi

  local command=${1}; shift
  local fn_name=${command_table[$command]}

  if [[ $fn_name == '' ]]; then exit_with_help "$msg"; fi

  if $fn_name "$@"; then return 0; else return 1; fi
}

# Get the current backlog.
function backlog() {
  mind paths -s /tasks/backlog
}

# Get WIP tasks.
function wip() {
  mind paths -s /tasks/ongoing
}
 function contains() {
     if [[ $1 =~ (^|[[:space:]])$2($|[[:space:]]) ]]; then
       echo 0
     else
       echo 1
     fi
 }

function parse_item() {
  local path
  local name
  str_split "$1" "/"
  len="${#str_split_result[@]}"
  if [ "$len" -eq 1 ]; then
    path="/tasks/triage"
    name="$1"
  else
    name=${str_split_result[-1]}
    unset "${str_split_result[-1]}"
    path=$(join_by "/" "${str_split_result[@]::${#str_split_result[@]}-1}")
  fi
  echo "$name" "$path" "${@:2}"
}

function create_item() {
  local path="$1"
  local name="$2"
  local args="${*:3}"
  echo "create_item" "$path" "$args" "$name"
  if [ "$args" == "" ]; then
    mind ins -fs "$path" -n "$name"
  else
    mind ins "$args" -fs "$path" -n "$name"
  fi
}

function ins_or_open() {
  read -r name path args < <(parse_item "$@")
  echo "$name" "$path" "$args"
  exists=$(item_exists "$path" "${name}" "$args")
  echo "abc $exists"
  if [ "$exists" == "false" ]; then ins "$@"
  else open "$@"
  fi
}

function ins() {
  echo "inserting..."
  if [[ $# -lt 1 ]]; then return; fi
  local name
  local path
  local args
  read -r name path args < <(parse_item "$@")
  echo "$path" "$name" "$args"
  cwd=$(contains "$args" "--cwd")
  if [[ "$cwd" -eq 0 ]]; then
    mind get --cwd || mind init --cwd "$(basename pwd)"
  fi
  create_item "$path" "$name" "$args"
}

function item_exists() {
  local path="$1"
  local name="$2"
  local args="${*:3}"
  local exists
  if [ "$args" == "" ]; then
    exists=$(mind get -fs "$path/${name}")
  else
    exists=$(mind get "$args" -fs "$path/${name}")
  fi
  if [ -z "$exists" ]; then
    echo "false"
  else
    echo "true"
  fi
}

function open() {
  echo "opening..."
  local path="$1"
  local name="$2"
  local args="${*:3}"
  if [[ $# -lt 1 ]]; then return; fi
  if [ "$args" == "" ]; then
    mind get -fos "$path/${name}"
  else
    mind get "$args" -fos "$path/${name}"
  fi
}
