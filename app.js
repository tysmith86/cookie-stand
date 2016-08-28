'use strict';
// creates empty array to store each store for rendering
var stores = [];

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
    // console.log('Cookies per hour', hourly);
    this.cookies.push(hourly);
  }
};

// generates cookies per day
Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < this.timeOfDay.length - 1; i++) {
    this.totalCookies += this.cookies[i];
    // console.log('Total cookies:', this.totalCookies);
  }
};

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var row;
var table;
var main;

// creates new row for each store
Store.prototype.render = function() {
  this.cookiesPerHour();
  this.cookiesPerDay();

  var tr = document.createElement('tr');
  var th = document.createElement('th');

  th.textContent = this.store;
  tr.appendChild(th);

  for(var i = 0; i < this.timeOfDay.length - 1; i++) {
    var td = document.createElement('td');
    td.textContent = this.cookies[i];
    tr.appendChild(td);
  }
  // create new td element for the totals, and append this element to tr
  var total = document.createElement('td');
  total.textContent = this.totalCookies;
  tr.appendChild(total);
  return tr;
};

// function to create the table using the return values from the render method
function createTable() {
  main  = document.getElementById('sales_data');
  table = document.createElement('table');
  var tableHeader = document.createElement('tr');
  for(var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.textContent = hours[i];
    tableHeader.appendChild(th);
  }
  // creates new th element for the total column header, and appends to row
  var total = document.createElement('th');
  total.textContent = 'Total';
  tableHeader.appendChild(total);
  table.appendChild(tableHeader);
  for(i = 0; i < stores.length; i++){
    row = stores[i].render();
    table.appendChild(row);
  }

  createTotalsRow();
  main.appendChild(table);
};

var hourlyCookies;
var hourlyTotal;
var hourlyRow = document.createElement('tr');
var totalHeader = document.createElement('th')

function createTotalsRow() {
  totalHeader.textContent = 'Hourly Total';
  hourlyRow.appendChild(totalHeader);
  for(var i = 0; i < hours.length - 1; i++) {
    hourlyCookies = 0;
    for(var j = 0; j < stores.length; j++) {
      hourlyCookies += stores[j].cookies[i];
    }
    hourlyTotal = document.createElement('td');
    hourlyTotal.textContent = hourlyCookies;
    hourlyRow.appendChild(hourlyTotal);
    table.appendChild(hourlyRow);
    console.log('Hourly Total:', hourlyCookies);
  }
}

var newStore;

// get form
var newStoreForm = document.getElementById('create_store');

// add listener
newStoreForm.addEventListener('submit', submitStore);

function submitStore() {
  var store = event.target.store_name.value;
  var minCust = Number(event.target.min_cust.value);
  var maxCust = Number(event.target.max_cust.value);
  var avgCookies = Number(event.target.avg_cookies.value);



// event handler
  event.preventDefault();
  newStore = new Store(store, minCust, maxCust, avgCookies);
  newStore.render();
  row = stores[stores.length - 1].render();
  table.appendChild(row);

  event.target.store_name.value = null;
  event.target.max_cust.value = null;
  event.target.min_cust.value = null;
  event.target.avg_cookies.value = null;
  hourlyRow.textContent = null;
  // table.removeChild(hourlyRow);
  createTotalsRow();
};

// creates each store object
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.3);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

createTable();
