var array = [10, 2, 5, 1, 9]
console.log(array.sort(compareFunction));

function compareFunction(a,b){
  return a - b;
};

