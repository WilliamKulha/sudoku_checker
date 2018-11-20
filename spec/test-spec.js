import {tester} from './../src/module.js'

describe('tester', function() {

  it('should return the sum of two numbers', function() {
    let sum = tester(2, 2)
    expect(sum).toEqual(4);
  });
});