// task 1

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  function mult(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
  }
  function getResult(arr, callback) {
    return callback(arr);
  }
  const arr = [5, 9, 2, 3];
console.log(getResult(arr, mult)); 
console.log(getResult(arr, sum)); 


// task 2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
function getSortedArrayObj(arr) {
    arr.sort(function(a, b) {
      return a.age - b.age;
    });
    return arr;
  }
  const sortedUsers = getSortedArrayObj(users);
  console.log(sortedUsers);


// task 3

function reversArr(arr) {
    arr.reverse();
  }
  
  function toNumberArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
    }
    arr = arr.filter((el) => !isNaN(el));
  }
  
  function each(arr, callback) {
    callback(arr);
  }
  
  const arr1 = [1, '4', 9, 'two'];
  each(arr1, reversArr);
  console.log(arr1); 
  
  const arr2 = [1, '4', false, 9, 'two'];
  each(arr2, toNumberArr);
  console.log(arr2); 
  

// task 4

function printDate() {
    console.log(new Date().toLocaleString());
  }
  
  let count = 0;
  let intervalId = setInterval(function() {
    printDate();
    count++;
    if (count === 10) {
      clearInterval(intervalId);
      console.log("30 секунд прошло");
    }
  }, 3000);

  
// task 5

function calling() {
    console.log('Звоню!');
  }
  
  function beeps(callback) {
    setTimeout(() => {
      console.log('Идут гудки...');
      callback();
    }, 1000);
  }
  
  function talk() {
    console.log('Разговор');
  }
  
  calling();
  beeps(talk);
  
