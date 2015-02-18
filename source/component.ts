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

    constructor( args: ComponentArgs )
        {
        var container = document.createElement( 'div' );

        if ( typeof args.cssId !== 'undefined' )
            {
            container.id = args.cssId;
            }

        if ( typeof args.cssClass !== 'undefined' )
            {
            if ( typeof args.cssClass === 'string' )
                {
                container.className = args.cssClass;
                }

            else
                {
                for (var a = args.cssClass.length - 1 ; a >= 0 ; a--)
                    {
                    container.classList.add( args.cssClass[ a ] );
                    }
                }
            }

        if ( typeof args.preText !== 'undefined' )
            {
            var preText = document.createElement( 'span' );

            preText.innerHTML = args.preText;

            container.appendChild( preText );
            }


        this.container = container;
        }

    clear()
        {
            // implement this if needed
        }
    }
}
