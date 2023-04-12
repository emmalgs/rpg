export default class Buckets {
  constructor() {
    this.type = "skinny pig";
    this.skills = ['sassy', 'snuggler', 'nibbler', 'dexterity'];
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