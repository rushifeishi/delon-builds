/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, Renderer2, } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { InputNumber } from '@delon/util';
import { SGContainerComponent } from './grid-container.component';
/** @type {?} */
const prefixCls = `sg`;
export class SGComponent {
    /**
     * @param {?} el
     * @param {?} ren
     * @param {?} parent
     * @param {?} rep
     */
    constructor(el, ren, parent, rep) {
        this.ren = ren;
        this.parent = parent;
        this.rep = rep;
        this.clsMap = [];
        this.inited = false;
        if (parent == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        const { el, ren, clsMap, col, parent } = (/** @type {?} */ (this));
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...(/** @type {?} */ (this)).rep.genCls(col != null ? col : parent.colInCon || parent.col), `${prefixCls}__item`);
        clsMap.forEach(cls => ren.addClass(el, cls));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
}
SGComponent.decorators = [
    { type: Component, args: [{
                selector: 'sg',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SGComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SGContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService }
];
SGComponent.propDecorators = {
    col: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SGComponent.prototype, "col", void 0);
if (false) {
    /** @type {?} */
    SGComponent.prototype.el;
    /** @type {?} */
    SGComponent.prototype.clsMap;
    /** @type {?} */
    SGComponent.prototype.inited;
    /** @type {?} */
    SGComponent.prototype.col;
    /** @type {?} */
    SGComponent.prototype.ren;
    /** @type {?} */
    SGComponent.prototype.parent;
    /** @type {?} */
    SGComponent.prototype.rep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dyaWQvIiwic291cmNlcyI6WyJncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O01BRTVELFNBQVMsR0FBRyxJQUFJO0FBYXRCLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBV3RCLFlBQ0UsRUFBYyxFQUNOLEdBQWMsRUFDTSxNQUE0QixFQUNoRCxHQUFzQjtRQUZ0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ00sV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDaEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFieEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBY3JCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDN0IsQ0FBQzs7OztJQWRELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQWNPLFFBQVE7Y0FDUixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxtQkFBQSxJQUFJLEVBQUE7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FDVCxHQUFHLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDckUsR0FBRyxTQUFTLFFBQVEsQ0FDckIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLHlCQUF5QixFQUFFLGNBQWM7b0JBQ3pDLDBCQUEwQixFQUFFLGNBQWM7aUJBQzNDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBekJDLFVBQVU7WUFLVixTQUFTO1lBTUYsb0JBQW9CLHVCQTZCeEIsUUFBUSxZQUFJLElBQUk7WUFoQ1osaUJBQWlCOzs7a0JBdUJ2QixLQUFLOztBQUFzQjtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzt3Q0FBYTs7O0lBSnhDLHlCQUF3Qjs7SUFDeEIsNkJBQThCOztJQUM5Qiw2QkFBdUI7O0lBRXZCLDBCQUF3Qzs7SUFRdEMsMEJBQXNCOztJQUN0Qiw2QkFBd0Q7O0lBQ3hELDBCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU0dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzZ2A7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NnJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTR0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgcGFyZW50OiBTR0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2ddIG11c3QgaW5jbHVkZSAnc2ctY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCB9ID0gdGhpcztcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjbHNNYXAucHVzaChcbiAgICAgIC4uLnRoaXMucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sKSxcbiAgICAgIGAke3ByZWZpeENsc31fX2l0ZW1gLFxuICAgICk7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=