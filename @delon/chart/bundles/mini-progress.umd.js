/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd'), require('@delon/util'), require('@delon/theme')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/mini-progress', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd', '@delon/util', '@delon/theme'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['mini-progress'] = {}),global.ng.core,global.ng.common,global.ngZorro.antd,global.delon.util,global.delon.theme));
}(this, (function (exports,core,common,ngZorroAntd,util,theme) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var G2ProgressComponent = /** @class */ (function () {
        function G2ProgressComponent(i18n) {
            this.i18n = i18n;
            this.color = '#1890FF';
        }
        Object.defineProperty(G2ProgressComponent.prototype, "target", {
            get: /**
             * @return {?}
             */ function () {
                return this._target;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._target = Math.min(Math.max(util.toNumber(value), 0), 100);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2ProgressComponent.prototype, "strokeWidth", {
            get: /**
             * @return {?}
             */ function () {
                return this._strokeWidth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._strokeWidth = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2ProgressComponent.prototype, "percent", {
            get: /**
             * @return {?}
             */ function () {
                return this._percent;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._percent = Math.min(Math.max(util.toNumber(value), 0), 100);
            },
            enumerable: true,
            configurable: true
        });
        G2ProgressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-mini-progress',
                        template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                        host: { '[class.g2-mini-progress]': 'true' }
                    }] }
        ];
        /** @nocollapse */
        G2ProgressComponent.ctorParameters = function () {
            return [
                { type: theme.DelonLocaleService }
            ];
        };
        G2ProgressComponent.propDecorators = {
            color: [{ type: core.Input }],
            target: [{ type: core.Input }],
            strokeWidth: [{ type: core.Input }],
            percent: [{ type: core.Input }]
        };
        return G2ProgressComponent;
    }());

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2ProgressComponent];
    var G2MiniProgressModule = /** @class */ (function () {
        function G2MiniProgressModule() {
        }
        /**
         * @return {?}
         */
        G2MiniProgressModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2MiniProgressModule, providers: [] };
            };
        G2MiniProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, theme.DelonLocaleModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2MiniProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2ProgressComponent = G2ProgressComponent;
    exports.G2MiniProgressModule = G2MiniProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mini-progress.umd.js.map