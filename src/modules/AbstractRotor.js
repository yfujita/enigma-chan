class AbstractRoter {
  constructor(offset){
    this.offset = offset;
  }

  convert(num) {
    return this._convert(num, this._firstTable(), this._secondTable());
  }

  reverseConvert(num) {
    return this._convert(num, this._secondTable(), this._firstTable());
  }

  _convert(num, src, dest) {
    const srcOffset = (num + this.offset) % src.length;
    const srcWord = src[srcOffset];
    for (let i=0;i<dest.length;i++) {
      const destOffset = (i + this.offset) % dest.length;
      if (srcWord == dest[destOffset]) {
        return i;
      }
    }
    throw new Error("Cannot find word " + srcWord);
  }

  reset() {
    this.offset = 0;
  }

  roll() {
    this.offset++;
    if (this.offset == this._firstTable().length) {
      this.offset = 0;
      return true;
    }
    return false;
  }

  _firstTable() {
    throw new Error("This method is abstract and must be overridden");
  }

  _secondTable() {
    throw new Error("This method is abstract and must be overridden");
  }
}

export {AbstractRoter};