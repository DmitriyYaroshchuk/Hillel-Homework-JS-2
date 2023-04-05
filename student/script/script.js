class Student {
    constructor({ name, surname, yearOfBirth, estimates }) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.estimates = estimates;
        this.visit = new Array(25).fill(null);
    }

    getAgeOfStudent () {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(`Возраст студента ${this.name} ${this.surname} ${age}`);
        return age;
    }
    getAverageEstimation () {
        return Math.floor(this.estimates.reduce((sum, item) => sum + item, 0) / this.estimates.length);
    }

    present() {
        if (this.visit.includes(null)) {
            if (this.visit.length >= 25) {
                this.visit.shift();
            }
            this.visit.push(true);
        } else {
            Object.freeze(this.visit)
        }
        return this;
    }

    absent() {
        if (this.visit.includes(null)) {
            if (this.visit.length >= 25) {
                this.visit.shift();
            }
            this.visit.push(false);
        } else {
            Object.freeze(this.visit);
        }
        return this;
    }

    summary () {
        const averageVisit = this.visit.filter(item => item === true).length / this.visit.length
        console.log('averageVisit',  averageVisit);
        console.log('getAverageEstimation',  this.getAverageEstimation())
        if (this.getAverageEstimation() > 90 && averageVisit > 0.9) {
            return console.log('Cool')
        } else if (this.getAverageEstimation() > 90 || averageVisit > 0.9) {
            return console.log('"Good, but you can do better')
        } else {
            console.log('Radish!')
        }

    }

}
const dmitriy = new Student({
    name: 'Dmitriy',
    surname: 'Yaroshchuk',
    yearOfBirth: 2001,
    estimates: [100,100,90,96,95,98],
});
console.group('Dmitriy');
dmitriy.getAgeOfStudent();
dmitriy.getAverageEstimation();
dmitriy.present().absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
console.log(dmitriy.visit)
dmitriy.summary();
console.groupEnd();




const katya = new Student({
    name: 'Katya',
    surname: 'Gilbert',
    yearOfBirth: 2000,
    estimates: [75,70,70,70,70,60]
});
console.group('Katya')
katya.getAgeOfStudent();
katya.getAverageEstimation();
katya.present().absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
katya.summary();
console.groupEnd();



const jimmy = new Student({
    name: 'Jimmy',
    surname: 'Green',
    yearOfBirth: 1990,
    estimates: [60,70,70,70,70,75],
});
console.group('Jimmy');
jimmy.getAgeOfStudent();
jimmy.getAverageEstimation();
jimmy.present().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().present().present();
jimmy.summary();
console.groupEnd()