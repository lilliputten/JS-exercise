import url from 'url';
import http from 'http';

const getTitle = body => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = body =>
  (body.match(/href="\/(.*?)">/g) || [])
    .map(item => item.match(/href="\/(.*?)">/)[1]);

// BEGIN (write your solution here)
const solution = (title, address,callback) => {
  const iter = (title, address, callback, links, visited) => {
    const req = http.get(address, res => {
      const body = [];
      res.on('data', chunk => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        if (getTitle(html) === title) {
          return callback(null, address);
        }
        if (!visited.includes(address)) {
            visited.push(address);
        }
        const linkarr = getLinks(html);
        const urlparse = url.parse(address);
        linkarr.map((link) => {
          urlparse.pathname = link;
          const fullink = url.format(urlparse);
          if (!links.includes(fullink)) links.push(fullink);
        });
        
        if (visited.length == links.length) {
          callback(`${address} was not found!!!`);
        }
  
        links.map(link => {
          if (!visited.includes(link)) {
            iter(title, link, callback, links, visited);
          }
        });
        
      });
    });
  
    req.on('error', e => {
      console.log(`Got error: ${e.message}`);
      return callback(`${e.message}`);
    });

  };
  iter(title, address,callback,[address], []);
};
export default solution;
// END


