class tittleScreen extends Phaser.Scene{
    constructor(){
         super({
            key: 'titleScreen'
        });
    }

    preload () {

            this.load.image('background', 'assets/tittleScreen.png');
    }

    create() {
        let background = this.add.sprite(0, 0, 'background');
        //buttton
    }

    update(){
        //button
    }
}


export default titleScreen;