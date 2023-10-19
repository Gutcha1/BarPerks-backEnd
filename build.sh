// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn init -y
yarn
yarn build
yarn typeorm migration:run -d ./src/data-source.ts