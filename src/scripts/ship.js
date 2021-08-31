class Ship {
  constructor(length, hitPos, sunk) {
    this.length = length;
    this.hitPos = hitPos ?? new Array(length).fill(null);
    this.sunk = sunk ?? false;
  }

  hit(pos) {
    this.hitPos[pos - 1] = 'hit';
  }

  isSunk() {
    return this.hitPos.every((pos) => pos === 'hit');
  }
}

export default Ship;
