import Teacher from "./teacher.js";
import Student from "./student.js";
import { pColor } from './fb.js';

let s = new Student(20, "man");
alert(s.getAge());
let t = new Teacher(35, "man", s);
alert(t.getAge());

pColor('red');