#!/usr/bin/env node
const processSvgs = require('./index');

function parseArgs() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        process.exit(1);
    }
    const sizes = args[2] ? args[2].split(',').map(Number) : undefined;
    return {svgFilePath: args[0], outputDir: args[1], sizes};
}

const {svgFilePath, outputDir, sizes} = parseArgs();
processSvgs(svgFilePath, outputDir, sizes);
