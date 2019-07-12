/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseTabMatchMode, } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
export class ReuseTabComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} srv
     * @param {?} cdr
     * @param {?} router
     * @param {?} route
     * @param {?} render
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(el, srv, cdr, router, route, render, i18nSrv, doc) {
        this.srv = srv;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.render = render;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.mode = ReuseTabMatchMode.Menu;
        this.debug = false;
        this.allowClose = true;
        this.showCurrent = true;
        this.keepingScroll = false;
        this.customContextMenu = [];
        this.change = new EventEmitter();
        this.close = new EventEmitter();
        this.el = el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set keepingScrollContainer(value) {
        this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
    }
    /**
     * @private
     * @param {?} title
     * @return {?}
     */
    genTit(title) {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : (/** @type {?} */ (title.text));
    }
    /**
     * @private
     * @param {?=} notify
     * @return {?}
     */
    genList(notify) {
        /** @type {?} */
        const isClosed = notify && notify.active === 'close';
        /** @type {?} */
        const beforeClosePos = isClosed ? this.list.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === (/** @type {?} */ (notify)).url)) : -1;
        /** @type {?} */
        const ls = this.srv.items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            return (/** @type {?} */ ({
                url: item.url,
                title: this.genTit(item.title),
                closable: this.allowClose && item.closable && this.srv.count > 0,
                index,
                active: false,
                last: false,
            }));
        }));
        if (this.showCurrent) {
            /** @type {?} */
            const snapshot = this.route.snapshot;
            /** @type {?} */
            const url = this.srv.getUrl(snapshot);
            /** @type {?} */
            const idx = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => w.url === url));
            // jump directly when the current exists in the list
            // or create a new current item and jump
            if (idx !== -1 || (isClosed && (/** @type {?} */ (notify)).url === url)) {
                this.pos = isClosed ? (idx >= beforeClosePos ? this.pos - 1 : this.pos) : idx;
            }
            else {
                /** @type {?} */
                const snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push((/** @type {?} */ ({
                    url,
                    title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                    closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false,
                })));
                this.pos = ls.length - 1;
            }
            // fix unabled close last item
            if (ls.length <= 1)
                ls[0].closable = false;
        }
        this.list = ls;
        if (ls.length && isClosed) {
            this.to(null, this.pos);
        }
        this.refStatus(false);
        this.visibility();
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    visibility() {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el, 'display', this.list.length === 0 ? 'none' : 'block');
    }
    // #region UI
    /**
     * @private
     * @return {?}
     */
    get acitveIndex() {
        return (/** @type {?} */ (this.list.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.active)))).index;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    cmChange(res) {
        /** @type {?} */
        let fn = null;
        switch (res.type) {
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = (/**
                 * @return {?}
                 */
                () => {
                    this.srv.closeRight(res.item.url, res.includeNonCloseable);
                    this.close.emit(null);
                });
                break;
            case 'clear':
            case 'closeOther':
                fn = (/**
                 * @return {?}
                 */
                () => {
                    this.srv.clear(res.includeNonCloseable);
                    this.close.emit(null);
                });
                break;
        }
        if (!fn) {
            return;
        }
        if (!res.item.active && res.item.index <= this.acitveIndex) {
            this.to(null, res.item.index, fn);
        }
        else {
            fn();
        }
    }
    /**
     * @param {?=} dc
     * @return {?}
     */
    refStatus(dc = true) {
        if (this.list.length) {
            this.list[this.list.length - 1].last = true;
            this.list.forEach((/**
             * @param {?} i
             * @param {?} idx
             * @return {?}
             */
            (i, idx) => (i.active = this.pos === idx)));
        }
        if (dc)
            this.cdr.detectChanges();
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?=} cb
     * @return {?}
     */
    to(e, index, cb) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        index = Math.max(0, Math.min(index, this.list.length - 1));
        /** @type {?} */
        const item = this.list[index];
        this.router.navigateByUrl(item.url).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (!res)
                return;
            this.pos = index;
            this.item = item;
            this.refStatus();
            this.change.emit(item);
            if (cb) {
                cb();
            }
        }));
    }
    /**
     * @param {?} e
     * @param {?} idx
     * @param {?} includeNonCloseable
     * @return {?}
     */
    _close(e, idx, includeNonCloseable) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        /** @type {?} */
        const item = this.list[idx];
        this.srv.close(item.url, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.router.events
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} evt
         * @return {?}
         */
        evt => evt instanceof NavigationEnd)))
            .subscribe((/**
         * @return {?}
         */
        () => this.genList()));
        this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.genList((/** @type {?} */ (res)))));
        this.i18nSrv.change
            .pipe(filter((/**
         * @return {?}
         */
        () => this.srv.inited)), takeUntil(this.unsubscribe$), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        () => this.genList()));
        this.genList();
        this.srv.init();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        if (changes.keepingScroll) {
            this.srv.keepingScroll = this.keepingScroll;
            this.srv.keepingScrollContainer = this._keepingScrollContainer;
        }
        this.srv.debug = this.debug;
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
ReuseTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab',
                exportAs: 'reuseTab',
                template: "<nz-tabset [nzSelectedIndex]=\"pos\" [nzAnimated]=\"false\" nzType=\"line\"\n  [nzTabBarExtraContent]=\"tabBarExtraContent\"\n  [nzTabBarGutter]=\"tabBarGutter\"\n  [nzTabBarStyle]=\"tabBarStyle\">\n  <nz-tab *ngFor=\"let i of list; let index = index\" [nzTitle]=\"titleTemplate\">\n    <ng-template #titleTemplate>\n      <span [reuse-tab-context-menu]=\"i\" [customContextMenu]=\"customContextMenu\" (click)=\"to($event, index)\" class=\"reuse-tab__name\">{{i.title}}</span>\n      <i *ngIf=\"i.closable\" nz-icon nzType=\"close\" class=\"reuse-tab__op\" (click)=\"_close($event, index, false)\"></i>\n    </ng-template>\n  </nz-tab>\n</nz-tabset>\n<reuse-tab-context [i18n]=\"i18n\" (change)=\"cmChange($event)\"></reuse-tab-context>\n",
                host: {
                    '[class.reuse-tab]': 'true',
                },
                providers: [ReuseTabContextService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ReuseTabComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ReuseTabService },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ActivatedRoute },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ReuseTabComponent.propDecorators = {
    mode: [{ type: Input }],
    i18n: [{ type: Input }],
    debug: [{ type: Input }],
    max: [{ type: Input }],
    excludes: [{ type: Input }],
    allowClose: [{ type: Input }],
    showCurrent: [{ type: Input }],
    keepingScroll: [{ type: Input }],
    keepingScrollContainer: [{ type: Input }],
    customContextMenu: [{ type: Input }],
    tabBarExtraContent: [{ type: Input }],
    tabBarGutter: [{ type: Input }],
    tabBarStyle: [{ type: Input }],
    change: [{ type: Output }],
    close: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ReuseTabComponent.prototype, "debug", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], ReuseTabComponent.prototype, "max", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ReuseTabComponent.prototype, "allowClose", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ReuseTabComponent.prototype, "showCurrent", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], ReuseTabComponent.prototype, "keepingScroll", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype._keepingScrollContainer;
    /** @type {?} */
    ReuseTabComponent.prototype.list;
    /** @type {?} */
    ReuseTabComponent.prototype.item;
    /** @type {?} */
    ReuseTabComponent.prototype.pos;
    /** @type {?} */
    ReuseTabComponent.prototype.mode;
    /** @type {?} */
    ReuseTabComponent.prototype.i18n;
    /** @type {?} */
    ReuseTabComponent.prototype.debug;
    /** @type {?} */
    ReuseTabComponent.prototype.max;
    /** @type {?} */
    ReuseTabComponent.prototype.excludes;
    /** @type {?} */
    ReuseTabComponent.prototype.allowClose;
    /** @type {?} */
    ReuseTabComponent.prototype.showCurrent;
    /** @type {?} */
    ReuseTabComponent.prototype.keepingScroll;
    /** @type {?} */
    ReuseTabComponent.prototype.customContextMenu;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarExtraContent;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarGutter;
    /** @type {?} */
    ReuseTabComponent.prototype.tabBarStyle;
    /** @type {?} */
    ReuseTabComponent.prototype.change;
    /** @type {?} */
    ReuseTabComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    ReuseTabComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUdULFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFNTCxpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjdEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7Ozs7O0lBK0I1QixZQUNFLEVBQWMsRUFDTixHQUFvQixFQUNwQixHQUFzQixFQUN0QixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBaUIsRUFDcUIsT0FBeUIsRUFDN0MsR0FBUTtRQU4xQixRQUFHLEdBQUgsR0FB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Z3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEkxOG4sXG4gIFJldXNlQ3VzdG9tQ29udGV4dE1lbnUsXG4gIFJldXNlSXRlbSxcbiAgUmV1c2VUYWJDYWNoZWQsXG4gIFJldXNlVGFiTWF0Y2hNb2RlLFxuICBSZXVzZVRhYk5vdGlmeSxcbiAgUmV1c2VUaXRsZSxcbn0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmV1c2UtdGFiJyxcbiAgZXhwb3J0QXM6ICdyZXVzZVRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXVzZS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXVzZS10YWJdJzogJ3RydWUnLFxuICB9LFxuICBwcm92aWRlcnM6IFtSZXVzZVRhYkNvbnRleHRTZXJ2aWNlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyOiBFbGVtZW50O1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBtb2RlOiBSZXVzZVRhYk1hdGNoTW9kZSA9IFJldXNlVGFiTWF0Y2hNb2RlLk1lbnU7XG4gIEBJbnB1dCgpIGkxOG46IFJldXNlQ29udGV4dEkxOG47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWJ1ZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCkgZXhjbHVkZXM6IFJlZ0V4cFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbG9zZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q3VycmVudCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBrZWVwaW5nU2Nyb2xsQ29udGFpbmVyKHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRleHRNZW51OiBSZXVzZUN1c3RvbUNvbnRleHRNZW51W10gPSBbXTtcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiQmFyR3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmV1c2VJdGVtIHwgbnVsbD4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzcnY6IFJldXNlVGFiU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaXQodGl0bGU6IFJldXNlVGl0bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aSh0aXRsZS5pMThuKSA6IHRpdGxlLnRleHQhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MaXN0KG5vdGlmeT86IFJldXNlVGFiTm90aWZ5KSB7XG4gICAgY29uc3QgaXNDbG9zZWQgPSBub3RpZnkgJiYgbm90aWZ5LmFjdGl2ZSA9PT0gJ2Nsb3NlJztcbiAgICBjb25zdCBiZWZvcmVDbG9zZVBvcyA9IGlzQ2xvc2VkID8gdGhpcy5saXN0LmZpbmRJbmRleCh3ID0+IHcudXJsID09PSBub3RpZnkhLnVybCkgOiAtMTtcbiAgICBjb25zdCBscyA9IHRoaXMuc3J2Lml0ZW1zLm1hcCgoaXRlbTogUmV1c2VUYWJDYWNoZWQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcbiAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiBpdGVtLmNsb3NhYmxlICYmIHRoaXMuc3J2LmNvdW50ID4gMCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgfSBhcyBSZXVzZUl0ZW07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdDtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3J2LmdldFVybChzbmFwc2hvdCk7XG4gICAgICBjb25zdCBpZHggPSBscy5maW5kSW5kZXgodyA9PiB3LnVybCA9PT0gdXJsKTtcbiAgICAgIC8vIGp1bXAgZGlyZWN0bHkgd2hlbiB0aGUgY3VycmVudCBleGlzdHMgaW4gdGhlIGxpc3RcbiAgICAgIC8vIG9yIGNyZWF0ZSBhIG5ldyBjdXJyZW50IGl0ZW0gYW5kIGp1bXBcbiAgICAgIGlmIChpZHggIT09IC0xIHx8IChpc0Nsb3NlZCAmJiBub3RpZnkhLnVybCA9PT0gdXJsKSkge1xuICAgICAgICB0aGlzLnBvcyA9IGlzQ2xvc2VkID8gKGlkeCA+PSBiZWZvcmVDbG9zZVBvcyA/IHRoaXMucG9zIC0gMSA6IHRoaXMucG9zKSA6IGlkeDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90VHJ1ZSA9IHRoaXMuc3J2LmdldFRydXRoUm91dGUoc25hcHNob3QpO1xuICAgICAgICBscy5wdXNoKHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMuc3J2LmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICAgICAgY2xvc2FibGU6IHRoaXMuYWxsb3dDbG9zZSAmJiB0aGlzLnNydi5jb3VudCA+IDAgJiYgdGhpcy5zcnYuZ2V0Q2xvc2FibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgICAgIGluZGV4OiBscy5sZW5ndGgsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBsYXN0OiBmYWxzZSxcbiAgICAgICAgfSBhcyBSZXVzZUl0ZW0pO1xuICAgICAgICB0aGlzLnBvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICAvLyBmaXggdW5hYmxlZCBjbG9zZSBsYXN0IGl0ZW1cbiAgICAgIGlmIChscy5sZW5ndGggPD0gMSkgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3QgPSBscztcblxuICAgIGlmIChscy5sZW5ndGggJiYgaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMudG8obnVsbCwgdGhpcy5wb3MpO1xuICAgIH1cblxuICAgIHRoaXMucmVmU3RhdHVzKGZhbHNlKTtcbiAgICB0aGlzLnZpc2liaWxpdHkoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHZpc2liaWxpdHkoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0N1cnJlbnQpIHJldHVybjtcbiAgICB0aGlzLnJlbmRlci5zZXRTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScsIHRoaXMubGlzdC5sZW5ndGggPT09IDAgPyAnbm9uZScgOiAnYmxvY2snKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gVUlcblxuICBwcml2YXRlIGdldCBhY2l0dmVJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0LmZpbmQodyA9PiB3LmFjdGl2ZSkhLmluZGV4O1xuICB9XG5cbiAgY21DaGFuZ2UocmVzOiBSZXVzZUNvbnRleHRDbG9zZUV2ZW50KSB7XG4gICAgbGV0IGZuOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgIHRoaXMuX2Nsb3NlKG51bGwsIHJlcy5pdGVtLmluZGV4LCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VSaWdodCc6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3J2LmNsb3NlUmlnaHQocmVzLml0ZW0udXJsLCByZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgIGNhc2UgJ2Nsb3NlT3RoZXInOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNydi5jbGVhcihyZXMuaW5jbHVkZU5vbkNsb3NlYWJsZSk7XG4gICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlcy5pdGVtLmFjdGl2ZSAmJiByZXMuaXRlbS5pbmRleCA8PSB0aGlzLmFjaXR2ZUluZGV4KSB7XG4gICAgICB0aGlzLnRvKG51bGwsIHJlcy5pdGVtLmluZGV4LCBmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgcmVmU3RhdHVzKGRjID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RbdGhpcy5saXN0Lmxlbmd0aCAtIDFdLmxhc3QgPSB0cnVlO1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGksIGlkeCkgPT4gKGkuYWN0aXZlID0gdGhpcy5wb3MgPT09IGlkeCkpO1xuICAgIH1cbiAgICBpZiAoZGMpIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHRvKGU6IEV2ZW50IHwgbnVsbCwgaW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5wb3MgPSBpbmRleDtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLnJlZlN0YXR1cygpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlKGU6IEV2ZW50IHwgbnVsbCwgaWR4OiBudW1iZXIsIGluY2x1ZGVOb25DbG9zZWFibGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoZSAhPSBudWxsKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2lkeF07XG4gICAgdGhpcy5zcnYuY2xvc2UoaXRlbS51cmwsIGluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgIHRoaXMuY2xvc2UuZW1pdChpdGVtKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcihldnQgPT4gZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcblxuICAgIHRoaXMuc3J2LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5nZW5MaXN0KHJlcyEpKTtcblxuICAgIHRoaXMuaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5zcnYuaW5pdGVkKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2VuTGlzdCgpKTtcblxuICAgIHRoaXMuZ2VuTGlzdCgpO1xuICAgIHRoaXMuc3J2LmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5tYXgpIHRoaXMuc3J2Lm1heCA9IHRoaXMubWF4O1xuICAgIGlmIChjaGFuZ2VzLmV4Y2x1ZGVzKSB0aGlzLnNydi5leGNsdWRlcyA9IHRoaXMuZXhjbHVkZXM7XG4gICAgaWYgKGNoYW5nZXMubW9kZSkgdGhpcy5zcnYubW9kZSA9IHRoaXMubW9kZTtcbiAgICBpZiAoY2hhbmdlcy5rZWVwaW5nU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNydi5rZWVwaW5nU2Nyb2xsID0gdGhpcy5rZWVwaW5nU2Nyb2xsO1xuICAgICAgdGhpcy5zcnYua2VlcGluZ1Njcm9sbENvbnRhaW5lciA9IHRoaXMuX2tlZXBpbmdTY3JvbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgdGhpcy5zcnYuZGVidWcgPSB0aGlzLmRlYnVnO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19