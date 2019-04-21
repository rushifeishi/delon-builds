/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ERRORSDEFAULT } from './errors';
import * as i0 from "@angular/core";
var DelonFormConfig = /** @class */ (function () {
    function DelonFormConfig() {
        /**
         * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
         *
         * - `type` 限定 Schema 中 `type` 类型
         * - `enum` 限定应当是预设定的枚举值之一
         */
        this.ingoreKeywords = ['type', 'enum'];
        /**
         * 是否实时校验，默认：`true`
         * - `true` 每一次都校验
         * - `false` 提交时校验
         */
        this.liveValidate = true;
        /**
         * 指定表单 `autocomplete` 值，默认：`on`
         */
        this.autocomplete = null;
        /**
         * 是否立即呈现错误视觉，默认：`false`
         */
        this.firstVisual = false;
        /**
         * 是否只展示错误视觉不显示错误文本，默认：`false`
         */
        this.onlyVisual = false;
        /**
         * 自定义通用错误信息
         */
        this.errors = ERRORSDEFAULT;
        /**
         * 按钮风格
         */
        this.button = {
            submit_type: 'primary',
            reset_type: 'default',
        };
        /**
         * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
         */
        this.uiDateStringFormat = 'YYYY-MM-DD HH:mm:ss';
        /**
         * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
         */
        this.uiDateNumberFormat = 'x';
        /**
         * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
         */
        this.uiTimeStringFormat = 'HH:mm:ss';
        /**
         * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
         */
        this.uiTimeNumberFormat = 'x';
        /**
         * 指定 `format: 'email'` 的默认Email后缀
         */
        this.uiEmailSuffixes = ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'];
    }
    DelonFormConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonFormConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonFormConfig_Factory() { return new DelonFormConfig(); }, token: DelonFormConfig, providedIn: "root" });
    return DelonFormConfig;
}());
export { DelonFormConfig };
if (false) {
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
     *
     * - `type` 限定 Schema 中 `type` 类型
     * - `enum` 限定应当是预设定的枚举值之一
     * @type {?}
     */
    DelonFormConfig.prototype.ingoreKeywords;
    /**
     * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
     * @type {?}
     */
    DelonFormConfig.prototype.ajv;
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?}
     */
    DelonFormConfig.prototype.liveValidate;
    /**
     * 指定表单 `autocomplete` 值，默认：`on`
     * @type {?}
     */
    DelonFormConfig.prototype.autocomplete;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?}
     */
    DelonFormConfig.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     * @type {?}
     */
    DelonFormConfig.prototype.onlyVisual;
    /**
     * 自定义通用错误信息
     * @type {?}
     */
    DelonFormConfig.prototype.errors;
    /**
     * 默认全局布局
     * @type {?}
     */
    DelonFormConfig.prototype.ui;
    /**
     * 元素组件大小，用于 `nzSize` 值
     * @type {?}
     */
    DelonFormConfig.prototype.size;
    /**
     * 按钮风格
     * @type {?}
     */
    DelonFormConfig.prototype.button;
    /**
     * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
     * @type {?}
     */
    DelonFormConfig.prototype.uiDateStringFormat;
    /**
     * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
     * @type {?}
     */
    DelonFormConfig.prototype.uiDateNumberFormat;
    /**
     * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
     * @type {?}
     */
    DelonFormConfig.prototype.uiTimeStringFormat;
    /**
     * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
     * @type {?}
     */
    DelonFormConfig.prototype.uiTimeNumberFormat;
    /**
     * 指定 `format: 'email'` 的默认Email后缀
     * @type {?}
     */
    DelonFormConfig.prototype.uiEmailSuffixes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBSXpDO0lBQUE7Ozs7Ozs7UUFRRSxtQkFBYyxHQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7UUFVN0MsaUJBQVksR0FBYSxJQUFJLENBQUM7Ozs7UUFJOUIsaUJBQVksR0FBa0IsSUFBSSxDQUFDOzs7O1FBSW5DLGdCQUFXLEdBQWEsS0FBSyxDQUFDOzs7O1FBSTlCLGVBQVUsR0FBYSxLQUFLLENBQUM7Ozs7UUFJN0IsV0FBTSxHQUErQixhQUFhLENBQUM7Ozs7UUFZbkQsV0FBTSxHQUFjO1lBQ2xCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7Ozs7UUFJRix1QkFBa0IsR0FBWSxxQkFBcUIsQ0FBQzs7OztRQUlwRCx1QkFBa0IsR0FBWSxHQUFHLENBQUM7Ozs7UUFJbEMsdUJBQWtCLEdBQVksVUFBVSxDQUFDOzs7O1FBSXpDLHVCQUFrQixHQUFZLEdBQUcsQ0FBQzs7OztRQUlsQyxvQkFBZSxHQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzFGOztnQkF0RUEsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzBCQUxsQztDQTJFQyxBQXRFRCxJQXNFQztTQXJFWSxlQUFlOzs7Ozs7Ozs7SUFPMUIseUNBQTZDOzs7OztJQUk3Qyw4QkFBVTs7Ozs7OztJQU1WLHVDQUE4Qjs7Ozs7SUFJOUIsdUNBQW1DOzs7OztJQUluQyxzQ0FBOEI7Ozs7O0lBSTlCLHFDQUE2Qjs7Ozs7SUFJN0IsaUNBQW1EOzs7OztJQUluRCw2QkFBb0I7Ozs7O0lBSXBCLCtCQUFxQzs7Ozs7SUFJckMsaUNBR0U7Ozs7O0lBSUYsNkNBQW9EOzs7OztJQUlwRCw2Q0FBa0M7Ozs7O0lBSWxDLDZDQUF5Qzs7Ozs7SUFJekMsNkNBQWtDOzs7OztJQUlsQywwQ0FBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFUlJPUlNERUZBVUxUIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZCdXR0b24gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Db25maWcge1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYO+8jOm7mOiupO+8mmBbICd0eXBlJywgJ2VudW0nIF1gXG4gICAqXG4gICAqIC0gYHR5cGVgIOmZkOWumiBTY2hlbWEg5LitIGB0eXBlYCDnsbvlnotcbiAgICogLSBgZW51bWAg6ZmQ5a6a5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdID0gWyd0eXBlJywgJ2VudW0nXTtcbiAgLyoqXG4gICAqIFthanZdKGh0dHA6Ly9lcG9iZXJlemtpbi5naXRodWIuaW8vYWp2LyNvcHRpb25zKSDlj4LmlbBcbiAgICovXG4gIGFqdj86IGFueTtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDmjIflrprooajljZUgYGF1dG9jb21wbGV0ZWAg5YC877yM6buY6K6k77yaYG9uYFxuICAgKi9cbiAgYXV0b2NvbXBsZXRlPzogJ29uJyB8ICdvZmYnID0gbnVsbDtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOiHquWumuS5iemAmueUqOmUmeivr+S/oeaBr1xuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IEVSUk9SU0RFRkFVTFQ7XG4gIC8qKlxuICAgKiDpu5jorqTlhajlsYDluIPlsYBcbiAgICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW07XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI/vvIznlKjkuo4gYG56U2l6ZWAg5YC8XG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjInpkq7po47moLxcbiAgICovXG4gIGJ1dHRvbj86IFNGQnV0dG9uID0ge1xuICAgIHN1Ym1pdF90eXBlOiAncHJpbWFyeScsXG4gICAgcmVzZXRfdHlwZTogJ2RlZmF1bHQnLFxuICB9O1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwic3RyaW5nXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tOnNzYFxuICAgKi9cbiAgdWlEYXRlU3RyaW5nRm9ybWF0Pzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW06c3MnO1xuICAvKipcbiAgICogZGF0ZeWwj+mDqOS7tu+8mmB0eXBlPVwibnVtYmVyXCJgIOS4lOS4jeaMh+WumiBgc2NoZW1hLmZvcm1hdGAg5ZKMIGB1aS5mb3JtYXRgIOaXtuaXpeacn+agvOW8j++8jOm7mOiupO+8mmB4YCAxM+S9jVVuaXggVGltZXN0YW1wXG4gICAqL1xuICB1aURhdGVOdW1iZXJGb3JtYXQ/OiBzdHJpbmcgPSAneCc7XG4gIC8qKlxuICAgKiB0aW1l5bCP6YOo5Lu277yaYHR5cGU9XCJzdHJpbmdcImAg5LiU5LiN5oyH5a6aIGBzY2hlbWEuZm9ybWF0YCDlkowgYHVpLmZvcm1hdGAg5pe25pel5pyf5qC85byP77yM6buY6K6k77yaYEhIOm1tOnNzYFxuICAgKi9cbiAgdWlUaW1lU3RyaW5nRm9ybWF0Pzogc3RyaW5nID0gJ0hIOm1tOnNzJztcbiAgLyoqXG4gICAqIHRpbWXlsI/pg6jku7bvvJpgdHlwZT1cIm51bWJlclwiYCDkuJTkuI3mjIflrpogYHNjaGVtYS5mb3JtYXRgIOWSjCBgdWkuZm9ybWF0YCDml7bml6XmnJ/moLzlvI/vvIzpu5jorqTvvJpgeGAgMTPkvY1Vbml4IFRpbWVzdGFtcO+8jOaXpeacn+e7n+S4gOS9v+eUqCBgMTk3MC0wMS0wMWBcbiAgICovXG4gIHVpVGltZU51bWJlckZvcm1hdD86IHN0cmluZyA9ICd4JztcbiAgLyoqXG4gICAqIOaMh+WumiBgZm9ybWF0OiAnZW1haWwnYCDnmoTpu5jorqRFbWFpbOWQjue8gFxuICAgKi9cbiAgdWlFbWFpbFN1ZmZpeGVzPzogc3RyaW5nW10gPSBbJ3FxLmNvbScsICcxNjMuY29tJywgJ2dtYWlsLmNvbScsICcxMjYuY29tJywgJ2FsaXl1bi5jb20nXTtcbn1cbiJdfQ==