/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GamePage from "./GamePage/GamePage"
import GameSelect from "./GameSelect/GameSelect"
import GameStart from "./GameStart/GameStart"
<<<<<<< HEAD
=======
import Task from "./Task/Task"
>>>>>>> 2bf17820210af6cebb8bf92bb23e13e8f9a57a95

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("GamePage/GamePage.js",GamePage);
		reg("GameSelect/GameSelect.js",GameSelect);
		reg("GameStart/GameStart.js",GameStart);
		reg("Task/Task.js",Task);
    }
}
GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "middle";
GameConfig.alignH = "center";
GameConfig.startScene = "GamePage.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
