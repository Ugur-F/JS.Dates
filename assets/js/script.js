
//Anchorage UTC-8
//Reykjavik UTC
//Saint-Petersbourg UTC+3

//Brussels UTC+2


function updateTimes() {
    const localHour = new Date();

    //  Anchorage
    let anchorageTime = localHour.toLocaleString("fr-FR", {
        timeZone: "US/Alaska",
    });
    console.log("Anchorage: " + anchorageTime);

    //  Reykjavik
    let reykjavikTime = localHour.toLocaleString("fr-FR", {
        timeZone: "Etc/GMT+0",
    });
    console.log("Reykjavik: " + reykjavikTime);

    //  Saint-Petersbourg
    let sainPetersburgTime = localHour.toLocaleString("fr-FR", {
        timeZone: "Europe/Moscow",
    });
    console.log("Saint-Petersburg: " + sainPetersburgTime);

    //  Bruxelles
    let brusselsTime = localHour.toLocaleString("fr-FR", {
        timeZone: "Europe/Brussels",
    });
    console.log("Bruxelles: " + brusselsTime);
}

updateTimes();

console.log("================================================");
//====================================================================================//

const myBday = new Date("september 24, 2000");
let currentDay = new Date();

function daysinceBday() {
  // let daysinceBday = (currentDay-myBday); reponse en millisecondes
  let daySinceBday = Math.floor((currentDay - myBday) / (1000 * 60 * 60 * 24)); //réponse en jours
  console.log("Nombre de jour écoulés depuis ma naissance: " + daySinceBday + " days");
}
daysinceBday();

//--

let currentDate = new Date();
function daysCalculator(newDateString, currentDate) {
  let newDate = new Date(newDateString);
  let results = Math.floor((currentDate - newDate) / (1000 * 60 * 60 * 24));
  console.log(results + " jours se sont écoulés depuis " + newDate);
}

daysCalculator("2023-10-01", currentDate);
daysCalculator("1997-06-04", currentDate);
daysCalculator("2003-10-30", currentDate);
daysCalculator("1-10-2023", currentDate); 


console.log("================================================");
//====================================================================================//

let today80kh = new Date(Date.now() + 80000 * 60 * 60 * 1000); // Transformer les 80.000h en millisecondes (80000*60*60*1000)
console.log("Dans 80.000 heures, nous serons le " + today80kh);

//--

let inputHours = document.getElementById("inputHours");

inputHours.addEventListener("keyup", displayResults);

function displayResults() {
  let addedHours = inputHours.value;
  let updateDate = new Date(Date.now() + addedHours * (60 * 60 * 1000)); 
  console.log(updateDate);
}