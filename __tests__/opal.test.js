import Opal from './../src/js/opal.js'

describe('Opal', () => {
  let opal;

  beforeEach(() => {
    opal = new Opal();
  });

  test('should create an instance of opal that is an object', () => {
    expect(typeof opal).toEqual("object");
  });
  
})