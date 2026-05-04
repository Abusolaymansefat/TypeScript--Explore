// Gneric Function 

// const creteArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObject =(value:{id:number, name:string}) => {
//       return [value];
// };


const createArrayWithGeneric = <T>(value: T) => {
      return [value]
}

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(1542);
const arrObj = createArrayWithGeneric({ id: 1, name: "Programming Language " });


// tuple 

const createArrayWithTuple = (param1: string, param2: string) => [
      param1,
      param2,
]

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const addStudentToDatabase = <T> (studentInfo : T) => {
      return{
            database: "student Database",
            ...studentInfo
      }
}

const student1 = {
      id:12,
      name: "John Davis",
      hasPass: true,
}

const student2 = {
      id:233,
      name: "jane smith",
      hasBick: true,
      isMarried: true,
}


const result = addStudentToDatabase(student1);
console.log(result)
// const result2 = addStudentToDatabase(student2);
// console.log(result2)