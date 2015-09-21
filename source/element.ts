/// <reference path="event_dispatcher.ts" />
/// <reference path="utilities.ts" />

module Game
{
export interface ElementArgs extends EventDispatcherArgs
    {
    x?: number;
    y?: number;
    }


/**
 * Base class for a canvas element. Don't create an object directly.
 *
 * Events:
 *
 * - `click` -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup` -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout` -- `listener( data: { element: Element; } );`
 *
 * @abstract
 */
export class Element extends EventDispatcher
    {
    x: number;
    y: number;

    vertices: CollisionDetection.Vertices;

    opacity: number;    // value between 0 and 1
    visible: boolean;    // whether the element is drawn or not

    scaleX: number;
    scaleY: number;

        // optional properties, only for when using a Grid
    column: number;
    line: number;

    _width: number;
    _height: number;
    _half_width: number;
    _half_height: number;

    _rotation: number;   // in radians (clockwise)
    _container: Container;
    _has_logic: boolean; // to know if we need to run the .logic() method or not
    protected _removed: boolean;  // a reference to this element may be saved in several places, so we need a way to know if its ok to work on the element or not


    constructor( args?: ElementArgs )
        {
        super( args );

        var x = 0;
        var y = 0;

        if ( typeof args !== 'undefined' )
            {
            if ( typeof args.x !== 'undefined' )
                {
                x = args.x;
                }

            if ( typeof args.y !== 'undefined' )
                {
                y = args.y;
                }
            }


        this.x = x;
        this.y = y;
        this._width = this._half_width = 0;
        this._height = this._half_height = 0;

        this.visible = true;
        this.opacity = 1;

        this.scaleX = 1;
        this.scaleY = 1;

        this.column = -1;
        this.line = -1;

        this.vertices = [];
        this._rotation = 0;
        this._container = null;
        this._has_logic = false;
        this._removed = false;
        }


    /**
     * Draws just this element.
     *
     * @param ctx Canvas context.
     * @abstract
     */
    drawElement( ctx: CanvasRenderingContext2D )
        {
        throw new Error( 'Implement .drawElement().' );
        }


    /**
     * Draws this element, and all of its _children.
     *
     * @param ctx Canvas context.
     */
    draw( ctx: CanvasRenderingContext2D )
        {
        this.drawElement( ctx );
        }


    /**
     * Logic code here (runs every update/tick).
     * Set the `_has_logic` property to `true` for this to get called.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    logic( deltaTime: number )
        {
            // optional
        }


    /**
     * Check if the element is within the given x/y position.
     */
    intersect( refX: number, refY: number )
        {
        var parent = this._container;
        var parents = [];
        var elements = [];

            // get all the parent elements
        while ( parent !== null )
            {
            parents.push( parent );

            parent = parent._container;
            }

        var x = 0;
        var y = 0;
        var scaleX = 1;
        var scaleY = 1;

            // starting at the most top level element, and going down until this element
        for (var a = parents.length - 1 ; a >= 0 ; a--)
            {
            parent = parents[ a ];

                // get the combined parent's x/y
            x += parent.x * scaleX;
            y += parent.y * scaleY;

            scaleX *= parent.scaleX;
            scaleY *= parent.scaleY;
            }

        scaleX *= this.scaleX;
        scaleY *= this.scaleY;

        x += (this.x - this._half_width) * scaleX;
        y += (this.y - this._half_height) * scaleY;

        if ( CollisionDetection.pointBox(
                    refX,
                    refY,
                    x,
                    y,
                    this._width * scaleX,
                    this._height * scaleY
                ))
            {
            elements.push( this );
            }

        return elements;
        }


    mouseClickEvents( x, y, event )
        {
        if ( this.hasListeners( event.type ) )
            {
            var elements = this.intersect( x, y );

            if ( elements.length > 0 )
                {
                elements[ 0 ].dispatchMouseClickEvent( event );

                return true;
                }
            }

        return false;
        }


