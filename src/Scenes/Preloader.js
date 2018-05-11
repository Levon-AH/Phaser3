import Phaser from 'phaser'

export class Preloader extends Phaser.Scene {
    constructor(){
        super({key : "Preloder"})
    }

    preload (){
            console.log("preload assets");
    }
}