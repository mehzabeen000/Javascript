const students = [
    { name: "harry", subject: "Javascript" },
    { name: "Rohan", subject: "Machine Learning" }
]

function enrollStudent(student, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Enrolled")
            const err = false;
            if (!err) {
                resolve()
            }
            else {
                reject();
            }
        }, 1000);
    })
}


function getStudents() {
    console.log("Fetched", students)
}

let newStudent = { name: "Sunny", subject: "python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured")
});

