// just some sample functions, you can delete these
// QUnit will find any functions you write in index.js too!
function add(a, b) {
  return a + b;
}

function addOne(arr) {
  return arr.map(function(n) {
    return n + 1;
  });
}

// example tests - you can write your own tests like these :)
// try playing about and watching them fail!
test("add function", function(assert) {
  var result = add(2, 3);
  var expected = 5;
  assert.equal(result, expected, "correctly adds two numbers");
});

test("addOne function", function(assert) {
  var result = addOne([1, 2, 3]);
  var expected = [2, 3, 4];
  assert.deepEqual(
    result,
    expected,
    "correctly adds one to each number in the array"
  );
});

test("API call returns an object", function(assert) {
  var result = typeof gitCall();
  var expected = typeof {};
  assert.equal(result, expected, "API call should return an object"); 
});

test("API call should return status 200", function(assert){
  var result = xhr.status;
  var expected = 200;
  assert.equal(result, expected, "Status code should return as 200");

})





// add your own tests here using QUnit!
