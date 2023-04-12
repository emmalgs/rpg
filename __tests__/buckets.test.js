import Buckets from './../src/buckets.js'

describe('Buckets', () => {
  let buckets;

  beforeEach(() => {
    buckets = new Buckets();
  })

  test('should create an instance of Buckets when called', () => {
    expect(typeof buckets).toEqual("object");
  });

  test('should create an instance of Buckets with property of type', () => {
    expect(buckets.type).toEqual("skinny pig");
  });

  test('should create an instance of Buckets with property of skills, which is an array', () => {
    expect(Array.isArray(buckets.skills)).toEqual(true);
  });

  test('should create an instance of Buckets with a sneakSnack() method that returns 0 when no arguments are passed', () => {
    expect(buckets.sneakSnack()).toEqual(0);
  });

  test('should have property of level intialized at 1', () => {
    expect(buckets.level).toEqual(1);
  });
})