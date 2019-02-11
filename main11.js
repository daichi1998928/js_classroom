class Person {
    constructor(name,age,gender,height,weight){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
}

const person = new Person("daichi",20,"男",174,60);

console.log(person.name,person.age);