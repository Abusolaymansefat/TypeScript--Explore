// class & object 

// class Animal {
//       name: string;
//       species: string;
//       sound: string;

//       constructor(name: string, species: string, sound: string){
//             this.name = name;
//             this.species = species;
//             this.sound = sound;
//       }

//       makeSound(){
//             console.log(`${this.name} is making sound: ${this.sound}`)
//       }
// }

//parameter property shorthand 
class Animal {
      // public name: string;
      // species: string;
      // sound: string;

      constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
      }

      makeSound(){
            console.log(`${this.name} is making sound: ${this.sound}`)
      }
}

const animal = new Animal("Royal bangla tiger", "Tiger", "Roar");
const cat = new Animal("mew mew", "cat", "meow");

animal.makeSound();
// cat.makeSound();
// console.log(cat.name)

// console.log(animal.name);
// console.log(animal.sound);
// console.log(animal.species);
