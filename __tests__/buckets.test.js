import Buckets from './../src/buckets.js'

describe('Buckets', () => {
  let buckets;
  let type;
  let skills;

  beforeEach(() => {
    skills = ['sassy', 'snuggler', 'nibbler', 'dexterity']
    type = "skinny pig"
    buckets = new Buckets(type, skills);
  })

  test('should create an instance of Buckets when called', () => {
    expect(typeof buckets).toEqual("object");
  });

  test('should create an instance of Buckets with property of type', () => {
    expect(buckets.type).toEqual("skinny pig");
  });

  test('should create an instance of Buckets with property of skills, which is an array', () => {
    expect(Array.isArray(buckets.skills)).toEqual(true);
  })
})