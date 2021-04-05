import GameSavingLoader from "../GameSavingLoader.js";

test('first test', () => {
  GameSavingLoader.load().then(
    (saving) => {
      const a = saving;
      expect(a).toBe(
        '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'
      );
    },
    (error) => {
      console.log(error);
    }
  );
});
