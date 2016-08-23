'use strict';

// Object concstructor
function Store(store, minCust, maxCust, avgCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookies = [];
  this.totalCookies = 0;
  this.timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
};

// generate random number between min and max customers per hour
Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// generates cookies per hour and stores in array
Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < this.timeOfDay.length; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgCookies);
    console.log('Cookies per hour', hourly);
    this.cookies.push(hourly); // stores cookies per hour in array
  }
};

// generates cookies per day
Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < this.cookies.length; i++) {
    this.totalCookies += this.cookies[i];
    console.log('Total cookies:', this.totalCookies);
  }
};


Store.prototype.render = function() {
  this.cookiesPerHour();
  this.cookiesPerDay();
  console.log('Render',this.cookies, this.totalCookies);

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
};


var pike = new Store('1st and Pike', 23, 65, 6.3);
console.log(pike);
pike.render();

//   render: function() {
//     // calls previous methods so their output is usable in the render function
//     pike.cookiesPerHour();
//     pike.cookiesPerDay();
//     // create new elements
//     var main = document.getElementById('store_info');
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     // adds header
//     h2.textContent = this.store;
//     main.appendChild(ul);
//     // adds list to page under h2
//     ul.appendChild(h2);
//     // loops through each hour, adding list items
//     for (var k = 0; k <= this.cookies.length; k++) {
//       var li = document.createElement('li');
//       li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
//       ul.appendChild(li);
//     }
//     // adds list item for total cookies
//     li.textContent = 'Total: ' + this.totalCookies + ' cookies';
//
//     console.log('Total:', this.totalCookies);
//   }
// };

// cookiesPerHour: function() {
//   for (var i = 0; i < this.timeOfDay.length; i++) {
//


// cookiesPerDay: function() {
//   this.totalCookies = 0; // resets variable
//   for (var j = 0; j < this.cookies.length; j++) {
//     this.totalCookies += this.cookies[j];
//     console.log('Total cookies:', this.totalCookies);
  // }
// 1st and Pike
// var pike = {
//   store: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   cookies: [], // initialize cookies per hour array
//   avgCookies: 6.3,
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  // // generate random method
  // generateRandom: function() {
  //   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // cookies per hour method
//     }
//   },
//   // cookies per day method
//   },
//   // method to render list to browser
// pike.render();

