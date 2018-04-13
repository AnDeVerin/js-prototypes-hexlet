import { render, parse } from './buildHtml-1';

const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

console.log(ast);

console.log(render(ast));
console.log();
