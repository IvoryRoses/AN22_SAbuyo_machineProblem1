/*
	Program: Computation of Grade using Function
	Programmer: Juna Dela Cruz
	Section: BSCS22
	Start Date: 6/2/22
	End Date: 6/2/22
*/

function gradeCalcu(sumEna, sumSumma, majorExa) {
    grade = (sumEna * 0.3) + (sumSumma * 0.3) + (majorExa * 0.4);

    return grade;
}

function letterGradeCalcu(grade) {
    if (grade >= 90) {
        return 'A';

    } else if (grade >= 80) {
        return 'B';

    } else if (grade >= 70) {
        return 'C';

    } else if (grade >= 60) {
        return 'D';

    } else {
        return 'F';
    }
}

const studentArray = [];

for (var i = 1; i <= 5; i++) {
    const studentObject = {};

    var finalEna = 0,
        finalSumma = 0;
    studentName = prompt("Enter the name of the Student");

    for (var j = 1; j <= 5; j++) {
        enabling = parseInt(prompt(`Enter enabling assessment ${j}`));
        finalEna = finalEna + enabling;
    }

    sumEna = finalEna / 5;

    for (var k = 1; k <= 3; k++) {
        summative = parseInt(prompt(`Enter summative assesment ${k}`))
        finalSumma = finalSumma + summative;
    }

    sumSumma = finalSumma / 3;

    majorExa = parseInt(prompt("Enter major exam grade"))

    grade = gradeCalcu(sumEna, sumSumma, majorExa)
    letter = letterGradeCalcu(grade)

    studentObject['Student'] = studentName;
    studentObject['Class Participation'] = sumEna;
    studentObject['Exam Grade'] = sumSumma;
    studentObject['Grade Score'] = majorExa;
    studentObject['Grade'] = grade;
    studentObject['Letter Grade'] = letter;

    studentArray.push(studentObject);
}

console.log(`Name of Student | Class Participation | Summative Assesment | Exame Grade | Grade Score | Letter Grade`);
studentArray.forEach((studentObject) => {
    console.log(`${studentObject['Student']} \t\t\t\t ${studentObject['Class Participation']} \t\t\t\t ${studentObject['Exam Grade']} \t\t\t ${studentObject['Grade Score']} \t\t\t ${studentObject['Grade']} \t\t\t ${studentObject['Letter Grade']}`);
});