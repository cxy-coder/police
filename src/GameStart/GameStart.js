export default class GameStart extends Laya.Script {
    constructor() {
        super()
        this.count = 0;
        this.btnType = '';
    }
    onEnable() {
        console.log(this);
        this.dialogMessageControl(false);
        setTimeout(() => {
            this.dialogMessageControl(true);//显示提示弹窗
        }, 2000);
        this.dialogControl(false);//隐藏对话弹窗
        // this.btnControl(true);//显示隐藏按钮
        this.owner.btnNo.on(Laya.Event.CLICK, this, this.onBtnNo);
        this.owner.btnYes.on(Laya.Event.CLICK, this, this.onBtnYes);
        this.owner.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
        this.owner.btnExit.on(Laya.Event.CLICK, this, this.onBtnExit);
        this.owner.btnNext.on(Laya.Event.CLICK, this, this.onBtnNext);
        this.dialogMessageText("是否回告指挥中心？");
    }
    dialogMessageControl(val) {
        const dialogTipsArr = [
            this.owner.dialogMessage,
            this.owner.dialogMessageText,
            this.owner.btnNo,
            this.owner.btnYes,
            this.owner.btnClose,
        ]
        dialogTipsArr.forEach(element => {
            element._visible = val;
        });
    }
    dialogControl(val) {
        const dialogTipsArr = [
            this.owner.dialog,
            this.owner.dialogText,
            this.owner.btnNext,
        ]
        dialogTipsArr.forEach(element => {
            element._visible = val;
        });
    }
    btnControl(val) {
        const dialogTipsArr = [
            this.owner.btnNo,
            this.owner.btnYes,
        ]
        dialogTipsArr.forEach(element => {
            element._visible = val;
        });
    }
    onBtnNo() {
        if (this.btnType === 'exit') {
            if(this.count == 0){
                this.dialogMessageText("是否回告指挥中心？");
            }
            if(this.count == 1){
                this.dialogMessageText("是否打开执法记录仪？");
            }
            this.btnType = '';
            if(this.count == 2){
                this.btnType = 'end';
                this.dialogControl(true);//显示对话弹窗
                this.dialogMessageControl(false);//隐藏提示弹窗
                this.dialogText("你好，我是公安县公安局的民警，请问是你报警的吗？");
            }
        } else {
            this.onBtnYes();
        }
    }
    onBtnYes() {
        if (this.btnType === 'exit') {
            Laya.Scene.open('GamePage.scene');
            return;
        }
        this.count = this.count + 1;
        if(this.count == 1){
            this.dialogMessageText("是否打开执法记录仪？");
        }
        if(this.count == 2){
            this.btnType = 'end';
            this.dialogControl(true);//显示对话弹窗
            this.dialogMessageControl(false);//隐藏提示弹窗
            this.dialogText("你好，我是公安县公安局的民警，请问是你报警的吗？");
        }
    }
    onBtnClose() {
        this.dialogMessageControl(false);//隐藏提示弹窗
        this.dialogControl(false);//隐藏对话弹窗
        this.btnControl(false);//隐藏隐藏按钮
    }
    onBtnExit() {
        if (this.btnType = 'end') {
            this.dialogMessageControl(true);
        }
        this.btnType = 'exit';
        this.dialogMessageText("是否确认处结？");
    }
    onBtnNext(){
        Laya.Scene.open('GamePage.scene');
    }
    dialogMessageText(text){
        this.owner.dialogMessageText.text = text;
    }
    dialogText(text){
        this.owner.dialogText.text = text;
    }
}