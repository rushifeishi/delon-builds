import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Inject, ContentChildren, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WINDOW } from '@delon/theme';
import { __decorate, __metadata, __spread } from 'tslib';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function GlobalFooterLink() { }
if (false) {
    /** @type {?} */
    GlobalFooterLink.prototype.title;
    /** @type {?} */
    GlobalFooterLink.prototype.href;
    /** @type {?|undefined} */
    GlobalFooterLink.prototype.blankTarget;
}

/**
 * @fileoverview added by tsickle
 * Generated from: global-footer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalFooterItemComponent = /** @class */ (function () {
    function GlobalFooterItemComponent() {
    }
    GlobalFooterItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer-item',
                    exportAs: 'globalFooterItem',
                    template: "\n    <ng-template #host><ng-content></ng-content></ng-template>\n  ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    GlobalFooterItemComponent.propDecorators = {
        host: [{ type: ViewChild, args: ['host', { static: true },] }],
        href: [{ type: Input }],
        blankTarget: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
    return GlobalFooterItemComponent;
}());
if (false) {
    /** @type {?} */
    GlobalFooterItemComponent.prototype.host;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.href;
    /** @type {?} */
    GlobalFooterItemComponent.prototype.blankTarget;
}

/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalFooterComponent = /** @class */ (function () {
    function GlobalFooterComponent(router, win) {
        this.router = router;
        this.win = win;
        this.links = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    GlobalFooterComponent.prototype.to = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    };
    GlobalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'global-footer',
                    exportAs: 'globalFooter',
                    template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i.title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.global-footer]': 'true' },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    GlobalFooterComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    GlobalFooterComponent.propDecorators = {
        links: [{ type: Input }],
        items: [{ type: ContentChildren, args: [GlobalFooterItemComponent,] }]
    };
    return GlobalFooterComponent;
}());
if (false) {
    /** @type {?} */
    GlobalFooterComponent.prototype.links;
    /** @type {?} */
    GlobalFooterComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GlobalFooterComponent.prototype.win;
}

/**
 * @fileoverview added by tsickle
 * Generated from: global-footer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
var GlobalFooterModule = /** @class */ (function () {
    function GlobalFooterModule() {
    }
    GlobalFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return GlobalFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: globalFooter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
//# sourceMappingURL=globalFooter.js.map
