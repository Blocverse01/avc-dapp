"use strict";
require("dotenv").config({ path: '../../.env' });
const fs = require('fs');
const { Readable } = require('stream');
const path = require('path');
const Cryptify = require('cryptify');
const password = process.env.VITE_SECRET_KEY;
const encryptionAlgorithm = "aes-128-cbc"

function decryptFile(path) {
    const instance = new Cryptify(path, password, encryptionAlgorithm);
    instance
        .decrypt()
        .then((files) => {
            let readStream = Readable.from(files[0]);
            /* readStream.pipe(fs.createWriteStream(path.replace('.mp3', '.decrypted.mp3'))); */
        })
        .catch((e) => console.error(e));
}


function testDecrypt() {
    decryptFile(path.join(__dirname, '../data/EP-music', 'Asake_ft_Burna_Boy_-_Sungba_Remix.mp3'));
}

testDecrypt();
