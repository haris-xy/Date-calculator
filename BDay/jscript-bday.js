document.querySelector('#doMathBtn').addEventListener('click', run)

function run() {
// Input values of date and month 
  let day = Number(document.querySelector('#myDayList').value)  
  let month = Number(document.querySelector('#myMonthList').value)
// variables for calculation and alerts
  let calculateOne = 0;
  let messageAlert = "Try a proper date.";
// varibales for seasons
  let season;
  let firstDayOf;

  // checking if the dates are proper
if (day > 31) {
    alert(messageAlert)  
} else if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
 alert(messageAlert)
} else if (day > 29 && month == 2) {
 alert(messageAlert)
} else {

  // Calculations of month
switch (month) {
    case 1:
        calculateOne = day + calculateOne;       
        monthName = "January";
        break;

    case 2:
        calculateOne = day + 31;
        monthName = "February";
        break;

    case 3:
        calculateOne = day + 59;
        monthName = "March";
        break;

    case 4:
        calculateOne = day + 90;
        monthName = "April";
        break;

    case 5:
        calculateOne = day + 120;
        monthName = "May";
        break;


    case 6:
        calculateOne = day + 151;
        monthName = "June";
        break;
    
    case 7:
        calculateOne = day + 181;
        monthName = "July";
        break;

    case 8:
        calculateOne = day + 212;
        monthName = "August";
        break;

    case 9:
        calculateOne = day + 243;
        monthName = "September";
        break;

    case 10:
        calculateOne = day + 273;
        monthName = "October";  
        break;

    case 11:
        calculateOne = day + 304;
        monthName = "November";      
        break;

    case 12:
        calculateOne = day + 334;
        monthName = "December";
        break;

    default:
        calculateOne = messageAlert;
        monthName = "";
}


// Caluclation of the season 
if (calculateOne <= 79 || calculateOne >= 354 ) {
    season = "Winter";
} else if (calculateOne >= 79 && calculateOne < 172) {
    season = "Spring";    
} else if (calculateOne >= 172 && calculateOne < 265) {
    season = "Summer";
} else if (calculateOne >= 265 && calculateOne < 354) {
    season = "Fall";
}

// Calculation of the first day of the season
    switch (calculateOne) {
        case 79:
        firstDayOf = "Spring"
        break;
        
        case 172:
        firstDayOf = "Summer"
        break;

        case 265:
        firstDayOf = "Fall"
        break;
        
        case 354:
        firstDayOf = "Winter"    
        break;

        default:
        firstDayOf = "";
        break;
    }

    let outputMsg;
    
    document.getElementById("placeToYell").innerHTML = `You were born on the ${calculateOne} day of the year, in the month of ${monthName}, day ${day}, and the season was ${season}.`;

    
    console.log(firstDayOf);
    console.log(season);
    console.log(monthName);
    console.log(day);
    console.log(calculateOne);
    console.log(month);
    let url = 'https://api.nasa.gov/planetary/apod?api_key=p5hzB7zv7TWGmQRVeA6lR9cj3eSelvrYrcXS7et1&date=2020-'
    let newDate = month + "-" + day    
    fetch(url + newDate)
  .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data.url);
    document.querySelector('#nasaImg').src = data.url})
    .catch(err => {
        console.log(`error ${err}`)
    });}
    
}


//p5hzB7zv7TWGmQRVeA6lR9cj3eSelvrYrcXS7et1
    // const url = '"https://api.nasa.gov/planetary/apod?api_key=p5hzB7zv7TWGmQRVeA6lR9cj3eSelvrYrcXS7et1"'
//   // Getting a photo of the day from NASA.
//   document.querySelector('#getPhoto').addEventListener('click', getNasaPhoto)
  
//   function getNasaPhoto(){


  