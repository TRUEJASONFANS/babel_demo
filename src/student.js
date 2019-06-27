import Teacher from "./teacher.js";
class Student {

    constructor(age, sex){
        this.age = 10;
        this.sex = sex;
    }
    getAge() {
        return this.age;
    }
    getSex() {
        return this.sex;
    }
}
let s = new Student(20, "man");
console.log(s.getAge());
let t = new Teacher(35, "man", s);
console.log(t.getStu());