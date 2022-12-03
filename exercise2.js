function hasProp(object, keyname){
    return (keyname in object);
  }
  
  const car1 = {
    name: "Ford",
    maxSpeed: "250",
    color: "blue"
  }
  
console.log(hasProp(car1, "name"));
console.log(hasProp(car1, "minSpeed"));


// Или вот такой вариант, но в условии задачи было написано "возвращает", поэтому наверное будет правильней return 
//
// function hasProp(object, keyname){
//     console.log(keyname in object);
//   }
  
//   const car1 = {
//     name: "Ford",
//     maxSpeed: "250",
//     color: "blue"
//   }
  
//   hasProp(car1, "name");