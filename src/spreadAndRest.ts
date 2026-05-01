// spread operator 

const friends = ['noman', 'tarak', 'joy'];

const SchoolFriends = ["Robin", "yeasin", "Emon"];

const collgeFriends = [" shamim", "Rony", "Bijoy"];


friends.push(...SchoolFriends);
friends.push(...collgeFriends)

console.log(friends);

const user = {name: "sefat", phone: 123355};
const otherInfo = {hobby: "football", propassion: "web developer"};

const userInfo = {...user, ...otherInfo};

console.log(userInfo)

// rest operator 

// const sendingFriends = (friend1: string, friend2: string, friend3: string) => {
//       console.log(`my friends invited to my birthday party ${friend1}`);
//       console.log(`my friends invited to my birthday party ${friend2}`);
//       console.log(`my friends invited to my birthday party ${friend3}`);
// }
// sendingFriends("noman", "tarak", "joy");
const invitingFriends = (...friends: string[]) => {
      friends.forEach((friend:string) => console.log(`send invitation to ${friend}`))
}

invitingFriends("noman", "tarak", "joy", "Robin", "yeasin");

//  explore the rest operator with array destructuring