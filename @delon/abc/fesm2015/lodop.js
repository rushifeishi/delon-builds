import { Injectable, defineInjectable, inject, NgModule } from '@angular/core';
import { Subject, of } from 'rxjs';
import { LazyService, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LodopConfig {
}
LodopConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ LodopConfig.ngInjectableDef = defineInjectable({ factory: function LodopConfig_Factory() { return new LodopConfig(); }, token: LodopConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LodopService {
    /**
     * @param {?} defCog
     * @param {?} scriptSrv
     */
    constructor(defCog, scriptSrv) {
        this.defCog = defCog;
        this.scriptSrv = scriptSrv;
        this.pending = false;
        this._lodop = null;
        this._init = new Subject();
        this._events = new Subject();
        this.printBuffer = [];
        this.cog = defCog;
    }
    /**
     * 获取或重新设置配置
     *
     * **注：**重新设置会倒置重新加载脚本资源
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cog(value) {
        this._cog = Object.assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog, value);
    }
    /**
     * 事件变更通知
     * @return {?}
     */
    get events() {
        return this._events.asObservable();
    }
    /**
     * 获取 lodop 对象
     * @return {?}
     */
    get lodop() {
        if (this._lodop)
            return of((/** @type {?} */ ({ ok: true, lodop: this._lodop })));
        if (this.pending)
            return this._init.asObservable();
        this.request();
        return this._init.asObservable();
    }
    /**
     * 获取打印机列表
     * @return {?}
     */
    get printer() {
        this.check();
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        const count = (/** @type {?} */ (this._lodop)).GET_PRINTER_COUNT();
        for (let index = 0; index < count; index++) {
            ret.push((/** @type {?} */ (this._lodop)).GET_PRINTER_NAME(index));
        }
        return ret;
    }
    /**
     * @private
     * @return {?}
     */
    check() {
        if (!this._lodop)
            throw new Error(`请务必先调用 lodop 获取对象`);
    }
    /**
     * @private
     * @return {?}
     */
    request() {
        this.pending = true;
        /** @type {?} */
        const url = `${this.cog.url}?name=${this.cog.name}`;
        /** @type {?} */
        let checkMaxCount = (/** @type {?} */ (this.cog.checkMaxCount));
        /** @type {?} */
        const onResolve = (/**
         * @param {?} status
         * @param {?=} error
         * @return {?}
         */
        (status, error) => {
            this._init.next({
                ok: status === 'ok',
                status,
                error,
                lodop: (/** @type {?} */ (this._lodop)),
            });
        });
        /** @type {?} */
        const checkStatus = (/**
         * @return {?}
         */
        () => {
            --checkMaxCount;
            if ((/** @type {?} */ (this._lodop)).webskt && (/** @type {?} */ (this._lodop)).webskt.readyState === 1) {
                onResolve('ok');
            }
            else {
                if (checkMaxCount < 0) {
                    onResolve('check-limit');
                    return;
                }
                setTimeout((/**
                 * @return {?}
                 */
                () => checkStatus()), 100);
            }
        });
        this.scriptSrv.loadScript(url).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res.status !== 'ok') {
                this.pending = false;
                onResolve('script-load-error', res[0]);
                return;
            }
            if (window.hasOwnProperty((/** @type {?} */ (this.cog.name)))) {
                this._lodop = (/** @type {?} */ (window[(/** @type {?} */ (this.cog.name))]));
            }
            if (this._lodop === null) {
                onResolve('load-variable-name-error', { name: this.cog.name });
                return;
            }
            this._lodop.SET_LICENSES((/** @type {?} */ (this.cog.companyName)), this.cog.license, this.cog.licenseA, this.cog.licenseB);
            checkStatus();
        }));
    }
    /**
     * 重置 lodop 对象
     * @return {?}
     */
    reset() {
        this._lodop = null;
        this.pending = false;
        this.request();
    }
    /**
     * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
     *
     * **注：** 代码是指打印设计所产生字符串数据
     *
     * @param {?} code 代码
     * @param {?=} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
     * @return {?}
     */
    attachCode(code, contextObj, parser) {
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)\);/i;
        code.split('\n').forEach((/**
         * @param {?} line
         * @return {?}
         */
        line => {
            /** @type {?} */
            const res = (/** @type {?} */ (parser)).exec(line.trim());
            if (!res)
                return;
            /** @type {?} */
            const fn = (/** @type {?} */ (this._lodop))[res[1]];
            if (fn) {
                /** @type {?} */
                let arr = null;
                try {
                    /** @type {?} */
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = fakeFn();
                }
                catch (_a) { }
                if (arr != null && Array.isArray(arr) && contextObj) {
                    for (let i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = ((/** @type {?} */ (arr[i]))).replace(/{{(.*?)}}/g, (/**
                             * @param {?} _match
                             * @param {?} key
                             * @return {?}
                             */
                            (_match, key) => contextObj[key.trim()] || ''));
                        }
                    }
                }
                fn.apply(this._lodop, (/** @type {?} */ (arr)));
            }
        }));
    }
    /**
     * 打开打印设计关闭后自动返回代码
     *
     * **注：** 自动监听 `On_Return` 事件，运行后会移除
     * @return {?}
     */
    design() {
        this.check();
        /** @type {?} */
        const tid = (/** @type {?} */ (this._lodop)).PRINT_DESIGN();
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            (/** @type {?} */ (this._lodop)).On_Return = (/**
             * @param {?} taskID
             * @param {?} value
             * @return {?}
             */
            (taskID, value) => {
                if (tid !== taskID)
                    return;
                (/** @type {?} */ (this._lodop)).On_Return = null;
                resolve('' + value);
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    printDo() {
        /** @type {?} */
        const data = this.printBuffer.shift();
        if (!data)
            return;
        this.attachCode(data.code, data.item, data.parser);
        /** @type {?} */
        const tid = (/** @type {?} */ (this._lodop)).PRINT();
        (/** @type {?} */ (this._lodop)).On_Return = (/**
         * @param {?} taskID
         * @param {?} value
         * @return {?}
         */
        (taskID, value) => {
            if (tid !== taskID)
                return;
            (/** @type {?} */ (this._lodop)).On_Return = null;
            this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
            this.printDo();
        });
    }
    /**
     * 立即打印，一般用于批量套打
     *
     * @param {?} code 代码
     * @param {?} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
     * @return {?}
     */
    print(code, contextObj, parser) {
        this.check();
        if (contextObj) {
            this.printBuffer.push(...(Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return { code, parser, item };
            })));
        }
        this.printDo();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._init.unsubscribe();
        this._events.unsubscribe();
    }
}
LodopService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LodopService.ctorParameters = () => [
    { type: LodopConfig },
    { type: LazyService }
];
/** @nocollapse */ LodopService.ngInjectableDef = defineInjectable({ factory: function LodopService_Factory() { return new LodopService(inject(LodopConfig), inject(LazyService)); }, token: LodopService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LodopModule {
}
LodopModule.decorators = [
    { type: NgModule, args: [{
                imports: [DelonUtilModule],
            },] }
];

export { LodopConfig, LodopModule, LodopService };
//# sourceMappingURL=lodop.js.map
