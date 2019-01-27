/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import { XlsxConfig } from './xlsx.config';
import * as i0 from "@angular/core";
import * as i1 from "./xlsx.config";
import * as i2 from "@angular/common/http";
import * as i3 from "@delon/util";
export class XlsxService {
    /**
     * @param {?} cog
     * @param {?} http
     * @param {?} lazy
     */
    constructor(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @return {?}
     */
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    /**
     * @param {?} wb
     * @return {?}
     */
    read(wb) {
        /** @type {?} */
        const ret = {};
        wb.SheetNames.forEach(name => {
            /** @type {?} */
            const sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param {?} fileOrUrl
     * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     * @return {?}
     */
    import(fileOrUrl, rABS = 'readAsBinaryString') {
        return new Promise((resolver, reject) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => {
                        /** @type {?} */
                        const wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                        resolver(this.read(wb));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (e) => {
                    /** @type {?} */
                    const wb = XLSX.read(e.target.result, { type: 'binary' });
                    resolver(this.read(wb));
                };
                reader[rABS](fileOrUrl);
            });
        });
    }
    /**
     * 导出
     * @param {?} options
     * @return {?}
     */
    export(options) {
        return this.init().then(() => {
            /** @type {?} */
            const wb = XLSX.utils.book_new();
            if (Array.isArray(options.sheets)) {
                ((/** @type {?} */ (options.sheets))).forEach((value, index) => {
                    /** @type {?} */
                    const ws = XLSX.utils.aoa_to_sheet(value.data);
                    XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                });
            }
            else {
                wb.SheetNames = Object.keys(options.sheets);
                wb.Sheets = options.sheets;
            }
            if (options.callback)
                options.callback(wb);
            /** @type {?} */
            const wbout = XLSX.write(wb, Object.assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        });
    }
}
XlsxService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
XlsxService.ctorParameters = () => [
    { type: XlsxConfig },
    { type: HttpClient },
    { type: LazyService }
];
/** @nocollapse */ XlsxService.ngInjectableDef = i0.defineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.inject(i1.XlsxConfig), i0.inject(i2.HttpClient), i0.inject(i3.LazyService)); }, token: XlsxService, providedIn: "root" });
if (false) {
    /** @type {?} */
    XlsxService.prototype.cog;
    /** @type {?} */
    XlsxService.prototype.http;
    /** @type {?} */
    XlsxService.prototype.lazy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy94bHN4LyIsInNvdXJjZXMiOlsieGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTTNDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBb0IsR0FBZSxFQUFVLElBQWdCLEVBQVUsSUFBaUI7UUFBcEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUcsQ0FBQzs7OztJQUVwRixJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVPLElBQUksQ0FBQyxFQUFPOztjQUNaLEdBQUcsR0FBUSxFQUFFO1FBQ25CLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDckIsS0FBSyxHQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztR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Q0YsTUFBTSxDQUNKLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FDbEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBOUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFMekIsVUFBVTtZQUxWLFVBQVU7WUFFRSxXQUFXOzs7OztJQVVsQiwwQkFBdUI7O0lBQUUsMkJBQXdCOztJQUFFLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IFhsc3hDb25maWcgfSBmcm9tICcuL3hsc3guY29uZmlnJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZzogWGxzeENvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkKHdiOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaGVldDogYW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgcmV0W25hbWVdID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICogQHBhcmFtIHJBQlMg5Yqg6L295pWw5o2u5pa55byPIGByZWFkQXNCaW5hcnlTdHJpbmdgIO+8iOm7mOiupO+8iSDmiJYgYHJlYWRBc0FycmF5QnVmZmVyYO+8jFvmm7TlpJrnu4boioJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXG4gICAqL1xuICBpbXBvcnQoXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxuICAgIHJBQlM6ICdyZWFkQXNCaW5hcnlTdHJpbmcnIHwgJ3JlYWRBc0FycmF5QnVmZmVyJyA9ICdyZWFkQXNCaW5hcnlTdHJpbmcnLFxuICApOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PigocmVzb2x2ZXIsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHdiID0gWExTWC5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZXIodGhpcy5yZWFkKHdiKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB3YjogYW55ID0gWExTWC5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KTtcbiAgICAgICAgICByZXNvbHZlcih0aGlzLnJlYWQod2IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyW3JBQlNdKGZpbGVPclVybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDlr7zlh7ogKi9cbiAgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgd2I6IGFueSA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB3czogYW55ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2IuU2hlZXROYW1lcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuc2hlZXRzKTtcbiAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcblxuICAgICAgY29uc3Qgd2JvdXQ6IEFycmF5QnVmZmVyID0gWExTWC53cml0ZSh3Yiwge1xuICAgICAgICBib29rVHlwZTogJ3hsc3gnLFxuICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgLi4ub3B0aW9ucy5vcHRzLFxuICAgICAgfSk7XG4gICAgICBzYXZlQXMoXG4gICAgICAgIG5ldyBCbG9iKFt3Ym91dF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSksXG4gICAgICAgIG9wdGlvbnMuZmlsZW5hbWUgfHwgJ2V4cG9ydC54bHN4JyxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==