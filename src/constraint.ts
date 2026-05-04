// constraint : strict rules for type checking 


type student = {
      id:number; 
      name: string;
      dateOfBirth: string;
      class: string;
}
const addStudentToDatabase = <T extends student> (studentInfo : T) => {
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

const student3 = {
      id: 5454,
      name: "Alice johnson",
      smartWatch: true,
      dateOfBirth: "1995-06-15",
      class: "10th Grade"
}

const result = addStudentToDatabase(student3);
console.log(result)