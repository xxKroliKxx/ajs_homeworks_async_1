import GameSavingLoader from '../js/gameSavingLoader';
import GameSaving from '../js/gameSaving';

test('load test', (done) => {
  const gs = new GameSaving(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
  GameSavingLoader.load().then((data) => {
    expect(data).toEqual(gs);
    done();
  });
});
