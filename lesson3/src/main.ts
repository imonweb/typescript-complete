/* ====== Arrays & Objects ====== */

/*  3 types of array */
let stringArr = ['one', 'hey', 'John']

let guitars = ['strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'Jack'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

// guitars = stringArr 
// mixedData = guitars 
// guitars = mixedData

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Jake', 44, true]

let mixed = ['John', 1, false]
// mixed = myTuple

// myTuple = mixed
myTuple[1] = 44


/*  Objects */

let myObj: object 
myObj = [] 
console.log(typeof myObj)
myObj = bands 
myObj = {}

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop1 = 'johnny'

// type Guitarist = {
//   name: string,
//   active?: boolean,
//   albums: (string | number)[]
// }

interface Guitarist {
  name?: string,
  // active?: boolean,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  // active: false,
  active: true,
  albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV']
}

// evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name){
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!'
}

console.log(greetGuitarist(jp))

// enums
enum Grade {
  U = 1,
  D,
  C,
  B, 
  A,
}

console.log(Grade.U)