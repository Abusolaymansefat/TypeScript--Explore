// key of constiairt 

type RichPeoplesVehicles = {
      car: string;
      bike: string;
      cng: string;
      bus: string;
};

type MyVehicle1 = "bike"| "car" | "cng" | "bus";

type MyVehicle2 = keyof RichPeoplesVehicles;


// key of constiairt is used to get the keys of an object type as a union type. In this example, MyVehicle2 will be a union type of "car" | "bike" | "cng" | "bus", which are the keys of the RichPeoplesVehicles type.

type User ={
      id: number;
      name: string;
      address: {
            city: string;
      }
}

const user: User = {
      id: 12,
      name: " Leo Messi",
      address : {
            city: "Laxmirpur",
      },
};

// const myName = user.name;
// const myId = user.id;
// const myId = user["id"];
// const address = user["address"];
// const myName = user["name"];

// console.log({myId, myName, address});

const getPropertyFromObject = <X> (obj: X, key: keyof X) => {
      return obj[key];
};

const result = getPropertyFromObject(user, "name");
console.log(result);

const product = {
      brand: "Apple",
      model: "iphone 15 pro max",
};

const student = {
      id: 1,
      class: "Five"
};

const result2 = getPropertyFromObject(product, "brand");
console.log(result2); // Error: Argument of type '"brand"' is not assignable to parameter of type 'keyof User'.ts(2345)

const result3 = getPropertyFromObject(student, "id");
console.log(result3);


// explore key of constiairt 