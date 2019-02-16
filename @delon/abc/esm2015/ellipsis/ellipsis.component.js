/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';
export class EllipsisComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} dom
     * @param {?} doc
     * @param {?} cdr
     */
    constructor(el, ngZone, dom, doc, cdr) {
        this.el = el;
        this.ngZone = ngZone;
        this.dom = dom;
        this.doc = doc;
        this.cdr = cdr;
        // tslint:disable-next-line:no-string-literal
        this.isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
        this.inited = false;
        this.type = 'default';
        this.cls = {};
        this.text = '';
        this.targetCount = 0;
        // #region fields
        this.tooltip = false;
        this.fullWidthRecognition = false;
        this.tail = '...';
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getStrFullLength(str) {
        return str.split('').reduce((pre, cur) => {
            /** @type {?} */
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);
    }
    /**
     * @param {?} str
     * @param {?} maxLength
     * @return {?}
     */
    cutStrByFullLength(str, maxLength) {
        /** @type {?} */
        let showLength = 0;
        return str.split('').reduce((pre, cur) => {
            /** @type {?} */
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                showLength += 1;
            }
            else {
                showLength += 2;
            }
            if (showLength <= maxLength) {
                return pre + cur;
            }
            return pre;
        }, '');
    }
    /**
     * @param {?} th
     * @param {?} m
     * @param {?} b
     * @param {?} e
     * @param {?} text
     * @param {?} shadowNode
     * @return {?}
     */
    bisection(th, m, b, e, text, shadowNode) {
        /** @type {?} */
        const suffix = this.tail;
        /** @type {?} */
        let mid = m;
        /** @type {?} */
        let end = e;
        /** @type {?} */
        let begin = b;
        shadowNode.innerHTML = text.substring(0, mid) + suffix;
        /** @type {?} */
        let sh = shadowNode.offsetHeight;
        if (sh <= th) {
            shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
            sh = shadowNode.offsetHeight;
            if (sh > th || mid === begin) {
                return mid;
            }
            begin = mid;
            if (end - begin === 1) {
                mid = begin + 1;
            }
            else {
                mid = Math.floor((end - begin) / 2) + begin;
            }
            return this.bisection(th, mid, begin, end, text, shadowNode);
        }
        if (mid - 1 < 0) {
            return mid;
        }
        shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
        sh = shadowNode.offsetHeight;
        if (sh <= th) {
            return mid - 1;
        }
        end = mid;
        mid = Math.floor((end - begin) / 2) + begin;
        return this.bisection(th, mid, begin, end, text, shadowNode);
    }
    /**
     * @return {?}
     */
    genType() {
        const { lines, length, isSupportLineClamp, cdr } = this;
        this.cls = {
            ellipsis: true,
            ellipsis__lines: lines && !isSupportLineClamp,
            'ellipsis__line-clamp': lines && isSupportLineClamp,
        };
        if (!lines && !length) {
            this.type = 'default';
        }
        else if (!lines) {
            this.type = 'length';
        }
        else if (isSupportLineClamp) {
            this.type = 'line-clamp';
        }
        else {
            this.type = 'line';
        }
        cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    gen() {
        const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr } = this;
        if (type === 'length') {
            /** @type {?} */
            const el = (/** @type {?} */ (orgEl.nativeElement));
            if (el.children.length > 0) {
                throw new Error('Ellipsis content must be string.');
            }
            /** @type {?} */
            const text = el.textContent;
            /** @type {?} */
            const textLength = fullWidthRecognition ? this.getStrFullLength(text) : text.length;
            if (textLength <= length || length < 0) {
                this.text = text;
            }
            else {
                /** @type {?} */
                let displayText;
                if (length - tail.length <= 0) {
                    displayText = '';
                }
                else {
                    displayText = fullWidthRecognition
                        ? this.cutStrByFullLength(text, length)
                        : text.slice(0, length);
                }
                this.text = displayText + tail;
            }
            cdr.detectChanges();
        }
        else if (type === 'line') {
            const { shadowOrgEl, shadowTextEl } = this;
            /** @type {?} */
            const orgNode = (/** @type {?} */ (shadowOrgEl.nativeElement));
            /** @type {?} */
            const text = orgNode.innerText || orgNode.textContent;
            /** @type {?} */
            const lineHeight = parseInt(getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
            /** @type {?} */
            const targetHeight = lines * lineHeight;
            this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;
            if (orgNode.offsetHeight <= targetHeight) {
                this.text = text;
                this.targetCount = text.length;
            }
            else {
                // bisection
                /** @type {?} */
                const len = text.length;
                /** @type {?} */
                const mid = Math.ceil(len / 2);
                /** @type {?} */
                const count = this.bisection(targetHeight, mid, 0, len, text, shadowTextEl.nativeElement.firstChild);
                this.text = text;
                this.targetCount = count;
            }
            cdr.detectChanges();
        }
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEl(cls) {
        return this.el.nativeElement.querySelector(cls);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    executeOnStable(fn) {
        if (this.ngZone.isStable) {
            fn();
        }
        else {
            this.ngZone.onStable
                .asObservable()
                .pipe(take(1))
                .subscribe(fn);
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.genType();
        this.executeOnStable(() => {
            const { type, dom, orgEl, cdr } = this;
            /** @type {?} */
            const html = orgEl.nativeElement.innerHTML;
            this.orgHtml = dom.bypassSecurityTrustHtml(html);
            cdr.detectChanges();
            this.gen();
            if (type !== 'line') {
                /** @type {?} */
                const el = this.getEl('.ellipsis');
                if (el) {
                    el.innerHTML = html;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.inited = true;
        this.refresh();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
}
EllipsisComponent.decorators = [
    { type: Component, args: [{
                selector: 'ellipsis',
                template: "<div (cdkObserveContent)=\"refresh()\"\n     #orgEl\n     style=\"display: none;\">\n  <ng-content></ng-content>\n</div>\n<ng-template #tooltipTpl\n             let-con>\n  <span *ngIf=\"tooltip; else con\"\n        nz-tooltip\n        [nzTitle]=\"titleTpl\"\n        [nzOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\">\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl>\n      <div [innerHTML]=\"orgHtml\"></div>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\"\n        [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                 [ngTemplateOutletContext]=\"{$implicit: lengthTpl}\"></ng-template>\n    <ng-template #lengthTpl>{{text}}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                 [ngTemplateOutletContext]=\"{$implicit: lineClampTpl}\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\"\n           [ngStyle]=\"{'-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical'}\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\"\n       [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\"\n                   [ngTemplateOutletContext]=\"{$implicit: lineTpl}\"></ng-template>\n      <ng-template #lineTpl>\n        {{ (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length\n          ?\n          tail\n          : ''\n          )\n          }}\n          </ng-template>\n          <div\n          class=\"ellipsis__shadow\"\n          #shadowOrgEl\n          [innerHTML]=\"orgHtml\">\n    </div>\n    <div class=\"ellipsis__shadow\"\n         #shadowTextEl><span>{{text}}</span></div>\n  </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
EllipsisComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: DomSanitizer },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
EllipsisComponent.propDecorators = {
    orgEl: [{ type: ViewChild, args: ['orgEl',] }],
    shadowOrgEl: [{ type: ViewChild, args: ['shadowOrgEl',] }],
    shadowTextEl: [{ type: ViewChild, args: ['shadowTextEl',] }],
    tooltip: [{ type: Input }],
    length: [{ type: Input }],
    lines: [{ type: Input }],
    fullWidthRecognition: [{ type: Input }],
    tail: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], EllipsisComponent.prototype, "tooltip", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], EllipsisComponent.prototype, "length", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], EllipsisComponent.prototype, "lines", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], EllipsisComponent.prototype, "fullWidthRecognition", void 0);
if (false) {
    /** @type {?} */
    EllipsisComponent.prototype.isSupportLineClamp;
    /** @type {?} */
    EllipsisComponent.prototype.orgEl;
    /** @type {?} */
    EllipsisComponent.prototype.shadowOrgEl;
    /** @type {?} */
    EllipsisComponent.prototype.shadowTextEl;
    /** @type {?} */
    EllipsisComponent.prototype.inited;
    /** @type {?} */
    EllipsisComponent.prototype.orgHtml;
    /** @type {?} */
    EllipsisComponent.prototype.type;
    /** @type {?} */
    EllipsisComponent.prototype.cls;
    /** @type {?} */
    EllipsisComponent.prototype.text;
    /** @type {?} */
    EllipsisComponent.prototype.targetCount;
    /** @type {?} */
    EllipsisComponent.prototype.tooltip;
    /** @type {?} */
    EllipsisComponent.prototype.length;
    /** @type {?} */
    EllipsisComponent.prototype.lines;
    /** @type {?} */
    EllipsisComponent.prototype.fullWidthRecognition;
    /** @type {?} */
    EllipsisComponent.prototype.tail;
    /** @type {?} */
    EllipsisComponent.prototype.el;
    /** @type {?} */
    EllipsisComponent.prototype.ngZone;
    /** @type {?} */
    EllipsisComponent.prototype.dom;
    /** @type {?} */
    EllipsisComponent.prototype.doc;
    /** @type {?} */
    EllipsisComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3RDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7OztJQXVCNUIsWUFDVSxFQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQWlCLEVBQ0MsR0FBYSxFQUMvQixHQUFzQjtRQUp0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDQyxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTFCeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssU0FBUyxDQUFDO1FBSTFFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFdkIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUNqQixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGdCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQUlTLFlBQU8sR0FBRyxLQUFL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VUFBVTtnQkFDcEIsNitEQUF3QztnQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFmQyxVQUFVO1lBR1YsTUFBTTtZQUlDLFlBQVk7WUFvQ2MsUUFBUSx1QkFBdEMsTUFBTSxTQUFDLFFBQVE7WUE3Q2xCLGlCQUFpQjs7O29CQXFCaEIsU0FBUyxTQUFDLE9BQU87MEJBQ2pCLFNBQVMsU0FBQyxhQUFhOzJCQUN2QixTQUFTLFNBQUMsY0FBYztzQkFVeEIsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7bUNBQ0wsS0FBSzttQkFDTCxLQUFLOztBQUptQjtJQUFmLFlBQVksRUFBRTs7a0RBQWlCO0FBQ2I7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7aURBQWdCO0FBQ2Y7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7Z0RBQWU7QUFDakI7SUFBZixZQUFZLEVBQUU7OytEQUE4Qjs7O0lBaEJ0RCwrQ0FBa0Y7O0lBQ2xGLGtDQUE4Qzs7SUFDOUMsd0NBQTBEOztJQUMxRCx5Q0FBNEQ7O0lBQzVELG1DQUF1Qjs7SUFDdkIsb0NBQWtCOztJQUNsQixpQ0FBaUI7O0lBQ2pCLGdDQUFTOztJQUNULGlDQUFVOztJQUNWLHdDQUFnQjs7SUFJaEIsb0NBQXlDOztJQUN6QyxtQ0FBMkM7O0lBQzNDLGtDQUEwQzs7SUFDMUMsaURBQXNEOztJQUN0RCxpQ0FBc0I7O0lBS3BCLCtCQUFzQjs7SUFDdEIsbUNBQXNCOztJQUN0QixnQ0FBeUI7O0lBQ3pCLGdDQUF1Qzs7SUFDdkMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsXG4gIHByaXZhdGUgaXNTdXBwb3J0TGluZUNsYW1wID0gdGhpcy5kb2MuYm9keS5zdHlsZVsnd2Via2l0TGluZUNsYW1wJ10gIT09IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnb3JnRWwnKSBwcml2YXRlIG9yZ0VsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaGFkb3dPcmdFbCcpIHByaXZhdGUgc2hhZG93T3JnRWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NoYWRvd1RleHRFbCcpIHByaXZhdGUgc2hhZG93VGV4dEVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBvcmdIdG1sOiBTYWZlSHRtbDtcbiAgdHlwZSA9ICdkZWZhdWx0JztcbiAgY2xzID0ge307XG4gIHRleHQgPSAnJztcbiAgdGFyZ2V0Q291bnQgPSAwO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGluZXM6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZ1bGxXaWR0aFJlY29nbml0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhaWwgPSAnLi4uJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0U3RyRnVsbExlbmd0aChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChwcmUsIGN1cikgPT4ge1xuICAgICAgY29uc3QgY2hhckNvZGUgPSBjdXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDw9IDEyOCkge1xuICAgICAgICByZXR1cm4gcHJlICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmUgKyAyO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXRTdHJCeUZ1bGxMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbmd0aDogbnVtYmVyKSB7XG4gICAgbGV0IHNob3dMZW5ndGggPSAwO1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJDb2RlID0gY3VyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0xlbmd0aCArPSAyO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dMZW5ndGggPD0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcmUgKyBjdXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlO1xuICAgIH0sICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgYmlzZWN0aW9uKFxuICAgIHRoOiBudW1iZXIsXG4gICAgbTogbnVtYmVyLFxuICAgIGI6IG51bWJlcixcbiAgICBlOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHNoYWRvd05vZGU6IEhUTUxFbGVtZW50LFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMudGFpbDtcbiAgICBsZXQgbWlkID0gbTtcbiAgICBsZXQgZW5kID0gZTtcbiAgICBsZXQgYmVnaW4gPSBiO1xuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkKSArIHN1ZmZpeDtcbiAgICBsZXQgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcblxuICAgIGlmIChzaCA8PSB0aCkge1xuICAgICAgc2hhZG93Tm9kZS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBtaWQgKyAxKSArIHN1ZmZpeDtcbiAgICAgIHNoID0gc2hhZG93Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBpZiAoc2ggPiB0aCB8fCBtaWQgPT09IGJlZ2luKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IG1pZDtcbiAgICAgIGlmIChlbmQgLSBiZWdpbiA9PT0gMSkge1xuICAgICAgICBtaWQgPSBiZWdpbiArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaWQgPSBNYXRoLmZsb29yKChlbmQgLSBiZWdpbikgLyAyKSArIGJlZ2luO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmlzZWN0aW9uKHRoLCBtaWQsIGJlZ2luLCBlbmQsIHRleHQsIHNoYWRvd05vZGUpO1xuICAgIH1cbiAgICBpZiAobWlkIC0gMSA8IDApIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICAgIHNoYWRvd05vZGUuaW5uZXJIVE1MID0gdGV4dC5zdWJzdHJpbmcoMCwgbWlkIC0gMSkgKyBzdWZmaXg7XG4gICAgc2ggPSBzaGFkb3dOb2RlLm9mZnNldEhlaWdodDtcbiAgICBpZiAoc2ggPD0gdGgpIHtcbiAgICAgIHJldHVybiBtaWQgLSAxO1xuICAgIH1cbiAgICBlbmQgPSBtaWQ7XG4gICAgbWlkID0gTWF0aC5mbG9vcigoZW5kIC0gYmVnaW4pIC8gMikgKyBiZWdpbjtcbiAgICByZXR1cm4gdGhpcy5iaXNlY3Rpb24odGgsIG1pZCwgYmVnaW4sIGVuZCwgdGV4dCwgc2hhZG93Tm9kZSk7XG4gIH1cblxuICBwcml2YXRlIGdlblR5cGUoKSB7XG4gICAgY29uc3QgeyBsaW5lcywgbGVuZ3RoLCBpc1N1cHBvcnRMaW5lQ2xhbXAsIGNkciB9ID0gdGhpcztcbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGVsbGlwc2lzOiB0cnVlLFxuICAgICAgZWxsaXBzaXNfX2xpbmVzOiBsaW5lcyAmJiAhaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgICAgJ2VsbGlwc2lzX19saW5lLWNsYW1wJzogbGluZXMgJiYgaXNTdXBwb3J0TGluZUNsYW1wLFxuICAgIH07XG4gICAgaWYgKCFsaW5lcyAmJiAhbGVuZ3RoKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgfSBlbHNlIGlmICghbGluZXMpIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsZW5ndGgnO1xuICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0TGluZUNsYW1wKSB7XG4gICAgICB0aGlzLnR5cGUgPSAnbGluZS1jbGFtcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9ICdsaW5lJztcbiAgICB9XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbGluZXMsIGxlbmd0aCwgZnVsbFdpZHRoUmVjb2duaXRpb24sIHRhaWwsIG9yZ0VsLCBjZHIgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGUgPT09ICdsZW5ndGgnKSB7XG4gICAgICBjb25zdCBlbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsbGlwc2lzIGNvbnRlbnQgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gZWwudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gZnVsbFdpZHRoUmVjb2duaXRpb24gPyB0aGlzLmdldFN0ckZ1bGxMZW5ndGgodGV4dCkgOiB0ZXh0Lmxlbmd0aDtcbiAgICAgIGlmICh0ZXh0TGVuZ3RoIDw9IGxlbmd0aCB8fCBsZW5ndGggPCAwKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGlzcGxheVRleHQ6IHN0cmluZztcbiAgICAgICAgaWYgKGxlbmd0aCAtIHRhaWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBkaXNwbGF5VGV4dCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlUZXh0ID0gZnVsbFdpZHRoUmVjb2duaXRpb25cbiAgICAgICAgICAgID8gdGhpcy5jdXRTdHJCeUZ1bGxMZW5ndGgodGV4dCwgbGVuZ3RoKVxuICAgICAgICAgICAgOiB0ZXh0LnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gZGlzcGxheVRleHQgKyB0YWlsO1xuICAgICAgfVxuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5lJykge1xuICAgICAgY29uc3QgeyBzaGFkb3dPcmdFbCwgc2hhZG93VGV4dEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgb3JnTm9kZSA9IHNoYWRvd09yZ0VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0ZXh0ID0gb3JnTm9kZS5pbm5lclRleHQgfHwgb3JnTm9kZS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZ2V0RWwoJy5lbGxpcHNpcycpKS5saW5lSGVpZ2h0LCAxMCk7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBsaW5lcyAqIGxpbmVIZWlnaHQ7XG4gICAgICB0aGlzLmdldEVsKCcuZWxsaXBzaXNfX2hhbmRsZScpLnN0eWxlLmhlaWdodCA9IGAke3RhcmdldEhlaWdodH1weGA7XG5cbiAgICAgIGlmIChvcmdOb2RlLm9mZnNldEhlaWdodCA8PSB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IHRleHQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmlzZWN0aW9uXG4gICAgICAgIGNvbnN0IGxlbiA9IHRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmNlaWwobGVuIC8gMik7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmJpc2VjdGlvbihcbiAgICAgICAgICB0YXJnZXRIZWlnaHQsXG4gICAgICAgICAgbWlkLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbGVuLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgc2hhZG93VGV4dEVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50YXJnZXRDb3VudCA9IGNvdW50O1xuICAgICAgfVxuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEVsKGNsczogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihjbHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlT25TdGFibGUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUuaXNTdGFibGUpIHtcbiAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlXG4gICAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKGZuKTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuVHlwZSgpO1xuICAgIHRoaXMuZXhlY3V0ZU9uU3RhYmxlKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgZG9tLCBvcmdFbCwgY2RyIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaHRtbCA9IG9yZ0VsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5vcmdIdG1sID0gZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuZ2VuKCk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5nZXRFbCgnLmVsbGlwc2lzJyk7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIl19