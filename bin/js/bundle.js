var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */


var _GamePage = require("./GamePage/GamePage");

var _GamePage2 = _interopRequireDefault(_GamePage);

var _GameSelect = require("./GameSelect/GameSelect");

var _GameSelect2 = _interopRequireDefault(_GameSelect);

var _GameStart = require("./GameStart/GameStart");

var _GameStart2 = _interopRequireDefault(_GameStart);

var _Loading = require("./Loading");

var _Loading2 = _interopRequireDefault(_Loading);

var _Task = require("./Task/Task");

var _Task2 = _interopRequireDefault(_Task);

var _TaskDetail = require("./TaskDetail/TaskDetail");

var _TaskDetail2 = _interopRequireDefault(_TaskDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameConfig = function () {
				function GameConfig() {
								_classCallCheck(this, GameConfig);
				}

				_createClass(GameConfig, null, [{
								key: "init",
								value: function init() {
												//注册Script或者Runtime引用
												var reg = Laya.ClassUtils.regClass;
												reg("GamePage/GamePage.js", _GamePage2.default);
												reg("GameSelect/GameSelect.js", _GameSelect2.default);
												reg("GameStart/GameStart.js", _GameStart2.default);
												reg("Loading.js", _Loading2.default);
												reg("Task/Task.js", _Task2.default);
												reg("TaskDetail/TaskDetail.js", _TaskDetail2.default);
								}
				}]);

				return GameConfig;
}();

exports.default = GameConfig;

GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode = "fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "middle";
GameConfig.alignH = "center";
<<<<<<< HEAD
GameConfig.startScene = "Loading.scene";
=======
GameConfig.startScene = "GameSelect.scene";
>>>>>>> 3579f131ae58a2a254989cc906c8d29cac9273f5
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

<<<<<<< HEAD
},{"./GamePage/GamePage":2,"./GameSelect/GameSelect":3,"./GameStart/GameStart":4,"./Loading":5,"./Task/Task":8,"./TaskDetail/TaskDetail":7}],2:[function(require,module,exports){
=======
},{"./DialogMessage":1,"./GamePage/GamePage":3,"./GameSelect/GameSelect":4,"./GameStart/GameStart":5,"./Task/Task":7,"./TaskDetail/TaskDetail":8}],3:[function(require,module,exports){
>>>>>>> 3579f131ae58a2a254989cc906c8d29cac9273f5
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePage = function (_Laya$Script) {
    _inherits(GamePage, _Laya$Script);

    function GamePage() {
        _classCallCheck(this, GamePage);

        return _possibleConstructorReturn(this, (GamePage.__proto__ || Object.getPrototypeOf(GamePage)).call(this));
    }

    _createClass(GamePage, [{
        key: 'onEnable',
        value: function onEnable() {
            this.owner.btnAlarm.on(Laya.Event.CLICK, this, this.onBtnAlarm);
            this.owner.btnBack.on(Laya.Event.CLICK, this, this.onBtnBack);
            this.owner.btnTrain.on(Laya.Event.CLICK, this, this.onBtnTrain);
        }
    }, {
        key: 'onBtnAlarm',
        value: function onBtnAlarm() {
            console.log('接警');
            Laya.Scene.open('TaskDetail.scene');
        }
    }, {
        key: 'onBtnBack',
        value: function onBtnBack() {
            console.log('回炉营');
        }
    }, {
        key: 'onBtnTrain',
        value: function onBtnTrain() {
            console.log('新警训练营');
        }
    }]);

    return GamePage;
}(Laya.Script);

exports.default = GamePage;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameSelect = function (_Laya$Script) {
    _inherits(GameSelect, _Laya$Script);

    function GameSelect() {
        _classCallCheck(this, GameSelect);

        var _this = _possibleConstructorReturn(this, (GameSelect.__proto__ || Object.getPrototypeOf(GameSelect)).call(this));

        _this.characterWard = 0;
        _this.weared = false;
        _this.character = null;
        return _this;
    }

    _createClass(GameSelect, [{
        key: 'onEnable',
        value: function onEnable() {
            console.log(this.owner);
            this.owner.btnCancel.on(Laya.Event.CLICK, this, this.onBtnCancel);
            this.owner.btnEnter.on(Laya.Event.CLICK, this, this.onBtnEnter);
            this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurnLeft);
            this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurnRight);
            this.character = this.owner.character;
            this.owner.singleTool.on(Laya.Event.CLICK, this, this.onWear);
        }
    }, {
        key: 'onBtnCancel',
        value: function onBtnCancel() {
            console.log('取消');
            Laya.Scene.open('GamePage.scene');
        }
    }, {
        key: 'onBtnEnter',
        value: function onBtnEnter() {
            console.log('进入现场');
            Laya.Scene.open('GameStart.scene');
        }
    }, {
        key: 'onBtnTrain',
        value: function onBtnTrain() {
            console.log('新警训练营');
        }
    }, {
        key: 'onBtnTurnLeft',
        value: function onBtnTurnLeft() {
            this.characterWard = this.characterWard - 1;
            this.reRender(this.characterWard);
        }
    }, {
        key: 'onBtnTurnRight',
        value: function onBtnTurnRight() {
            this.characterWard = this.characterWard + 1;
            this.reRender(this.characterWard);
        }
    }, {
        key: 'onWear',
        value: function onWear() {
            this.weared = !this.weared;
            this.characterWard = 0;
            this.reRender(this.characterWard);
        }
    }, {
        key: 'reRender',
        value: function reRender(ward) {
            console.log(ward);
            var character = this.character;
            ward = Math.abs(ward % 4);
            console.log(character);
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
                        character.texture = '../laya/assets/game/jc-front-ed.png';
                        break;
                }
            } else {
                character.height = 525;
                switch (ward % 4) {
                    case 0:
                        character.width = 190;
                        character.texture = '../laya/assets/game/jc-front.png';
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
                        character.texture = '../laya/assets/game/jc-front.png';
                        break;
                }
            }
        }
    }]);

    return GameSelect;
}(Laya.Script);

