module Game
{
export enum TweenAction { properties, wait, call }

export interface TweenStep
    {
        action: TweenAction;
        duration?: number;
        end_properties?: Object;
        ease?: (value: number) => number;
        callback?: () => any;
    }


/**
 * Basic Usage:
 *
 *     var rectangle = new Game.Rectangle({
 *             x: 10,
 *             y: 10,
 *             width: 10,
 *             height: 10,
 *             color: 'green'
 *         });
 *     Game.addElement( rectangle );
 *
 *     var tween = new Game.Tween( rectangle );
 *
 *     tween.to( { x: 200 }, 2 ).wait( 1 ).call function()
 *         {
 *         console.log( 'Finished!' );
 *         }).start();
 *
 * Examples -- `2048`, `basic_example`, `clone`, `multiple_canvas`, `tween`
 */
export class Tween
    {
    static _tweens: Tween[] = [];

    _element: Object;
    _steps: TweenStep[];
    _current_step: TweenStep;
    _start_properties: Object;
    _count: number;
    _update: (delta: number) => any;


    constructor( element: Object )
        {
        this._element = element;
        this._steps = [];
        this._current_step = null;
        this._start_properties = null;
        this._count = 0;
        this._update = null;
        }


    /**
     * Start the tween animation.
     */
    start()
        {
        this.nextStep();

        Tween._tweens.push( this );
        }


    /**
     * Set the end value of some properties, and the animation duration.
     *
     * @param properties The `key` is the element's properties we want to animate, and the `value` is the value that property will have at the end of the animation.
     * @param duration Duration of the animation.
     * @param ease Ease function, that describes how the value of the property will progress between the animation.
     * @return The tween object for chaining.
     */
    to( properties: Object, duration: number, ease?: (value: number) => number )
        {
        if ( typeof ease === 'undefined' )
            {
            ease = Game.Tween.Ease.linear;
            }

        this._steps.push({
                action: TweenAction.properties,
                end_properties: properties,
                duration: duration,
                ease: ease
            });

        return this;
        }


    /**
     * Wait for some time doing nothing.
     *
     * @param duration Duration of the wait.
     * @return The tween object for chaining.
     */
    wait( duration: number )
        {
        this._steps.push({
                action: TweenAction.wait,
                duration: duration
            });

        return this;
        }


    /**
     * Call a given function.
     *
     * @param callback The function to be called.
     * @return The tween object for chaining.
     */
    call( callback: () => any )
        {
        this._steps.push({
                action: TweenAction.call,
                callback: callback
            });

        return this;
        }


    /**
     * Remove the tween.
     */
    remove()
        {
        var index = Tween._tweens.indexOf( this );

        Tween._tweens.splice( index, 1 );
        }


    /**
     * Move unto the next step in the tween animation.
     */
    nextStep()
        {
        var step = this._steps.shift();

        if ( !step )
            {
            this.remove();
            return;
            }

        this._current_step = step;

        if ( step.action === TweenAction.call )
            {
            step.callback();
            this.nextStep();
            }

        else if ( step.action === TweenAction.wait )
            {
            this._count = 0;
            this._update = this.waitUpdate;
            }

        else if ( step.action === TweenAction.properties )
            {
            var startProperties = {};

            for (var property in step.end_properties)
                {
                startProperties[ property ] = this._element[ property ];
                }

            this._start_properties = startProperties;
            this._count = 0;
            this._update = this.propertiesUpdate;
            }
        }


    /**
     * .wait() tick logic.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    waitUpdate( deltaTime: number )
        {
        var step = this._current_step;

        this._count += deltaTime;

        if ( this._count >= step.duration )
            {
            this.nextStep();
            }
        }


    /**
     * .to() tick logic.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    propertiesUpdate( deltaTime )
        {
        var step = this._current_step;

        this._count += deltaTime;

            // how far into the complete movement we're in
        var percentage = this._count / step.duration;

        var value = step.ease( percentage );

        for ( var property in step.end_properties )
            {
            var start = this._start_properties[ property ];
            var end = step.end_properties[ property ];

            this._element[ property ] = start + (end - start) * value;
            }

        if ( this._count >= step.duration )
            {
                // make sure it ends exactly on the end value
            for ( var property in step.end_properties )
                {
                this._element[ property ] = step.end_properties[ property ];
                }

            this.nextStep();
            }
        }


    /**
     * Returns an existing tween of an element, or null if there's no active tween working on the element.
     *
     * @param element The element that has a tween animation.
     * @return The associated tween object.
     */
    static getTween( element: Object )
        {
        for (var a = Tween._tweens.length - 1 ; a >= 0 ; a--)
            {
            var tween = Tween._tweens[ a ];

            if ( tween._element === element )
                {
                return tween;
                }
            }

        return null;
        }


    /**
     * Remove all the tweens of an element.
     *
     * @param element The element associated with the tweens we want to remove.
     */
    static removeTweens( element: Object )
        {
        for (var a = Tween._tweens.length - 1 ; a >= 0 ; a--)
            {
            var tween = Tween._tweens[ a ];

            if ( tween._element === element )
                {
                Tween._tweens.splice( a, 1 );
                }
            }
        }


    /**
     * Remove all the tween animations.
     */
    static removeAll()
        {
        Tween._tweens.length = 0;
        }


    /**
     * Gets called in the game loop, to update all the tween animations.
     *
     * @param deltaTime Time elapsed since the last update.
     */
    static update( deltaTime: number )
        {
        for (var a = Tween._tweens.length - 1 ; a >= 0 ; a--)
            {
            Tween._tweens[ a ]._update( deltaTime );
            }
        }
    }

export module Tween
    {
    /**
     * Ease function, that describes how the value of the property will progress between the animation.
     */
    export module Ease
        {
        export function linear( value: number )
            {
            return value;
            }

        export function quadraticIn( value: number )
            {
            return value * value;
            }
        }
    }
}