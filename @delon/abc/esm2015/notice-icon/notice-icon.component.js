/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
export class NoticeIconComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.data = [];
        this.loading = false;
        this.popoverVisible = false;
        this.select = new EventEmitter();
        this.clear = new EventEmitter();
        this.popoverVisibleChange = new EventEmitter();
    }
    /**
     * @param {?} result
     * @return {?}
     */
    onVisibleChange(result) {
        this.popoverVisibleChange.emit(result);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onSelect(i) {
        this.select.emit(i);
    }
    /**
     * @param {?} title
     * @return {?}
     */
    onClear(title) {
        this.clear.emit(title);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.change.subscribe(() => {
            this.locale = this.i18n.getData('noticeIcon');
            this.cdr.detectChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NoticeIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-icon',
                template: "<nz-badge *ngIf=\"data?.length === 0\" [nzCount]=\"count\">\n  <i nz-icon type=\"bell\"></i>\n</nz-badge>\n<nz-popover *ngIf=\"data?.length > 0\" [nzVisible]=\"popoverVisible\" (nzVisibleChange)=\"onVisibleChange($event)\" nzTrigger=\"click\"\n  nzPlacement=\"bottomRight\" nzOverlayClassName=\"notice-icon\">\n  <div nz-popover class=\"alain-default__nav-item notice-icon__item\">\n    <nz-badge [nzCount]=\"count\">\n      <i nz-icon type=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n    </nz-badge>\n  </div>\n  <ng-template #nzTemplate>\n    <nz-spin [nzSpinning]=\"loading\" [nzDelay]=\"0\">\n      <nz-tabset>\n        <nz-tab *ngFor=\"let i of data\" [nzTitle]=\"i.title\">\n          <notice-icon-tab [locale]=\"locale\" [data]=\"i\" (select)=\"onSelect($event)\" (clear)=\"onClear($event)\"></notice-icon-tab>\n        </nz-tab>\n      </nz-tabset>\n    </nz-spin>\n  </ng-template>\n</nz-popover>\n",
                host: { '[class.notice-icon__btn]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NoticeIconComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
NoticeIconComponent.propDecorators = {
    data: [{ type: Input }],
    count: [{ type: Input }],
    loading: [{ type: Input }],
    popoverVisible: [{ type: Input }],
    select: [{ type: Output }],
    clear: [{ type: Output }],
    popoverVisibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NoticeIconComponent.prototype, "count", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NoticeIconComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NoticeIconComponent.prototype, "popoverVisible", void 0);
if (false) {
    /** @type {?} */
    NoticeIconComponent.prototype.i18n$;
    /** @type {?} */
    NoticeIconComponent.prototype.locale;
    /** @type {?} */
    NoticeIconComponent.prototype.data;
    /** @type {?} */
    NoticeIconComponent.prototype.count;
    /** @type {?} */
    NoticeIconComponent.prototype.loading;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisible;
    /** @type {?} */
    NoticeIconComponent.prototype.select;
    /** @type {?} */
    NoticeIconComponent.prototype.clear;
    /** @type {?} */
    NoticeIconComponent.prototype.popoverVisibleChange;
    /** @type {?} */
    NoticeIconComponent.prototype.i18n;
    /** @type {?} */
    NoticeIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9ub3RpY2UtaWNvbi8iLCJzb3VyY2VzIjpbIm5vdGljZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXeEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFhOUIsWUFBb0IsSUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQVY1RSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRVIsU0FBSSxHQUFpQixFQUFFLENBQUM7UUFFUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUM5QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNuQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRVUsQ0FBQzs7Ozs7SUFFakYsZUFBZSxDQUFDLE1BQWU7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFtQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaTZCQUEyQztnQkFDM0MsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVhRLGtCQUFrQjtZQVR6QixpQkFBaUI7OzttQkEwQmhCLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsTUFBTTtvQkFDTixNQUFNO21DQUNOLE1BQU07O0FBTGlCO0lBQWQsV0FBVyxFQUFFOztrREFBZTtBQUNiO0lBQWYsWUFBWSxFQUFFOztvREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7OzJEQUF3Qjs7O0lBUGhELG9DQUE0Qjs7SUFFNUIscUNBQWlCOztJQUVqQixtQ0FBaUM7O0lBQ2pDLG9DQUFzQzs7SUFDdEMsc0NBQXlDOztJQUN6Qyw2Q0FBZ0Q7O0lBQ2hELHFDQUFpRTs7SUFDakUsb0NBQXNEOztJQUN0RCxtREFBc0U7O0lBRTFELG1DQUFnQzs7SUFBRSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5vdGljZUljb25TZWxlY3QsIE5vdGljZUl0ZW0gfSBmcm9tICcuL25vdGljZS1pY29uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWNlLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbm90aWNlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3Mubm90aWNlLWljb25fX2J0bl0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGljZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgQElucHV0KCkgZGF0YTogTm90aWNlSXRlbVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwb3BvdmVyVmlzaWJsZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpY2VJY29uU2VsZWN0PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBvcG92ZXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZShyZXN1bHQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBvcG92ZXJWaXNpYmxlQ2hhbmdlLmVtaXQocmVzdWx0KTtcbiAgfVxuXG4gIG9uU2VsZWN0KGk6IE5vdGljZUljb25TZWxlY3QpIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGkpO1xuICB9XG5cbiAgb25DbGVhcih0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhci5lbWl0KHRpdGxlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXREYXRhKCdub3RpY2VJY29uJyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==