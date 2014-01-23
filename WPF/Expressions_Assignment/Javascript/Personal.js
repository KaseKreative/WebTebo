/**
 * Created by KaseTebo on 1/23/14.
 */

var month = prompt("What month is it?").toLowerCase();
var day = parseInt(prompt("What day of the month is it?"));

var howOldAreYou = parseInt(prompt("How old are you?"));

var daysWithoutLeapYear = howOldAreYou*365;

var howManyLeapYears = Math.floor(howOldAreYou/4);

var totalDays = daysWithoutLeapYear + howManyLeapYears;

var jan = 31;
var feb = 28;
var march = 31;
var apr = 30;
var may = 31;
var june = 30;
var jul = 31;
var aug = 31;
var sept = 30;
var oct = 31;
var nov = 30;


if (month == "january"){
    totalDays+= day;
} else if ( month == "february"){
    totalDays+= jan + day;
} else if ( month == "march"){
    var days = jan + feb;
    totalDays+= days + day;
} else if ( month == "april"){
     days = jan + feb + march;
    totalDays += days + day;
} else if ( month == "may"){
    days = jan + feb + march + apr;
    totalDays += days + day;
} else  if ( month == "june"){
    days = jan + feb + march + apr + may;
    totalDays += days + day;
} else if ( month == "july"){
    days = jan + feb + march + apr + may + june;
    totalDays += days + day;
} else if ( month == "august"){
    days = jan + feb + march + apr + may + june + jul;
    totalDays+= days + day;
} else if ( month == "september"){
    days = jan + feb + march + apr + may + june + jul + aug;
    totalDays+= days + day;
} else if ( month == "october"){
    days = jan + feb + march + apr + may + june + jul + aug + sept;
    totalDays += days + day;
} else if ( month == "november"){
    days = jan + feb + march + apr + may + june + jul + aug + sept + oct;
    totalDays += days + day;
} else if ( month == "december"){
    days = jan + feb + march + apr + may + june + jul + aug + sept + oct + nov;
    totalDays += days + day;
}

console.log("You have been alive for: " +totalDays+ " Days");