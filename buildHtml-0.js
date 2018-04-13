// import _ from 'lodash';

const data1 = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

const buildHtml = ([tag, ...arg]) => {
  let attr = '';
  let body = '';
  let children;
  let nestedHtml = '';
  arg.forEach((el) => {
    if (typeof el === 'string') body = el;
    if (typeof el === 'object') {
      if (el instanceof Array) {
        children = el;
      } else {
        const keys = Object.keys(el);
        attr = keys.map(key => ` ${key}="${el[key]}"`).join('');
      }
    }
  });

  if (children) {
    nestedHtml = children.map(buildHtml).join('');
  }
  return `<${tag}${attr}>${body}${nestedHtml}</${tag}>`;
};

const res = buildHtml(data1);
console.log(res);

// === решение учителя ===
// BEGIN
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml1 = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const tag = rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, root);

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

export default buildHtml1;
