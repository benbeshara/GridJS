# GridJS
A simple JS library for creating HTML5 Grids

# Usage:
Creating a new Grid:

    let grid = new Grid([
        {'name': 'start-col', 'size': '40px'},
        {'name': 'middle-col', 'size': '20%'},
        {'name': 'end-col', 'size': '20px'}
    ]);

Adding Cells to the Grid:

    grid.addCell({
        'start': 'start-col',
        'end': 'end-col',
        'content': 'This is a new cell!'
    });