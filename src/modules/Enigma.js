import { PlugBord } from "./PlugBord";
import { Reflector } from "./Reflector";
import { RoterI } from "./RoterI";
import { RoterII } from "./RoterII";
import { RoterIII } from "./RoterIII";

class Enigma {
  constructor(offset1, offset2, offset3) {
    this.plugBord = new PlugBord();
    this.roters = [
      new RoterI(offset1),
      new RoterII(offset2),
      new RoterIII(offset3)
    ];
    this.reflector = new Reflector();
  }

  reset() {
    this.firstRoter.reset();
  }

  encrypt(word) {
    let plugNum = this.plugBord.getWordCount(word);

    let roterResult = plugNum;
    for (let roter of this.roters) {
      roterResult = roter.convert(roterResult);
    }
    roterResult = this.reflector.reflect(roterResult);
    for (let roter of [...this.roters].reverse()) {
      roterResult = roter.reverseConvert(roterResult);
    }
    
    const resultWord = this.plugBord.getWord(roterResult);
    
    // Roll
    for (let roter of this.roters) {
      if (!roter.roll()) {
        break;
      }
    }

    return resultWord;
  }
}

export { Enigma };