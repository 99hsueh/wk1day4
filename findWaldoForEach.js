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

//OR, to not have to declare actionWhenFound
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
  console.log("The result is:", result);
});