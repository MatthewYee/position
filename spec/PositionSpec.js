/*global pos*/
/*export pos*/
describe("Position", function() {
  var testlist = [1, 3, 5, 6];
  // declare test for position.js by creating a list of test

  it("When passed 5 should return 2", function () {
    expect(pos(testlist,5)).toEqual(2); // very first test case

  });
  it("When passed 2 should return 1", function () {
    expect(pos(testlist,2)).toEqual(1); // very first test case

  });
  it("When passed 7 should return 4", function () {
    expect(pos(testlist,7)).toEqual(4); // very first test case

  });
  it("When passed 0 should return 0", function () {
    expect(pos(testlist,0)).toEqual(0); // very first test case

  });

});