// array ,  object 

let bazzarList : string[] = ['apple', 'banana', 'milk', 'bread', 'egg'];

//bazzarList.push(true);  //error

let mixedArr: (string | number)[] = ['apple', 5, 'banana', 10, 'milk', 15, 'bread', 20];
mixedArr.push(25);
// mixedArr.push(true); //error argument of type 'boolean' is not assignable to parameter of type 'string | number';

let coordinate: [number, number] = [10, 20, 30];
coordinate.push(30); 

let players: [string, string, number] = ["Messi", "Andres Iniesta", 2]; // ok 

let player: [string,  string, string, number] = ['Shakib Al Hassan', "sabbir", " soumya", 10]; // ok
let player: [string,  string, number] = ['Shakib Al Hassan', "sabbir", " soumya", 10, 15]; // error type '[string string number]' hass 3 element(s) but type '[string, string, number]' has 4.
