
console.log("is the script working?")
class CalendariumDate {
	//this.calendarAPI = Calendarium.getAPI("Calendar of Golarion");
	//this.currentDate = this.calendarAPI.getCurrentDate();
	currentDate() {
		let dayOfTheWeek = '';

		switch(this.currentDate.day) {
			case 1:
				dayOfTheWeek = "Moonday"
				break;
			case 2:
				dayOfTheWeek = "Toilday"
				break;
			case 3:
				dayOfTheWeek = "Wealday"
				break;
			case 4:
				dayOfTheWeek = "Oathday"
				break;
			case 5: 
				dayOfTheWeek = "Fireday"
				break;
			case 6:
				dayOfTheWeek = "Starday"
				break;
			case 7:
				dayOfTheWeek = "Sunday"
				break; 
		}

		//return  `${this.currentDate.day}/${this.currentDate.month}/${this.currentDate.year}`
		return  `a`


	}
}
