git 'use strict';

var pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookies: [], // initialize cookies per hour array
  avgCookies: 6.3,
  totalCookies: 0,
  timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  // generate random method
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // cookies per hour method
  cookiesPerHour: function() {
    for (var i = 0; i < this.timeOfDay.length; i++) {
      var hourly = this.generateRandom() * this.avgCookies;
      console.log('Cookies per hour', hourly);
      this.cookies.push(hourly); // store cookies per hour in array
    }
  },
  // cookies per day method
  cookiesPerDay: function() {
    for (var j = 0; j < this.cookies.length; j++) {
      this.totalCookies += this.cookies[j];
      console.log('Total cookies:', this.totalCookies);
    }
    return this.totalCookies;
  }


};
