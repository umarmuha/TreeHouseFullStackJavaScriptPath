class Student {
    constructor(gpa){
        this.gpa = gpa;
    }

    stringGPA(){
        return String(this.gpa);
    }
}

const student = new Student(3.9);