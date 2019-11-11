class Student {
    constructor(gpa, credits) {
        this.gpa = gpa;
        this.credits = credits;
    }

    get level() {
        let numOfCredits = this.credits;
        if (numOfCredits > 90) {
            return 'Senior';
        } else if (numOfCredits <= 90 && numOfCredits > 60) {
            return 'Junior';
        } else if (numOfCredits <= 60 && numOfCredits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman'
        };
    };

    get major(){
        return this._major;
    };

    set major(major){
        if (this.level === 'Junior' || this.level === 'Senior') {
            this._major = major;
        } else {
            this._major = 'none';
        }
    };

    stringGPA() {
        return String(this.gpa);
    };
}

const student = new Student(3.9, 93);

console.log(`\n Student's current GPS is ${student.gpa} and currently in ${student.level} year`);

student.major = 'Electrical Engineering';

console.log(`\n Students Major is ${student.major} \n`);