    dispatchMouseOverEvent()
        {
        if ( this._container )
            {
            this._container.dispatchMouseOverEvent();
            }

        this.dispatchEvent( 'mouseover', { element: this } );
        }


    dispatchMouseOutEvent()
        {
        if ( this._container )
            {
            this._container.dispatchMouseOutEvent();
            }

        this.dispatchEvent( 'mouseout', { element: this } );
        }


    dispatchMouseMoveEvent()
        {
        if ( this._container )
            {
            this._container.dispatchMouseMoveEvent();
            }

        this.dispatchEvent( 'mousemove', { element: this } );
        }


    /**
     * @param event Either a mouse up, mouse down or click event.
     */
    dispatchMouseClickEvent( event: MouseEvent )
        {
        if ( this._container )
            {
            this._container.dispatchMouseClickEvent( event );
            }

        this.dispatchEvent( event.type, { event: event } );
        }


    /**
     * @return The element's width.
     */
    getWidth()
        {
        return this._width;
        }


    /**
     * @return The element's height.
     */
    getHeight()
        {
        return this._height;
        }


    /**
     * @param width New width.
     */
    setWidth( width: number )
        {
        this._width = width;
        this._half_width = width / 2;
        }


    /**
     * @param height New height.
     */
    setHeight( height: number )
        {
        this._height = height;
        this._half_height = height / 2;
        }


    /**
     * Set the width and height at the same time.
     */
    setDimensions( width: number, height: number )
        {
        this._width = width;
        this._half_width = width / 2;
        this._height = height;
        this._half_height = height / 2;
        }


    /**
     * @returns Rotation in radians.
     */
    get rotation()
        {
        return this._rotation;
        }


    /**
     * @param angle Rotate by a certain angle (in radians).
     */
    set rotation( angle: number )
        {
        this.rotate( angle, false );
        }


    /**
     * @param angle Angle of rotation.
     * @param degrees Whether the angle provided is in degrees or radians.
     */
    rotate( angle: number, degrees?: boolean )
        {
        if ( degrees === true )
            {
            this._rotation = Math.PI / 180 * angle;
            }

        else
            {
            this._rotation = angle;
            }
        }


    /**
     * Remove this element from the either its container or from the canvas.
     */
    remove()
        {
        if ( !this._removed )
            {
            this._removed = true;

            if ( this._container !== null )
                {
                this._container.removeChild( this );
                this._container = null;
                }

            else
                {
                Game.removeElement( this );
                }
            }
        }


    /**
     * Tells if this element has already been removed or not.
     */
    isRemoved()
        {
        return this._removed;
        }


    /**
     * Create a clone of this element.
     *
     * @abstract
     */
    clone(): Element
        {
        throw new Error( 'Implement .clone().' );
        }


    /**
     * Get the global vertices points of this element.
     * The arguments are the compound values from the parent containers.
     */
    updateVertices( x: number, y: number, scaleX: number, scaleY: number, rotation: number )
        {
        scaleX *= this.scaleX;
        scaleY *= this.scaleY;

        var center = {
                x: x + this.x * scaleX,
                y: y + this.y * scaleY
            };

        var left = center.x - this._half_width * scaleX;
        var right = center.x + this._half_width * scaleX;
        var top = center.y - this._half_height * scaleY;
        var bottom = center.y + this._half_height * scaleY;

        var angle = this._rotation + rotation;

            // in clockwise order
        this.vertices = [
                Vector.rotate( center, { x: left,  y: top    }, angle ), // top left
                Vector.rotate( center, { x: right, y: top    }, angle ), // top right
                Vector.rotate( center, { x: right, y: bottom }, angle ), // bottom right
                Vector.rotate( center, { x: left,  y: bottom }, angle )  // bottom left
            ];
        }


    /**
     * Get the element vertices points. Assumes its a rectangle.
     */
    getVertices()
        {
        return [ this.vertices ];
        }
    }
}