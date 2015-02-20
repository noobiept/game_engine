(function(window)
{
function Star( args )
{
this.fill_color = args.fillColor;
this.stroke_color = args.strokeColor;
this.outer_radius = args.outerRadius;
this.inner_radius = args.innerRadius;
this.spikes = args.spikes;

args.color = this.fill_color;
args.radius = this.outer_radius;

Game.Circle.call( this, args );
}

Utilities.inheritPrototype( Star, Game.Circle );



Star.prototype.drawElement = function( ctx )
{
ctx.save();
ctx.globalAlpha *= this.opacity;
ctx.translate( this.x, this.y );
ctx.rotate( this.rotation );

var step = Math.PI / this.spikes;
var rotation = - Math.PI / 2;

ctx.beginPath();
ctx.moveTo( 0, -this.outer_radius );

var x, y;

for (var a = 0 ; a < this.spikes ; a++)
    {
    x = Math.cos( rotation ) * this.outer_radius;
    y = Math.sin( rotation ) * this.outer_radius;

    ctx.lineTo( x, y );

    rotation += step;

    x = Math.cos( rotation ) * this.inner_radius;
    y = Math.sin( rotation ) * this.inner_radius;

    ctx.lineTo( x, y );

    rotation += step;
    }

ctx.closePath();

ctx.lineWidth = 2;
ctx.strokeStyle = this.stroke_color;
ctx.stroke();
ctx.fillStyle = this.fill_color;
ctx.fill();

ctx.restore();
};


window.Star = Star;

})(window);
