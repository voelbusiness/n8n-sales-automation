const axios = require('axios');
const cheerio = require('cheerio');

const url = $json.url;
const resp = await axios.get(url, { headers: { 'User-Agent': 'n8n-sales-bot' } });
const $ = cheerio.load(resp.data);

const title = $('#productTitle').text().trim();
const price = $('span#priceblock_ourprice').text().trim();

return [{ json: { title, price, url } }];
