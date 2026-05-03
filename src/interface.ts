// interface 

type User = {
      name: string;
      age: number;
      salary: number;
      isMarried: boolean;
}

// interface : object type: array, object, function
interface IUser {
      name: string;
      age: number;
      salary: number;
      isMarried: boolean;
}

type Role = {
      role: "admin" | "user";
}

type userWithRole = User & Role;

// interface with type intersection 

interface IUserWithRole extends IUser {
      role: "admin" | " user";
}

const user1: IUserWithRole = {
      name: "Sefat",
      age: 25,
      salary: 100000,
      isMarried: false,
      role: "admin"
}
// user with Role type chack 
// const user1: userWithRole = {
//       name: "Sefat",
//       age: 25,
//       salary: 100000,
//       isMarried: false,
//       role: "admin"
// }

const user2: IUser = {
      name: "Abu Solayman",
      age: 25,
      salary: 100000,
      isMarried: false
}

type isAdmin = boolean;

const isAdmin: isAdmin = false;

// function type with interface

type Add = (num1: number, num2: number) => number;

interface IAdd {
      (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;


// implementing interface type alias & type intersection 
