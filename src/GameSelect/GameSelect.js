export default class GameSelect extends Laya.Script {
    constructor() {
        super();
        this.characterWard = 0;
        this.weared = false;
        this.character = null;
    }
    onEnable() {
        console.log(this.owner)
        this.owner.btnCancel.on(Laya.Event.CLICK, this, this.onBtnCancel);
        this.owner.btnEnter.on(Laya.Event.CLICK, this, this.onBtnEnter);
        this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurnLeft);
        this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurnRight);
        this.character = this.owner.character;
        this.owner.singleTool.on(Laya.Event.CLICK, this, this.onWear);
    }
    onBtnCancel() {
        console.log('取消');
        Laya.Scene.open('GamePage.scene');
    }
    onBtnEnter() {
        console.log('进入现场');
        Laya.Scene.open('GameStart.scene');
    }
    onBtnTrain() {
        console.log('新警训练营');
    }
    onBtnTurnLeft() {
        this.characterWard = this.characterWard - 1;
        this.reRender(this.characterWard);
    }
    onBtnTurnRight() {
        this.characterWard = this.characterWard + 1;
        this.reRender(this.characterWard);
    }
    onWear() {
        this.weared = !this.weared;
        this.characterWard = 0;
        this.reRender(this.characterWard);
    }

    reRender(ward) {
        console.log(ward)
        let character = this.character
        ward = Math.abs(ward%4)
        console.log(character)
        if (this.weared) {
            character.height = 524;
            switch (ward) {
                case 0:
                    character.width = 180;
                    character.texture = '../laya/assets/game/jc-front-ed.png';
                    break;
                case 1:
                    character.width = 120;
                    character.texture = '../laya/assets/game/jc-left-ed.png';
                    break;
                case 2:
                    character.width = 190;  
                    character.texture = '../laya/assets/game/jc-back-ed.png';
                    break;
                case 3:
                    character.width = 120;
                    character.texture = '../laya/assets/game/jc-right-ed.png';
                    break;
                default:
                    character.width = 190;
                    character.texture = '../laya/assets/game/jc-front-ed.png'
                    break;
            }
        } else {
            character.height = 525;
            switch (ward % 4) {
                case 0:
                    character.width = 190;
                    character.texture = '../laya/assets/game/jc-front.png'
                    break;
                case 1:
                    character.width = 120;
                    character.texture = '../laya/assets/game/jc-left.png';
                    break;
                case 2:
                    character.width = 190;
                    character.texture = '../laya/assets/game/jc-back.png';
                    break;
                case 3:
                    character.width = 120;
                    character.texture = '../laya/assets/game/jc-right.png';
                    break;
                default:
                    character.width = 190;
                    character.texture = '../laya/assets/game/jc-front.png'
                    break;
            }
        }
    }
}