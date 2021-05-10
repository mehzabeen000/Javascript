const fs = require("fs");
var readline = require("readline-sync");
const axios = require('axios').default;
axios.get("https://saral.navgurukul.org/api/courses")
    .then(response => {
        var response1 = response.data;
        // const jsonData= JSON.stringify(response1,null,2)
        // fs.writeFileSync("data.json",jsonData,);
        for (let counter in response1["availableCourses"]) {
            let srNo = parseInt(counter) + 1;
            console.log(srNo, response1["availableCourses"][counter]["name"], response1["availableCourses"][counter]["id"])
        }
        var coursesSrNo = readline.question("Select Course Serial Number");
        console.log(response1["availableCourses"][coursesSrNo - 1]["name"])
        coursesId = response1["availableCourses"][coursesSrNo - 1]["id"]
        axios.get("https://saral.navgurukul.org/api/courses/" + (coursesId) + "/exercises")
            .then(responses => {
                var parents = responses.data;
                // const coursesData= JSON.stringify(parents,null,2)
                // fs.writeFileSync("courses.json",coursesData,);
                for (i in parents["data"]) {
                    parentEx = parents["data"][i]["name"]
                    console.log(Number(i) + 1, parentEx)
                    slug = parents["data"][i]["slug"]
                    child = parents["data"][i]["childExercises"]
                    if (child.length == 0) {
                        console.log("    ", slug)
                    }
                    for (j in parents["data"][i]["childExercises"]) {
                        childEx = parents["data"][i]["childExercises"][j]["name"]
                        console.log("    ", childEx)
                    }
                }
                user = Number(readline.question("Enter the parent number"))
                var k = 0;
                do {
                    ex = parents["data"][user - 1]["childExercises"]
                    if (ex.length == 0) {
                        console.log("   ", parents["data"][user - 1]["slug"])
                    }
                    else { console.log("   ", k + 1, parents["data"][user - 1]["childExercises"][k]["name"]) }
                    k++
                } while (k < parents["data"][user - 1]["childExercises"].length);

                if (parents["data"][user - 1]["childExercises"].length == 0) {
                    console.log("  ", parents["data"][user - 1]["slug"])
                    slugInput = readline.question("Do you want slug:Enter y or n ")
                    axios.get("http://saral.navgurukul.org/api/courses/" + String(coursesId) + "/exercise/getBySlug?slug=" + (parents["data"][user - 1]["slug"]))
                        .then(responseLast => {
                            var con = responseLast.data;
                            if (slugInput == "y") {
                                console.log(con["content"])
                            }
                        }).catch(function (error) {
                            console.log(error)
                        })
                }
                else {
                    childInput = readline.question("Enter the question number");
                    console.log(parents["data"][user - 1]["childExercises"][childInput - 1]["name"])
                    axios.get("http://saral.navgurukul.org/api/courses/" + (coursesId) + "/exercise/getBySlug?slug=" + (parents["data"][user - 1]["childExercises"][childInput - 1]["slug"]))
                        .then(response => {
                            var quesInfo = response.data;
                            console.log(quesInfo["content"])
                        }).catch(function (error) {
                            console.log(error)
                        })
                }

            }).catch(function (error) {
                console.log(error)
            })

    }).catch(function (error) {
        console.log(error)
    })