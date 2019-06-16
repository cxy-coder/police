export default class GameSelect extends Laya.Script {
    constructor() {
        super();
    }
    onEnable() {
        console.log(this);
        this.owner.btnCancel.on(Laya.Event.CLICK, this, this.onBtnCancel);
        this.owner.btnEnter.on(Laya.Event.CLICK, this, this.onBtnEnter);
        this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurnLeft);
        this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurnRight);
    }
    onBtnCancel() {
        console.log('取消');
        Laya.Scene.open('GamePage.scene');
    }
    onBtnEnter() {
        console.log('进入现场');
        Laya.Scene.open('Task.scene');
    }
    onBtnTrain() {
        console.log('新警训练营');
    }
    onBtnTurnLeft() {
        console.log('向左转');
    }
    onBtnTurnRight() {
        console.log('向右转');
    }
}