var colorSwitch = true;
var levelSwitch = false;

function getClockColor(hours, minutes) {
    var clockColor;
    var colorLevel0 = "rgb(60,120,182)";
    var colorLevel1 = "rgb(0,90,179)";
    var colorLevel2 = "rgb(204,0,0)";
    var colorLevel3 = "rgb(153,0,0)";
    colorSwitch == true ? clockColor = colorLevel0 : clockColor = colorLevel1;
    if((hours == 6 && minutes >= 35) || (hours == 14 && minutes >= 35) || (hours == 22 && minutes >= 35) || levelSwitch == true) {
        colorSwitch == true ? clockColor = colorLevel2 : clockColor = colorLevel3;
    }
    colorSwitch = !colorSwitch;
    
    return clockColor;
};

function digitalClock() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();

    var dateString = date.toLocaleDateString("ru-RU", {
        month: "2-digit",
        day: "2-digit",
    });

    var clockString;

    var clock = document.getElementById("clock");
    var date = document.getElementById("date");
 
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    clockString = hours + ":" + minutes + ":" + seconds;
    
    clock.innerHTML = clockString;
    date.innerHTML = dateString;
    
    clock.style.color = getClockColor(hours, minutes);

    setTimeout("digitalClock()", 1000);
}