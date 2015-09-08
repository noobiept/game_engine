QUnit.module( 'Grid' );
QUnit.test( 'Initialize a grid.', function( assert )
{
var columns = 5;
var lines = 10;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

assert.deepEqual( grid.columns, columns );
assert.deepEqual( grid.lines, lines );

assert.deepEqual( grid._grid.length, columns );
assert.deepEqual( grid._grid[ 0 ].length, lines );
assert.deepEqual( grid._grid[ 0 ][ 0 ], null );
});


QUnit.test( 'add()', function( assert )
{
var columns = 5;
var lines = 10;
var value = 'value';

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

    // test some invalid positions
assert.throws( function()
    {
    grid.add( value, columns + 10, 0 );
    }, Error );
assert.throws( function()
    {
    grid.add( value, 0, lines + 10 );
    }, Error );

    // test valid positions
var positions = [
    { column: 0, line: 0 },
    { column: Math.floor( columns / 2 ), line: Math.floor( lines / 2 ) },
    { column: columns - 1, line: lines - 1 }
];

for (var a = 0 ; a < positions.length ; a++)
    {
    var column = positions[ a ].column;
    var line = positions[ a ].line;

    grid.add( value, column, line );
    assert.deepEqual( grid._grid[ column ][ line ], value );
    assert.deepEqual( grid.get( column, line ), value );
    }
});


QUnit.test( 'move()', function( assert )
{
var columns = 5;
var lines = 10;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

    // test some invalid positions
assert.throws( function()
    {
    grid.move( columns + 10, 0, 0, 0 );
    }, Error );
assert.throws( function()
    {
    grid.move( 0, 0, 0, lines + 10 );
    }, Error );

    // test valid positions
var value1 = 'value1';
var value2 = 'value2';

var sourceColumn = 0;
var sourceLine = 1;
var destColumn = 2;
var destLine = 8;

grid.add( value1, sourceColumn, sourceLine );
grid.move( sourceColumn, sourceLine, destColumn, destLine );

assert.deepEqual( grid.get( sourceColumn, sourceLine ), null );
assert.deepEqual( grid.get( destColumn, destLine ), value1 );

grid.add( value2, sourceColumn, sourceLine );
var previous = grid.move( destColumn, destLine, sourceColumn, sourceLine );

assert.deepEqual( previous, value2 );
assert.deepEqual( grid.get( sourceColumn, sourceLine ), value1 );
assert.deepEqual( grid.get( destColumn, destLine ), null );
});


QUnit.test( 'remove()', function( assert )
{
var columns = 10;
var lines = 5;
var value = 'value';

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

assert.throws( function()
    {
    grid.remove( columns, lines );
    }, Error );

var column = 6;
var line = 3;

grid.add( value, column, line );

var previous = grid.remove( column, line );

assert.deepEqual( previous, value );
assert.deepEqual( grid.get( column, line ), null );
});


QUnit.test( 'get()', function( assert )
{
var columns = 4;
var lines = 8;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

var invalidPositions = [
    { column: -1, line: 0 },
    { column: 0, line: -1 },
    { column: columns, line: 0 },
    { column: 0, line: lines }
];

for (var a = 0 ; a < invalidPositions.length ; a++)
    {
    assert.throws( (function( position )
        {
        return function() {
            grid.get( position.column, position.line );
            }
        })(invalidPositions[ a ]), Error );
    }


var value = 'value';
var column = 2;
var line = 3;

grid.add( value, column, line );
assert.deepEqual( grid.get( column, line ), value );
});


QUnit.test( 'isEmpty()', function( assert )
{
var columns = 3;
var lines = 2;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

var column = 0;
var line = 0;

assert.deepEqual( grid.isEmpty( column, line ), true );

grid.add( 'value', column, line );
assert.deepEqual( grid.isEmpty( column, line ), false );

grid.remove( column, line );
assert.deepEqual( grid.isEmpty( column, line ), true );
});


QUnit.test( 'normalizePosition()', function( assert )
{
var columns = 7;
var lines = 3;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

var middleColumn = Math.floor( columns / 2 );
var middleLine = Math.floor( lines / 2 );

var positions = [
        // lower limit
    { givenColumn: -1, givenLine: 0, expectedColumn: 0, expectedLine: 0 },
    { givenColumn: 0, givenLine: -5, expectedColumn: 0, expectedLine: 0 },
    { givenColumn: -2, givenLine: -4, expectedColumn: 0, expectedLine: 0 },

        // upper limit
    { givenColumn: columns, givenLine: 0, expectedColumn: columns - 1, expectedLine: 0 },
    { givenColumn: 0, givenLine: lines, expectedColumn: 0, expectedLine: lines - 1 },
    { givenColumn: columns, givenLine: lines, expectedColumn: columns - 1, expectedLine: lines - 1 },

        // middle
    { givenColumn: middleColumn, givenLine: middleLine, expectedColumn: middleColumn, expectedLine: middleLine }
];

for (var a = 0 ; a < positions.length ; a++)
    {
    var position = positions[ a ];
    var normalized = grid.normalizePosition( position.givenColumn, position.givenLine );

    assert.deepEqual( normalized.column, position.expectedColumn );
    assert.deepEqual( normalized.line, position.expectedLine );
    }
});


