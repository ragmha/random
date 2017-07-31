let count = 0;
const input = 'Run `npm install`, then `npm start`';

const output = input.replace(/`/g, () => ++count % 2 ? '<code>' : '</code>');

console.log(output);
