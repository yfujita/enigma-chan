import { PlugBord } from "./PlugBord";
import { Reflector } from "./Reflector";
import { RouterI } from "./RoterI";
import { RouterII } from "./RoterII";
import { RouterIII } from "./RoterIII";

class Enigma {
  constructor(offset1, offset2, offset3) {
    this.plugBord = new PlugBord();
    this.roters = [];
    this.roters.push(new RouterI(offset1));
    this.roters.push(new RouterII(offset2));
    this.roters.push(new RouterIII(offset3));
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