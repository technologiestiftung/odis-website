#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

SOURCE_REPO="https://github.com/technologiestiftung/grundsicherung_v2.git"
TARGET=grundsicherung

function main() {

  echo "creatgin tmp folder"
  mkdir -p tmp
  echo "cloning '${SOURCE_REPO}' to ./tmp/${TARGET}"
  git clone "${SOURCE_REPO}" "./tmp/${TARGET}"
  echo "moving into tmp/${TARGET} folder"
  cd "./tmp/${TARGET}"
  echo "installing node modules"
  npm ci
  echo "running build"
  npm run build
  echo "creating project folder"
  mkdir -p "../../source/projekte/${TARGET}"
  echo "copying build files to project folder"
  rsync -avz ./build/* "../../source/projekte/${TARGET}"
  echo "moving to root"
  cd ../../
  echo "copy content of index.html in project into tmp"
  cat "source/projekte/${TARGET}/index.html" >tmp/tmp_index.html
  echo "adding yml frontmatter to new index.html"
  cat build-scripts/grundsicherung.yml >tmp/index.liquid
  echo "adding content of old index.html again to new index.html"
  echo "" >>tmp/index.liquid
  cat tmp/tmp_index.html >>tmp/index.liquid
  echo "copy index to destination"
  cp tmp/index.liquid "source/projekte/${TARGET}/index.liquid"
  echo "removing old index.html from grundsicherung build"
  rm "source/projekte/${TARGET}/index.html"
  echo "removing tmp folder"
  rm -rf ./tmp
  exit 0
}

main
