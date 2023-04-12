export default class Opal {
  constructor() {
    this.type = "skinny pig";
    this.skills = ['urinate', 'chew', 'heat-sensor', 'hiding'];
    this.level = 1;
  }

  sneakSnack() {
    return 0;
  }

  levelUp() {
    this.level++;
  }

  nibble() {
    return "nom nom nom";
  }
}