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
        this.owner.btnExit.on(Laya.Event.CLICK, this, this.onBtnExit);
        this.owner.btnConfirm.on(Laya.Event.CLICK, this, this.onBtnConfirm);
    }
    // 弹窗否认
    onBtnNo() {
        this.dialogControl(false);
    }
    // 弹窗确认
    onBtnYes() {
        // 按钮的状态控制
        this.owner.btnYes.visible = false;
        this.owner.btnNo.visible = false;
        this.owner.btnConfirm.visible = true;
        this.dialogContent('XXX地，XXX人员为一名男性/女性，未受伤，没有肇事行为');
    }
    // 警情确认
    onBtnConfirm() {
        Laya.Scene.open('GameSelect.scene');
    }
    // 退出当前场景
    onBtnExit() {
        Laya.Scene.open('GamePage.scene');
    }
    // 确认接警按钮
    onBtnReciive() {
        this.dialogControl(true);
        this.onBtnYes();
    }
    // 控制提示弹窗
    dialogControl(val) {
        this.detailControl(!val);
        const dialogTipsArr = [
            this.owner.btnClose,
            this.owner.btnConfirm,
            this.owner.btnNo,
            this.owner.btnYes,
            this.owner.dialogContent,
            this.owner.dialogControl,
            this.owner.dialogTitle,
        ];
        dialogTipsArr.forEach(element => {
            element.visible = val;
        });
    }
    // 控制接警弹窗
    detailControl(val) {
        const detailArr = [
            this.owner.btnReceive,
            this.owner.btnExit,
            this.owner.dialogDetail,
            this.owner.detailContent,
            this.owner.detailTitle
        ];
        detailArr.forEach(element => {
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