export default class Team {
  constructor() {
    this.members = Object.values(this)
  }
  [Symbol.iterator]() {
    const { members } = this;
    let index = 0;
    return {
      next() {
        if (index <= members.length) {
          const val = members[index];
          index++;
          return {
            value: val,
            done: false,
          };
        }
        return { done: true };
      },
    };
  }
}
