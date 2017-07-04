import http from 'http';
import url from 'url';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery)
  const newQueryParams = keys
    .filter(key => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});

  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
}

// BEGIN (write your solution here)
const makeRequest = (opts, data, cb) => {
  const postData = querystring.stringify(data);
  opts.headers = data ? { 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData) } : {};
  const req = http.request(opts, res => {
    const body = [];
    const result = {
      status: res.statusCode,
      statusText: res.statusMessage,
      headers: res.headers,
    }
    res.on('data', chunk => {
      body.push(chunk.toString());
    }).on('end', () => {
      result.data = body.join();
      cb(null, result);
    }).on('error', e => {
      cb(new Error(e), null);
    });
  });
  req.on('error', e => {
    cb(new Error(e), null);
  });
  req.end(postData);
};

export default (config) => {
  const data = config.method === 'GET' ? '' : config.data;

  return new Promise((resolve, reject) => {
    const urlObject = url.parse(config.url, true);
    const query = getSearch(urlObject.query, config.params);

    const options = {
      host: urlObject.hostname,
      port: urlObject.port,
      path: `${urlObject.pathname}${query}`,
      method: config.method,
    };
    
    makeRequest(options, data, (err, response) => 
      err ? reject(err) : resolve(response));
  });
};
// END
