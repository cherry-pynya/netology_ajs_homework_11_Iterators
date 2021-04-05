export default class Team {
  [Symbol.iterator]() {
    const values = Object.values(this);
    let index = 0;
    return {
      next() {
        if (index <= values.length) {
          const val = values[index];
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
