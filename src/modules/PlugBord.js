
class PlugBord {
  constructor() {
    this.bord = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
  }

  getWordCount(word) {
    for (let i=0;i<this.bord.length;i++) {
      if (word == this.bord[i]) {
        return i;
      }
    }
    throw new Error("Cannot find word in bord. " + word);
  }

  getWord(count) {
    return this.bord[count];
  }

}

export {PlugBord};
