/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class URLPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return url ? /** @type {?} */ (this.dom.bypassSecurityTrustUrl(url)) : '';
    }
}
URLPipe.decorators = [
    { type: Pipe, args: [{ name: 'url' },] }
];
/** @nocollapse */
URLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    URLPipe.prototype.dom;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3pELE1BQU07Ozs7SUFDSixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0tBQUk7Ozs7O0lBRXpDLFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE9BQU8sR0FBRyxDQUFDLENBQUMsbUJBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQVEsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQy9EOzs7WUFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O1lBRlosWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICd1cmwnIH0pXG5leHBvcnQgY2xhc3MgVVJMUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKSBhcyBhbnkgOiAnJztcbiAgfVxufVxuIl19