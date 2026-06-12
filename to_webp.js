const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const ext = path.extname(fullPath);
            const webpPath = fullPath.substring(0, fullPath.lastIndexOf(ext)) + '.webp';
            try {
                console.log(`Converting to WebP: ${file}`);
                const image = sharp(fullPath);
                await image.webp({ quality: 80 }).toFile(webpPath);
                
                fs.unlinkSync(fullPath);
                console.log(`Converted to WebP: ${path.basename(webpPath)}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err.message);
            }
        }
    }
}

processDirectory(imgDir).then(() => console.log('All images converted to WebP successfully!'));
