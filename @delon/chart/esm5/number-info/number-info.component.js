/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, ElementRef, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { toNumber, updateHostClass } from '@delon/util';
var NumberInfoComponent = /** @class */ (function () {
    function NumberInfoComponent(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this._title = '';
        this._subTitle = '';
        this._total = '';
        this._isSubTotal = false;
        this._subTotal = '';
        /**
         * 状态样式
         */
        this.theme = 'light';
        this._gap = 8;
        this._classMap = [];
    }
    Object.defineProperty(NumberInfoComponent.prototype, "title", {
        /** 标题 */
        set: /**
         * 标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTitle", {
        /** 子标题 */
        set: /**
         * 子标题
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._subTitle = null;
                this._subTitleTpl = value;
            }
            else
                this._subTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "total", {
        /** 总量 */
        set: /**
         * 总量
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._total = null;
                this._totalTpl = value;
            }
            else
                this._total = '' + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTotal", {
        /** 总量后缀 */
        set: /**
         * 总量后缀
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._subTotal = null;
                this._subTotalTpl = value;
            }
            else
                this._subTotal = value;
            this._isSubTotal = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "gap", {
        /** 设置数字和描述直接的间距（像素） */
        get: /**
         * 设置数字和描述直接的间距（像素）
         * @return {?}
         */
        function () {
            return this._gap;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gap = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumberInfoComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        updateHostClass(this.el.nativeElement, this.renderer, (_a = {
                'number-info': true
            },
            _a["number-info__" + this.theme] = true,
            _a), true);
        this.cd.detectChanges();
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
                    template: "<div *ngIf=\"_title || _titleTpl\" class=\"number-info__title\">\n  <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n</div>\n<div *ngIf=\"_subTitle || _subTitleTpl\" class=\"number-info__title-sub\">\n  <ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{'margin-top.px': gap}\">\n  <span class=\"number-info__value-text\">\n    <ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{suffix}}</em>\n  </span>\n  <span *ngIf=\"status || _isSubTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n    <i *ngIf=\"status\" nz-icon type=\"caret-{{status}}\"></i>\n  </span>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NumberInfoComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
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
    return NumberInfoComponent;
}());
export { NumberInfoComponent };
if (false) {
    /** @type {?} */
    NumberInfoComponent.prototype._title;
    /** @type {?} */
    NumberInfoComponent.prototype._titleTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._subTitle;
    /** @type {?} */
    NumberInfoComponent.prototype._subTitleTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._total;
    /** @type {?} */
    NumberInfoComponent.prototype._totalTpl;
    /** @type {?} */
    NumberInfoComponent.prototype._isSubTotal;
    /** @type {?} */
    NumberInfoComponent.prototype._subTotal;
    /** @type {?} */
    NumberInfoComponent.prototype._subTotalTpl;
    /**
     * 子总量
     * @type {?}
     */
    NumberInfoComponent.prototype.suffix;
    /**
     * 增加状态
     * @type {?}
     */
    NumberInfoComponent.prototype.status;
    /**
     * 状态样式
     * @type {?}
     */
    NumberInfoComponent.prototype.theme;
    /** @type {?} */
    NumberInfoComponent.prototype._gap;
    /** @type {?} */
    NumberInfoComponent.prototype._classMap;
    /** @type {?} */
    NumberInfoComponent.prototype.el;
    /** @type {?} */
    NumberInfoComponent.prototype.renderer;
    /** @type {?} */
    NumberInfoComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvLyIsInNvdXJjZXMiOlsibnVtYmVyLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhEO0lBMkVFLDZCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixFQUFxQjtRQUZyQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQXhFL0IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVdaLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFXZixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBV1osZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLEVBQUUsQ0FBQzs7OztRQXVCZixVQUFLLEdBQXdCLE9BQU8sQ0FBQztRQVU3QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBUWpCLGNBQVMsR0FBYSxFQUFFLENBQUM7SUFGdEIsQ0FBQztJQXRFSixzQkFDSSxzQ0FBSztRQUZULFNBQVM7Ozs7OztRQUNULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0kseUNBQVE7UUFGWixVQUFVOzs7Ozs7UUFDVixVQUNhLEtBQWdDO1lBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCOztnQkFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLHNDQUFLO1FBRlQsU0FBUzs7Ozs7O1FBQ1QsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVE7UUFGWixXQUFXOzs7Ozs7UUFDWCxVQUNhLEtBQWdDO1lBQzNDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCOztnQkFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUU5QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFlRCxzQkFDSSxvQ0FBRztRQUZQLHVCQUF1Qjs7Ozs7UUFDdkI7WUFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFRLEtBQVU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BSEE7Ozs7SUFhRCxzQ0FBUTs7O0lBQVI7O1FBQ0UsZUFBZSxDQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsUUFBUTtnQkFFWCxhQUFhLEVBQUUsSUFBSTs7WUFDbkIsR0FBQyxrQkFBZ0IsSUFBSSxDQUFDLEtBQU8sSUFBRyxJQUFJO2lCQUV0QyxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkFqR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw4MkJBQTJDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWkMsVUFBVTtnQkFDVixTQUFTO2dCQUVULGlCQUFpQjs7O3dCQWNoQixLQUFLOzJCQVdMLEtBQUs7d0JBV0wsS0FBSzsyQkFZTCxLQUFLO3lCQVdMLEtBQUs7eUJBSUwsS0FBSzt3QkFJTCxLQUFLO3NCQUlMLEtBQUs7O0lBZ0NSLDBCQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0E3RlksbUJBQW1COzs7SUFDOUIscUNBQVk7O0lBQ1osd0NBQTRCOztJQVU1Qix3Q0FBZTs7SUFDZiwyQ0FBK0I7O0lBVS9CLHFDQUFZOztJQUNaLHdDQUE0Qjs7SUFVNUIsMENBQW9COztJQUNwQix3Q0FBZTs7SUFDZiwyQ0FBK0I7Ozs7O0lBYS9CLHFDQUNlOzs7OztJQUdmLHFDQUNzQjs7Ozs7SUFHdEIsb0NBQ3FDOztJQVVyQyxtQ0FBaUI7O0lBUWpCLHdDQUF5Qjs7SUFMdkIsaUNBQXNCOztJQUN0Qix1Q0FBMkI7O0lBQzNCLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiog5qCH6aKYICovXG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX3N1YlRpdGxlID0gJyc7XG4gIF9zdWJUaXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqIOWtkOagh+mimCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3ViVGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fc3ViVGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fc3ViVGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fc3ViVGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIF90b3RhbCA9ICcnO1xuICBfdG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc2V0IHRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RvdGFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RvdGFsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RvdGFsID0gJycgKyB2YWx1ZTtcbiAgfVxuXG4gIF9pc1N1YlRvdGFsID0gZmFsc2U7XG4gIF9zdWJUb3RhbCA9ICcnO1xuICBfc3ViVG90YWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiDmgLvph4/lkI7nvIAgKi9cbiAgQElucHV0KClcbiAgc2V0IHN1YlRvdGFsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3N1YlRvdGFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3N1YlRvdGFsVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3N1YlRvdGFsID0gdmFsdWU7XG5cbiAgICB0aGlzLl9pc1N1YlRvdGFsID0gISF2YWx1ZTtcbiAgfVxuXG4gIC8qKiDlrZDmgLvph48gKi9cbiAgQElucHV0KClcbiAgc3VmZml4OiBzdHJpbmc7XG5cbiAgLyoqIOWinuWKoOeKtuaAgSAqL1xuICBASW5wdXQoKVxuICBzdGF0dXM6ICd1cCcgfCAnZG93bic7XG5cbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKVxuICB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG5cbiAgLyoqIOiuvue9ruaVsOWtl+WSjOaPj+i/sOebtOaOpeeahOmXtOi3ne+8iOWDj+e0oO+8iSAqL1xuICBASW5wdXQoKVxuICBnZXQgZ2FwKCkge1xuICAgIHJldHVybiB0aGlzLl9nYXA7XG4gIH1cbiAgc2V0IGdhcCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZ2FwID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2dhcCA9IDg7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBfY2xhc3NNYXA6IHN0cmluZ1tdID0gW107XG4gIHNldENsYXNzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXIsXG4gICAgICB7XG4gICAgICAgICdudW1iZXItaW5mbyc6IHRydWUsXG4gICAgICAgIFtgbnVtYmVyLWluZm9fXyR7dGhpcy50aGVtZX1gXTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19