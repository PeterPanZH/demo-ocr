/**
 * @file 3-sdk.js
 * @author PeterPanZH
 * @description sdk demo
 */

/* eslint-disable */

const fs = require('fs');
const log = require('./util/log');

const AipOcr = require('./sdk/src').ocr;

// Your appId, ak & sk here
const appId = '';
const ak = '';
const sk = '';

const OcrClient = new AipOcr(appId, ak, sk);

const image = fs.readFileSync('assets/2.jpg');

OcrClient.generalBasic(new Buffer(image).toString('base64')).then(data => log(data));
