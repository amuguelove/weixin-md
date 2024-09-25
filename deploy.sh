#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:h5-netlify

# navigate into the build output directory
cd dist

# push build code to gh-pages
git init
git add -A

current_time=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "deploy on $current_time"

git push -f git@github.com:flyeric0212/flyeric0212.github.io.git main

cd -
