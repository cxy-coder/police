export default class GameStart extends Laya.Script {
    constructor() {
        super()
        this.count = 0;
    }
    onEnable() {
        console.log(this);
        this.dialogMessageControl(true);//显示提示弹窗
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
        this.onBtnYes();
    }
    onBtnYes() {
        this.count = this.count + 1;
        if(this.count == 1){
            this.dialogMessageText("是否打开执法记录仪？");
        }
        if(this.count == 2){
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
        Laya.Scene.open('GamePage.scene');
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