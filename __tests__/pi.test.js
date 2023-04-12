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
})