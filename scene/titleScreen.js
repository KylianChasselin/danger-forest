class titleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'
        });
    }

    preload () {
        this.preload.image("background_image","assets/background4.png");
    }

    create () {
        let background = this.add.Sprite(0,0, "background_image");
        background.setOrigin(0,0);
    }
}

export default titleScene;