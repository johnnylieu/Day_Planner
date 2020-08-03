// displays the current date and time
$(document).ready(function() {
    $("#currentDay").text(moment().format('ddd MMM Do, YYYY, h:mm A'));
});

function hourUpdate() {
    var currentHour = moment().hour(); // updates hour every 1.5 secs
    console.log(currentHour); // working

    // a "for each" function to capture the number id in the time-block class
    $(".time-block").each(function (){
        var hourId = parseInt($(this).attr("id")); // gets the # of the id
        console.log(hourId); // working

        if (hourId < currentHour) {
            $(this).attr("class", "past"); // set attribute to past
        };

        if (hourId > currentHour) {
            $(this).attr("class", "future"); // future
        };

        if (hourId === currentHour) {
            $(this).attr("class", "present"); // present
        }
    });
    
}

var interval = setInterval(hourUpdate, 1500); // every 1.5 seconds