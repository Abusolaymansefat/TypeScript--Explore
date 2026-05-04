// conditional type is a type that depends on a condition. It is a way to create a new type based on the properties of an existing type. In this example, MyVehicle will be a union type of "car" | "bike" | "cng" | "bus", which are the keys of the RichPeoplesVehicles type.

type A = null;
type B = undefined;

type C = A extends number? true : B extends undefined? true : false;

type RichPeoplesVehicles = {
      bike: string;
      car: string;
      ship: string;
}

type checkVehicle <T> = T extends keyof RichPeoplesVehicles ? true : false

type HasBike =  checkVehicle<"bike">; // true 

type HasPlane = checkVehicle<"plane">;  // false 

// explaination of conditional type 