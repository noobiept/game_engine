module Game
{
export module EventDispatcher
    {
    export function init( canvas )
        {
        canvas.addEventListener( 'click', mouseEvents );
        }


    function mouseEvents( event )
        {
        var elements = getElements();
        var canvas = getCanvas();

        var rect = canvas.getBoundingClientRect();
        var x = event.x - rect.left;
        var y = event.y - rect.top;

            // find the element on the x/y position
        for (var a = 0 ; a < elements.length ; a++)
            {
            var element = elements[ a ];

            if ( element.intersect( x, y, event ) )
                {
                break;
                }
            }
        }
    }
}