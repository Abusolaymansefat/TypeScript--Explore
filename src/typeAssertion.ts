// typeAssertion


let anything: any;

anything = "Sefat";


const kgToGramConverter = (input : number | string): string | number | undefined =>  {
      if(typeof input === "number") {
            return input * 1000;
      }
      else if(typeof input === "string"){
            const [value] = input.split(" ")
            return `Converting output is ${ Number (value) * 1000}`
      }

}

const result = kgToGramConverter(3) as number;
console.log({ result })
const result2 = kgToGramConverter("2 kg") as string;
console.log({ result2 })