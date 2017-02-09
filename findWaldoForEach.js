function findWaldo(arr, found) {
  arr.forEach(function(element, i, array) {
    if (array[i] === "Waldo") {
      found(i);   // execute callback
    }
  });

}

function actionWhenFound(arr) {
  console.log("Found Waldo at index "+ arr + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);