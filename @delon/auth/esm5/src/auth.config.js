/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DelonAuthConfig = /** @class */ (function () {
    function DelonAuthConfig() {
        /**
         * 存储KEY值
         */
        this.store_key = '_token';
        /**
         * 无效时跳转至登录页，包括：
         * - 无效token值
         * - token已过期（限JWT）
         */
        this.token_invalid_redirect = true;
        /**
         * token过期时间偏移值，默认：`10` 秒（单位：秒）
         */
        this.token_exp_offset = 10;
        /**
         * 发送token参数名，默认：token
         */
        this.token_send_key = 'token';
        /**
         * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
         *
         * - `Bearer ${token}`
         */
        // tslint:disable-next-line:no-invalid-template-strings
        this.token_send_template = '${token}';
        /**
         * 发送token参数位置，默认：header
         */
        this.token_send_place = 'header';
        /**
         * 登录页路由地址
         */
        this.login_url = "/login";
        /**
         * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
         */
        this.ignores = [/\/login/, /assets\//, /passport\//];
        /**
         * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
         */
        this.allow_anonymous_key = "_allow_anonymous";
        /**
         * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         */
        this.executeOtherInterceptors = true;
    }
    DelonAuthConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonAuthConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DelonAuthConfig_Factory() { return new DelonAuthConfig(); }, token: DelonAuthConfig, providedIn: "root" });
    return DelonAuthConfig;
}());
export { DelonAuthConfig };
if (false) {
    /**
     * 存储KEY值
     * @type {?}
     */
    DelonAuthConfig.prototype.store_key;
    /**
     * 无效时跳转至登录页，包括：
     * - 无效token值
     * - token已过期（限JWT）
     * @type {?}
     */
    DelonAuthConfig.prototype.token_invalid_redirect;
    /**
     * token过期时间偏移值，默认：`10` 秒（单位：秒）
     * @type {?}
     */
    DelonAuthConfig.prototype.token_exp_offset;
    /**
     * 发送token参数名，默认：token
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_key;
    /**
     * 发送token模板（默认为：`${token}`），使用 `${token}` 表示token点位符，例如：
     *
     * - `Bearer ${token}`
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_template;
    /**
     * 发送token参数位置，默认：header
     * @type {?}
     */
    DelonAuthConfig.prototype.token_send_place;
    /**
     * 登录页路由地址
     * @type {?}
     */
    DelonAuthConfig.prototype.login_url;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\//, /passport\// ]
     * @type {?}
     */
    DelonAuthConfig.prototype.ignores;
    /**
     * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
     * @type {?}
     */
    DelonAuthConfig.prototype.allow_anonymous_key;
    /**
     * 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?}
     */
    DelonAuthConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFBQTs7OztRQUtFLGNBQVMsR0FBWSxRQUFRLENBQUM7Ozs7OztRQU05QiwyQkFBc0IsR0FBYSxJQUFJLENBQUM7Ozs7UUFJeEMscUJBQWdCLEdBQVksRUFBRSxDQUFDOzs7O1FBSS9CLG1CQUFjLEdBQVksT0FBTyxDQUFDOzs7Ozs7O1FBT2xDLHdCQUFtQixHQUFZLFVBQVUsQ0FBQzs7OztRQUkxQyxxQkFBZ0IsR0FBK0IsUUFBUSxDQUFDOzs7O1FBSXhELGNBQVMsR0FBWSxRQUFRLENBQUM7Ozs7UUFJOUIsWUFBTyxHQUFxQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7UUFJbEUsd0JBQW1CLEdBQVksa0JBQWtCLENBQUM7Ozs7UUFJbEQsNkJBQXdCLEdBQWEsSUFBSSxDQUFDO0tBQzNDOztnQkEvQ0EsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzBCQUZsQztDQWlEQyxBQS9DRCxJQStDQztTQTlDWSxlQUFlOzs7Ozs7SUFJMUIsb0NBQThCOzs7Ozs7O0lBTTlCLGlEQUF3Qzs7Ozs7SUFJeEMsMkNBQStCOzs7OztJQUkvQix5Q0FBa0M7Ozs7Ozs7SUFPbEMsOENBQTBDOzs7OztJQUkxQywyQ0FBd0Q7Ozs7O0lBSXhELG9DQUE4Qjs7Ozs7SUFJOUIsa0NBQWtFOzs7OztJQUlsRSw4Q0FBa0Q7Ozs7O0lBSWxELG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkF1dGhDb25maWcge1xuICAvKipcbiAgICog5a2Y5YKoS0VZ5YC8XG4gICAqL1xuICBzdG9yZV9rZXk/OiBzdHJpbmcgPSAnX3Rva2VuJztcbiAgLyoqXG4gICAqIOaXoOaViOaXtui3s+i9rOiHs+eZu+W9lemhte+8jOWMheaLrO+8mlxuICAgKiAtIOaXoOaViHRva2Vu5YC8XG4gICAqIC0gdG9rZW7lt7Lov4fmnJ/vvIjpmZBKV1TvvIlcbiAgICovXG4gIHRva2VuX2ludmFsaWRfcmVkaXJlY3Q/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIHRva2Vu6L+H5pyf5pe26Ze05YGP56e75YC877yM6buY6K6k77yaYDEwYCDnp5LvvIjljZXkvY3vvJrnp5LvvIlcbiAgICovXG4gIHRva2VuX2V4cF9vZmZzZXQ/OiBudW1iZXIgPSAxMDtcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5Y+C5pWw5ZCN77yM6buY6K6k77yadG9rZW5cbiAgICovXG4gIHRva2VuX3NlbmRfa2V5Pzogc3RyaW5nID0gJ3Rva2VuJztcbiAgLyoqXG4gICAqIOWPkemAgXRva2Vu5qih5p2/77yI6buY6K6k5Li677yaYCR7dG9rZW59YO+8ie+8jOS9v+eUqCBgJHt0b2tlbn1gIOihqOekunRva2Vu54K55L2N56ym77yM5L6L5aaC77yaXG4gICAqXG4gICAqIC0gYEJlYXJlciAke3Rva2VufWBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnZhbGlkLXRlbXBsYXRlLXN0cmluZ3NcbiAgdG9rZW5fc2VuZF90ZW1wbGF0ZT86IHN0cmluZyA9ICcke3Rva2VufSc7XG4gIC8qKlxuICAgKiDlj5HpgIF0b2tlbuWPguaVsOS9jee9ru+8jOm7mOiupO+8mmhlYWRlclxuICAgKi9cbiAgdG9rZW5fc2VuZF9wbGFjZT86ICdoZWFkZXInIHwgJ2JvZHknIHwgJ3VybCcgPSAnaGVhZGVyJztcbiAgLyoqXG4gICAqIOeZu+W9lemhtei3r+eUseWcsOWdgFxuICAgKi9cbiAgbG9naW5fdXJsPzogc3RyaW5nID0gYC9sb2dpbmA7XG4gIC8qKlxuICAgKiDlv73nlaVUT0tFTueahFVSTOWcsOWdgOWIl+ihqO+8jOm7mOiupOWAvOS4uu+8mlsgL1xcL2xvZ2luLywgL2Fzc2V0c1xcLy8sIC9wYXNzcG9ydFxcLy8gXVxuICAgKi9cbiAgaWdub3Jlcz86IFJlZ0V4cFtdIHwgbnVsbCA9IFsvXFwvbG9naW4vLCAvYXNzZXRzXFwvLywgL3Bhc3Nwb3J0XFwvL107XG4gIC8qKlxuICAgKiDlhYHorrjljL/lkI3nmbvlvZVLRVnvvIzoi6Xor7fmsYLlj4LmlbDkuK3luKbmnInor6VLRVnooajnpLrlv73nlaVUT0tFTlxuICAgKi9cbiAgYWxsb3dfYW5vbnltb3VzX2tleT86IHN0cmluZyA9IGBfYWxsb3dfYW5vbnltb3VzYDtcbiAgLyoqXG4gICAqIOaYr+WQpuagoemqjOWkseaViOaXtuWRveS4reWQjue7p+e7reiwg+eUqOWQjue7reaLpuaIquWZqOeahCBgaW50ZXJjZXB0YCDmlrnms5XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9ycz86IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19