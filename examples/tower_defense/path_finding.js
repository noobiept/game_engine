var PathFinding;
(function(PathFinding) {


var TYPE = {
    passable: 1,
    blocked: 0
};


/**
 * Calculate the path the creeps need to take to get to the end position.
 * We start at the end position, and spread from there.
 */
PathFinding.getPath = function( mapInfo )
{
var end = {
        column: mapInfo.end.column,
        line: mapInfo.end.line
    };
var frontier = [ end ];
var cameFrom = [];

    // construct a 2 dimension array, where the value is a column/line position, which tells the creeps where to go next.
for (var line = 0 ; line < mapInfo.lines ; line++)
    {
    cameFrom[ line ] = [];

    for (var column = 0 ; column < mapInfo.columns ; column++)
        {
        cameFrom[ line ][ column ] = null;
        }
    }

cameFrom[ end.line ][ end.column ] = end;


    // go through all the passable positions
while( frontier.length > 0 )
    {
    var current = frontier.pop();
    var neighbors = getNeighbors( current, mapInfo );

    for (var a = 0 ; a < neighbors.length ; a++)
        {
        var next = neighbors[ a ];

            // check if we've being through this position
        if ( !cameFrom[ next.line ][ next.column ] )
            {
            frontier.push( next );

            cameFrom[ next.line ][ next.column ] = current;
            }
        }
    }

return cameFrom;
};


/**
 * Get the neighbor positions (top/bottom/left/right).
 */
function getNeighbors( position, mapInfo )
{
var neighbors = [];
var column = position.column;
var line = position.line;
var map = mapInfo.map;

var leftColumn = column - 1;
var rightColumn = column + 1;
var topLine = line - 1;
var bottomLine = line + 1;

    // check the position to the left
if ( column > 0 &&
     map[ line ][ leftColumn ] === TYPE.passable )
    {
    neighbors.push({
            column: leftColumn,
            line: line
        });
    }

    // check the position to the right
if ( column + 1 < mapInfo.columns &&
     map[ line ][ rightColumn ] === TYPE.passable )
    {
    neighbors.push({
            column: rightColumn,
            line: line
        });
    }

    // check the position to the top
if ( line > 0 &&
     map[ topLine ][ column ] === TYPE.passable )
    {
    neighbors.push({
            column: column,
            line: topLine
        });
    }

    // check the position in the bottom
if ( line + 1 < mapInfo.lines &&
     map[ bottomLine ][ column ] === TYPE.passable )
    {
    neighbors.push({
            column: column,
            line: bottomLine
        });
    }

return neighbors;
}


})(PathFinding || (PathFinding = {}));