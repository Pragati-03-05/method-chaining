// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//143545000
function computeAmount() {
  this.result = 0;
  this.lacs = function (x) {
    this.result = this.result + x * Math.pow(10, 5);
    return this;
  };
  this.crore = function (x) {
    this.result = this.result + x * Math.pow(10, 7);
    return this;
  };
  this.thousand = function (x) {
    this.result = this.result + x * Math.pow(10, 3);
    return this;
  };
  this.value = function () {
    return this.result;
  };
  return this;
}
let dd = computeAmount();
let total = dd
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();
console.log('11111111111111', total);
