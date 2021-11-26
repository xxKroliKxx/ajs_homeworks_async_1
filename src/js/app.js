import Read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      Read().then((saving) => {
        json(saving).then((result) => {
          resolve(result);
        });
      });
    });
  }
}
