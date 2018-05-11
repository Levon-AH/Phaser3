import {Preloader} from "./Scenes/Preloader";
import Phaser from 'phaser'

let config = {
    type : Phaser.AUTO,
    width : 270,
    height : 400,
    scene : [Preloader]

};

let  game = new Phaser.Game(config);