//variables
var saveBtn = $(".saveBtn");

// function to save to local storage
saveBtn.on("click", function(event) {
    var button = $(this);
    console.log(button); //working

    var btnData = $(this).attr("data-time");
    console.log(btnData); //working, gets time for each save button

    var data = button.siblings(".description").val(); //gets the siblings of the button. int this case, specifically the description class and its value
    console.log(data); // working

    localStorage.setItem(btnData, data); // working
});

// this pulls from storage
$("#d9").val(localStorage.getItem("9"));
$("#d10").val(localStorage.getItem("10"));
$("#d11").val(localStorage.getItem("11"));
$("#d12").val(localStorage.getItem("12"));
$("#d13").val(localStorage.getItem("13"));
$("#d14").val(localStorage.getItem("14"));
$("#d15").val(localStorage.getItem("15"));
$("#d16").val(localStorage.getItem("16"));
$("#d17").val(localStorage.getItem("17"));

// clears schedule (clears local storage)
$("#clear").on("click", function () {
    console.log("clicked");
    localStorage.clear();
    window.location.reload();
});