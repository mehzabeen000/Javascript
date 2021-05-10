const quest=["How many continents are there?" ,"What is the capital of India?","Which subject is taught in navgurukul?"];
const options = [[ "1.Four","2.Nine","3.Seven","4.Eight"],
                ["1.Goa","2.Bhopal","3.Chennai","4.Delhi"],
                ["1.Software","2.Tourism","3.Arts","4.Mentorship"]];
const lifelist=[["1.Four","2.Seven"],["1.Chennai","2.Delhi"],["1.Software","2.Arts"]];
var readlineSync=require("readline-sync");
const sol=[3,4,1];
const life_ans=[2,2,1];
var i=0;
var count=0;
var amt=0;
while (i<quest.length){
    console.log(quest[i]);
    var j=0;
    while (j<=(options.length)){
        console.log(options[i][j]);
        j++
    }
    if (count==0){
        lifeline=readlineSync.question("Do you want (50-50) :yes or no. You will get lifeline only once.Choose wisely");
        if(lifeline=="yes"){
            var k=0;
            while (k<(lifelist.length)){
                console.log(lifelist[i][k]);
                count+=1
                if (k==1){
                    break}
                k+=1   
            }
            ans=Number(readlineSync.question("Enter your answer"));
            if (ans!=life_ans[i]){
                console.log("Your answer is wrong. You lose")
                break;}
            else{
                console.log("Well done")
                amt=amt+i*1000}
        }
        else{
            ans=Number(readlineSync.question("Enter your answer"));
            if (ans!=sol[i]){
                console.log("Your answer is wrong. You lose")
                break;}
            else{
                console.log("Well done")
                amt=amt+i*1000}
            }}
    else{
        lifeline=readlineSync.question("Do you want (50-50) :yes or no. You will get lifeline only once.Choose wisely");
        if (lifeline=="yes"){
            console.log("You have already taken lifeline");
            ans=Number(readlineSync.question("Enter your answer"))
            if (ans!=sol[i]){
                console.log("Your answer is wrong. You lose")
                break;}
            else{
                console.log("Well done")
                amt=amt+i*1000} }
        else{
            ans=Number(readlineSync.question("Enter your answer"))
            if (ans!=sol[i]){
                console.log("Your answer is wrong. You lose")
                break;}
            else{
                console.log("Well done")
                amt=amt+i*1000} 

        }}

    i++;
}
console.log("You have won", amt , "$");

