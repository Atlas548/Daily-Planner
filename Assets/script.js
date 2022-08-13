// Moment Declaration for date and time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Rounds the current time to the nearest hour 
currentTime = currentTime.startOf("hour");
// Calculates the start of the day & return to 9am
var timeBefore = moment().startOf('day').add(9, "hours");

// Time Blocks
// 9am Time block
var timeOne = timeBefore.add(0, "h");
timeOne = timeOne.format('hh:mm A');
$(".block1").text(timeOne);
// 10am Time block
var timeTwo = timeBefore.add(1, "h");
timeTwo = timeTwo.format('hh:mm A');
$(".block2").text(timeTwo);
// 11am Time block
var timeThree = timeBefore.add(1, "h");
timeThree = timeThree.format('hh:mm A');
$(".block3").text(timeThree);
// 12pm Time block
var timeFour = timeBefore.add(1, "h");
timeFour = timeFour.format('hh:mm A');
$(".block4").text(timeFour);
// 1pm Time block 
var timeFive = timeBefore.add(1, "h");
timeFive = timeFive.format('hh:mm A');
$(".block5").text(timeFive);
// 2pm Time block 
var timeSix = timeBefore.add(1, "h");
timeSix = timeSix.format('hh:mm A');
$(".block6").text(timeSix);
// 3pm Time block
var timeSeven = timeBefore.add(1, "h");
timeSeven = timeSeven.format('hh:mm A');
$(".block7").text(timeSeven);
// 4pm Time block
var timeEight = timeBefore.add(1, "h");
timeEight = timeEight.format('hh:mm A');
$(".block8").text(timeEight);
// 5pm Time block
var timeNine = timeBefore.add(1, "h");
timeNine = timeNine.format('hh:mm A');
$(".block9").text(timeNine);

function testingTime() {
    timeOne = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(timeOne)) {
        $(".form9").addClass("past");
    } else if (currentTime.isBefore(timeOne)) {
        $(".form9").addClass("future");
    } else if (currentTime.isSame(timeOne)) {
        $(".form9").addClass("present");
    };
    timeTwo = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(timeTwo)) {
        $(".form10").addClass("past");
    } else if (currentTime.isBefore(timeTwo)) {
        $(".form10").addClass("future");
    } else if (currentTime.isSame(timeTwo)) {
        $(".form10").addClass("present");
    };
    timeThree = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(timeThree)) {
        $(".form11").addClass("past");
    } else if (currentTime.isBefore(timeThree)) {
        $(".form11").addClass("future");
    } else if (currentTime.isSame(timeThree)) {
        $(".form11").addClass("present");
    };
    timeFour = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(timeFour)) {
        $(".form12").addClass("past");
    } else if (currentTime.isBefore(timeFour)) {
        $(".form12").addClass("future");
    } else if (currentTime.isSame(timeFour)) {
        $(".form12").addClass("present");
    };
    timeFive = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(timeFive)) {
        $(".form1").addClass("past");
    } else if (currentTime.isBefore(timeFive)) {
        $(".form1").addClass("future");
    } else if (currentTime.isSame(timeFive)) {
        $(".form1").addClass("present");
    };
    timeSix = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(timeSix)) {
        $(".form2").addClass("past");
    } else if (currentTime.isBefore(timeSix)) {
        $(".form2").addClass("future");
    } else if (currentTime.isSame(timeSix)) {
        $(".form2").addClass("present");
    };
    timeSeven = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(timeSeven)) {
        $(".form3").addClass("past");
    } else if (currentTime.isBefore(timeSeven)) {
        $(".form3").addClass("future");
    } else if (currentTime.isSame(timeSeven)) {
        $(".form3").addClass("present");
    };
    timeEight = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(timeEight)) {
        $(".form4").addClass("past");
    } else if (currentTime.isBefore(timeEight)) {
        $(".form4").addClass("future");
    } else if (currentTime.isSame(timeEight)) {
        $(".form4").addClass("present");
    };
    timeNine = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(timeNine)) {
        $(".form5").addClass("past");
    } else if (currentTime.isBefore(timeNine)) {
        $(".form5").addClass("future");
    } else if (currentTime.isSame(timeNine)) {
        $(".form5").addClass("present");
    };
}
testingTime();
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test Loop
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}

$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
