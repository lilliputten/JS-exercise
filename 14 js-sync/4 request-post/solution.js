import url from 'url';
import http from 'http';
import querystring from 'querystring';

const getToken = body => body.match(/value="(\w+)"/)[1];

export default (registrationFormUrl, submitFormUrl, nickname, callback) => {
  // BEGIN (write your solution here)
  const urlparse = (address) => url.parse(address);

  const makeGet = (uri, cb) => {
    http.get(uri, res => {
      const body = [];
      res.on('data', chunk => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        return cb(res.statusCode, html);
      });
    });
  };
  
  const makePost = (uri, data, cb) => {
    const postData = querystring.stringify({
      'nickname': nickname,
      'token': getToken(data),
    });
    const options = {
      host: uri.hostname,
      port: uri.port,
      path: uri.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = http.request(options, (res) => {
      cb(res.statusCode);
    });
    req.end(postData);
  };
  
  makeGet(registrationFormUrl, (statusCode, data) => {
    if (statusCode !== 200) {
      return callback(new Error(`GET request statusCode = ${statusCode}`));
    }
    makePost(urlparse(submitFormUrl), data, (statusCode) => {
      if (statusCode === 302) {
        return callback();
      }
      return callback(new Error(`POST request statusCode = ${statusCode}`));
    });
  });
  // END
};
