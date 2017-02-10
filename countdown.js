var countdownGenerator = function (x) {
  var x = x;
  return function(){
    if(x > 0){
      x -= 1;
      return console.log("t-minus " + (x + 1) + "...");
    }
    if(x < 0){
      x -= 1;
      return console.log("Rockets already gone, bub!");
    } else {
      x -= 1;
      return console.log("Blast Off!");
    }

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!