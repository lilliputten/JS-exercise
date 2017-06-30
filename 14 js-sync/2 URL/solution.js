import url from 'url';

// BEGIN (write your solution here)
export default (addr, obj) => {
  if (!obj) {
    return addr;
  }
  const urlp = url.parse(addr, true);

  Object.keys(obj).map(el => {
    obj[el] !== null ? urlp.query[el] = obj[el] : urlp.query[el] = null;
  });

  urlp.query = Object.keys(urlp.query).reduce((acc, el) => {
    if (urlp.query[el] !== null) {
       acc[el] = urlp.query[el] ;
    } 
    return acc}, {});

  urlp.search = null;

  return url.format(urlp);
};
// END

