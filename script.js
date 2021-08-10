//Opd A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
const findSpiderMan = superheroes.find((superhero) => {
      return superhero.name === "Spiderman"

}); 
console.log(findSpiderMan);
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Opd B

doubleArrayValues = [1, 2, 3]

  const doubleArrayValuesShortHand = (x) => 
    x.forEach(n => n + n);

  
  console.log("Double 1,2,3:", doubleArrayValues)
  // result should be [2, 4, 6]
 //Opd C
    const containsNumberBiggerThan10 = function(array) {
        return array.some(number => {
          return number > 10;
        });
      };
      
      console.log(
        "Je suis bigger than 10:",
        containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
      );


   

    //Opd D
function isItalyInTheGreat7(array) {
    return array.includes("Italy");
  }
  console.log(
    "Is Italie aanwezig?:",
    isItalyInTheGreat7([
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ])
  );

    isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
    // result should be true

//Opd E
const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 10);
    });
    return newArray;
  };

  // Of met een .map method
  const tenfoldMap = function(array) {
    return array.map(number => {
      return number * 10;
    });
  };
  console.log("tenfold", tenfold([1, 4, 3, 6, 9, 7, 11]));
  console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11]));
  
    console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

  //Opd F
  function isBelow100(array) {
    return array.every(number => {
      return number < 100;
    });
  }
  console.log(
    "Onder de 100?:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
  );
  console.log(
    "Onder de 100, Should be true:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
  );
  
  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false



  // Opd G
   const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];
  
  const bigSum = function(array) {
    return array.reduce((acc, number) => {
      return acc + number;
    });
  };
  console.log("Big sum, add all numbers in array:", bigSum([3, 4]));
  console.log("Big sum, add all numbers in array:", bigSum(numbers));
  console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118
  