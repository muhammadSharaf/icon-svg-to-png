const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createPngs(svgFilePath, outputDir, sizes) {
    const baseName = path.basename(svgFilePath, '.svg');

    for (const [i, size] of sizes.entries()) {
        const outputFileName = i > 0
            ? path.join(outputDir, `${baseName}@${i}x.png`)
            : path.join(outputDir, `${baseName}.png`);

        await sharp(svgFilePath)
            .resize(size, size)
            .toFile(outputFileName);
    }
}

function processSvgs(svgDirectory, outputDirectory, sizes=[24, 48, 72]) {
    fs.readdir(svgDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (path.extname(file) === '.svg') {
                const svgFilePath = path.join(svgDirectory, file);
                const outputDir = path.join(outputDirectory, path.basename(file, '.svg'));

                // Create directory for the icon
                fs.mkdirSync(outputDir, { recursive: true });

                // Create PNGs
                createPngs(svgFilePath, outputDir, sizes)
                    .then(() => console.log(`Processed ${file}`))
                    .catch(err => console.error(`Error processing ${file}:`, err));
            }
        });
    });
}

module.exports = processSvgs;
