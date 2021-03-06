/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-9-2.js
 * @description Array.prototype.reduce considers new value of elements in array after it is called
 */


function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr[3] = -2;
    arr[4] = -1;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];
  if(arr.reduce(callbackfn) === 3)
    return true;  
  
 }
runTestCase(testcase);
