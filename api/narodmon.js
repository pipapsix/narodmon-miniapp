export default async function handler(req, res) {
  const query = req.url.split('?')[1] || '';
  const url = 'https://narodmon.ru/api/?' + query;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'https://narodmon.ru/',
        'Origin': 'https://narodmon.ru',
        'X-Real-IP': '85.26.248.1',
        'X-Forwarded-For': '85.26.248.1',
      },
    });

    const data = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Proxy error: ' + error.message);
  }
}