exports.default = GameSelect;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameStart = function (_Laya$Script) {
    _inherits(GameStart, _Laya$Script);

    function GameStart() {
        _classCallCheck(this, GameStart);

        var _this = _possibleConstructorReturn(this, (GameStart.__proto__ || Object.getPrototypeOf(GameStart)).call(this));

        _this.count = 0;
        _this.btnType = '';
        return _this;
    }

    _createClass(GameStart, [{
        key: 'onEnable',
        value: function onEnable() {
            var _this2 = this;

            console.log(this);
            this.dialogMessageControl(false);
            setTimeout(function () {
                _this2.dialogMessageControl(true); //显示提示弹窗
            }, 2000);
            this.dialogControl(false); //隐藏对话弹窗
            // this.btnControl(true);//显示隐藏按钮
            this.owner.btnNo.on(Laya.Event.CLICK, this, this.onBtnNo);
            this.owner.btnYes.on(Laya.Event.CLICK, this, this.onBtnYes);
            this.owner.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            this.owner.btnExit.on(Laya.Event.CLICK, this, this.onBtnExit);
            this.owner.btnNext.on(Laya.Event.CLICK, this, this.onBtnNext);
            this.dialogMessageText("是否回告指挥中心？");
        }
    }, {
        key: 'dialogMessageControl',
        value: function dialogMessageControl(val) {
            var dialogTipsArr = [this.owner.dialogMessage, this.owner.dialogMessageText, this.owner.btnNo, this.owner.btnYes, this.owner.btnClose];
            dialogTipsArr.forEach(function (element) {
                element._visible = val;
            });
        }
    }, {
        key: 'dialogControl',
        value: function dialogControl(val) {
            var dialogTipsArr = [this.owner.dialog, this.owner.dialogText, this.owner.btnNext];
            dialogTipsArr.forEach(function (element) {
                element._visible = val;
            });
        }
    }, {
        key: 'btnControl',
        value: function btnControl(val) {
            var dialogTipsArr = [this.owner.btnNo, this.owner.btnYes];
            dialogTipsArr.forEach(function (element) {
                element._visible = val;
            });
        }
    }, {
        key: 'onBtnNo',
        value: function onBtnNo() {
            if (this.btnType === 'exit') {
                if (this.count == 0) {
                    this.dialogMessageText("是否回告指挥中心？");
                }
                if (this.count == 1) {
                    this.dialogMessageText("是否打开执法记录仪？");
                }
                this.btnType = '';
                if (this.count == 2) {
                    this.btnType = 'end';
                    this.dialogControl(true); //显示对话弹窗
                    this.dialogMessageControl(false); //隐藏提示弹窗
                    this.dialogText("你好，我是公安县公安局的民警，请问是你报警的吗？");
                }
            } else {
                this.onBtnYes();
            }
        }
    }, {
        key: 'onBtnYes',
        value: function onBtnYes() {
            if (this.btnType === 'exit') {
                Laya.Scene.open('GamePage.scene');
                return;
            }
            this.count = this.count + 1;
            if (this.count == 1) {
                this.dialogMessageText("是否打开执法记录仪？");
            }
            if (this.count == 2) {
                this.btnType = 'end';
                this.dialogControl(true); //显示对话弹窗
                this.dialogMessageControl(false); //隐藏提示弹窗
                this.dialogText("你好，我是公安县公安局的民警，请问是你报警的吗？");
            }
        }
    }, {
        key: 'onBtnClose',
        value: function onBtnClose() {
            this.dialogMessageControl(false); //隐藏提示弹窗
            this.dialogControl(false); //隐藏对话弹窗
            this.btnControl(false); //隐藏隐藏按钮
        }
    }, {
        key: 'onBtnExit',
        value: function onBtnExit() {
            if (this.btnType = 'end') {
                this.dialogMessageControl(true);
            }
            this.btnType = 'exit';
            this.dialogMessageText("是否确认处结？");
        }
    }, {
        key: 'onBtnNext',
        value: function onBtnNext() {
            Laya.Scene.open('GamePage.scene');
        }
    }, {
        key: 'dialogMessageText',
        value: function dialogMessageText(text) {
            this.owner.dialogMessageText.text = text;
        }
    }, {
        key: 'dialogText',
        value: function dialogText(text) {
            this.owner.dialogText.text = text;
        }
    }]);

    return GameStart;
}(Laya.Script);

