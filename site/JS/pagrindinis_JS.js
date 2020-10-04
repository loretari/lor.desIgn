var today = new Date;

Date.prototype.getMonthText = (function() {
  var months = ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];
  return months[this.getMonth()];
});


var month = today.getMonthText();
var day = today.getDate();
var year = today.getFullYear();

document.getElementById("month").innerHTML = month;
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;


