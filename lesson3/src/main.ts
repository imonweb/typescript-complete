let myName: string = 'Peter';
let meaningOfLife: number;
let isLoading: boolean;
// let album: any;

/* union type */
let album: string | number;

myName = 'John'
meaningOfLife = 42
isLoading = true
// album = 1984
album = 'Van Halen'

const sum = (a: number, b: string) => {
  return a + b
}

let postId: string | number 
let isActive: number | boolean

// regular expression
let re: RegExp = /\w+/g

console.log(sum)