exports.default = GameStart;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Laya$Script) {
    _inherits(Loading, _Laya$Script);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this));
    }

    _createClass(Loading, [{
        key: "onEnable",
        value: function onEnable() {
            var _this2 = this;

            console.log(this);
            var timer = null;
            var count = 0;
            timer = setInterval(function () {
                _this2.owner.loadingCar.y = _this2.owner.loadingCar.y + 5;
                count += 0.317;
                _this2.owner.loadingText.text = "Loading... " + parseInt(count) + "%";
                if (_this2.owner.loadingCar.y > 1334) {
                    clearInterval(timer);
                    Laya.Scene.open('GamePage.scene');
                    laya.media.SoundManager.playMusic("res/music.mp3", 0);
                }
            }, 10);
        }
    }]);

    return Loading;
}(Laya.Script);

exports.default = Loading;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import GameStart from './GameStart';


var _GameConfig = require("./GameConfig");

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _layaMaxUI = require("./ui/layaMaxUI");

var _layaMaxUI2 = _interopRequireDefault(_layaMaxUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) {
			Laya3D.init(_GameConfig2.default.width, _GameConfig2.default.height);
		} else {
			Laya.init(_GameConfig2.default.width, _GameConfig2.default.height, Laya["WebGL"]);
		}
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();

		// 舞台配置
		Laya.stage.scaleMode = _GameConfig2.default.scaleMode;
		Laya.stage.screenMode = _GameConfig2.default.screenMode;
		Laya.stage.alignV = _GameConfig2.default.alignV;
		Laya.stage.alignH = _GameConfig2.default.alignH;

		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = _GameConfig2.default.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (_GameConfig2.default.debug || Laya.Utils.getQueryString("debug") == "true") {
			Laya.enableDebugPanel();
		}
		if (_GameConfig2.default.physicsDebug && Laya["PhysicsDebugDraw"]) {
			Laya["PhysicsDebugDraw"].enable();
		}
		if (_GameConfig2.default.stat) {
			Laya.Stat.show();
		}
		// 错误提示弹窗
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	_createClass(Main, [{
		key: "onVersionLoaded",
		value: function onVersionLoaded() {
			//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
			Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
		}
	}, {
		key: "onConfigLoaded",
		value: function onConfigLoaded() {
			//加载IDE指定初始场景的场景
			_GameConfig2.default.startScene && Laya.Scene.open(_GameConfig2.default.startScene);
		}
	}]);

	return Main;
}();
//激活启动类


