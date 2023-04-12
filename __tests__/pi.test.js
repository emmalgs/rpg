import Pi from "../src/js/pi";

describe('Pi', () => {
  let pi;

  beforeEach(() => {
    pi = new Pi();
  });

  test('should create an object of Pi with type beagle', () => {
    expect(pi.type).toEqual('beagle');
  });

  test('should create an object of Pi with an array of skills', () => {
    expect(Array.isArray(pi.skills)).toEqual(true);
  });

  test('should return 0 when sneakSnack() method is called without arguments', () => {
    expect(pi.sneakSnack()).toEqual(0);
  });

  test('should howl', () => {
    expect(pi.howl()).toEqual("Woe is me!");
  });

  test('should bark', () => {
    expect(pi.bark()).toEqual('Arf!')
  });

  test('should level up', () => {
    pi.levelUp();
    expect(pi.level).toEqual(2);
  })
})