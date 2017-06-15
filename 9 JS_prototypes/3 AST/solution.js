const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const argTypes = {
  body: a => typeof a === 'string',
  children: a => a instanceof Array,
  attrs: a => a instanceof Object,
};

const getArgName = arg =>
  Object.keys(argTypes).filter(k => argTypes[k](arg))[0];

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

export const parse = tagArr => {
  return tagArr.slice(1)
    .reduce((acc, arg) => ({ ...acc, [getArgName(arg)]: arg }),
      { name: tagArr[0], attrs: {}, body: '', children: [] });
}

export const render = tag => {
  return [`<${tag.name}${buildAttrString(tag.attrs)}>`,
    `${tag.body}${tag.children.map(elem => render(parse(elem))).join('')}`,
   singleTagsList.has(tag.name) ? '' : `</${tag.name}>`,
  ].join('');
};
// END
