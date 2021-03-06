"use strict";

const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'Corbin Dallas',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

averageStudentMark(students[2]);
averageGroupMark(students);

function averageStudentMark (studentIndex) {
return avarageMark(studentIndex.marks)
}

function averageGroupMark (group) {
    // let allMarks = group.reduce ((acc,currentStudent) => [...acc, ...currentStudent.marks], []);
    let allMarks = group.reduce ((acc,currentStudent) => acc.concat(currentStudent.marks), []);
    return avarageMark (allMarks)
}

function avarageMark (arr) {
return arr.reduce ((acc,currentValue) => acc += currentValue,) / arr.length
}
