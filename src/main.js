import "phaser";

var cat;
var catcher;
var cursors;
var txtScore;
var score;

class Example extends Phaser.Scene 
{
    preload ()
    {
        this.load.image("cat", "assets/cat.png");
        this.load.image("catcher", "assets/catcher.png");
        this.load.image("bg", "assets/bg.png");
    }

    create ()
    {
        this.add.sprite(400, 300, "bg");
        catcher = this.physics.add.sprite(400, 300, "catcher");
        cat = this.physics.add.sprite(
            Math.random() * 800, 
            Math.random() * 600,
            "cat"
        )

        score = 0;
        var style = { font: "20px Arial", fill: "#FFF" };
        txtScore = this.add.text(10, 10, score.toString(), style);

        cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {

    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
        default: 'arcade',
    }
}

const game = new Phaser.Game(config)
