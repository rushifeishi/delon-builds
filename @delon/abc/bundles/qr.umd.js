/**
 * @license ng-alain(cipchk@qq.com) v8.8.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/qr', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.qr = {}), global.ng.core, global.delon.util, global.ng.common));
}(this, (function (exports, core, util, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: qr.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var QRConfig = /** @class */ (function () {
        function QRConfig() {
            /**
             * 背景，默认：`white`
             */
            this.background = 'white';
            /**
             * 背景透明级别，范围：`0-1` 之间，默认：`1.0`
             */
            this.backgroundAlpha = 1;
            /**
             * 前景，默认：`black`
             */
            this.foreground = 'black';
            /**
             * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
             */
            this.foregroundAlpha = 1;
            /**
             * 误差校正级别，默认：`L`
             */
            this.level = 'L';
            /**
             * 二维码输出图片MIME类型，默认：`image/png`
             */
            this.mime = 'image/png';
            /**
             * 内边距（单位：px），默认：`10`
             */
            this.padding = 10;
            /**
             * 大小（单位：px），默认：`220`
             */
            this.size = 220;
        }
        QRConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ QRConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QRConfig_Factory() { return new QRConfig(); }, token: QRConfig, providedIn: "root" });
        return QRConfig;
    }());
    if (false) {
        /**
         * 背景，默认：`white`
         * @type {?}
         */
        QRConfig.prototype.background;
        /**
         * 背景透明级别，范围：`0-1` 之间，默认：`1.0`
         * @type {?}
         */
        QRConfig.prototype.backgroundAlpha;
        /**
         * 前景，默认：`black`
         * @type {?}
         */
        QRConfig.prototype.foreground;
        /**
         * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
         * @type {?}
         */
        QRConfig.prototype.foregroundAlpha;
        /**
         * 误差校正级别，默认：`L`
         * @type {?}
         */
        QRConfig.prototype.level;
        /**
         * 二维码输出图片MIME类型，默认：`image/png`
         * @type {?}
         */
        QRConfig.prototype.mime;
        /**
         * 内边距（单位：px），默认：`10`
         * @type {?}
         */
        QRConfig.prototype.padding;
        /**
         * 大小（单位：px），默认：`220`
         * @type {?}
         */
        QRConfig.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: qr.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var QRService = /** @class */ (function () {
        function QRService(cog) {
            /**
             * 背景透明级别，范围：`0-1` 之间
             */
            this.backgroundAlpha = 1;
            Object.assign(this, cog);
            this.qr = new QRious();
        }
        /**
         * 生成二维码，并返回Base64编码
         *
         * @param [value] 重新指定值
         */
        /**
         * 生成二维码，并返回Base64编码
         *
         * @param {?=} value
         * @return {?}
         */
        QRService.prototype.refresh = /**
         * 生成二维码，并返回Base64编码
         *
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var option = typeof value === 'object'
                ? value
                : {
                    background: this.background,
                    backgroundAlpha: this.backgroundAlpha,
                    foreground: this.foreground,
                    foregroundAlpha: this.foregroundAlpha,
                    level: this.level,
                    padding: this.padding,
                    size: this.size,
                    value: value || this.value,
                };
            option.value = this.toUtf8ByteArray(option.value);
            this.qr.set(option);
            return this.dataURL;
        };
        /**
         * @private
         * @param {?} str
         * @return {?}
         */
        QRService.prototype.toUtf8ByteArray = /**
         * @private
         * @param {?} str
         * @return {?}
         */
        function (str) {
            str = encodeURI(str);
            /** @type {?} */
            var result = [];
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) !== '%') {
                    result.push(str.charCodeAt(i));
                }
                else {
                    result.push(parseInt(str.substr(i + 1, 2), 16));
                    i += 2;
                }
            }
            return result.map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return String.fromCharCode(v); })).join('');
        };
        Object.defineProperty(QRService.prototype, "dataURL", {
            /**
             * 返回当前二维码Base64编码
             */
            get: /**
             * 返回当前二维码Base64编码
             * @return {?}
             */
            function () {
                return this.qr.toDataURL();
            },
            enumerable: true,
            configurable: true
        });
        QRService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        QRService.ctorParameters = function () { return [
            { type: QRConfig }
        ]; };
        /** @nocollapse */ QRService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QRService_Factory() { return new QRService(core.ɵɵinject(QRConfig)); }, token: QRService, providedIn: "root" });
        return QRService;
    }());
    if (false) {
        /**
         * 当前qr实例
         * @type {?}
         */
        QRService.prototype.qr;
        /**
         * 背景
         * @type {?}
         */
        QRService.prototype.background;
        /**
         * 背景透明级别，范围：`0-1` 之间
         * @type {?}
         */
        QRService.prototype.backgroundAlpha;
        /**
         * 前景
         * @type {?}
         */
        QRService.prototype.foreground;
        /**
         * 前景透明级别，范围：`0-1` 之间
         * @type {?}
         */
        QRService.prototype.foregroundAlpha;
        /**
         * 误差校正级别
         * @type {?}
         */
        QRService.prototype.level;
        /**
         * 二维码输出图片MIME类型
         * @type {?}
         */
        QRService.prototype.mime;
        /**
         * 内边距（单位：px）
         * @type {?}
         */
        QRService.prototype.padding;
        /**
         * 大小（单位：px）
         * @type {?}
         */
        QRService.prototype.size;
        /**
         * 值
         * @type {?}
         */
        QRService.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: qr.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var QRComponent = /** @class */ (function () {
        // #endregion
        function QRComponent(cog, srv, cdr) {
            this.srv = srv;
            this.cdr = cdr;
            this.change = new core.EventEmitter();
            Object.assign(this, __assign({}, new QRConfig(), cog));
        }
        /**
         * @return {?}
         */
        QRComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.dataURL = this.srv.refresh({
                background: this.background,
                backgroundAlpha: this.backgroundAlpha,
                foreground: this.foreground,
                foregroundAlpha: this.foregroundAlpha,
                level: this.level,
                mime: this.mime,
                padding: this.padding,
                size: this.size,
                value: this.value,
            });
            this.cdr.detectChanges();
            this.change.emit(this.dataURL);
        };
        QRComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'qr',
                        exportAs: 'qr',
                        template: "\n    <img class=\"qr__img\" src=\"{{ dataURL }}\" />\n  ",
                        host: {
                            '[class.qr]': 'true',
                            '[style.height.px]': 'size',
                            '[style.width.px]': 'size',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        QRComponent.ctorParameters = function () { return [
            { type: QRConfig },
            { type: QRService },
            { type: core.ChangeDetectorRef }
        ]; };
        QRComponent.propDecorators = {
            background: [{ type: core.Input }],
            backgroundAlpha: [{ type: core.Input }],
            foreground: [{ type: core.Input }],
            foregroundAlpha: [{ type: core.Input }],
            level: [{ type: core.Input }],
            mime: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            size: [{ type: core.Input }],
            value: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], QRComponent.prototype, "padding", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], QRComponent.prototype, "size", void 0);
        return QRComponent;
    }());
    if (false) {
        /** @type {?} */
        QRComponent.prototype.dataURL;
        /** @type {?} */
        QRComponent.prototype.background;
        /** @type {?} */
        QRComponent.prototype.backgroundAlpha;
        /** @type {?} */
        QRComponent.prototype.foreground;
        /** @type {?} */
        QRComponent.prototype.foregroundAlpha;
        /** @type {?} */
        QRComponent.prototype.level;
        /** @type {?} */
        QRComponent.prototype.mime;
        /** @type {?} */
        QRComponent.prototype.padding;
        /** @type {?} */
        QRComponent.prototype.size;
        /** @type {?} */
        QRComponent.prototype.value;
        /** @type {?} */
        QRComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        QRComponent.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        QRComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: qr.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [QRComponent];
    var QRModule = /** @class */ (function () {
        function QRModule() {
        }
        QRModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return QRModule;
    }());

    exports.QRComponent = QRComponent;
    exports.QRConfig = QRConfig;
    exports.QRModule = QRModule;
    exports.QRService = QRService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=qr.umd.js.map
