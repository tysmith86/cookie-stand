'use strict';

var stores = [];
// Object concstructor
function Store(store, minCust, maxCust, avgCookies) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookies = [];
  this.totalCookies = 0;
  this.timeOfDay = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  stores.push(this);
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



Store.prototype.render = function() {
  this.cookiesPerHour();
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.store;
  tr.appendChild(th);
  for(var i = 0; i < this.timeOfDay.length - 1; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookies[i];
    tr.appendChild(td);
  }
  console.log(tr);
  return tr;
};

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function createTable() {
  // storing sales_data in main
  var main = document.getElementById('sales_data');
  // make table and header row
  var table = document.createElement('table');
  var tableHeader = document.createElement('tr');

  for(var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.textContent = hours[i];
    tableHeader.appendChild(th);
  }

  table.appendChild(tableHeader);

  for(i = 0; i < stores.length; i++){
    var row = stores[i].render();
    table.appendChild(row);
  }

  main.appendChild(table);
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
createTable();
