'use strict';

var pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookies: 0,
  avgCookies: 6.3,
  totalCookies: 0,
  timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    this.cookies = this.generateRandom() * this.avgCookies;
    console.log('Cookies per hour', this.cookies);
    return this.cookies;
  },
  cookiesPerDay: function() {
    // for (var i = 0; i < this.timeOfDay.length; i++) {
    this.totalCookies += this.cookiesPerHour();
    console.log('Total ' + this.totalCookies);
    // }
    return this.totalCookies;
  },
  render: function() {
    var cookieTotal = this.cookiesPerDay();
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var main = document.getElementById('store_info');
    ul.appendChild(h2);
    // loops through and adds cookies per hour for each hour
    for (var j = 0; j < this.timeOfDay.length; j++) {
      var hourly = this.cookiesPerHour();
      var li = document.createElement('li');
      cookieTotal += this.cookiesPerDay();

      h2.textContent = this.store;
      main.appendChild(ul);

      li.textContent = this.timeOfDay[j] + ': ' + hourly;
      ul.appendChild(li);
    }
    console.log('cookie total', cookieTotal);
    li.textContent = 'Total: ' + cookieTotal;
  }
};
pike.render();

// var seatac = {
//   store: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return this.generateRandom() * this.avgCookies;
//   },
//   cookiesPerDay: function() {
//     for (var i = 0; i <= this.timeOfDay.length; i++) {
//       this.totalCookies += this.cookiesPerHour();
//     }
//     return this.totalCookies;
//   },
//   render: function() {
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     var main = document.getElementById('store_info');
//     ul.appendChild(h2);
//     // loops through and adds cookies per hour for each hour
//     for (var j = 0; j < this.timeOfDay.length; j++) {
//       var li = document.createElement('li');
//
//       h2.textContent = this.store;
//       main.appendChild(ul);
//
//       li.textContent = this.timeOfDay[j] + ': ' + this.cookiesPerHour() + ' cookies';
//       ul.appendChild(li);
//     }
//     li.textContent = 'Total: ' + this.cookiesPerDay() + ' cookies';
//   }
// };
// seatac.render();
//
// var seattleCenter = {
//   store: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return this.generateRandom() * this.avgCookies;
//   },
//   cookiesPerDay: function() {
//     for (var i = 0; i <= this.timeOfDay.length; i++) {
//       this.totalCookies += this.cookiesPerHour();
//     }
//     return this.totalCookies;
//   },
//   render: function() {
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     var main = document.getElementById('store_info');
//     ul.appendChild(h2);
//     // loops through and adds cookies per hour for each hour
//     for (var j = 0; j < this.timeOfDay.length; j++) {
//       var li = document.createElement('li');
//
//       h2.textContent = this.store;
//       main.appendChild(ul);
//
//       li.textContent = this.timeOfDay[j] + ': ' + this.cookiesPerHour() + ' cookies';
//       ul.appendChild(li);
//     }
//     li.textContent = 'Total: ' + this.cookiesPerDay() + ' cookies';
//   }
// };
// seattleCenter.render();
//
// var capitolHill = {
//   store: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return this.generateRandom() * this.avgCookies;
//   },
//   cookiesPerDay: function() {
//     for (var i = 0; i <= this.timeOfDay.length; i++) {
//       this.totalCookies += this.cookiesPerHour();
//     }
//     return this.totalCookies;
//   },
//   render: function() {
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     var main = document.getElementById('store_info');
//     ul.appendChild(h2);
//     // loops through and adds cookies per hour for each hour
//     for (var j = 0; j < this.timeOfDay.length; j++) {
//       var li = document.createElement('li');
//
//       h2.textContent = this.store;
//       main.appendChild(ul);
//
//       li.textContent = this.timeOfDay[j] + ': ' + this.cookiesPerHour() + ' cookies';
//       ul.appendChild(li);
//     }
//     li.textContent = 'Total: ' + this.cookiesPerDay() + ' cookies';
//   }
// };
// capitolHill.render();
//
// var alki = {
//   store: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     return this.generateRandom() * this.avgCookies;
//   },
//   cookiesPerDay: function() {
//     for (var i = 0; i <= this.timeOfDay.length; i++) {
//       this.totalCookies += this.cookiesPerHour();
//     }
//     return this.totalCookies;
//   },
//   render: function() {
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     var main = document.getElementById('store_info');
//     ul.appendChild(h2);
//     // loops through and adds cookies per hour for each hour
//     for (var j = 0; j < this.timeOfDay.length; j++) {
//       var li = document.createElement('li');
//
//       h2.textContent = this.store;
//       main.appendChild(ul);
//
//       li.textContent = this.timeOfDay[j] + ': ' + this.cookiesPerHour() + ' cookies';
//       ul.appendChild(li);
//     }
//     li.textContent = 'Total: ' + this.cookiesPerDay() + ' cookies';
//   }
// };
// alki.render();
