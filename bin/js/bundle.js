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
GameConfig.startScene = "GamePage.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

},{"./GamePage/GamePage":2,"./GameSelect/GameSelect":3,"./GameStart/GameStart":4,"./Task/Task":7,"./TaskDetail/TaskDetail":6}],2:[function(require,module,exports){
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

        return _possibleConstructorReturn(this, (GameSelect.__proto__ || Object.getPrototypeOf(GameSelect)).call(this));
    }

    _createClass(GameSelect, [{
        key: 'onEnable',
        value: function onEnable() {
            console.log(this);
            this.owner.btnCancel.on(Laya.Event.CLICK, this, this.onBtnCancel);
            this.owner.btnEnter.on(Laya.Event.CLICK, this, this.onBtnEnter);
            this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurnLeft);
            this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurnRight);
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
            Laya.Scene.open('Task.scene');
        }
    }, {
        key: 'onBtnTrain',
        value: function onBtnTrain() {
            console.log('新警训练营');
        }
    }, {
        key: 'onBtnTurnLeft',
        value: function onBtnTurnLeft() {
            console.log('向左转');
        }
    }, {
        key: 'onBtnTurnRight',
        value: function onBtnTurnRight() {
            console.log('向右转');
        }
    }]);

    return GameSelect;
}(Laya.Script);

exports.default = GameSelect;

},{}],4:[function(require,module,exports){
"use strict";

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

        return _possibleConstructorReturn(this, (GameStart.__proto__ || Object.getPrototypeOf(GameStart)).call(this));
    }

    _createClass(GameStart, [{
        key: "onEnable",
        value: function onEnable() {
            console.log(this);
        }
    }, {
        key: "onClick",
        value: function onClick() {
            console.log(this);
        }
    }]);

    return GameStart;
}(Laya.Script);

exports.default = GameStart;

},{}],5:[function(require,module,exports){
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

},{"./GameConfig":1,"./ui/layaMaxUI":8}],6:[function(require,module,exports){
"use strict";

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
        key: "onEnable",
        value: function onEnable() {
            console.log(this);
            this.dialogControl(false);
        }
    }, {
        key: "onClick",
        value: function onClick() {
            console.log(this);
        }
    }, {
        key: "dialogControl",
        value: function dialogControl(val) {
            var dialogTipsArr = [this.owner.btnClose, this.owner.btnConfirm, this.owner.btnNo, this.owner.btnYes, this.owner.dialogContent, this.owner.dialogTips];
            dialogTipsArr.forEach(function (element) {
                element._visible = val;
            });
        }
    }]);

    return TaskDetail;
}(Laya.Script);

