const talkingCalendar = function(date) {
  // convert the date string to an array of strings
  const dateArr = date.split('/');
  const month = convertMonth(parseInt(dateArr[1]));
  let day = 
    // convert the day string to an integer (to get rid of 0 in months less than 10) 
    parseInt(dateArr[2]) + 
    daySuffix(parseInt(dateArr[2]));
  const year = dateArr[0];
  return month + ' ' + day + ', ' + year;  
};

const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const convertMonth = function(numMonth) {
  return monthNames[numMonth -1];
}

const daySuffix = function(numDay) {
  if (numDay === 1 || numDay === 21 || numDay === 31) {
    return 'st';
  } else if (numDay === 2 || numDay === 22) {
    return 'nd';
  } else if (numDay === 3 || numDay === 23) {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));