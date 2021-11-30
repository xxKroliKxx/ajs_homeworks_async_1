import GameSavingLoader from '../js/app';

test('load test', (done) => {
  GameSavingLoader.load().then((data) => {
    expect(data).toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
    done();
  });
});
