import Team from './Team.js';

const team = new Team();
team.ivan = { name: 'durak' };
team.masha = { name: 'dura' };
team.nikita = { name: 'molodec' };
const array = [];
console.log(team);
for (const key of team) {
  console.log(key);
  array.push(key);
}
array.pop();
console.log(array);
