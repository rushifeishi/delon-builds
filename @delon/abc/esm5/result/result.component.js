/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this._type = '';
        this._icon = '';
        this._title = '';
        this._description = '';
        this._extra = '';
    }
    Object.defineProperty(ResultComponent.prototype, "type", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            switch (value) {
                case 'success':
                    this._icon = 'check-circle';
                    break;
                case 'error':
                    this._icon = 'close-circle';
                    break;
                default:
                    this._icon = value;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "title", {
        set: /**
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
    Object.defineProperty(ResultComponent.prototype, "description", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._description = null;
                this._descriptionTpl = value;
            }
            else
                this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultComponent.prototype, "extra", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._extra = null;
                this._extraTpl = value;
            }
            else
                this._extra = value;
        },
        enumerable: true,
        configurable: true
    });
    ResultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'result',
                    template: "<div class=\"result__icon\"><i nz-icon class=\"anticon anticon-{{_icon}} result__icon-{{_type}}\"></i></div>\n<div class=\"result__title\">\n  <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n</div>\n<div *ngIf=\"_description || _descriptionTpl\" class=\"result__desc\">\n  <ng-container *ngIf=\"_description; else _descriptionTpl\">{{_description}}</ng-container>\n</div>\n<div *ngIf=\"_extra || _extraTpl\" class=\"result__extra\">\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.result]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    ResultComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        extra: [{ type: Input }]
    };
    return ResultComponent;
}());
export { ResultComponent };
if (false) {
    /** @type {?} */
    ResultComponent.prototype._type;
    /** @type {?} */
    ResultComponent.prototype._icon;
    /** @type {?} */
    ResultComponent.prototype._title;
    /** @type {?} */
    ResultComponent.prototype._titleTpl;
    /** @type {?} */
    ResultComponent.prototype._description;
    /** @type {?} */
    ResultComponent.prototype._descriptionTpl;
    /** @type {?} */
    ResultComponent.prototype._extra;
    /** @type {?} */
    ResultComponent.prototype._extraTpl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBQUE7UUFPRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQWlCWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBVVosaUJBQVksR0FBRyxFQUFFLENBQUM7UUFVbEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQVNkLENBQUM7SUE3Q0Msc0JBQ0ksaUNBQUk7Ozs7O1FBRFIsVUFDUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLFFBQVEsS0FBSyxFQUFFO2dCQUNiLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztvQkFDNUIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLE1BQU07YUFDVDtRQUNILENBQUM7OztPQUFBO0lBSUQsc0JBQ0ksa0NBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFJRCxzQkFDSSx3Q0FBVzs7Ozs7UUFEZixVQUNnQixLQUFnQztZQUM5QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUM5Qjs7Z0JBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFJRCxzQkFDSSxrQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Z0JBckRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsa25CQUFzQztvQkFDdEMsSUFBSSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO29CQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3VCQUlFLEtBQUs7d0JBa0JMLEtBQUs7OEJBVUwsS0FBSzt3QkFVTCxLQUFLOztJQU9SLHNCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FoRFksZUFBZTs7O0lBQzFCLGdDQUFXOztJQUNYLGdDQUFXOztJQWlCWCxpQ0FBWTs7SUFDWixvQ0FBNEI7O0lBUzVCLHVDQUFrQjs7SUFDbEIsMENBQWtDOztJQVNsQyxpQ0FBWTs7SUFDWixvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLnJlc3VsdF0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCB7XG4gIF90eXBlID0gJyc7XG4gIF9pY29uID0gJyc7XG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHRoaXMuX2ljb24gPSAnY2xvc2UtY2lyY2xlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgX2Rlc2NyaXB0aW9uID0gJyc7XG4gIF9kZXNjcmlwdGlvblRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBfZXh0cmEgPSAnJztcbiAgX2V4dHJhVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZXh0cmEodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZXh0cmEgPSBudWxsO1xuICAgICAgdGhpcy5fZXh0cmFUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgfVxufVxuIl19