export default class Loading extends Laya.Script {
    constructor() {
        super();
    }
    onEnable() {
        console.log(this);
        let timer = null;
        timer = setInterval(() => {
            this.owner.loadingCar.y = this.owner.loadingCar.y + 5;
            if (this.owner.loadingCar.y > 1334) {
                clearInterval(timer);
                Laya.Scene.open('GamePage.scene');
            }
        }, 10);
    }
}