new Main();

},{"./GameConfig":1,"./ui/layaMaxUI":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_Laya$Script) {
    _inherits(Task, _Laya$Script);

    function Task() {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this));
        // const equipments = []; // 装备数据 不知道是传进去还是直接写死，先置为空吧，可以用的时候直接读取json
        // this.owner.equipmentList.dataSource = []; // 装备列表数据初始化
    }

    _createClass(Task, [{
        key: 'onEnable',
        value: function onEnable() {
            console.log(this);
            this.loadEquipmentsData();
            this.renderEquipmentList();
            // this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurn('left'));
            // this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurn('right'));
            // this.owner.btnTurnEnter.on(Laya.Event.CLICK, this, this.onBtnChangeScene('forward'));
            // this.owner.btnTurnCancel.on(Laya.Event.CLICK, this, this.onBtnChangeScene('backward'));
        }

        /**
         * @description 加载装备数据
         * @author gooff
         */
        // TODO: Before next commit

    }, {
        key: 'loadEquipmentsData',
        value: function loadEquipmentsData() {
            console.log('loading  data now');
        }

        /**
         * 渲染装备列表
         * @author gooff
         */
        // TODO: Before next commit

    }, {
        key: 'renderEquipmentList',
        value: function renderEquipmentList() {
            console.info('render list !');
        }
        /**
         * 转向按钮的方法
         * @param {String} direction - 转向方向
         * @author gooff
         */
        // TODO: Before next commit

    }, {
        key: 'onBtnTurn',
        value: function onBtnTurn(direction) {
            console.log('turn ' + direction);
        }
        /**
         * 场景切换按钮（进入现场，离开现场）
         * @param {String} direction - 场景方向
         * @author gooff
         */
        // TODO: Before next commit

    }, {
        key: 'onBtnChangeScene',
        value: function onBtnChangeScene(direction) {
            console.log('go ' + direction);
        }
    }]);

    return Task;
}(Laya.Script);

exports.default = Task;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskDetail = function (_Laya$Script) {
    _inherits(TaskDetail, _Laya$Script);

    function TaskDetail() {
        _classCallCheck(this, TaskDetail);

        return _possibleConstructorReturn(this, (TaskDetail.__proto__ || Object.getPrototypeOf(TaskDetail)).call(this));
    }

    _createClass(TaskDetail, [{
        key: 'onEnable',
        value: function onEnable() {
            console.log(this);
            this.dialogControl(false); //隐藏提示弹窗
            this.owner.btnReceive.on(Laya.Event.CLICK, this, this.onBtnReciive);
            this.owner.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            this.owner.btnYes.on(Laya.Event.CLICK, this, this.onBtnYes);
            this.owner.btnNo.on(Laya.Event.CLICK, this, this.onBtnNo);
            this.owner.btnExit.on(Laya.Event.CLICK, this, this.onBtnExit);
            this.owner.btnConfirm.on(Laya.Event.CLICK, this, this.onBtnConfirm);
        }
        // 弹窗否认

    }, {
        key: 'onBtnNo',
        value: function onBtnNo() {
            this.dialogControl(false);
        }
        // 弹窗确认

    }, {
        key: 'onBtnYes',
        value: function onBtnYes() {
            // 按钮的状态控制
            this.owner.btnYes.visible = false;
            this.owner.btnNo.visible = false;
            this.owner.btnConfirm.visible = true;
            this.dialogContent('XXX地，XXX人员为一名男性/女性，未受伤，没有肇事行为');
        }
        // 警情确认

    }, {
        key: 'onBtnConfirm',
        value: function onBtnConfirm() {
            Laya.Scene.open('GameSelect.scene');
        }
        // 退出当前场景

    }, {
        key: 'onBtnExit',
        value: function onBtnExit() {
            Laya.Scene.open('GamePage.scene');
        }
        // 确认接警按钮

    }, {
        key: 'onBtnReciive',
        value: function onBtnReciive() {
            this.dialogControl(true);
            this.onBtnYes();
        }
        // 控制提示弹窗

    }, {
        key: 'dialogControl',
        value: function dialogControl(val) {
            this.detailControl(!val);
            var dialogTipsArr = [this.owner.btnClose, this.owner.btnConfirm, this.owner.btnNo, this.owner.btnYes, this.owner.dialogContent, this.owner.dialogControl, this.owner.dialogTitle];
            dialogTipsArr.forEach(function (element) {
                element.visible = val;
            });
        }
        // 控制接警弹窗

    }, {
        key: 'detailControl',
        value: function detailControl(val) {
            var detailArr = [this.owner.btnReceive, this.owner.btnExit, this.owner.dialogDetail, this.owner.detailContent, this.owner.detailTitle];
            detailArr.forEach(function (element) {
                element.visible = val;
            });
        }
        // 关闭按钮

    }, {
        key: 'onBtnClose',
        value: function onBtnClose() {
            this.dialogControl(false);
        }
        // 提示弹窗内容

    }, {
        key: 'dialogContent',
        value: function dialogContent(text) {
            this.owner.dialogContent.text = text;
        }
    }]);

    return TaskDetail;
}(Laya.Script);

exports.default = TaskDetail;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var CLASS$ = Laya.class;
var STATICATTR$ = Laya.static;
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var Scene = Laya.Scene;
if (!window.ui) window.ui = {};
exports.default = ui;

},{}]},{},[6])