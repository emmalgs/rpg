import { experiments } from 'webpack';
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

  test('should have a method sneakSnack that returns 0 when no arguments are passed', () => {
    expect(opal.sneakSnack()).toEqual(0);
  });

  test('should have level property initiated at 1', () => {
    expect(opal.level).toEqual(1);
  });

  test('should increment level by 1 when levelUp() method is called', () => {
    opal.levelUp()
    expect(opal.level).toEqual(2);
  });

  test('should return "nom nom nom" when .nibble() is called', () => {
    expect(opal.nibble()).toEqual("nom nom nom");
  });
})