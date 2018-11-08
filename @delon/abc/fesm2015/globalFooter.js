import { __decorate, __metadata } from 'tslib';
import { Component, Input, ViewChild, ContentChildren, ChangeDetectionStrategy, Inject, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { WINDOW } from '@delon/theme';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class GlobalFooterItemComponent {
}
GlobalFooterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer-item',
                template: `<ng-template #host><ng-content></ng-content></ng-template>`
            }] }
];
GlobalFooterItemComponent.propDecorators = {
    host: [{ type: ViewChild, args: ['host',] }],
    href: [{ type: Input }],
    blankTarget: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class GlobalFooterComponent {
    /**
     * @param {?} router
     * @param {?} win
     */
    constructor(router, win) {
        this.router = router;
        this.win = win;
        this.links = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    to(item) {
        if (!item.href) {
            return;
        }
        if (item.blankTarget) {
            this.win.open(item.href);
            return;
        }
        if (/^https?:\/\//.test(item.href)) {
            this.win.location.href = item.href;
        }
        else {
            this.router.navigateByUrl(item.href);
        }
    }
}
GlobalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'global-footer',
                template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i.title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                host: { '[class.global-footer]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
GlobalFooterComponent.ctorParameters = () => [
    { type: Router },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
GlobalFooterComponent.propDecorators = {
    links: [{ type: Input }],
    items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
class GlobalFooterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: GlobalFooterModule, providers: [] };
    }
}
GlobalFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsRm9vdGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvZ2xvYmFsLWZvb3Rlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXItaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNob3N0PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JylcbiAgaG9zdDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBocmVmOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGJsYW5rVGFyZ2V0OiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEdsb2JhbEZvb3RlckxpbmsgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIudHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsb2JhbC1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nbG9iYWwtZm9vdGVyXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxpbmtzOiBHbG9iYWxGb290ZXJMaW5rW10gPSBbXTtcblxuICBAQ29udGVudENoaWxkcmVuKEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQpXG4gIGl0ZW1zITogUXVlcnlMaXN0PEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogV2luZG93KSB7fVxuXG4gIHRvKGl0ZW06IEdsb2JhbEZvb3RlckxpbmspIHtcbiAgICBpZiAoIWl0ZW0uaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbS5ibGFua1RhcmdldCkge1xuICAgICAgdGhpcy53aW4ub3BlbihpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaHJlZikpIHtcbiAgICAgIHRoaXMud2luLmxvY2F0aW9uLmhyZWYgPSBpdGVtLmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5ocmVmKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgR2xvYmFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHbG9iYWxGb290ZXJDb21wb25lbnQsIEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbEZvb3Rlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHbG9iYWxGb290ZXJNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQU9hLHlCQUF5Qjs7O1lBSnJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsNERBQTREO2FBQ3ZFOzs7bUJBRUUsU0FBUyxTQUFDLE1BQU07bUJBR2hCLEtBQUs7MEJBR0wsS0FBSzs7QUFFTkE7SUFEQyxZQUFZLEVBQUU7OzhEQUNNOzs7Ozs7QUNoQnZCLE1BcUJhLHFCQUFxQjs7Ozs7SUFPaEMsWUFBb0IsTUFBYyxFQUEwQixHQUFXO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBMEIsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUx2RSxVQUFLLEdBQXVCLEVBQUUsQ0FBQztLQUs0Qzs7Ozs7SUFFM0UsRUFBRSxDQUFDLElBQXNCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMGNBQTZDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUU7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWFEsTUFBTTtZQW1Cb0QsTUFBTSx1QkFBbEMsTUFBTSxTQUFDLE1BQU07OztvQkFOakQsS0FBSztvQkFHTCxlQUFlLFNBQUMseUJBQXlCOzs7Ozs7O0FDekI1QztNQVFNLFVBQVUsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDO0FBT3JFLE1BQWEsa0JBQWtCOzs7O0lBQzdCLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ3hEOzs7WUFSRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3RELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9