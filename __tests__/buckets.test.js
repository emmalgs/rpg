import Buckets from './../src/buckets.js'

describe('Buckets', () => {
  let buckets;

  beforeEach(() => {
    buckets = new Buckets();
  })

  test('should create an instance of Buckets when called', () => {
    expect(typeof buckets).toEqual("object");
  })
})