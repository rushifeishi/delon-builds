/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
export class TrendComponent {
    constructor() {
        /**
         * 是否彩色标记
         */
        this.colorful = true;
        /**
         * 颜色反转
         */
        this.reverseColor = false;
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                exportAs: 'trend',
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{flag}}\"><i nz-icon nzType=\"caret-{{flag}}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
if (false) {
    /**
     * 上升下降标识
     * @type {?}
     */
    TrendComponent.prototype.flag;
    /**
     * 是否彩色标记
     * @type {?}
     */
    TrendComponent.prototype.colorful;
    /**
     * 颜色反转
     * @type {?}
     */
    TrendComponent.prototype.reverseColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3RyZW5kLyIsInNvdXJjZXMiOlsidHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWEzQyxNQUFNLE9BQU8sY0FBYztJQVgzQjs7OztRQWUyQixhQUFRLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWhCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hELENBQUM7OztZQWxCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQix3SUFBcUM7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtvQkFDdkIscUJBQXFCLEVBQUUsV0FBVztvQkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO2lCQUNyRDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUdFLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLOztBQUZtQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFOztvREFBc0I7Ozs7OztJQUo5Qyw4QkFBNkI7Ozs7O0lBRTdCLGtDQUF5Qzs7Ozs7SUFFekMsc0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICBleHBvcnRBczogJ3RyZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRyZW5kQ29tcG9uZW50IHtcbiAgLyoqIOS4iuWNh+S4i+mZjeagh+ivhiAqL1xuICBASW5wdXQoKSBmbGFnOiAndXAnIHwgJ2Rvd24nO1xuICAvKiog5piv5ZCm5b2p6Imy5qCH6K6wICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb2xvcmZ1bCA9IHRydWU7XG4gIC8qKiDpopzoibLlj43ovawgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19