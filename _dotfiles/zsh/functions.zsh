function av() {aws-vault exec "$@[1, -1]"}

# Global npm install
function npmg() {
  pkg="$1"
  pushd "~/personal/pde-go/dotfiles/npm"
  npm install "$pkg"
  popd
}

function p() { fd -t d "$1" | fzf | cd }
function wt() {
  w=$(tmux-worktree)
  if [ $# -eq 0 ]
    then
      cd $w
    else
      fd -t d . $w -d 1 | fzf | cd
  fi
}
