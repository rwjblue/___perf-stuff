let fs = require('fs');
let InitialRenderBenchmark = require('chrome-tracing').InitialRenderBenchmark;

let benchmark = new InitialRenderBenchmark({
    name: "test initial render",
    url: `http://localhost:4200/crates/solicit`,
    browser: {
        type: 'system'
    }
});

benchmark.run().then((result) => {
    let output = '';
    result.samples.forEach(function(result) {
        let sampleOutput = result.duration + ',' + process.env.LABEL;
        output += sampleOutput + '\n';
        console.log(sampleOutput);
    });

    if (process.env.LABEL === 'control') {
        fs.writeFileSync('samples.csv', 'µs,set\n' + output, { encoding: 'utf8' });
    } else {
        fs.appendFileSync('samples.csv', output, { encoding: 'utf8' });
    }

}).catch((err) => {
    console.error(err.stack);
    process.exit(1);
});
