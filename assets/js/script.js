
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

