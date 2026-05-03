// gnerics 

// dynamically gnerics 

type GenericArray<value> = Array<value>



// const friends: string[] = ['noman', 'tarak', 'joy', 'Robin', 'yeasin'];

const friends : GenericArray<string> = ['noman', 'tarak', 'joy', 'Robin', 'yeasin'];

// const rollNumbers: number[] = [1, 2, 3, 4, 5];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

// const isEligibleForVote: boolean[] = [true, false, true];
const isEligibleForVote: GenericArray<boolean> = [true, false, true];

type user = {name: string, age: number};

const userList : GenericArray<user> = [
      {name: "sefat", age: 25},
      {name: "Abu Solayman", age: 20},
]


// generic function 
const sqrFunc = (value: number) => {return value * value};

sqrFunc(5);

type Coordinate<x, y> = [x, y];
const coordinates1: Coordinate<number,number> = [10, 20];
const coordinates2: Coordinate<string, string> = ["10", "20"];

// 