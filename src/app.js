import Team from './Team.js';
import canIterate from './canIterate.js';


const team = new Team();
team.ivan = { name: 'durak' };
team.masha = { name: 'dura' };
team.nikita = { name: 'molodec' };
const array = [];
console.log(team.members);
for (const key of team) {
  console.log(key);
  array.push(key);
}
array.pop();
console.log(array);

const a = canIterate(new Map()); // true
const b = canIterate(new Set()); // true
const c = canIterate(null); // false
const d = canIterate(10); // false
const e = canIterate('Netology'); // true

console.log(a, b, c, d, e);

