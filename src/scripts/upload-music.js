"use strict";
require("dotenv").config({ path: '../../.env' });
const fs = require('fs');
const path = require('path');
const metadataPath = path.join(__dirname, '../data/EP-metadata');
const Cryptify = require('cryptify');
const password = process.env.VITE_SECRET_KEY;
const musicFilePath = path.join(__dirname, '../data/EP-music');
const { Readable } = require('stream');
const encryptionAlgorithm = "aes-128-cbc"

function uploadEpToIpfs() {
    const epMetadata = fs.readdirSync(metadataPath);
    epMetadata.forEach((file) => {
        const metadata = readMetadata(file);
        const instance = new Cryptify(musicPath(metadata.file), password, encryptionAlgorithm);
        instance
            .encrypt()
            .then((files) => {
                let readStream = Readable.from(files[0]);
                /* readStream.pipe(fs.createWriteStream(path.join(__dirname, '../data/EP-ipfs', metadata.id + '.txt'))); */
            })
            .catch((e) => console.error(e));
    })
}

/* Utility functions */
function writeMetadata(metadata) {
    fs.writeFileSync(path.join(metadataPath, metadata.id + '.json'), JSON.stringify(metadata, null, 2));
}
function musicPath(file) {
    return path.join(musicFilePath, file);
}
function readMetadata(file) {
    const metadataFile = fs.readFileSync(path.join(metadataPath, file), 'utf8');
    const metadata = JSON.parse(metadataFile);
    return metadata;
}
/* End of Utility functions */

uploadEpToIpfs();
