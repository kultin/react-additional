export function Test(a: number, b: number): number {
    if (a === b) {
        return a || b
    }

    let x: number;

    if (b > a) {
      x = a;
      while (x < b) {
          x += 1;
      }
    } else {
        x = b;
        while (x < a) {
            x += 1
        }
    }
    return x;
}

// function Test2(a: number, b: number): number {
//     const min = Math.min(a,b);
//     const max = Math.max(a,b);
//     let sum = 0;

//     // eslint-disable-next-line no-plusplus
//     for (let i = min; i <= max; i++) {
//         sum += i
//     }

//     return sum;
// }

function Max(arr: number[]) {
    return arr.sort((a,b) => b - a)[0];  
}

function Min(arr: number[]) {
  return arr.sort((a,b) => a - b)[0];  

}

interface User {
    name: string,
    age: number,
    occupation: string,
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
    
function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}
  
// console.log('Users:');
// users.forEach(logPerson);
