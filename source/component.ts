module Game
{
export interface ComponentArgs
    {
        cssId?: string;
        cssClass?: any;     // string or string[]
        preText: string;
    }

export class Component
    {
    container: HTMLElement;
    isActive: boolean;

    constructor( args: ComponentArgs )
        {
        var container = document.createElement( 'div' );

        container.className = 'GameMenu-Component';

            // add an optional id
        if ( typeof args.cssId !== 'undefined' )
            {
            container.id = args.cssId;
            }

            // add optional class/classes
        if ( typeof args.cssClass !== 'undefined' )
            {
            if ( typeof args.cssClass === 'string' )
                {
                container.classList.add( args.cssClass );
                }

            else
                {
                for (var a = args.cssClass.length - 1 ; a >= 0 ; a--)
                    {
                    container.classList.add( args.cssClass[ a ] );
                    }
                }
            }

            // add optional pre text
        if ( typeof args.preText !== 'undefined' )
            {
            var preText = document.createElement( 'span' );

            preText.innerHTML = args.preText;

            container.appendChild( preText );
            }


        this.container = container;
        this.isActive = true;
        }


    setActive( yesNo: boolean )
        {
            // already in that state
        if ( yesNo === this.isActive )
            {
            return;
            }

        if ( yesNo === true )
            {
            this.addEvents();
            this.container.classList.remove( 'GameMenu-inactive' );
            }

        else
            {
            this.removeEvents();
            this.container.classList.add( 'GameMenu-inactive' );
            }

        this.isActive = yesNo;
        }

    addEvents()
        {
            // implement this if needed
        }

    removeEvents()
        {
            // implement this if needed
        }

    clear()
        {
            // implement this if needed
        }
    }
}
