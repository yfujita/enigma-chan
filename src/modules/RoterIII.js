import { AbstractRoter } from "./AbstractRotor";

class RouterIII extends AbstractRoter {
  _firstTable() {
    return [
      "i", "j", "k", "l", "m", "n", "a", "b", "c", "u", "v", "w", "x", "y", "z", " ", "d", "e", "f", "g", "h", "o", "p", "q", "r", "s", "t"
    ];
  }

  _secondTable() {
    return [
      "c", "z", "x", "w", "r", "s", " ", "d", "b", "a", "t", "f", "e", "g", "i", "h", "y", "v", "j", "u", "q", "p", "m", "n", "k", "l", "o"
    ];
  }
}

export { RouterIII };
