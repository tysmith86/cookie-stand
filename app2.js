'use strict';

var pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookies: [], // initialize cookies per hour array
  avgCookies: 6.3,
  totalCookies: 0,
  timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  // generate random method
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // cookies per hour method
  cookiesPerHour: function() {
    for (var i = 0; i < this.timeOfDay.length; i++) {
      var hourly = Math.floor(this.generateRandom() * this.avgCookies);
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
    return this.totalCookies; // this code may not be neccessary since this function updates a variable
  },
  // method to render list to browser
  render: function() {
    // calls previous methods so their output is usable in the render function
    pike.cookiesPerHour();
    pike.cookiesPerDay();
    // create new elements
    var main = document.getElementById('store_info');
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    // adds header
    h2.textContent = this.store;
    main.appendChild(ul);
    // adds list to page under h2
    ul.appendChild(h2);
    // loops through each hour, adding list items
    for (var k = 0; k <= this.cookies.length; k++) {
      var li = document.createElement('li');
      li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
      ul.appendChild(li);
    }
    // adds list item for total cookies
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log('Total:', this.totalCookies);
  }
};
pike.render();
