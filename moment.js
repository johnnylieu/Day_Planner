// displays the current date and time
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd MMMM Do, YYYY, h:mm A'));
});

function hourUpdate() {
    var currentHour = moment().hour(); // updates hour every 1.5 secs
    console.log(currentHour); // working

    // a "for each" function to capture the number id in the time-block class
    $(".time-block").each(function() {
        var hourId = parseInt($(this).attr("id")); // gets the # of the id
        console.log(hourId); // working
        console.log(this)
        if (hourId < currentHour) {
            $(this).addClass("past"); // set attribute to past
            $(this).removeClass("future");
            $(this).removeClass("present");
        };
        if (hourId > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future"); // future
        };
        if (hourId === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present"); // present
        }
    });   
}

var interval = setInterval(hourUpdate, 1500); // every 1.5 seconds