/**
 * @file 1-access_token.js
 * @author PeterPanZH
 * @description get access token
 */

/* eslint-disable */

const axios = require('axios');
const log = require('./util/log');

const url = 'http://aip.baidubce.com/oauth/2.0/token';

// Your ak & sk here
const ak = '';
const sk = '';

axios({
    method: 'post',
    url,
    params: {
        grant_type: 'client_credentials',
        client_id: ak,
        client_secret: sk
    }
}).then(({data}) => log(data));
