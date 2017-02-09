var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//sort by ascending name(a - z),
//if names are equal,
// sort by descending age(old to young)

function customSorting(a, b){
//
if(a.name > b.name){
    return 1;
  }
  else {
    if(a.age < b.age){
      return 1;
    }
  }
};

console.log(students.sort(customSorting));

//important, sort() modifies array while filter() and map() creates new arrays