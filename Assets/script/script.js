$(document).ready(function () {
    var hourTen = $("#10");
    var hourEleven = $("#11");
    var hourTwelve = $("#12");
    var hourOne = $("#13");
    var hourTwo = $("#14");
    var hourThree = $("#15");
    var hourFour = $("#16");
    var hourFive = $("#17");
    var hourSix = $("#18");
    var hourSeven = $("#19");
    var hourEight = $("#20");
  
  
  
    var currentHour = dayjs().format("H");
    //var currentHour = 14;
    console.log(currentHour);
    var allTimes = [
      hourTen,
      hourEleven,
      hourTwelve,
      hourOne,
      hourTwo,
      hourThree,
      hourFour,
      hourFive,
      hourSix,
      hourSeven,
      hourEight,
    ];
    //console.log(allTimes);
  //Add code to display the current date and time in the header of the page.
  var currentDate = dayjs().format("dddd MMM D, YYYY, h:MM ");
  console.log(currentDate);
  $("#currentDay").text(currentDate);

  //Add code to apply the past, present, or future class. need to work of current time
  for (i = 0; i < 11; i++) {
    if (currentHour == allTimes[i].attr("id")) {
      allTimes[i].removeClass("future");
      allTimes[i].removeClass("past");
      allTimes[i].addClass("present");
    }
    if (currentHour > allTimes[i].attr("id")) {
      allTimes[i].removeClass("future");
      allTimes[i].removeClass("present");
      allTimes[i].addClass("past");
    }
    if (currentHour < allTimes[i].attr("id")) {
      allTimes[i].removeClass("present");
      allTimes[i].removeClass("past");
      allTimes[i].addClass("future");
    }
  }
});
// Need to add a onclick to save 

$(".btn").on("click", function () {
    let task = $(this).siblings(".description").val();
    console.log(task);
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, task);
  });
  