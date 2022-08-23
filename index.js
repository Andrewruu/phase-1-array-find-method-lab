// code your solution here

function superbowlWin(years){
    const winYears = years.find(r => r.result == "W");
    if (winYears !== undefined){
        return winYears.year;
    }
    else{
        return winYears;
    }
}
