const fs = require("fs");
const readline = require("readline-sync");

function login(username,password){
    var read = fs.readFileSync("user_details.json")
    data = JSON.parse(read)
    if (data["username"]===username){
        if (data["password"]===password){
            console.log("Login-Succesful")
            console.log(data)}
        else{
            console.log("Invalid Password")}}
    else{
        console.log("Account didn't found")}
    }

function signin(username,password1,password2){
    if (password1 != password2){
        console.log("both passwords are not same")}
    else{
        console.log("SignIn Succesful!")
        description=readline.question("Enter your Description")
        dateOfBirth=readline.question("Enter your Date of Birth")
        hobbies=readline.question("Enter your Hobbies=")
        genderOfUser=readline.question("Enter Gender")
        temperory={}
        dic={"username":username,"password":password1,"profile":{"description":description,"dob":dateOfBirth,"hobbies":hobbies,"gender":genderOfUser}}
        temperory["user"]=dic
        let data = JSON.stringify(dic);
        fs.writeFileSync("user_details.json",data)
        }}

function access(option){
    if (option===1){
        username= readline.question("Enter Username")
        password= readline.question("Enter Password")
        login(username,password)}
    else if (option===2){
        username = readline.question("Enter Username")
        password1 = readline.question("Enter Password")
        password2 = readline.question("Enter Password")
        signin(username,password1,password2)}
}

function begin(){
    console.log("Welcome to Login Page")
    option=Number(readline.question("Enter 1 for Login and 2 for Sign-in"))}

begin()
access(option)