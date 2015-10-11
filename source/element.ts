/// <reference path="event_dispatcher.ts" />
/// <reference path="utilities.ts" />
/// <reference path="collision_detection.ts" />
/// <reference path="game.ts" />

module Game
{
export interface ElementArgs extends EventDispatcherArgs
    {
    x?: number;
    y?: number;

        // these are used for collision detection
        // bit identifier, for example: 001, 010, 100, etc (in decimal is 1, 2, 4, 8, 16, etc)
    category?: number;

        // bit flag field, with the category bits above
        // use the bitwise OR operator to set several bits, for example: 2 | 4, sets 0110
    collidesWith?: number;
    }


/**
 * Base class for a canvas element. Don't create an object directly.
 *
 * Events:
 *
 * - `click`     -- `listener( data: { event: MouseEvent; } );`
 * - `mousedown` -- `listener( data: { event: MouseEvent; } );`
 * - `mouseup`   -- `listener( data: { event: MouseEvent; } );`
 * - `mousemove` -- `listener( data: { element: Element; } );`
 * - `mouseover` -- `listener( data: { element: Element; } );`
 * - `mouseout`  -- `listener( data: { element: Element; } );`
 * - `collision` -- `listener( data: element: Element; collidedWith: Element; bullet?: Bullet; );`
 */
export abstract class Element extends EventDispatcher
    {
    vertices: CollisionDetection.Vertices;

    opacity: number;    // value between 0 and 1
    visible: boolean;    // whether the element is drawn or not

    scaleX: number;
    scaleY: number;

    category: number;
    collidesWith: number;

    grid_data: any;         // can be used by a grid class that needs to save extra information in the element
    collision_data: any;    // can be used by a collision detection algorithm

    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;
    protected _half_width: number;
    protected _half_height: number;

    protected _rotation: number;   // in radians (clockwise)
    _container: Container;
    _has_logic: boolean; // to know if we need to run the .logic() method or not
    _removed: boolean;  // a reference to this element may be saved in several places, so we need a way to know if its ok to work on the element or not


    constructor( args?: ElementArgs )
        {
        super( args );

        var x = 0;
        var y = 0;
        var category = 0;
        var collidesWith = 0;

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

            if ( typeof args.category !== 'undefined' )
                {
                category = args.category;
                }

            if ( typeof args.collidesWith !== 'undefined' )
                {
                collidesWith = args.collidesWith;
                }
            }


        this._x = x;
        this._y = y;
        this._width = this._half_width = 0;
        this._height = this._half_height = 0;

        this.visible = true;
        this.opacity = 1;

        this.scaleX = 1;
        this.scaleY = 1;

        this.vertices = null;
        this._rotation = 0;
        this._container = null;
        this._has_logic = false;
        this._removed = false;

        this.category = category;
        this.collidesWith = collidesWith;

        CollisionDetection.addElement( this );
        }


    /**
     * Draws just this element.
     *
     * @param ctx Canvas context.
     */
    abstract drawElement( ctx: CanvasRenderingContext2D );


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
        var elements = [];
        var vertices = this.vertices;

            // check if the vertices were calculated yet (if the element was added this tick/frame, it won't be)
        if ( vertices )
            {
            if ( CollisionDetection.polygonPoint( this.vertices, {  x: refX, y: refY } ) )
                {
                elements.push( this );
                }
            }

        return elements;
        }


    /**
     * Check collision between two elements.
     */
    checkCollision( other: Element )
        {
        var vertices = this.getVertices();
        var otherVertices = other.getVertices();

        if ( !vertices || !otherVertices )
            {
            return false;
            }

        return CollisionDetection.polygonPolygonList( vertices, otherVertices );
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
     * @return The element's width. Doesn't consider the rotation.
     */
    getWidth()
        {
        return this._width;
        }


    /**
     * @return The element's height. Doesn't consider the rotation.
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
     * Calculates an axis-aligned rectangle from the rotated shape.
     */
    toAxisAligned()
        {
        var length = this.vertices.length;

            // hasn't calculated the vertices yet
        if ( length === 0 )
            {
            return null;
            }

        var vertex = this.vertices[ 0 ];
        var minX = vertex.x;
        var maxX = minX;
        var minY = vertex.y;
        var maxY = minY;

        for (var a = 1 ; a < length ; a++)
            {
            var vertex = this.vertices[ a ];
            var x = vertex.x;
            var y = vertex.y;

            if ( x < minX )
                {
                minX = x;
                }

            else if ( x > maxX )
                {
                maxX = x;
                }

            if ( y < minY )
                {
                minY = y;
                }

            else if ( y > maxY )
                {
                maxY = y;
                }
            }

        return {
                minX: minX,
                maxX: maxX,
                minY: minY,
                maxY: maxY,
            };
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
     * Mark this element to be removed.
     */
    remove()
        {
        if ( !this._removed )
            {
            this._removed = true;

            Game._safeRemove( this );
            }
        }


    /**
     * Remove this element from either its container or from the canvas.
     * Don't call this directly, use the `remove()` method instead.
     */
    _removeNow()
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

        CollisionDetection.removeElement( this );
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
     */
    abstract clone(): Element;


    /**
     * Get the global vertices points of this element.
     * The arguments are the compound values from the parent containers.
     */
    updateVertices( x: number, y: number, scaleX: number, scaleY: number, rotation: number )
        {
        var center = Vector.rotate( { x: x, y: y }, { x: x + this._x * scaleX, y: y + this._y * scaleY }, rotation );

        scaleX *= this.scaleX;
        scaleY *= this.scaleY;

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
        if ( this.vertices )
            {
            return [ this.vertices ];
            }

        return null;
        }


    /**
     * Move the unit to the given x/y position.
     */
    setPosition( x: number, y: number )
        {
        this._x = x;
        this._y = y;

        CollisionDetection.updateElement( this );
        }


    /**
     * Adds to the current position.
     */
    addToPosition( x: number, y: number )
        {
        this._x += x;
        this._y += y;

        CollisionDetection.updateElement( this );
        }


    set x( x: number )
        {
        this._x = x;

        CollisionDetection.updateElement( this );
        }


    get x()
        {
        return this._x;
        }


    set y( y: number )
        {
        this._y = y;

        CollisionDetection.updateElement( this );
        }


    get y()
        {
        return this._y;
        }


    get width()
        {
        return this._width;
        }


    get height()
        {
        return this._height;
        }


    get half_width()
        {
        return this._half_width;
        }


    get half_height()
        {
        return this._half_height;
        }
    }
}