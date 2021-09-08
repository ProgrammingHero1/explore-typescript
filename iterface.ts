interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Nosimon ara begum'
}
const hannan: Player = {
    name: 'A. Hannan',
    club: 'Kolabagan',
    salary: 2000
}


interface Employee {
    name: string,
    designation: string,
    salary: number
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukerberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}