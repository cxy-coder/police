export default class GamePage extends Laya.Script {
    constructor() {
        super();
    }
    onEnable() {
        this.owner.btnAlarm.on(Laya.Event.CLICK, this, this.onBtnAlarm);
        this.owner.btnBack.on(Laya.Event.CLICK, this, this.onBtnBack);
        this.owner.btnTrain.on(Laya.Event.CLICK, this, this.onBtnTrain);
    }
    onBtnAlarm() {
        console.log('接警');
        Laya.Scene.open('TaskDetail.scene');
    }
    onBtnBack() {
        console.log('回炉营');
    }
    onBtnTrain() {
        console.log('新警训练营');
    }
}