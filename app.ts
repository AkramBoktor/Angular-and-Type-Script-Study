console.log("Hello");
let myname:string;
myname="Akram";
console.log("hello "+ myname);

//Decleared Array of string
let hobbies:string[];
let hobbies2:[string];

//Decleared arry of string and numer
hobbies=['football','basketball'];

enum color{
    gray = 3,
    green,
    blue
}
let mycolor:color = color.gray;
console.log(mycolor);


class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Male");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("mohamed", "md");
console.log(person.name, person.username);
// person.setType()

class Ahmed extends Person {

    address: string;
    constructor(username: string) {
        super("Ahmed", username);
        this.age = 30;
    }
}

const cl_Ahmed = new Ahmed("Ah");
console.log(cl_Ahmed.name);//will be ahmed

interface person{
    name:string,
    age:number,
    address:string
}

let per:person={
    name: "Amir",
    age: 28, 
    address: "Giza - cairo"
}

class persontest implements person{
    name:string;
    age:number;
    address:string;
}

//Generic Function 

function myFun2<T>(value: T) {
    console.log("Hello", value);
}
myFun2<string>("1233d");
myFun2<number>(122);
myFun2<boolean>(true); 