QUnit.test( 'isInGrid()', function( assert )
{
var columns = 3;
var lines = 9;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

var positions = [
    { column: -1, line: 0, expect: false },
    { column: 0, line: -1, expect: false },
    { column: -1, line: -2, expect: false },
    { column: 0, line: 0, expect: true },
    { column: columns - 1, line: lines - 1, expect: true },
    { column: columns, line: 0, expect: false },
    { column: 0, line: lines, expect: false }
];

for (var a = 0 ; a < positions.length ; a++)
    {
    var position = positions[ a ];
    var result = grid.isInGrid( position.column, position.line );

    assert.deepEqual( result, position.expect );
    }
});


QUnit.test( 'getRandomPosition()', function( assert )
{
var grid = new Game.Grid({
        columns: 8,
        lines: 4
    });
var tries = 20;

for (var a = 0 ; a < tries ; a++)
    {
    var position = grid.getRandomPosition();

    assert.deepEqual( grid.isInGrid( position.column, position.line ), true );
    }
});


QUnit.test( 'getRandomEmptyPosition()', function( assert )
{
var grid = new Game.Grid({
        columns: 12,
        lines: 8
    });
var tries = 20;

for (var a = 0 ; a < tries ; a++)
    {
    var position = grid.getRandomPosition();

    assert.deepEqual( grid.isEmpty( position.column, position.line ), true );
    }
});


QUnit.test( 'getEmptyPositions()', function( assert )
{
var grid = new Game.Grid({
        columns: 2,
        lines: 3
    });
var value = 'value';

grid.add( value, 0, 0 );
grid.add( value, 1, 2 );
grid.add( value, 1, 1 );

var emptyPositions = [
    { column: 0, line: 1 },
    { column: 0, line: 2 },
    { column: 1, line: 0 }
];

assert.deepEqual( grid.getEmptyPositions(), emptyPositions );
});


QUnit.test( 'getNeighbors()', function( assert )
{
var columns = 10;
var lines = 10;

var grid = new Game.Grid({
        columns: columns,
        lines: lines
    });

    // add a value to every position
    // the value is a string with the column number and the line number
for (var column = 0 ; column < columns ; column++)
    {
    for (var line = 0 ; line < lines ; line++)
        {
        grid.add( String( column ) + String( line ), column, line );
        }
    }


var positions = [
        // ---- range 1 ----

        // corner positions
    { column: 0, line: 0, neighbors: [ '01', '10', '11' ] },
    { column: 9, line: 0, neighbors: [ '80', '81', '91' ] },
    { column: 0, line: 9, neighbors: [ '08', '18', '19' ] },
    { column: 9, line: 9, neighbors: [ '88', '89', '98' ] },

        // side positions
    { column: 0, line: 1, neighbors: [ '00', '02', '10', '11', '12' ] },
    { column: 1, line: 0, neighbors: [ '00', '01', '11', '20', '21' ] },
    { column: 9, line: 1, neighbors: [ '80', '81', '82', '90', '92' ] },
    { column: 1, line: 9, neighbors: [ '08', '09', '18', '28', '29' ] },

        // center position
    { column: 5, line: 5, neighbors: [ '44', '45', '46', '54', '56', '64', '65', '66' ] },

        // ---- range 2 ----

    { column: 9, line: 9, range: 2, neighbors: [ '77', '78', '79', '87', '88', '89', '97', '98' ] },
    { column: 0, line: 8, range: 2, neighbors: [ '06', '07', '09', '16', '17', '18', '19', '26', '27', '28', '29' ] },
    { column: 2, line: 2, range: 2, neighbors: [ '00', '01', '02', '03', '04', '10', '11', '12', '13', '14', '20', '21', '23', '24', '30', '31', '32', '33', '34', '40', '41', '42', '43', '44' ] }
];


for (var a = 0 ; a < positions.length ; a++)
    {
    var position = positions[ a ];
    var neighbors = grid.getNeighbors( position.column, position.line, position.range );

    assert.deepEqual( neighbors, position.neighbors );
    }
});