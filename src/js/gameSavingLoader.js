import Read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return Read().then((saving) => json(saving).then((result) => {
      const obj = JSON.parse(result);
      return new GameSaving(obj);
    }));
  }
}