exports.default = TaskDetail;

},{}],7:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L1Byb2dyYW0gRmlsZXMgKHg4NikvTGF5YUFpcklERV9iZXRhL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9HYW1lQ29uZmlnLmpzIiwic3JjL0dhbWVQYWdlL0dhbWVQYWdlLmpzIiwic3JjL0dhbWVTZWxlY3QvR2FtZVNlbGVjdC5qcyIsInNyYy9HYW1lU3RhcnQvR2FtZVN0YXJ0LmpzIiwic3JjL01haW4uanMiLCJzcmMvVGFza0RldGFpbC9UYXNrRGV0YWlsLmpzIiwic3JjL1Rhc2svVGFzay5qcyIsInNyYy91aS9sYXlhTWF4VUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztxakJDVkE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7K0JBQ0g7QUFDVjtBQUNBLGdCQUFJLE1BQU0sS0FBSyxVQUFMLENBQWdCLFFBQTFCO0FBQ04sZ0JBQUksc0JBQUosRUFBMkIsa0JBQTNCO0FBQ0EsZ0JBQUksMEJBQUosRUFBK0Isb0JBQS9CO0FBQ0EsZ0JBQUksd0JBQUosRUFBNkIsbUJBQTdCO0FBQ0EsZ0JBQUksY0FBSixFQUFtQixjQUFuQjtBQUNBLGdCQUFJLDBCQUFKLEVBQStCLG9CQUEvQjtBQUNHOzs7Ozs7a0JBVGdCLFU7O0FBV3JCLFdBQVcsS0FBWCxHQUFtQixHQUFuQjtBQUNBLFdBQVcsTUFBWCxHQUFvQixJQUFwQjtBQUNBLFdBQVcsU0FBWCxHQUFzQixZQUF0QjtBQUNBLFdBQVcsVUFBWCxHQUF3QixNQUF4QjtBQUNBLFdBQVcsTUFBWCxHQUFvQixRQUFwQjtBQUNBLFdBQVcsTUFBWCxHQUFvQixRQUFwQjtBQUNBLFdBQVcsVUFBWCxHQUF3QixnQkFBeEI7QUFDQSxXQUFXLFNBQVgsR0FBdUIsRUFBdkI7QUFDQSxXQUFXLEtBQVgsR0FBbUIsS0FBbkI7QUFDQSxXQUFXLElBQVgsR0FBa0IsS0FBbEI7QUFDQSxXQUFXLFlBQVgsR0FBMEIsS0FBMUI7QUFDQSxXQUFXLGlCQUFYLEdBQStCLElBQS9COztBQUVBLFdBQVcsSUFBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMvQnFCLFE7OztBQUNqQix3QkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7bUNBQ1U7QUFDUCxpQkFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixFQUFwQixDQUF1QixLQUFLLEtBQUwsQ0FBVyxLQUFsQyxFQUF5QyxJQUF6QyxFQUErQyxLQUFLLFVBQXBEO0FBQ0EsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBc0IsS0FBSyxLQUFMLENBQVcsS0FBakMsRUFBd0MsSUFBeEMsRUFBOEMsS0FBSyxTQUFuRDtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEVBQXBCLENBQXVCLEtBQUssS0FBTCxDQUFXLEtBQWxDLEVBQXlDLElBQXpDLEVBQStDLEtBQUssVUFBcEQ7QUFDSDs7O3FDQUNZO0FBQ1Qsb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxpQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixrQkFBaEI7QUFDSDs7O29DQUNXO0FBQ1Isb0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDSDs7O3FDQUNZO0FBQ1Qsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSDs7OztFQWxCaUMsS0FBSyxNOztrQkFBdEIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxVOzs7QUFDakIsMEJBQWM7QUFBQTs7QUFBQTtBQUViOzs7O21DQUNVO0FBQ1Asb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxpQkFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixFQUFyQixDQUF3QixLQUFLLEtBQUwsQ0FBVyxLQUFuQyxFQUEwQyxJQUExQyxFQUFnRCxLQUFLLFdBQXJEO0FBQ0EsaUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsRUFBcEIsQ0FBdUIsS0FBSyxLQUFMLENBQVcsS0FBbEMsRUFBeUMsSUFBekMsRUFBK0MsS0FBSyxVQUFwRDtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEVBQXZCLENBQTBCLEtBQUssS0FBTCxDQUFXLEtBQXJDLEVBQTRDLElBQTVDLEVBQWtELEtBQUssYUFBdkQ7QUFDQSxpQkFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixFQUF4QixDQUEyQixLQUFLLEtBQUwsQ0FBVyxLQUF0QyxFQUE2QyxJQUE3QyxFQUFtRCxLQUFLLGNBQXhEO0FBQ0g7OztzQ0FDYTtBQUNWLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsZ0JBQWhCO0FBQ0g7OztxQ0FDWTtBQUNULG9CQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsWUFBaEI7QUFDSDs7O3FDQUNZO0FBQ1Qsb0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSDs7O3dDQUNlO0FBQ1osb0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDSDs7O3lDQUNnQjtBQUNiLG9CQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0g7Ozs7RUEzQm1DLEtBQUssTTs7a0JBQXhCLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsUzs7O0FBQ2pCLHlCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OzttQ0FDVTtBQUNQLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7OztrQ0FDUztBQUNOLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7Ozs7RUFUa0MsS0FBSyxNOztrQkFBdkIsUzs7Ozs7O0FDQ3JCOzs7QUFEQzs7OztBQUVEOzs7Ozs7OztJQUVNLEk7QUFDTCxpQkFBYztBQUFBOztBQUNiO0FBQ0EsTUFBSSxPQUFPLFFBQVAsQ0FBSixFQUFzQjtBQUNyQixVQUFPLElBQVAsQ0FBWSxxQkFBVyxLQUF2QixFQUE4QixxQkFBVyxNQUF6QztBQUNBLEdBRkQsTUFFTztBQUNOLFFBQUssSUFBTCxDQUFVLHFCQUFXLEtBQXJCLEVBQTRCLHFCQUFXLE1BQXZDLEVBQStDLEtBQUssT0FBTCxDQUEvQztBQUNBO0FBQ0QsT0FBSyxTQUFMLEtBQW1CLEtBQUssU0FBTCxFQUFnQixNQUFoQixFQUFuQjtBQUNBLE9BQUssWUFBTCxLQUFzQixLQUFLLFlBQUwsRUFBbUIsTUFBbkIsRUFBdEI7O0FBRUE7QUFDQSxPQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLHFCQUFXLFNBQWxDO0FBQ0EsT0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3QixxQkFBVyxVQUFuQztBQUNBLE9BQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IscUJBQVcsTUFBL0I7QUFDQSxPQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLHFCQUFXLE1BQS9COztBQUVBO0FBQ0EsT0FBSyxHQUFMLENBQVMsaUJBQVQsR0FBNkIscUJBQVcsaUJBQXhDOztBQUVBO0FBQ0EsTUFBSSxxQkFBVyxLQUFYLElBQW9CLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsT0FBMUIsS0FBc0MsTUFBOUQsRUFBc0U7QUFDckUsUUFBSyxnQkFBTDtBQUNBO0FBQ0QsTUFBSSxxQkFBVyxZQUFYLElBQTJCLEtBQUssa0JBQUwsQ0FBL0IsRUFBeUQ7QUFDeEQsUUFBSyxrQkFBTCxFQUF5QixNQUF6QjtBQUNBO0FBQ0QsTUFBSSxxQkFBVyxJQUFmLEVBQXFCO0FBQ3BCLFFBQUssSUFBTCxDQUFVLElBQVY7QUFDQTtBQUNEO0FBQ0EsT0FBSyxnQkFBTCxHQUF3QixJQUF4Qjs7QUFFQTtBQUNBLE9BQUssZUFBTCxDQUFxQixNQUFyQixDQUE0QixjQUE1QixFQUE0QyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLElBQXBCLEVBQTBCLEtBQUssZUFBL0IsQ0FBNUMsRUFBNkYsS0FBSyxlQUFMLENBQXFCLGdCQUFsSDtBQUNBOzs7O29DQUVpQjtBQUNqQjtBQUNBLFFBQUssZ0JBQUwsQ0FBc0IsTUFBdEIsQ0FBNkIsaUJBQTdCLEVBQWdELEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEIsS0FBSyxjQUEvQixDQUFoRDtBQUNBOzs7bUNBRWdCO0FBQ2hCO0FBQ0Esd0JBQVcsVUFBWCxJQUF5QixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLHFCQUFXLFVBQTNCLENBQXpCO0FBQ0E7Ozs7O0FBRUY7OztBQUNBLElBQUksSUFBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRHFCLFU7OztBQUNqQiwwQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7bUNBQ1U7QUFDUCxvQkFBUSxHQUFSLENBQVksSUFBWjtBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsS0FBbkI7QUFDSDs7O2tDQUNTO0FBQ04sb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSDs7O3NDQUNhLEcsRUFBSztBQUNmLGdCQUFNLGdCQUFnQixDQUNsQixLQUFLLEtBQUwsQ0FBVyxRQURPLEVBRWxCLEtBQUssS0FBTCxDQUFXLFVBRk8sRUFHbEIsS0FBSyxLQUFMLENBQVcsS0FITyxFQUlsQixLQUFLLEtBQUwsQ0FBVyxNQUpPLEVBS2xCLEtBQUssS0FBTCxDQUFXLGFBTE8sRUFNbEIsS0FBSyxLQUFMLENBQVcsVUFOTyxDQUF0QjtBQVFBLDBCQUFjLE9BQWQsQ0FBc0IsbUJBQVc7QUFDN0Isd0JBQVEsUUFBUixHQUFtQixHQUFuQjtBQUNILGFBRkQ7QUFHSDs7OztFQXZCbUMsS0FBSyxNOztrQkFBeEIsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJOzs7QUFDakIsb0JBQWM7QUFBQTs7QUFBQTtBQUVWO0FBQ0E7QUFDSDs7OzttQ0FDVTtBQUNQLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQUssa0JBQUw7QUFDQSxpQkFBSyxtQkFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7Ozs7QUFJQTs7Ozs2Q0FDcUI7QUFDakIsb0JBQVEsR0FBUixDQUFZLG1CQUFaO0FBRUg7O0FBRUQ7Ozs7QUFJQTs7Ozs4Q0FDc0I7QUFDbEIsb0JBQVEsSUFBUixDQUFhLGVBQWI7QUFFSDtBQUNEOzs7OztBQUtBOzs7O2tDQUNVLFMsRUFBVztBQUNqQixvQkFBUSxHQUFSLFdBQW9CLFNBQXBCO0FBRUg7QUFDRDs7Ozs7QUFLQTs7Ozt5Q0FDaUIsUyxFQUFXO0FBQ3hCLG9CQUFRLEdBQVIsU0FBa0IsU0FBbEI7QUFDSDs7OztFQXJENkIsS0FBSyxNOztrQkFBbEIsSTs7Ozs7Ozs7QUNBckI7QUFDQSxJQUFJLFNBQU8sS0FBSyxLQUFoQjtBQUNBLElBQUksY0FBWSxLQUFLLE1BQXJCO0FBQ0EsSUFBSSxPQUFLLEtBQUssRUFBTCxDQUFRLElBQWpCO0FBQ0EsSUFBSSxTQUFPLEtBQUssRUFBTCxDQUFRLE1BQW5CO0FBQ0EsSUFBSSxRQUFNLEtBQUssS0FBZjtBQUNBLElBQUcsQ0FBQyxPQUFPLEVBQVgsRUFBZSxPQUFPLEVBQVAsR0FBVSxFQUFWO1FBQ0QsTyxHQUFOLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBHYW1lUGFnZSBmcm9tIFwiLi9HYW1lUGFnZS9HYW1lUGFnZVwiXHJcbmltcG9ydCBHYW1lU2VsZWN0IGZyb20gXCIuL0dhbWVTZWxlY3QvR2FtZVNlbGVjdFwiXHJcbmltcG9ydCBHYW1lU3RhcnQgZnJvbSBcIi4vR2FtZVN0YXJ0L0dhbWVTdGFydFwiXHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2svVGFza1wiXHJcbmltcG9ydCBUYXNrRGV0YWlsIGZyb20gXCIuL1Rhc2tEZXRhaWwvVGFza0RldGFpbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YaMU2NyaXB05oiW6ICFUnVudGltZeW8leeUqFxyXG4gICAgICAgIGxldCByZWcgPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblx0XHRyZWcoXCJHYW1lUGFnZS9HYW1lUGFnZS5qc1wiLEdhbWVQYWdlKTtcclxuXHRcdHJlZyhcIkdhbWVTZWxlY3QvR2FtZVNlbGVjdC5qc1wiLEdhbWVTZWxlY3QpO1xyXG5cdFx0cmVnKFwiR2FtZVN0YXJ0L0dhbWVTdGFydC5qc1wiLEdhbWVTdGFydCk7XHJcblx0XHRyZWcoXCJUYXNrL1Rhc2suanNcIixUYXNrKTtcclxuXHRcdHJlZyhcIlRhc2tEZXRhaWwvVGFza0RldGFpbC5qc1wiLFRhc2tEZXRhaWwpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcud2lkdGggPSA3NTA7XHJcbkdhbWVDb25maWcuaGVpZ2h0ID0gMTMzNDtcclxuR2FtZUNvbmZpZy5zY2FsZU1vZGUgPVwiZml4ZWR3aWR0aFwiO1xyXG5HYW1lQ29uZmlnLnNjcmVlbk1vZGUgPSBcIm5vbmVcIjtcclxuR2FtZUNvbmZpZy5hbGlnblYgPSBcIm1pZGRsZVwiO1xyXG5HYW1lQ29uZmlnLmFsaWduSCA9IFwiY2VudGVyXCI7XHJcbkdhbWVDb25maWcuc3RhcnRTY2VuZSA9IFwiR2FtZVBhZ2Uuc2NlbmVcIjtcclxuR2FtZUNvbmZpZy5zY2VuZVJvb3QgPSBcIlwiO1xyXG5HYW1lQ29uZmlnLmRlYnVnID0gZmFsc2U7XHJcbkdhbWVDb25maWcuc3RhdCA9IGZhbHNlO1xyXG5HYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyA9IGZhbHNlO1xyXG5HYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uID0gdHJ1ZTtcclxuXHJcbkdhbWVDb25maWcuaW5pdCgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGFnZSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm93bmVyLmJ0bkFsYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5BbGFybSk7XHJcbiAgICAgICAgdGhpcy5vd25lci5idG5CYWNrLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5CYWNrKTtcclxuICAgICAgICB0aGlzLm93bmVyLmJ0blRyYWluLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5UcmFpbik7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkFsYXJtKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmjqXoraYnKTtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oJ1Rhc2tEZXRhaWwuc2NlbmUnKTtcclxuICAgIH1cclxuICAgIG9uQnRuQmFjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Zue54KJ6JClJyk7XHJcbiAgICB9XHJcbiAgICBvbkJ0blRyYWluKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmlrDoraborq3nu4PokKUnKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTZWxlY3QgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy5vd25lci5idG5DYW5jZWwub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vbkJ0bkNhbmNlbCk7XHJcbiAgICAgICAgdGhpcy5vd25lci5idG5FbnRlci5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uQnRuRW50ZXIpO1xyXG4gICAgICAgIHRoaXMub3duZXIuYnRuVHVybkxlZnQub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vbkJ0blR1cm5MZWZ0KTtcclxuICAgICAgICB0aGlzLm93bmVyLmJ0blR1cm5SaWdodC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uQnRuVHVyblJpZ2h0KTtcclxuICAgIH1cclxuICAgIG9uQnRuQ2FuY2VsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflj5bmtognKTtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oJ0dhbWVQYWdlLnNjZW5lJyk7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkVudGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfov5vlhaXnjrDlnLonKTtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oJ1Rhc2suc2NlbmUnKTtcclxuICAgIH1cclxuICAgIG9uQnRuVHJhaW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aWsOitpuiuree7g+iQpScpO1xyXG4gICAgfVxyXG4gICAgb25CdG5UdXJuTGVmdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5ZCR5bem6L2sJyk7XHJcbiAgICB9XHJcbiAgICBvbkJ0blR1cm5SaWdodCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5ZCR5Y+z6L2sJyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhcnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbn0iLCLvu79pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbi8vIGltcG9ydCBHYW1lU3RhcnQgZnJvbSAnLi9HYW1lU3RhcnQnO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkge1xyXG5cdFx0XHRMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHR9XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cclxuXHRcdC8vIOiInuWPsOmFjee9rlxyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG5cclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikge1xyXG5cdFx0XHRMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdH1cclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkge1xyXG5cdFx0XHRMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdH1cclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIHtcclxuXHRcdFx0TGF5YS5TdGF0LnNob3coKTtcclxuXHRcdH1cclxuXHRcdC8vIOmUmeivr+aPkOekuuW8ueeql1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKSB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumuWIneWni+WcuuaZr+eahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrRGV0YWlsIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dDb250cm9sKGZhbHNlKTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2dDb250cm9sKHZhbCkge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1RpcHNBcnIgPSBbXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuYnRuQ2xvc2UsXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuYnRuQ29uZmlybSxcclxuICAgICAgICAgICAgdGhpcy5vd25lci5idG5ObyxcclxuICAgICAgICAgICAgdGhpcy5vd25lci5idG5ZZXMsXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGlhbG9nQ29udGVudCxcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kaWFsb2dUaXBzXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGRpYWxvZ1RpcHNBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5fdmlzaWJsZSA9IHZhbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIGNvbnN0IGVxdWlwbWVudHMgPSBbXTsgLy8g6KOF5aSH5pWw5o2uIOS4jeefpemBk+aYr+S8oOi/m+WOu+i/mOaYr+ebtOaOpeWGmeatu++8jOWFiOe9ruS4uuepuuWQp++8jOWPr+S7peeUqOeahOaXtuWAmeebtOaOpeivu+WPlmpzb25cclxuICAgICAgICAvLyB0aGlzLm93bmVyLmVxdWlwbWVudExpc3QuZGF0YVNvdXJjZSA9IFtdOyAvLyDoo4XlpIfliJfooajmlbDmja7liJ3lp4vljJZcclxuICAgIH1cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgdGhpcy5sb2FkRXF1aXBtZW50c0RhdGEoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckVxdWlwbWVudExpc3QoKTtcclxuICAgICAgICAvLyB0aGlzLm93bmVyLmJ0blR1cm5MZWZ0Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5UdXJuKCdsZWZ0JykpO1xyXG4gICAgICAgIC8vIHRoaXMub3duZXIuYnRuVHVyblJpZ2h0Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5UdXJuKCdyaWdodCcpKTtcclxuICAgICAgICAvLyB0aGlzLm93bmVyLmJ0blR1cm5FbnRlci5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uQnRuQ2hhbmdlU2NlbmUoJ2ZvcndhcmQnKSk7XHJcbiAgICAgICAgLy8gdGhpcy5vd25lci5idG5UdXJuQ2FuY2VsLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25CdG5DaGFuZ2VTY2VuZSgnYmFja3dhcmQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yqg6L296KOF5aSH5pWw5o2uXHJcbiAgICAgKiBAYXV0aG9yIGdvb2ZmXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IEJlZm9yZSBuZXh0IGNvbW1pdFxyXG4gICAgbG9hZEVxdWlwbWVudHNEYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nICBkYXRhIG5vdycpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riy5p+T6KOF5aSH5YiX6KGoXHJcbiAgICAgKiBAYXV0aG9yIGdvb2ZmXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IEJlZm9yZSBuZXh0IGNvbW1pdFxyXG4gICAgcmVuZGVyRXF1aXBtZW50TGlzdCgpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ3JlbmRlciBsaXN0ICEnKVxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L2s5ZCR5oyJ6ZKu55qE5pa55rOVXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0g6L2s5ZCR5pa55ZCRXHJcbiAgICAgKiBAYXV0aG9yIGdvb2ZmXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IEJlZm9yZSBuZXh0IGNvbW1pdFxyXG4gICAgb25CdG5UdXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0dXJuICR7ZGlyZWN0aW9ufWApXHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlnLrmma/liIfmjaLmjInpkq7vvIjov5vlhaXnjrDlnLrvvIznprvlvIDnjrDlnLrvvIlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSDlnLrmma/mlrnlkJFcclxuICAgICAqIEBhdXRob3IgZ29vZmZcclxuICAgICAqL1xyXG4gICAgLy8gVE9ETzogQmVmb3JlIG5leHQgY29tbWl0XHJcbiAgICBvbkJ0bkNoYW5nZVNjZW5lKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnbyAke2RpcmVjdGlvbn1gKVxyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbnZhciBDTEFTUyQ9TGF5YS5jbGFzcztcclxudmFyIFNUQVRJQ0FUVFIkPUxheWEuc3RhdGljO1xudmFyIFZpZXc9bGF5YS51aS5WaWV3O1xyXG52YXIgRGlhbG9nPWxheWEudWkuRGlhbG9nO1xyXG52YXIgU2NlbmU9TGF5YS5TY2VuZTtcbmlmKCF3aW5kb3cudWkpIHdpbmRvdy51aT17fTtcbmV4cG9ydCB7dWkgYXMgZGVmYXVsdH07Il19
