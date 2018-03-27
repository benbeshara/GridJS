/*
 * Grid.js
 * -------
 * A simple JS library for creating HTML5 grids
 * 
 * USAGE:
 * let grid = new Grid([
 *   {'name': 'start-col', 'size': '40px'},
 *   {'name': 'middle-col', 'size': '20%'},
 *   {'name': 'end-col', 'size': '20px'}
 * ]);
 * 
 * grid.addCell({
 *   'start': 'start-col',
 *   'end': 'end-col',
 *   'content': 'This is a new cell!'
 * });
 */

class Grid {
    constructor(columns){
        this.Grid = this.createGrid(columns);
    }

    createGrid(columns){
        // Sanity Check
        if(typeof(columns) != 'object'){
            console.error('(Grid:createGrid) First parameter \'columns\' must be an array of objects, ' + typeof(columns) + ' found');
            return;
        }

        // Initialise the grid
        let gridContainer = document.createElement('div');
        let columnString = '';

        columns.forEach(column => {
            columnString += '[' + column.name + '] ' + column.size + ' ';
        });

        columnString += '[end]';

        gridContainer.setAttribute('style', 'display: grid; grid-template-columns: ' + columnString);

        return gridContainer;
    }

    addCell(cell){
        // Sanity Check
        if(typeof(cell) != 'object'){
            gdbg('(Grid:addCell) Sanity Check Failed!');
            console.error('(Grid:addCell) First parameter \'cell\' must be an object, ' + typeof(columns) + ' found.');
            return;
        }

        let cellDiv = document.createElement('div');

        cellDiv.setAttribute('style', 'grid-column-start: ' + cell.start + '; grid-column-end: ' + cell.end);

        if(typeof(cell.content) == "object"){
            cellDiv.innerHTML = cell.content.outerHTML;
        } else {
            cellDiv.innerText = cell.content;
        }

        this.Grid.append(cellDiv);
    }
}