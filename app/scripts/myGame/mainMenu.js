var backGround;
var button;
var menuMusic;

var mainMenu =
{

    preload: function()
    {
        this.load.image('old', 'images/oldduck.png');
        this.load.audio('wary', 'images/Wary.mp3');
        this.load.audio('road', 'images/Road.mp3');
        this.load.audio('serenity', 'images/serenity.mp3');
        this.load.audio('journey', 'images/journey.mp3');
    },

    create: function()
    {
        //backGround = this.add.tileSprite(0, 0, 1000, 600, 'page');

        menuMusic = this.add.audio('san', 0.5);
        menuMusic.play();
        
        button = this.add.button(0, 0, 'page', actionOnClick, this);

        function actionOnClick()
        {
            //this.state.add('preloadState');  
            this.state.start('preloadState');
        }
    }

};
