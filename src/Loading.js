export default class Loading extends Laya.Script {
    constructor() {
        super();
    }
    onEnable() {
        console.log(this);
        let timer = null;
        let count = 0;
        timer = setInterval(() => {
            this.owner.loadingCar.y = this.owner.loadingCar.y + 5;
            count += 0.317;
            this.owner.loadingText.text = `Loading... ${parseInt(count)}%`
            if (this.owner.loadingCar.y > 1334) {
                clearInterval(timer);
                Laya.Scene.open('GamePage.scene');
                laya.media.SoundManager.playMusic("res/music.mp3",0);
            }
        }, 10);
    }
}