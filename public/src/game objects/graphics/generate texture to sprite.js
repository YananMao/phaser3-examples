var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    }
};

var game = new Phaser.Game(config);
var starGraphics;

function preload ()
{
     

}
function create() {
    group = this.physics.add.group();
    starGraphics = this.make.graphics({x: 0, y: 0, add: false});
    drawStar(starGraphics, 105, 105,  5, 100, 50, 0xFFFF00, 0xFF0000);
    starGraphics.generateTexture('starGraphics', 210, 210);
    // star = this.physics.add.image(400, 300, 'starGraphics');
    group.createMultiple({ 
        key: 'starGraphics', 
        frame: [0], 
        frameQuantity: 2, 
        repeat: 1,
        setScale:{x:0.5,y:0.5},
        setRotation: { value: 0, step: 0.4 },
        setXY:
        {
            x: 100,
            y: 100,
            stepX: 64,
            stepY: 64
        }
    });
}

function update() {

}

function drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
    graphics.lineStyle(10, lineColor, 1.0);
    graphics.fillStyle(color, 1.0);
    graphics.beginPath();
    graphics.moveTo(cx, cy - outerRadius);
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        graphics.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        graphics.lineTo(x, y);
        rot += step;
    }
    graphics.lineTo(cx, cy - outerRadius);
    graphics.closePath();
    graphics.fillPath();
    graphics.strokePath();
}
