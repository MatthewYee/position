#Overview
This Repository is a solution to the position of elements challenge by Santiago, this also demonstrate the Jasmine testing tool for testing the source code position.js. We make the Spec javascript file to test them as well

#Installation

* You need to have the following script with Jasmine tools
```
<title>Jasmine Spec Runner v2.3.4</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.3.4/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.3.4/jasmine.css">

  <script src="lib/jasmine-2.3.4/jasmine.js"></script>
  <script src="lib/jasmine-2.3.4/jasmine-html.js"></script>
  <script src="lib/jasmine-2.3.4/boot.js"></script>

```
* You need to insert the the file to run the jasmine tools which is the PositionSpec.js and position.js
```
<!-- include source files here... -->
  <script src="position.js"></script>

  <!-- include spec files here... -->
  <script src="spec/PositionSpec.js"></script>
```

#Usage
Below is how to use the program 

You need to have the PositionSpec.js file test the design of the program
```
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
```
You should have a same picture as a [screenshot](https://raw.githubusercontent.com/MatthewYee/position/master/doc/test-1.png)

#Credit 
Use the [Underscore] (http://underscorejs.org/) Library and the [Jasmine](http://jasmine.github.io/2.3/introduction.html)
