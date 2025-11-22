//your JS code here. If required.
function daysOfAYear(year) {
	
	if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
		return 366;
	}
	return 365;
}

const value = prompt("Enter the Year : ");
const year = parseInt(value);


if( value === null || isNaN(year)){
	console.log("Invali Input Year , please enter the valid input !");
}
else {
	const ans = daysOfAYear(year);
	console.log(ans);
	alert(ans); 
}
