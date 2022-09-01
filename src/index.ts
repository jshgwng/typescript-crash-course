let id: number = 5
let company: string = 'Joshua Ogwang'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]

let person: [number, string, boolean] = [1, 'Joshua', true]

let employee: [number, string][]
employee = [
    [1, 'Joshua'],
    [2, 'Douglas'],
    [3, 'Jonathan'],
]

let pid: string | number 
pid = 22

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

type User = {
    id: number,
    name: string
}
const user = {
    id: 1,
    name: 'John'
}

let cid: any = 1
// let customerId = <number> cid
let customerId = cid as number

function addNum(x: number, y: number): number{
    return x + y
}

function log(message: string | number) {
    console.log(message)
}

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
}
class Person implements PersonInterface {
     id: number
     name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered.`
    }
}

const joshua = new Person(1, 'Joshua')
const james = new Person(1, 'James')

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}


function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Thomas', 'Jelly', 'Kingston'])

