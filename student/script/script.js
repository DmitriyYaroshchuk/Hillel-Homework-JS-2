class Student {
    constructor({ name, surname, yearOfBirth, estimates }) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.estimates = estimates;
        this.visit = [];
    }
    getAgeOfStudent () {
        const age = new Date().getFullYear() - this.yearOfBirth;
        return console.log(`Возраст студента ${this.name} ${this.surname} ${age}`);
    }
    getAverageScore () {
        const averageScore = Math.floor(this.estimates.reduce((sum,item) => sum + item, 0) / this.estimates.length);
        return console.log(`Средняя оценка ${this.name} ${this.surname} ${averageScore}`);
    }
    checkVisit (boolean) {
        this.visit.push(boolean);
        if (this.visit.length <= 25) {
            return this;
        }
        else {
            return false;
        }
    }

}
const dmitriy = new Student({
    name: 'Dmitriy',
    surname: 'Yaroshchuk',
    yearOfBirth: 2001,
    estimates: [10,11,12,12,11,12],
});
dmitriy.getAgeOfStudent();
dmitriy.getAverageScore();