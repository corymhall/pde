#!/usr/bin/env bash

# Error handling
function on_error() {
  echo "error: [ ${BASH_SOURCE[1]} at line ${BASH_LINENO[0]} ]";
}

set -o errtrace
trap on_error ERR

# Alias expansion
shopt -s expand_aliases
alias kwargs='(( $# )) && local'

# Kkill script function
trap exit TERM
alias exit_script='kill -s TERM $$'

# Set script globals
_ROOT="$(cd "$(dirname "$0")" ; pwd -P )"
