function sortTable(columnIndex) {
    const table = document.querySelector('.table-sortable tbody');
    const rows = Array.from(table.rows);
    const isAscending = table.getAttribute('data-sort-order') === 'asc';
    const direction = isAscending ? -1 : 1;

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        
        if (!isNaN(cellA) && !isNaN(cellB)) {
            return direction * (parseFloat(cellA) - parseFloat(cellB));
        }
        return cellA < cellB ? -direction : cellA > cellB ? direction : 0;
    });

    table.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
    table.append(...rows);
}