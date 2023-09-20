import { AbstractRoter } from "./AbstractRotor";

class RouterII extends AbstractRoter {
  _firstTable() {
    return [
      "i", "j", "k", "l", "m", "n", "a", "b", "c", "d", "e", "f", "g", "h", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "
    ];
  }

  _secondTable() {
    return [
      "c", "z", "x", "w", "m", "n", "k", "l", "o", "r", "s", " ", "d", "b", "a", "t", "f", "e", "g", "i", "h", "y", "v", "j", "u", "q", "p"
    ];
  }
}

export { RouterII };