// // SeaTac Airport
// var seaTac = {
//   store: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookies: [], // initialize cookies per hour array
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   // generate random method
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // cookies per hour method
//   cookiesPerHour: function() {
//     for (var i = 0; i < this.timeOfDay.length; i++) {
//
//       var hourly = Math.floor(this.generateRandom() * this.avgCookies);
//       console.log('Cookies per hour', hourly);
//       this.cookies.push(hourly); // store cookies per hour in array
//     }
//   },
//   // cookies per day method
//   cookiesPerDay: function() {
//     for (var j = 0; j < this.cookies.length; j++) {
//       this.totalCookies += this.cookies[j];
//       console.log('Total cookies:', this.totalCookies);
//     }
//     return this.totalCookies; // this code may not be neccessary since this function updates a variable
//   },
//   // method to render list to browser
//   render: function() {
//     // calls previous methods so their output is usable in the render function
//     seaTac.cookiesPerHour();
//     seaTac.cookiesPerDay();
//     // create new elements
//     var main = document.getElementById('store_info');
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     // adds header
//     h2.textContent = this.store;
//     main.appendChild(ul);
//     // adds list to page under h2
//     ul.appendChild(h2);
//     // loops through each hour, adding list items
//     for (var k = 0; k <= this.cookies.length; k++) {
//       var li = document.createElement('li');
//       li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
//       ul.appendChild(li);
//     }
//     // adds list item for total cookies
//     li.textContent = 'Total: ' + this.totalCookies + ' cookies';
//
//     console.log('Total:', this.totalCookies);
//   }
// };
// seaTac.render();
//
// // Seattle Center
// var seattleCenter = {
//   store: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookies: [], // initialize cookies per hour array
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   // generate random method
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // cookies per hour method
//   cookiesPerHour: function() {
//     for (var i = 0; i < this.timeOfDay.length; i++) {
//
//       var hourly = Math.floor(this.generateRandom() * this.avgCookies);
//       console.log('Cookies per hour', hourly);
//       this.cookies.push(hourly); // store cookies per hour in array
//     }
//   },
//   // cookies per day method
//   cookiesPerDay: function() {
//     for (var j = 0; j < this.cookies.length; j++) {
//       this.totalCookies += this.cookies[j];
//       console.log('Total cookies:', this.totalCookies);
//     }
//     return this.totalCookies; // this code may not be neccessary since this function updates a variable
//   },
//   // method to render list to browser
//   render: function() {
//     // calls previous methods so their output is usable in the render function
//     seattleCenter.cookiesPerHour();
//     seattleCenter.cookiesPerDay();
//     // create new elements
//     var main = document.getElementById('store_info');
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     // adds header
//     h2.textContent = this.store;
//     main.appendChild(ul);
//     // adds list to page under h2
//     ul.appendChild(h2);
//     // loops through each hour, adding list items
//     for (var k = 0; k <= this.cookies.length; k++) {
//       var li = document.createElement('li');
//       li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
//       ul.appendChild(li);
//     }
//     // adds list item for total cookies
//     li.textContent = 'Total: ' + this.totalCookies + ' cookies';
//
//     console.log('Total:', this.totalCookies);
//   }
// };
// seattleCenter.render();
//
// // Capitol Hill
// var capitolHill = {
//   store: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookies: [], // initialize cookies per hour array
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   // generate random method
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // cookies per hour method
//   cookiesPerHour: function() {
//     for (var i = 0; i < this.timeOfDay.length; i++) {
//
//       var hourly = Math.floor(this.generateRandom() * this.avgCookies);
//       console.log('Cookies per hour', hourly);
//       this.cookies.push(hourly); // store cookies per hour in array
//     }
//   },
//   // cookies per day method
//   cookiesPerDay: function() {
//     for (var j = 0; j < this.cookies.length; j++) {
//       this.totalCookies += this.cookies[j];
//       console.log('Total cookies:', this.totalCookies);
//     }
//     return this.totalCookies; // this code may not be neccessary since this function updates a variable
//   },
//   // method to render list to browser
//   render: function() {
//     // calls previous methods so their output is usable in the render function
//     capitolHill.cookiesPerHour();
//     capitolHill.cookiesPerDay();
//     // create new elements
//     var main = document.getElementById('store_info');
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     // adds header
//     h2.textContent = this.store;
//     main.appendChild(ul);
//     // adds list to page under h2
//     ul.appendChild(h2);
//     // loops through each hour, adding list items
//     for (var k = 0; k <= this.cookies.length; k++) {
//       var li = document.createElement('li');
//       li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
//       ul.appendChild(li);
//     }
//     // adds list item for total cookies
//     li.textContent = 'Total: ' + this.totalCookies + ' cookies';
//
//     console.log('Total:', this.totalCookies);
//   }
// };
// capitolHill.render();
//
// // Alki
// var alki = {
//   store: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookies: [], // initialize cookies per hour array
//   totalCookies: 0,
//   timeOfDay: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   // generate random method
//   generateRandom: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // cookies per hour method
//   cookiesPerHour: function() {
//     for (var i = 0; i < this.timeOfDay.length; i++) {
//
//       var hourly = Math.floor(this.generateRandom() * this.avgCookies);
//       console.log('Cookies per hour', hourly);
//       this.cookies.push(hourly); // store cookies per hour in array
//     }
//   },
//   // cookies per day method
//   cookiesPerDay: function() {
//     for (var j = 0; j < this.cookies.length; j++) {
//       this.totalCookies += this.cookies[j];
//       console.log('Total cookies:', this.totalCookies);
//     }
//     return this.totalCookies; // this code may not be neccessary since this function updates a variable
//   },
//   // method to render list to browser
//   render: function() {
//     // calls previous methods so their output is usable in the render function
//     alki.cookiesPerHour();
//     alki.cookiesPerDay();
//     // create new elements
//     var main = document.getElementById('store_info');
//     var h2 = document.createElement('h2');
//     var ul = document.createElement('ul');
//     // adds header
//     h2.textContent = this.store;
//     main.appendChild(ul);
//     // adds list to page under h2
//     ul.appendChild(h2);
//     // loops through each hour, adding list items
//     for (var k = 0; k <= this.cookies.length; k++) {
//       var li = document.createElement('li');
//       li.textContent = this.timeOfDay[k] + ': ' + this.cookies[k] + ' cookies';
//       ul.appendChild(li);
//     }
//     // adds list item for total cookies
//     li.textContent = 'Total: ' + this.totalCookies + ' cookies';
//
//     console.log('Total:', this.totalCookies);
//   }
// };
// alki.render();
