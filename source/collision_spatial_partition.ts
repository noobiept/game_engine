/// <reference path="collision_detection.ts" />

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


    export class SpatialPartition implements CollisionDetectionAlgorithm
        {
        _grid;
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
                    this._grid[ column ][ line ] = [];
                    }
                }
            }


        add( element: Element )
            {
            var column = Math.floor( element.x / this._partition_width );
            var line = Math.floor( element.y / this._partition_height );

            element.collision_data = {
                column: column,
                line: line
            };

            this._grid[ column ][ line ].push( element );
            }


        update( element: Element )
            {
            var nextColumn = Math.floor( element.x / this._partition_width );
            var nextLine = Math.floor( element.y / this._partition_height );

            if ( nextColumn !== element.column ||
                 nextLine   !== element.line )
                {
                this.remove( element );

                element.collision_data.column = nextColumn;
                element.collision_data.line = nextLine;

                this._grid[ nextColumn ][ nextLine ].push( element );
                }
            }


        remove( element: Element )
            {
            var partitionArray = this._grid[ element.collision_data.column ][ element.collision_data.line ];

            var index = partitionArray.indexOf( element );

            partitionArray.splice( index, 1 );
            }


        checkCollision()
            {
            var gridSize = this._grid_size;

            for (var column = 0 ; column < gridSize ; column++)
                {
                for (var line = 0 ; line < gridSize ; line++)
                    {
                    var partition = this._grid[ column ][ line ];

                    for (var a = 0 ; a < partition.length ; a++)
                        {
                        var element = partition[ a ];

                        this.checkElement( element, partition );

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


        checkElement( element: Element, partition: Element[] )
            {
            for (var a = partition.length - 1 ; a >= 0 ; a--)
                {
                var other = partition[ a ];

                if ( other !== element )
                    {
                    if ( element.checkCollision( other ) )
                        {
                        element.dispatchEvent( 'collision' );
                        other.dispatchEvent( 'collision' );
                        }
                    }
                }
            }
        }
    }
}