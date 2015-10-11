/// <reference path="collision_detection.ts" />
/// <reference path="element.ts" />

module Game
{
export module CollisionDetection
    {
    export interface SpatialPartitionArgs
        {
        canvasWidth: number;
        canvasHeight: number;
        partitions: number;
        }


    /**
     * Useful when there's lots of elements in the game.
     * Need to make sure no element is bigger than the size of a partition.
     *
     * Basic Usage:
     *
     *     var width = 400;
     *     var height = 400;
     *
     *     var collision = new Game.CollisionDetection.SpatialPartition({
     *             canvasWidth: width,
     *             canvasHeight: height,
     *             partitions: 10
     *         });
     *     Game.init( document.body, width, height, collision );
     *
     * Examples -- `collision_spatial_partition`
     */
    export class SpatialPartition implements CollisionDetectionAlgorithm
        {
        _grid: Element[][];     // a grid of linked lists (the first element of the list)
        _grid_size: number;
        _partition_width: number;
        _partition_height: number;


        constructor( args: SpatialPartitionArgs )
            {
            var partitions = args.partitions;

            this._partition_width = args.canvasWidth / partitions;
            this._partition_height = args.canvasHeight / partitions;

            this._grid_size = partitions;
            this._grid = [];

            for (var column = 0 ; column < partitions ; column++)
                {
                this._grid[ column ] = [];

                for (var line = 0 ; line < partitions ; line++)
                    {
                    this._grid[ column ][ line ] = null;
                    }
                }
            }


        /**
         * Add an element to a partition in the grid, based on its current x/y position.
         */
        add( element: Element )
            {
            var column = Math.floor( element.x / this._partition_width );
            var line = Math.floor( element.y / this._partition_height );
            var size = this._grid_size;

                // added outside the canvas, don't add to any partition
            if ( column < 0 || column >= size ||
                 line   < 0 || line   >= size )
                {
                element.collision_data = {
                        column: -1,
                        line: -1,
                        previous: null,
                        next: null
                    };
                }

                // add to the partition's linked list in the beginning
            else
                {
                var oldFirst = this._grid[ column ][ line ];

                this._grid[ column ][ line ] = element;

                element.collision_data = {
                    column: column,
                    line: line,
                    previous: null,
                    next: oldFirst
                };

                if ( oldFirst )
                    {
                    oldFirst.collision_data.previous = element;
                    }
                }
            }


        update( element: Element )
            {
            var nextColumn = Math.floor( element.x / this._partition_width );
            var nextLine = Math.floor( element.y / this._partition_height );
            var collisionData = element.collision_data;
            var size = this._grid_size;


            if ( nextColumn !== collisionData.column ||
                 nextLine   !== collisionData.line )
                {
                this.remove( element );

                    // moved to a position outside the canvas
                if ( nextColumn < 0 || nextColumn >= size ||
                     nextLine   < 0 || nextLine   >= size )
                    {
                    collisionData.column = -1;
                    collisionData.line = -1;
                    collisionData.previous = null;
                    collisionData.next = null;
                    }

                else
                    {
                    var oldFirst = this._grid[ nextColumn ][ nextLine ];

                    collisionData.column = nextColumn;
                    collisionData.line = nextLine;
                    collisionData.previous = null;
                    collisionData.next = oldFirst;

                    this._grid[ nextColumn ][ nextLine ] = element;

                    if ( oldFirst )
                        {
                        oldFirst.collision_data.previous = element;
                        }
                    }
                }
            }


        remove( element: Element )
            {
            var collisionData = element.collision_data;

                // its outside the canvas
            if ( collisionData.column < 0 ||
                 collisionData.line < 0 )
                {
                return;
                }

            var previous = collisionData.previous;
            var next = collisionData.next;

            if ( previous )
                {
                previous.collision_data.next = next;
                }

            if ( next )
                {
                next.collision_data.previous = previous;
                }

            collisionData.previous = null;
            collisionData.next = null;


                // check if this is was the first element on the partition
            var first = this._grid[ collisionData.column ][ collisionData.line ];

            if ( first === element )
                {
                this._grid[ collisionData.column ][ collisionData.line ] = next;
                }
            }


        checkCollision()
            {
            var gridSize = this._grid_size;

            for (var column = 0 ; column < gridSize ; column++)
                {
                for (var line = 0 ; line < gridSize ; line++)
                    {
                    var element = this._grid[ column ][ line ];

                    for( ; element !== null ; element = element.collision_data.next )
                        {
                        if ( element._removed || element.category === 0 )
                            {
                            continue;
                            }

                        this.checkElement( element, element.collision_data.next );

                            // try neighbor partitions as well
                        if ( column > 0 && line > 0 )
                            {
                            this.checkElement( element, this._grid[ column - 1 ][ line - 1 ] );
                            }

                        if ( column > 0 )
                            {
                            this.checkElement( element, this._grid[ column - 1 ][ line ] );
                            }

                        if ( line > 0 )
                            {
                            this.checkElement( element, this._grid[ column ][ line - 1 ] );
                            }

                        if ( column > 0 && line < this._grid_size - 1 )
                            {
                            this.checkElement( element, this._grid[ column - 1 ][ line + 1 ] );
                            }
                        }
                    }
                }
            }


        /**
         * @param element The element to be compared with.
         * @param other First element of the partition linked list.
         */
        checkElement( element: Element, other: Element )
            {
            for ( ; other !== null ; other = other.collision_data.next)
                {
                if ( other._removed || other.category === 0 )
                    {
                    continue;
                    }

                var elementCollidesWithOther = (element.collidesWith & other.category) !== 0;
                var otherCollidesWithElement = (other.collidesWith & element.category) !== 0;

                    // check if they can collide with each other
                if ( elementCollidesWithOther || otherCollidesWithElement )
                    {
                    if ( element.checkCollision( other ) )
                        {
                            // we'll only dispatch the event for the ones that care about it
                        if ( elementCollidesWithOther )
                            {
                            element.dispatchEvent( 'collision', {
                                    element: element,
                                    collidedWith: other
                                });
                            }

                        if ( otherCollidesWithElement )
                            {
                            other.dispatchEvent( 'collision', {
                                    element: other,
                                    collidedWith: element
                                });
                            }
                        }
                    }
                }
            }


        clear()
            {
            for (var column = 0 ; column < this._grid_size ; column++)
                {
                this._grid[ column ].length = 0;
                }

            this._grid.length = 0;
            }
        }
    }
}