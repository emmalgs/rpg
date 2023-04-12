import GreatNibbler from "../src/js/greatNibbler";

describe('GreatNibbler', () => {
  let theGreatNibbler;

  beforeEach(() => {
    theGreatNibbler = new GreatNibbler();
  });

  test('should return an object of GreatNibbler with type, skills, and level', () => {
    expect(theGreatNibbler).toEqual({ type: "Ghost", skills: ["spooky", "snack-bandit", "unpredictable", "big"], level: 2 })
  })
})