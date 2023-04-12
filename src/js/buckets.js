export default class Buckets {
  constructor() {
    this.type = "skinny pig";
    this.skills = {
      'sassy': 2, 
      'snuggler': 5, 
      'nibbler': 5, 
      'dexterity': 1
    };
    this.level = 1;
    this.inventory = {}
  }

  sneakSnack() {
    return 0;
  }

  levelUp() {
    this.level++
  }

  nibble() {
    return `munch munch`
  }

  squeal() {
    return `SQUEE!`
  }
}