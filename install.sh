#! /bin/bash

export PATH=/opt/homebrew/bin:$PATH

mkdir -p ~/.config ~/.gnupg
mkdir ~/.local/bin
mkdir ~/go/bin

if [ ! -d /usr/local/go ]; then
  curl -OL https://go.dev/dl/go1.22.0.darwin-amd64.pkg
  open go1.22.0.darwin-amd64.pkg
fi

if [ ! -d /opt/homebrew ]; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

brew install pulumi/tap/pulumi

if [ ! -f /Applications/kitty.app ]; then
  curl -L https://sw.kovidgoyal.net/kitty/installer.sh | sh /dev/stdin
fi

echo "Install Rectangle"
open https://rectangleapp.com/

echo "Install logi options+"
open https://www.logitech.com/en-us/software/logi-options-plus.html

gh auth login
if [ ! command -v op ]; then
  op vault list
  op plugin init gh
fi

echo "Installing node"
if [ ! command -v node]; then
  pushd ~/.nvm
  . ./nvm.sh
  nvm install v18.19.1
  popd
  echo "Restart shell"
fi

echo "Create new GPG key"
open https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key
