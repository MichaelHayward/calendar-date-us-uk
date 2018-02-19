function createDate() {
	let today = new Date().toString();
	let dayOfWeek = today.substr(0, 3);
	if (dayOfWeek === 'Mon') {
		dayOfWeek = 'Monday';
	} else if (dayOfWeek === 'Tue') {
		dayOfWeek = 'Tuesday';
	} else if (dayOfWeek === 'Wed') {
		dayOfWeek = 'Wednesday';
	} else if (dayOfWeek === 'Thu') {
		dayOfWeek = 'Thursday';
	} else if (dayOfWeek === 'Fri') {
		dayOfWeek = 'Friday';
	} else if (dayOfWeek === 'Sat') {
		dayOfWeek = 'Saturday';
	} else if (dayOfWeek === 'Sun') {
		dayOfWeek = 'Sunday';
	}
	let nameOfMonth = today.substr(4, 3);
	if (nameOfMonth === 'Jan') {
		nameOfMonth = 'January';
	} else if (nameOfMonth === 'Feb') {
		nameOfMonth = 'February';
	} else if (nameOfMonth === 'Mar') {
		nameOfMonth = 'March';
	} else if (nameOfMonth === 'Apr') {
		nameOfMonth = 'April';
	} else if (nameOfMonth === 'May') {
		nameOfMonth = 'May';
	} else if (nameOfMonth === 'Jun') {
		nameOfMonth = 'June';
	} else if (nameOfMonth === 'Jul') {
		nameOfMonth = 'July';
	} else if (nameOfMonth === 'Aug') {
		nameOfMonth = 'August';
	} else if (nameOfMonth === 'Sep') {
		nameOfMonth = 'September';
	} else if (nameOfMonth === 'Oct') {
		nameOfMonth = 'October';
	} else if (nameOfMonth === 'Nov') {
		nameOfMonth = 'November';
	} else if (nameOfMonth === 'Dec') {
		nameOfMonth = 'December';
	}
	let dayOfMonth = today.substr(8, 2);
	if (dayOfMonth[0] === '0') {
		dayOfMonth = dayOfMonth.substr(1, 1);
	}
	if (dayOfMonth === '1' || dayOfMonth === '21' || dayOfMonth === '31') {
		dayOfMonth = dayOfMonth + 'st';
	}
	let lastChar = dayOfMonth[dayOfMonth.length - 1];
	if (lastChar === '2' && dayOfMonth !== '12') {
		dayOfMonth = dayOfMonth + 'nd';
	}
	if (lastChar === '3' && dayOfMonth !== '13') {
		dayOfMonth = dayOfMonth + 'rd';
	}
	if (lastChar === '0' 	||lastChar === '4' 		|| lastChar === '5' 	
	|| lastChar === '6' 	|| lastChar === '7' 	|| lastChar === '8' 	
	|| lastChar === '9' 	|| dayOfMonth === '11' 	|| dayOfMonth === '12' 
	|| dayOfMonth === '13') {
		dayOfMonth = dayOfMonth + 'th';
	}
	let currentYear = today.substr(11, 4);
	let englishDate = `${dayOfWeek}, ${dayOfMonth} of ${nameOfMonth}, ${currentYear}`;
	document.getElementById('outputBox').innerHTML = englishDate;
	let americanDate = `${dayOfWeek}, ${nameOfMonth} ${dayOfMonth}, ${currentYear}`;
	document.getElementById('outputBox2').innerHTML = americanDate;
}
createDate();