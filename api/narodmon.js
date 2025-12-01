export default async function handler(req, res) {
  const query = req.url.split('?')[1] || '';
  const url = 'https://narodmon.ru/api/?' + query;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Real-IP': '85.26.248.1',       // любой российский IP
        'X-Forwarded-For': '85.26.248.1'
      }
    });
    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Proxy error');
  }
}
