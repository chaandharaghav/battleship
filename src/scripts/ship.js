class Ship {
  constructor(length, hitPos, sunk) {
    this.length = length;
    this.hitPos = hitPos;
    this.sunk = sunk;
  }

  hit(pos) {
    this.hitPos[pos - 1] = 'hit';
  }

  isSunk() {
    return this.hitPos.every((pos) => pos === 'hit');
  }
}

export default Ship;
