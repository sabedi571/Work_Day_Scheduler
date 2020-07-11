var todaysdate = moment().format("MMM Do YYYY");

$("#currentDay").append(todaysdate);

var currentime = moment().format('LTS');

$("#currenttime").append(currentime);

var timeofday = ["8","9","10","11","12","13","14","25","16"]
updatetime();

function updatetime() {
    var currenttime = moment().format("LTS");
    for(var i=0; i < timeofday.length; i++ ) {
        
        if (parseInt(timeofday[i]) > currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(212, 137, 137)");
        }

        else if (parseInt(timeofday[i]) < currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(233, 29, 29)");
        }

        else if (parseInt(timeofday[i]) == currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(233, 29, 29)");
        }

    }


}


