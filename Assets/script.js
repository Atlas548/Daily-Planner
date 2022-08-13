// Moment Declaration for date and time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Rounds the current time to the nearest hour 
currentTime = currentTime.startof("hour");
// Calculates the start of the day & return to 9am
var timeBefore = moment().startof('day').add(9, "hours");

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

