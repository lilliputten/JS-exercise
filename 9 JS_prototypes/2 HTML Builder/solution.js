// BEGIN (write your solution here)
const buildHtml = (data) => {
  if (!data) return '';
  
  const tag = typeof data[0] === 'string' ? data[0] : '';
  const atr = !(data[1] instanceof Array) && (data[1] instanceof Object) ?
    Object.keys(data[1]).map(key => ` ${key}="${data[1][key]}"`).join('') : '';
  let body;
  let child;
  data.map(arg => {
    body = !body && typeof arg === 'string' && arg !== tag ? arg : '';
    child = !child && arg instanceof Array ? arg.map(buildHtml).join('') : '';
  });

  return `<${tag}${atr}>${body}${child}</${tag}>`;
};
export default buildHtml;
// END