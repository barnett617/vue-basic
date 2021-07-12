#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy doc"

git push -f git@github.com:barnett617/vue-basic.git master:gh-pages