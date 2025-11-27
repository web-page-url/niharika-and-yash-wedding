import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceImage = path.join(__dirname, 'public', 'Niharika-wedding-seo.jpeg');
const outputDir = path.join(__dirname, 'public');

const sizes = [
    { width: 36, height: 36, name: 'android-chrome-36x36.png' },
    { width: 48, height: 48, name: 'android-chrome-48x48.png' },
    { width: 72, height: 72, name: 'android-chrome-72x72.png' },
    { width: 96, height: 96, name: 'android-chrome-96x96.png' },
    { width: 144, height: 144, name: 'android-chrome-144x144.png' },
    { width: 192, height: 192, name: 'android-chrome-192x192.png' },
    { width: 256, height: 256, name: 'android-chrome-256x256.png' },
    { width: 384, height: 384, name: 'android-chrome-384x384.png' },
    { width: 512, height: 512, name: 'android-chrome-512x512.png' }
];

async function generateAndroidIcons() {
    if (!fs.existsSync(sourceImage)) {
        console.error(`Source image not found: ${sourceImage}`);
        process.exit(1);
    }

    console.log(`Generating android chrome icons from ${sourceImage}...`);

    for (const size of sizes) {
        const outputPath = path.join(outputDir, size.name);
        try {
            await sharp(sourceImage)
                .resize(size.width, size.height)
                .toFile(outputPath);
            console.log(`Generated ${size.name}`);
        } catch (error) {
            console.error(`Error generating ${size.name}:`, error);
        }
    }

    console.log('Android chrome icon generation complete!');
}

generateAndroidIcons();
