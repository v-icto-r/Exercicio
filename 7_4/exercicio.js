const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4 , 5), 9);
assert.strictEqual(sum(0 , 0), 0);
//assert.strictEqual(sum(4 , "5"), 9);


function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  //console.log(arr)
  return newArr;
}

assert.deepEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4]);
assert.deepEqual(myRemove([1, 2, 3, 4], 5),[1, 2, 3, 4]);
//myRemove([1,2,3,4],3);
//console.log(myRemove([1, 2, 3, 4], 3));

//terceira

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4]);
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4]);
//console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4]);

//quarta

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(7), 7);
assert.strictEqual(myFizzBuzz('r'), false);

//quinta
const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };
  
  assert.deepEqual(obj1, obj2);
  assert.deepEqual(obj1, obj3);
  assert.deepEqual(obj3, obj2);


