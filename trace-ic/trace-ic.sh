#!/usr/bin/env bash

# check for CHROME_BIN env or just default to Canary
cmd=${CHROME_BIN:-/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary}

if [ -z "$1" ]
then
  echo "Usage: `basename $0` [url]"
  exit 1
fi

"$cmd" --no-default-browser-check \
       --ignore-certificate-errors \
       --metrics-recording-only \
       --no-sandbox \
       --no-experiments \
       --disable-component-extensions-with-background-pages \
       --disable-background-networking \
       --disable-extensions \
       --disable-default-apps \
       --noerrdialogs \
       --js-flags="--trace-ic" "$1"
