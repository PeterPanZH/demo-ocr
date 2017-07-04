/**
 * @file 2-general_ocr.js
 * @description general ocr demo
 */

const fs = require('fs');
const querystring = require('querystring');
const axios = require('axios');
const log = require('./util/log');

// Your token here
const token = '';

const url = 'http://aip.baidubce.com/rest/2.0/ocr/v1/general_basic';

const image = fs.readFileSync('assets/1.jpg');

axios({
    method: 'post',
    url,
    params: {
        access_token: token
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: querystring.stringify({
        image: new Buffer(image).toString('base64')
    })
}).then(({data}) => log(data));
