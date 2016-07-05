# Usage

Run

```sh
./trace-ic.sh http://localhost:8080 > ic.log
```
Wait until your page renders and the log file appending settles down.

```sh
tail -f ic.log
```

# Viewing the log
Download https://github.com/v8/v8/blob/master/tools/ic-explorer.html

Open it in a browser and then open your log file from above.

# Install

```sh
chmod a+x trace-ic.sh
export CHROME_BIN=/Path/To/Chrome  # defaults to Canary
```
