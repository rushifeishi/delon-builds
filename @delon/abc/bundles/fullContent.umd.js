/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/full-content', ['exports', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['full-content'] = {}),global.ng.router,global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,router,rxjs,operators,core,common,util) { 'use strict';

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
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
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
    var FullContentService = /** @class */ (function () {
        function FullContentService() {
            this._change = new rxjs.BehaviorSubject(null);
        }
        /** 切换全屏工作区状态 */
        /**
         * 切换全屏工作区状态
         * @return {?}
         */
        FullContentService.prototype.toggle = /**
         * 切换全屏工作区状态
         * @return {?}
         */
            function () {
                this._change.next(true);
            };
        Object.defineProperty(FullContentService.prototype, "change", {
            get: /**
             * @return {?}
             */ function () {
                return this._change.pipe(operators.share());
            },
            enumerable: true,
            configurable: true
        });
        FullContentService.decorators = [
            { type: core.Injectable }
        ];
        return FullContentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var wrapCls = "full-content__body";
    /** @type {?} */
    var openedCls = "full-content__opened";
    /** @type {?} */
    var hideTitleCls = "full-content__hidden-title";
    var FullContentComponent = /** @class */ (function () {
        // #endregion
        function FullContentComponent(el, cd, srv, router$$1, doc) {
            this.el = el;
            this.cd = cd;
            this.srv = srv;
            this.router = router$$1;
            this.doc = doc;
            this.inited = false;
            this.id = "_full-content-" + Math.random()
                .toString(36)
                .substring(2);
            this.scroll$ = null;
            this._height = 0;
            this.hideTitle = true;
            this.padding = 24;
            this.fullscreenChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullContentComponent.prototype.updateCls = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var clss = this.bodyEl.classList;
                if (this.fullscreen) {
                    clss.add(openedCls);
                    if (this.hideTitle) {
                        clss.add(hideTitleCls);
                    }
                }
                else {
                    clss.remove(openedCls);
                    if (this.hideTitle) {
                        clss.remove(hideTitleCls);
                    }
                }
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.update = /**
         * @return {?}
         */
            function () {
                this.updateCls();
                this.updateHeight();
                this.fullscreenChange.emit(this.fullscreen);
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.updateHeight = /**
         * @return {?}
         */
            function () {
                this._height =
                    this.bodyEl.getBoundingClientRect().height -
                        (( /** @type {?} */(this.el.nativeElement))).getBoundingClientRect().top -
                        this.padding;
                this.cd.detectChanges();
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.removeInBody = /**
         * @return {?}
         */
            function () {
                this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.inited = true;
                this.bodyEl = this.doc.querySelector('body');
                this.bodyEl.classList.add(wrapCls);
                (( /** @type {?} */(this.el.nativeElement))).id = this.id;
                this.updateCls();
                // when window resize
                this.scroll$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(200))
                    .subscribe(function () { return _this.updateHeight(); });
                // when servier changed
                this.srv$ = this.srv.change
                    .pipe(operators.filter(function (res) { return res !== null; }))
                    .subscribe(function () { return _this.toggle(); });
                // when router changed
                this.route$ = this.router.events
                    .pipe(operators.filter(function (e) {
                    return e instanceof router.ActivationStart || e instanceof router.ActivationEnd;
                }), operators.debounceTime(200))
                    .subscribe(function (e) {
                    if (!!_this.doc.querySelector('#' + _this.id)) {
                        _this.bodyEl.classList.add(wrapCls);
                        _this.updateCls();
                    }
                    else {
                        _this.removeInBody();
                    }
                });
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.fullscreen = !this.fullscreen;
                this.update();
                this.updateHeight();
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () { return _this.updateHeight(); });
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.inited)
                    this.update();
            };
        /**
         * @return {?}
         */
        FullContentComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.removeInBody();
                this.scroll$.unsubscribe();
                this.srv$.unsubscribe();
                this.route$.unsubscribe();
            };
        FullContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'full-content',
                        template: "<ng-content></ng-content>",
                        host: { '[class.full-content]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        FullContentComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: FullContentService },
                { type: router.Router },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        FullContentComponent.propDecorators = {
            _height: [{ type: core.HostBinding, args: ['style.height.px',] }],
            fullscreen: [{ type: core.Input }],
            hideTitle: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            fullscreenChange: [{ type: core.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], FullContentComponent.prototype, "fullscreen", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], FullContentComponent.prototype, "hideTitle", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], FullContentComponent.prototype, "padding", void 0);
        return FullContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FullContentToggleDirective = /** @class */ (function () {
        function FullContentToggleDirective(parent) {
            this.parent = parent;
        }
        /**
         * @return {?}
         */
        FullContentToggleDirective.prototype._click = /**
         * @return {?}
         */
            function () {
                this.parent.toggle();
            };
        FullContentToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[full-toggle]',
                    },] }
        ];
        /** @nocollapse */
        FullContentToggleDirective.ctorParameters = function () {
            return [
                { type: FullContentComponent }
            ];
        };
        FullContentToggleDirective.propDecorators = {
            _click: [{ type: core.HostListener, args: ['click',] }]
        };
        return FullContentToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [FullContentComponent, FullContentToggleDirective];
    var FullContentModule = /** @class */ (function () {
        function FullContentModule() {
        }
        /**
         * @return {?}
         */
        FullContentModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: FullContentModule,
                    providers: [FullContentService],
                };
            };
        FullContentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return FullContentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.FullContentComponent = FullContentComponent;
    exports.FullContentService = FullContentService;
    exports.FullContentToggleDirective = FullContentToggleDirective;
    exports.FullContentModule = FullContentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fullContent.umd.js.map