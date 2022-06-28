// Helper functions

// determine whether the collection is an object or an array
function arrayConversion(collection) {
  const arrayType = Array.isArray(collection);
  // if it's an object, convert it to an array
  let array;
  if (arrayType === false) {
    // array = Array.from(collection);
    array = Object.values(collection);
  } else {
    array = collection;
  }
  return array;
}

// Collection Functions

function myEach(collection, callback) {
  const array = arrayConversion(collection);
  // iterate over element collection - pass to callbk func - return orig collection
  for (let i = 0; i < array.length; i++) { // forEach()
    callback(array[i]);
  }
  return collection;
}

// myMap
function myMap(collection, callback) {
  const array = arrayConversion(collection);
  // map ea value in collection through a transformation function, callback.
  let newCollection = [];
  for (let i = 0; i < array.length; i++) {
    const newItem = callback(array[i]);
    newCollection.push(newItem);
  }

  return newCollection;
}

// myReduce
function myReduce(collection, callback, acc) { // acc is optional
  const array = arrayConversion(collection);
  // check if we have an accumulator, start loop at first arr item; if not, start at second item
  let i;
  if (acc) {
    i = 0;
  } else {
    i = 1;
    acc = array[0]
  }
  // loop - update accumulator to new callback func return
  for (i; i < array.length; i++) {
    acc = callback(acc, array[i], array); // updating value of accumulator
  }
  return acc;
}

// myFind
function myFind(collection, predicate) {
  const array = arrayConversion(collection);
  // look thru array
  for (let i = 0; i < array.length; i++) {
    // return first value that passes predicate truth test
    if (predicate(array[i]) === true) {
      return array[i];
    }
  }
  undefined;
}

// myFilter
function myFilter(collection, predicate) {
  const array = arrayConversion(collection);
  const truthyArr = [];
  // look through array values
  for (let i = 0; i < array.length; i++) {
    // return arr w values passing truth test (predicate)
    if (predicate(array[i])) {
      truthyArr.push(array[i]);
    }
    // if none found, return empty array
  }
  return truthyArr;
}

// mySize
function mySize(collection) {
  const array = arrayConversion(collection);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum++;
  }
  //return the num of values in the collection
  return sum;
}

//// Array Functions

// myFirst
// function myFirst(array, [n]) {
//   const firstArr = [];
//   for(let i = 0; i < array.length; i++) {
//     firstArr.push(array[i])
//   }
//   return firstArr;
// }

// function myFirst (){
// const myFirst = (arr, len) => {
//   let newArr =[];
//   for (let i=0; i<len; i++) {
//   if (len) {
//   newArr.push(arr[i])
//   }

//   } else {
//   return arr[0]}
//   }


// arrow func!
// const myFirst = (arr, len) => {
//   let newArr = [];
//   for (let i = 0; i < len; i++) {
//     if (len) {
//       newArr.push(arr[len])
//     }
//   }
//   return arr[0]
// }
 
function myFirst(arr, len){
  let newArr =[];
  if (len) {
  for (let i=0; i<len; i++) {
  newArr.push(arr[i])
  }
  return newArr
  } else {
  return arr[0]}
  }

// myLast
// function myLast(array, [n]) {
//   const lastArr = [];
//   for (let i = array.length; i > 0; i--) {
//     lastArr.push(array[i])
//   }
//   return lastArr;
// }

function myLast(arr, len) {
  let newArr = [];
  if (len) {
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i])
    }
    return newArr;
  } else {
    return arr[0];
  }
}

// mySortBy (bonus)
// myFlatten (bonus)


//// Object Functions

// myKeys

// return object's key names in an array 
// aka enumerable properties
    // function myKeys(obj){
    //   const array = arrayConversion(collection);

    //   newArr = [];
    //   for(let i = 0; i < array.length; i++) {
    //     item = obj[i].key
    //     newArr.push(item);
    //   }
    //   return newArr;
    // }

function myKeys(obj){
  console.log(obj);
  const newArr = [];
  for(let key in obj) {
    console.log (key);
    newArr.push(key);
  }
  return newArr;
}
// myKeys();


//// RETURNS VALUES!!!
// function myKeys(obj){
//   console.log(obj);
//   const array = arrayConversion(obj);
//   console.log(array);
//   const newArr = [];
//   for(let i = 0; i < array.length; i++) {
//     item = array[i];
//     newArr.push(item);
//   }
//   return newArr;
// }
// myKeys();

// myValues
// return object's property values in an array

      // function myValues(object) {
      //   const array = arrayConversion(object);

      //   const properties = [];
      //   for(i = 0; i < array.length; i++) {
      //   // get values
      //   newItem = object[i].value
      //   // add values to properties array
      //   properties.push(newItem[i]);
      //   return properties;
      // }
      // }