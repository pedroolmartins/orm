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
            const tempPath = fullPath + '.tmp';
            try {
                console.log(`Processing: ${file}`);
                const image = sharp(fullPath);
                const metadata = await image.metadata();
                
                // Redimensiona se for maior que 1920px de largura
                if (metadata.width > 1920) {
                    image.resize({ width: 1920, withoutEnlargement: true });
                }

                if (file.match(/\.(jpg|jpeg)$/i)) {
                    await image.jpeg({ quality: 75, mozjpeg: true }).toFile(tempPath);
                } else if (file.match(/\.png$/i)) {
                    await image.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
                }
                
                fs.renameSync(tempPath, fullPath);
                console.log(`Compressed: ${file}`);
            } catch (err) {
                console.error(`Error compressing ${file}:`, err.message);
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            }
        }
    }
}

processDirectory(imgDir).then(() => console.log('All images compressed successfully!'));
