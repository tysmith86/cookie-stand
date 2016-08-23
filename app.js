'use strict';

// Object concstructor
function Store(store, minCust, maxCust, avgCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookies = [];
  this.totalCookies = 0;
  this.timeOfDay = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
};

// generate random number between min and max customers per hour
Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// generates cookies per hour and stores in array
Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < this.timeOfDay.length - 1; i++) {
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

// renders table with data
Store.prototype.render = function() {
  this.cookiesPerHour();
  this.cookiesPerDay();
  console.log('Render',this.cookies, this.totalCookies);

  // create table
  var salesTable = document.createElement('table');

  // create thead
  var salesHead = document.createElement('thead');
  var tableRow = document.createElement('tr');
  var headerContent = this.timeOfDay;

  for (var i = 0; i < this.timeOfDay.length; i++) {
    var th = document.createElement('th');
    th.textContent = headerContent[i];
    tableRow.appendChild(th);
  };

  salesHead.appendChild(tableRow);
  salesTable.appendChild(salesHead);

  // create tbody
  var bodyContent = this.cookies;
  var tbody = document.createElement('tbody');
  var bodyRow = document.createElement('tr');
  var rowHeader = document.createElement('th');

  rowHeader.textContent = this.store;
  bodyRow.appendChild(rowHeader);

  for (var j = 0; j < this.timeOfDay.length; j++) {
    var td = document.createElement('td');
    td.textContent = bodyContent[j];
    bodyRow.appendChild(td);
  };

  tbody.appendChild(bodyRow);
  salesTable.appendChild(tbody);

  // adding table to dom
  var main = document.getElementById('sales_data');
  main.appendChild(salesTable);
};


var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.3);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
pike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();
