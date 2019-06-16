export default class GameSelect extends Laya.Script {
    constructor() {
        super();
    }
    onEnable() {
        this.owner.btnCancel.on(Laya.Event.CLICK, this, this.onBtnCancel);
        this.owner.btnEnter.on(Laya.Event.CLICK, this, this.onBtnEnter);
    }
    onBtnCancel() {
        console.log('取消');
        // Laya.Scene.open('Task.scene');
    }
    onBtnEnter() {
        console.log('进入现场');
    }
    onBtnTrain() {
        console.log('新警训练营');
    }
}