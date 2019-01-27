/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DelonMockConfig = /** @class */ (function () {
    function DelonMockConfig() {
        /**
         * 请求延迟，单位：毫秒，默认：`300`
         */
        this.delay = 300;
        /**
         * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
         */
        this.force = false;
        /**
         * 是否打印 Mock 请求信息，弥补浏览器无Network信息
         */
        this.log = true;
        /**
         * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
         */
        this.executeOtherInterceptors = true;
    }
    return DelonMockConfig;
}());
export { DelonMockConfig };
if (false) {
    /**
     * 规则定义数据
     * @type {?}
     */
    DelonMockConfig.prototype.data;
    /**
     * 请求延迟，单位：毫秒，默认：`300`
     * @type {?}
     */
    DelonMockConfig.prototype.delay;
    /**
     * 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
     * @type {?}
     */
    DelonMockConfig.prototype.force;
    /**
     * 是否打印 Mock 请求信息，弥补浏览器无Network信息
     * @type {?}
     */
    DelonMockConfig.prototype.log;
    /**
     * 是否拦截命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
     * @type {?}
     */
    DelonMockConfig.prototype.executeOtherInterceptors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7OztRQUtFLFVBQUssR0FBWSxHQUFHLENBQUM7Ozs7UUFFckIsVUFBSyxHQUFhLEtBQUssQ0FBQzs7OztRQUV4QixRQUFHLEdBQWEsSUFBSSxDQUFDOzs7O1FBSXJCLDZCQUF3QixHQUFhLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQVhDLCtCQUFVOzs7OztJQUVWLGdDQUFxQjs7Ozs7SUFFckIsZ0NBQXdCOzs7OztJQUV4Qiw4QkFBcUI7Ozs7O0lBSXJCLG1EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEZWxvbk1vY2tDb25maWcge1xuICAvKiog6KeE5YiZ5a6a5LmJ5pWw5o2uICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZGF0YTogYW55O1xuICAvKiog6K+35rGC5bu26L+f77yM5Y2V5L2N77ya5q+r56eS77yM6buY6K6k77yaYDMwMGAgKi9cbiAgZGVsYXk/OiBudW1iZXIgPSAzMDA7XG4gIC8qKiDmmK/lkKblvLrliLbmiYDmnInor7fmsYLpg71Nb2Nr77yMYHRydWVgIOihqOekuuW9k+ivt+axgueahFVSTOS4jeWtmOWcqOaXtuebtOaOpei/lOWbniA0MDQg6ZSZ6K+v77yMYGZhbHNlYCDooajnpLrmnKrlkb3kuK3ml7blj5HpgIHnnJ/lrp5IVFRQ6K+35rGCICovXG4gIGZvcmNlPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiog5piv5ZCm5omT5Y2wIE1vY2sg6K+35rGC5L+h5oGv77yM5byl6KGl5rWP6KeI5Zmo5pegTmV0d29ya+S/oeaBryAqL1xuICBsb2c/OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIOaYr+WQpuaLpuaIquWRveS4reWQjue7p+e7reiwg+eUqOWQjue7reaLpuaIquWZqOeahCBgaW50ZXJjZXB0YCDmlrnms5XvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGV4ZWN1dGVPdGhlckludGVyY2VwdG9ycz86IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19