export default class Pi {
  constructor() {
    this.type = "beagle";
    this.skills = ['shedding', 'toothless', 'deaf', 'old'];
    this.level = 1;
  }

  sneakSnack() {
    return 0;
  }

  levelUp() {
    this.level++;
  }

  bark() {
    return "Arf!";
  }

  howl() {
    return "Woe is me!";
  }
}