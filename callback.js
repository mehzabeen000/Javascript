const students = [
    {name:"harry", subject:"Javascript"},
    {name:"Rohan", subject:"Machine Learning"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("Enrolled")
        callback();
    }, 1000);
}

function getStudents(){
    console.log("Fetched",students)
}

let newStudent = {name:"Sunny",subject:"python"}
enrollStudent(newStudent,getStudents);
// getStudents();

