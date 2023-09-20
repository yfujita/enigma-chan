import { AbstractRoter } from "./AbstractRotor";

class RouterI extends AbstractRoter {
  _firstTable() {
    return [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
    ];
  }

  _secondTable() {
    return [
      " ", "d", "b", "a", "c", "z", "x", "w", "m", "n", "k", "l", "o", "r", "s", "t", "f", "e", "g", "i", "h", "y", "v", "j", "u", "q", "p"
    ];
  }
}

export {RouterI};
