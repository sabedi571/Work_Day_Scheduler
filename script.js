var todaysdate = moment().format("MMM Do YYYY");

$("#currentDay").append(todaysdate);

var currentimes = moment().format('LTS');

$("#currenttime").append(currentimes);

var timeofday = ["8","9","10","11","12","13","14","15","16","17"]
updatetime();

function updatetime() {
    var currenttime = moment().format("H");
    for(var i=0; i < timeofday.length; i++ ) {
        
        if (parseInt(timeofday[i]) > currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(238, 222, 129)");
        }

        else if (parseInt(timeofday[i]) < currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(226, 131, 115)");
        }

        else if (parseInt(timeofday[i]) == currenttime) {
            $("#" + timeofday[i]).attr("style", "background-color: rgb(119, 209, 134)");
        }

    }

}

$(".btn").on("click", function() {

    var time = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(time, textContent);
    console.log(time, textContent);

    



});

$("#8am").children("input").val(localstorage.getitem("8am"));
$("#9am").children("input").val(localstorage.getitem("9am"));
$("#10am").children("input").val(localstorage.getitem("10am"));
$("#11am").children("input").val(localstorage.getitem("11am"));
$("#12pm").children("input").val(localstorage.getitem("12pm"));
$("#1pm").children("input").val(localstorage.getitem("1pm"));
$("#2pm").children("input").val(localstorage.getitem("2pm"));
$("#3pm").children("input").val(localstorage.getitem("3pm"));
$("#4pm").children("input").val(localstorage.getitem("4pm"));
$("#5pm").children("input").val(localstorage.getitem("5pm"));

var input = document.getElementById("8");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button8").click();
  }
});

