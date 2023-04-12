import Opal from './../src/js/opal.js'

describe('Opal', () => {
  let opal;

  beforeEach(() => {
    opal = new Opal();
  });

  test('should create an instance of opal that is an object', () => {
    expect(typeof opal).toEqual("object");
  });

  test('should have property of type equal to "skinny pig"', () => {
    expect(opal.type).toEqual("skinny pig");
  });

  test('should have a property of skills that returns an array of skills', () => {
    expect(Array.isArray(opal.skills)).toEqual(true);
  });
})