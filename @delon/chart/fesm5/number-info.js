import { __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, NgModule } from '@angular/core';
import { updateHostClass, InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberInfoComponent = /** @class */ (function () {
    function NumberInfoComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /**
         * 状态样式
         */
        this.theme = 'light';
        /**
         * 设置数字和描述直接的间距（像素）
         */
        this.gap = 8;
    }
    /**
     * @return {?}
     */
    NumberInfoComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, renderer = _b.renderer, theme = _b.theme;
        updateHostClass(el.nativeElement, renderer, (_a = {
                'number-info': true
            },
            _a["number-info__" + theme] = true,
            _a), true);
    };
    /**
     * @return {?}
     */
    NumberInfoComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NumberInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'number-info',
                    exportAs: 'numberInfo',
                    template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *stringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *stringTemplateOutlet=\"total\">{{total}}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *stringTemplateOutlet=\"subTotal\">{{subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NumberInfoComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NumberInfoComponent.propDecorators = {
        title: [{ type: Input }],
        subTitle: [{ type: Input }],
        total: [{ type: Input }],
        subTotal: [{ type: Input }],
        suffix: [{ type: Input }],
        status: [{ type: Input }],
        theme: [{ type: Input }],
        gap: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NumberInfoComponent.prototype, "gap", void 0);
    return NumberInfoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [NumberInfoComponent];
var NumberInfoModule = /** @class */ (function () {
    function NumberInfoModule() {
    }
    NumberInfoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return NumberInfoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NumberInfoComponent, NumberInfoModule };
//# sourceMappingURL=number-info.js.map
