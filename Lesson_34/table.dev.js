"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function sortTable(columnIndex) {
  var table = document.querySelector('.table-sortable tbody');
  var rows = Array.from(table.rows);
  var isAscending = table.getAttribute('data-sort-order') === 'asc';
  var direction = isAscending ? -1 : 1;
  rows.sort(function (rowA, rowB) {
    var cellA = rowA.cells[columnIndex].innerText.toLowerCase();
    var cellB = rowB.cells[columnIndex].innerText.toLowerCase();

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return direction * (parseFloat(cellA) - parseFloat(cellB));
    }

    return cellA < cellB ? -direction : cellA > cellB ? direction : 0;
  });
  table.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
  table.append.apply(table, _toConsumableArray(rows));
}