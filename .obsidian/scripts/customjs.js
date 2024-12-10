

const calendarAPI = Calendarium.getAPI("Calendar of Golarion");
const currentDate = calendarAPI.getCurrentDate(); // this is an object { year: number, month: number, day: number }