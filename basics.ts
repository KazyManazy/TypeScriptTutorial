// Primitives: numbers, strings, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person
person = {
    name: 'Max',
    age: 32
}

let people: Person[];
people = [person, person]

// Type inference

let course: string | number = 'React - The Complete Guide';
course = 12341;

// Functions & types

function add(a: number, b: number): number {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) { }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student("Cam", "Kaz", 34, ["Writing 101", "Mathematics"]);
student.firstName;
student.enroll('Angular');

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log("Hey y'all")
    }
}