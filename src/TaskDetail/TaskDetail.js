export default class TaskDetail extends Laya.Script {
    constructor() {
        super()
    }
    onEnable() {
        console.log(this);
        this.dialogControl(false);//隐藏提示弹窗
        this.owner.btnReceive.on(Laya.Event.CLICK, this, this.onBtnReciive);
        this.owner.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
        this.owner.btnYes.on(Laya.Event.CLICK, this, this.onBtnYes);
        this.owner.btnNo.on(Laya.Event.CLICK, this, this.onBtnNo);
        this.owner.btnExit.on(Laya.Event.CLICK, this, this.onBtnExit)
    }
    onBtnNo() {
        this.dialogControl(false);
    }
    // 弹窗确认
    onBtnYes() {
        // 按钮的状态控制
        this.owner.btnYes.visible = false;
        this.owner.btnNo.visible = false;
        this.owner.btnConfirm.visible = true;
        this.dialogContent('显示接警警情信息');
    }
    // 推出当前场景
    onBtnExit() {
        Laya.Scene.open('GamePage.scene');
    }
    // 确认接警按钮
    onBtnReciive() {
        this.dialogControl(true);
        this.dialogContent('显示接警信息内容');
        this.owner.btnConfirm.visible = false;
    }
    // 控制提示弹窗
    dialogControl(val) {
        const dialogTipsArr = [
            this.owner.btnClose,
            this.owner.btnConfirm,
            this.owner.btnNo,
            this.owner.btnYes,
            this.owner.dialogContent,
            this.owner.dialogControl
        ]
        dialogTipsArr.forEach(element => {
            element.visible = val;
        });
    }
    // 关闭按钮
    onBtnClose() {
        this.dialogControl(false);
    }
    // 提示弹窗内容
    dialogContent(text) {
        this.owner.dialogContent.text = text;
    }
}