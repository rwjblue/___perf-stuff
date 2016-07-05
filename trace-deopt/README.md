# trace-deopt.sh

## How to use

```sh
./trace-deopt.sh http://localhost:4200
```

Wait until your page renders.

This will output files that look like `code-64178-1.asm` and `hydrogen-64178-1.cfg` for each process.
Look for the largest hydrogren cfg one with a create timestamp and its corresponding code asm file.

You can visualize them by opening them in [IRHydra 2](http://mrale.ph/irhydra/2/)
