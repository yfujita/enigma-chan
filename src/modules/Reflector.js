import { PlugBord } from "./PlugBord";

class Reflector {
  reflect(num) {
    let bord = new PlugBord();
    let bordLen = bord.bord.length;
    return bordLen - num;
  }
}

export { Reflector };
