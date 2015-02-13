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


    start()
        {
        this.nextStep();

        Tween._tweens.push( this );
        }


    to( properties, duration: number, ease? )
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


    wait( duration )
        {
        this._steps.push({
                action: TweenAction.wait,
                duration: duration
            });

        return this;
        }


    call( callback )
        {
        this._steps.push({
                action: TweenAction.call,
                callback: callback
            });

        return this;
        }


    remove()
        {
        var index = Tween._tweens.indexOf( this );

        Tween._tweens.splice( index, 1 );
        }

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


    waitUpdate( deltaTime )
        {
        var step = this._current_step;

        this._count += deltaTime;

        if ( this._count >= step.duration )
            {
            this.nextStep();
            }
        }

    propertiesUpdate( deltaTime )
        {
        var step = this._current_step;

        this._count += deltaTime;

        var value = step.ease( this._count / step.duration );

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


    /*
        Returns an existing tween of an element, or null if there's no active tween working on the element.
     */
    static getTween( element )
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


    static removeAll()
        {
        Tween._tweens.length = 0;
        }


    static update( deltaTime )
        {
        for (var a = Tween._tweens.length - 1 ; a >= 0 ; a--)
            {
            Tween._tweens[ a ]._update( deltaTime );
            }
        }
    }

export module Tween
    {
    export module Ease
        {
        export function linear( value )
            {
            return value;
            }

        export function quadraticIn( value )
            {
            return value * value;
            }
        }
    }
}