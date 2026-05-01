// furnction 

//arow function , normal function

function add(num1: number, num2: number){
      return num1 +num2;
}
// add(5, '5'); //error


add(2, 3); //ok

const addArray = (num1: number, num2: number) => num1 + num2;

addArray(2, 3); //ok

// object function => method 
const person ={
      name: "Sefat",
      age: 0,
      addAge(value: number){
            const totalAge = this. age + value;
            return totalAge
      }
}

person.addAge(5);

const arr: number[] = [1, 2, 3, 4, 5];

const sqrArr = arr.map((elem: number): number => elem * elem)