import Buckets from './../src/buckets.js'

describe('Buckets', () => {
  let buckets;
  let type;

  beforeEach(() => {
    type = "skinny pig"
    buckets = new Buckets(type);
  })

  test('should create an instance of Buckets when called', () => {
    expect(typeof buckets).toEqual("object");
  });

  test('should create an instance of Buckets with property of type', () => {
    expect(buckets.type).toEqual("skinny pig");
  })
})