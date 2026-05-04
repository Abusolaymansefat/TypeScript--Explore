// mape type 

//map

 const arrayOfNumber: number[] = [1, 4, 6,8];
 const arrayOfString: string[] = ["1", "4", "6", "8"];

 const arrayOfStringUsingMap : string[] = arrayOfNumber.map((num) => num.toString());

 console.log(arrayOfStringUsingMap);

 type AreaOfNum = {
      width: number;
      height: number;
 }
 type height = AreaOfNum['height'];

//  type AreaOfString = {
//       [key in "width" | "height"] : string;
//  };

type Area<T> = {
      [key in keyof T] : T[key];
};

const area1 : Area <{height: string; width: number}> = {
      height : "10cm",
      width : 10
}