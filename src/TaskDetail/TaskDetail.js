export default class TaskDetail extends Laya.Script {
    constructor() {
        super()
    }
    onEnable() {
        console.log(this);
        this.dialogControl(false);//隐藏提示弹窗
    }
    onClick() {
        console.log(this);
    }
    dialogControl(val) {
        const dialogTipsArr = [
            this.owner.btnClose,
            this.owner.btnConfirm,
            this.owner.btnNo,
            this.owner.btnYes,
            this.owner.dialogContent,
            this.owner.dialogTips
        ]
        dialogTipsArr.forEach(element => {
            element._visible = val;
        });
    }
}