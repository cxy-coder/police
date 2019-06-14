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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

var GameConfig = function () {
    function GameConfig() {
        _classCallCheck(this, GameConfig);
    }

    _createClass(GameConfig, null, [{
        key: "init",
        value: function init() {
            //注册Script或者Runtime引用
            var reg = Laya.ClassUtils.regClass;
        }
    }]);

    return GameConfig;
}();

exports.default = GameConfig;

GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode = "fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "GameStart.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			//加载IDE指定的场景
			_GameConfig2.default.startScene && Laya.Scene.open(_GameConfig2.default.startScene);
		}
	}]);

	return Main;
}();
//激活启动类


new Main();

},{"./GameConfig":1,"./ui/layaMaxUI":3}],3:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L1Byb2dyYW0gRmlsZXMgKHg4NikvTGF5YUFpcklERV9iZXRhL3Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9HYW1lQ29uZmlnLmpzIiwic3JjL01haW4uanMiLCJzcmMvdWkvbGF5YU1heFVJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7O0lBR3FCLFU7Ozs7Ozs7K0JBQ0g7QUFDVjtBQUNBLGdCQUFJLE1BQU0sS0FBSyxVQUFMLENBQWdCLFFBQTFCO0FBRUg7Ozs7OztrQkFMZ0IsVTs7QUFPckIsV0FBVyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsV0FBVyxTQUFYLEdBQXNCLFlBQXRCO0FBQ0EsV0FBVyxVQUFYLEdBQXdCLE1BQXhCO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLEtBQXBCO0FBQ0EsV0FBVyxNQUFYLEdBQW9CLE1BQXBCO0FBQ0EsV0FBVyxVQUFYLEdBQXdCLGlCQUF4QjtBQUNBLFdBQVcsU0FBWCxHQUF1QixFQUF2QjtBQUNBLFdBQVcsS0FBWCxHQUFtQixLQUFuQjtBQUNBLFdBQVcsSUFBWCxHQUFrQixLQUFsQjtBQUNBLFdBQVcsWUFBWCxHQUEwQixLQUExQjtBQUNBLFdBQVcsaUJBQVgsR0FBK0IsSUFBL0I7O0FBRUEsV0FBVyxJQUFYOzs7Ozs7O0FDdkJDOzs7O0FBQ0Q7Ozs7Ozs7O0lBRU0sSTtBQUNMLGlCQUFjO0FBQUE7O0FBQ2I7QUFDQSxNQUFJLE9BQU8sUUFBUCxDQUFKLEVBQXNCO0FBQ3JCLFVBQU8sSUFBUCxDQUFZLHFCQUFXLEtBQXZCLEVBQThCLHFCQUFXLE1BQXpDO0FBQ0EsR0FGRCxNQUVPO0FBQ04sUUFBSyxJQUFMLENBQVUscUJBQVcsS0FBckIsRUFBNEIscUJBQVcsTUFBdkMsRUFBK0MsS0FBSyxPQUFMLENBQS9DO0FBQ0E7QUFDRCxPQUFLLFNBQUwsS0FBbUIsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLEVBQW5CO0FBQ0EsT0FBSyxZQUFMLEtBQXNCLEtBQUssWUFBTCxFQUFtQixNQUFuQixFQUF0Qjs7QUFFQTtBQUNBLE9BQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIscUJBQVcsU0FBbEM7QUFDQSxPQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLHFCQUFXLFVBQW5DO0FBQ0EsT0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixxQkFBVyxNQUEvQjtBQUNBLE9BQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IscUJBQVcsTUFBL0I7O0FBRUE7QUFDQSxPQUFLLEdBQUwsQ0FBUyxpQkFBVCxHQUE2QixxQkFBVyxpQkFBeEM7O0FBRUE7QUFDQSxNQUFJLHFCQUFXLEtBQVgsSUFBb0IsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixPQUExQixLQUFzQyxNQUE5RCxFQUFzRTtBQUNyRSxRQUFLLGdCQUFMO0FBQ0E7QUFDRCxNQUFJLHFCQUFXLFlBQVgsSUFBMkIsS0FBSyxrQkFBTCxDQUEvQixFQUF5RDtBQUN4RCxRQUFLLGtCQUFMLEVBQXlCLE1BQXpCO0FBQ0E7QUFDRCxNQUFJLHFCQUFXLElBQWYsRUFBcUI7QUFDcEIsUUFBSyxJQUFMLENBQVUsSUFBVjtBQUNBO0FBQ0Q7QUFDQSxPQUFLLGdCQUFMLEdBQXdCLElBQXhCOztBQUVBO0FBQ0EsT0FBSyxlQUFMLENBQXFCLE1BQXJCLENBQTRCLGNBQTVCLEVBQTRDLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEIsS0FBSyxlQUEvQixDQUE1QyxFQUE2RixLQUFLLGVBQUwsQ0FBcUIsZ0JBQWxIO0FBQ0E7Ozs7b0NBRWlCO0FBQ2pCO0FBQ0EsUUFBSyxnQkFBTCxDQUFzQixNQUF0QixDQUE2QixpQkFBN0IsRUFBZ0QsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixFQUEwQixLQUFLLGNBQS9CLENBQWhEO0FBQ0E7OzttQ0FFZ0I7QUFDaEI7QUFDQSx3QkFBVyxVQUFYLElBQXlCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IscUJBQVcsVUFBM0IsQ0FBekI7QUFDQTs7Ozs7QUFFRjs7O0FBQ0EsSUFBSSxJQUFKOzs7Ozs7OztBQ25EQTtBQUNBLElBQUksU0FBTyxLQUFLLEtBQWhCO0FBQ0EsSUFBSSxjQUFZLEtBQUssTUFBckI7QUFDQSxJQUFJLE9BQUssS0FBSyxFQUFMLENBQVEsSUFBakI7QUFDQSxJQUFJLFNBQU8sS0FBSyxFQUFMLENBQVEsTUFBbkI7QUFDQSxJQUFJLFFBQU0sS0FBSyxLQUFmO0FBQ0EsSUFBRyxDQUFDLE9BQU8sRUFBWCxFQUFlLE9BQU8sRUFBUCxHQUFVLEVBQVY7UUFDRCxPLEdBQU4sRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIC8v5rOo5YaMU2NyaXB05oiW6ICFUnVudGltZeW8leeUqFxyXG4gICAgICAgIGxldCByZWcgPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcud2lkdGggPSA3NTA7XHJcbkdhbWVDb25maWcuaGVpZ2h0ID0gMTMzNDtcclxuR2FtZUNvbmZpZy5zY2FsZU1vZGUgPVwiZml4ZWR3aWR0aFwiO1xyXG5HYW1lQ29uZmlnLnNjcmVlbk1vZGUgPSBcIm5vbmVcIjtcclxuR2FtZUNvbmZpZy5hbGlnblYgPSBcInRvcFwiO1xyXG5HYW1lQ29uZmlnLmFsaWduSCA9IFwibGVmdFwiO1xyXG5HYW1lQ29uZmlnLnN0YXJ0U2NlbmUgPSBcIkdhbWVTdGFydC5zY2VuZVwiO1xyXG5HYW1lQ29uZmlnLnNjZW5lUm9vdCA9IFwiXCI7XHJcbkdhbWVDb25maWcuZGVidWcgPSBmYWxzZTtcclxuR2FtZUNvbmZpZy5zdGF0ID0gZmFsc2U7XHJcbkdhbWVDb25maWcucGh5c2ljc0RlYnVnID0gZmFsc2U7XHJcbkdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb24gPSB0cnVlO1xyXG5cclxuR2FtZUNvbmZpZy5pbml0KCk7XHJcbiIsIu+7v2ltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHVpIGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIHtcclxuXHRcdFx0TGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0TGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0fVxyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHJcblx0XHQvLyDoiJ7lj7DphY3nva5cclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG5cdFx0TGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuXHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIHtcclxuXHRcdFx0TGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIHtcclxuXHRcdFx0TGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSB7XHJcblx0XHRcdExheWEuU3RhdC5zaG93KCk7XHJcblx0XHR9XHJcblx0XHQvLyDplJnor6/mj5DnpLrlvLnnqpdcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKSB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCkge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbnZhciBDTEFTUyQ9TGF5YS5jbGFzcztcclxudmFyIFNUQVRJQ0FUVFIkPUxheWEuc3RhdGljO1xudmFyIFZpZXc9bGF5YS51aS5WaWV3O1xyXG52YXIgRGlhbG9nPWxheWEudWkuRGlhbG9nO1xyXG52YXIgU2NlbmU9TGF5YS5TY2VuZTtcbmlmKCF3aW5kb3cudWkpIHdpbmRvdy51aT17fTtcbmV4cG9ydCB7dWkgYXMgZGVmYXVsdH07Il19
