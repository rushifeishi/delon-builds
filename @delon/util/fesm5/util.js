import { TemplateRef, Directive, ViewContainerRef, Input, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __spread, __assign, __values } from 'tslib';
import extend from 'extend';
import addDays from 'date-fns/add_days';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import endOfWeek from 'date-fns/end_of_week';
import endOfYear from 'date-fns/end_of_year';
import parse from 'date-fns/parse';
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
import { NzTreeNode } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringTemplateOutletDirective = /** @class */ (function () {
    function StringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    Object.defineProperty(StringTemplateOutletDirective.prototype, "stringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StringTemplateOutletDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            // use default template when input is string
            if (!this.defaultViewRef) {
                this.viewContainer.clear();
                this.inputViewRef = null;
                this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
            }
        }
        else {
            // clear previous view if any.
            if (this.inputViewRef) {
                this.inputViewRef = null;
            }
            // use input template when input is templateRef
            this.viewContainer.clear();
            this.defaultViewRef = null;
            this.inputViewRef = this.viewContainer.createEmbeddedView((/** @type {?} */ (this.inputTemplate)));
        }
    };
    StringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[stringTemplateOutlet]',
                },] }
    ];
    /** @nocollapse */
    StringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    StringTemplateOutletDirective.propDecorators = {
        stringTemplateOutlet: [{ type: Input }]
    };
    return StringTemplateOutletDirective;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultTemplate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/other/other.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param {?} obj 数据源，无效时直接返回 `defaultValue` 值
 * @param {?} path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param {?=} defaultValue 默认值
 * @return {?}
 */
function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        /** @type {?} */
        var checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    /** @type {?} */
    var res = path.reduce((/**
     * @param {?} o
     * @param {?} k
     * @return {?}
     */
    function (o, k) { return (o || {})[k]; }), obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 * @param {?} obj
 * @return {?}
 */
function deepCopy(obj) {
    /** @type {?} */
    var result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制字符串文档至剪贴板
 * @param {?} value
 * @return {?}
 */
function copy(value) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    function (resolve) {
        /** @type {?} */
        var copyTextArea = null;
        try {
            copyTextArea = document.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            document.body.appendChild(copyTextArea);
            copyTextArea.value = value;
            copyTextArea.select();
            document.execCommand('copy');
            resolve(value);
        }
        finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    }));
}
/**
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {?} ingoreArray 是否忽略数组，`true` 表示忽略数组的合并，`false` 表示会合并整个数组
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
function deepMergeKey(original, ingoreArray) {
    var objects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objects[_i - 2] = arguments[_i];
    }
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    /** @type {?} */
    var isObject = (/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return typeof v === 'object' || typeof v === 'function'; });
    /** @type {?} */
    var merge = (/**
     * @param {?} target
     * @param {?} obj
     * @return {?}
     */
    function (target, obj) {
        Object.keys(obj)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key); }))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var oldValue = obj[key];
            /** @type {?} */
            var newValue = target[key];
            if (Array.isArray(newValue)) {
                target[key] = ingoreArray ? oldValue : __spread(newValue, oldValue);
            }
            else if (oldValue != null && isObject(oldValue) && newValue != null && isObject(newValue)) {
                target[key] = merge(newValue, oldValue);
            }
            else {
                target[key] = deepCopy(oldValue);
            }
        }));
        return target;
    });
    objects.filter((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return v != null && isObject(v); })).forEach((/**
     * @param {?} v
     * @return {?}
     */
    function (v) { return merge(original, v); }));
    return original;
}
/**
 * 深度合并对象
 *
 * @param {?} original 原始对象
 * @param {...?} objects 要合并的对象
 * @return {?}
 */
function deepMerge(original) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    return deepMergeKey.apply(void 0, __spread([original, false], objects));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/string/string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 * @param {?} str
 * @param {?} obj
 * @param {?=} needDeepGet
 * @return {?}
 */
function format(str, obj, needDeepGet) {
    if (needDeepGet === void 0) { needDeepGet = false; }
    return (str || '').replace(/\${([^}]+)}/g, (/**
     * @param {?} _work
     * @param {?} key
     * @return {?}
     */
    function (_work, key) {
        return needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '';
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
function getTimeDistance(type, time) {
    time = parse(time || new Date());
    /** @type {?} */
    var options = { weekStartsOn: 1 };
    /** @type {?} */
    var res;
    switch (type) {
        case 'today':
            res = [time, time];
            break;
        case '-today':
            res = [addDays(time, -1), time];
            break;
        case 'yesterday':
            res = [addDays(time, -1), addDays(time, -1)];
            break;
        case 'week':
            res = [startOfWeek(time, options), endOfWeek(time, options)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
            break;
        case 'month':
            res = [startOfMonth(time), endOfMonth(time)];
            break;
        case '-month':
            res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
            break;
        case 'year':
            res = [startOfYear(time), endOfYear(time)];
            break;
        case '-year':
            res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
            break;
        default:
            res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
            break;
    }
    return fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 * @param {?} dates
 * @return {?}
 */
function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/lazy/lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LazyResult() { }
if (false) {
    /** @type {?} */
    LazyResult.prototype.path;
    /** @type {?} */
    LazyResult.prototype.loaded;
    /** @type {?} */
    LazyResult.prototype.status;
    /** @type {?|undefined} */
    LazyResult.prototype.error;
}
/**
 * 延迟加载资源（js 或 css）服务
 */
var LazyService = /** @class */ (function () {
    function LazyService(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    Object.defineProperty(LazyService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._notify.asObservable().pipe(share(), filter((/**
             * @param {?} ls
             * @return {?}
             */
            function (ls) { return ls.length !== 0; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LazyService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.list = {};
        this.cached = {};
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    LazyService.prototype.load = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        var _this = this;
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        var promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadScript = /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, innerContent) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.cached[path] = item;
                resolve(item);
            });
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('script')));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (node.readyState) {
                // IE
                node.onreadystatechange = (/**
                 * @return {?}
                 */
                function () {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path: path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                });
            }
            else {
                node.onload = (/**
                 * @return {?}
                 */
                function () {
                    return onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                });
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return onSuccess({
                    path: path,
                    loaded: false,
                    status: 'error',
                    error: error,
                });
            });
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadStyle = /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, rel, innerContent) {
        var _this = this;
        if (rel === void 0) { rel = 'stylesheet'; }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            var item = {
                path: path,
                loaded: true,
                status: 'ok',
            };
            _this.cached[path] = item;
            resolve(item);
        }));
    };
    LazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(ɵɵinject(DOCUMENT)); }, token: LazyService, providedIn: "root" });
    return LazyService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.list;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.cached;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype._notify;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/validate/validate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
function isInt(value) {
    // tslint:disable-next-line:triple-equals
    return isNum(value) && parseInt(value.toString(), 10) == value;
}
/**
 * 是否为小数
 * @param {?} value
 * @return {?}
 */
function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * 是否为身份证
 * @param {?} value
 * @return {?}
 */
function isIdCard(value) {
    return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
function isMobile(value) {
    return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}
/**
 * 是否URL地址
 * @param {?} url
 * @return {?}
 */
function isUrl(url) {
    return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(url);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/validate/validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
var  /**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
_Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    _Validators.num = /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    _Validators.int = /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    _Validators.decimal = /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    _Validators.idCard = /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    _Validators.mobile = /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isMobile(control.value) ? null : { mobile: true };
    };
    /** 是否URL地址 */
    /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    _Validators.url = /**
     * 是否URL地址
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isUrl(control.value) ? null : { url: true };
    };
    return _Validators;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: src/other/check.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        /** @type {?} */
        var node = nodes.item(i);
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
function toBoolean(value, allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && "" + value !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * \@Input() InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
            },
        });
    });
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputNumber decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
            },
        });
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/other/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
    for (var i in classMap) {
        renderer.removeClass(el, i);
    }
}
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function addClass(el, classMap, renderer) {
    for (var i in classMap) {
        if (classMap[i]) {
            renderer.addClass(el, i);
        }
    }
}
/**
 * 更新宿主组件样式 `class`，例如：
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  this.renderer,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  })
 * ```
 *
 * @param {?} el
 * @param {?} renderer
 * @param {?} classMap
 * @param {?=} cleanAll
 * @return {?}
 */
function updateHostClass(el, renderer, classMap, cleanAll) {
    if (cleanAll === void 0) { cleanAll = false; }
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = __assign({}, classMap);
    addClass(el, classMap, renderer);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ArrayConfig() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.parentMapName;
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.parentIdMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.childrenMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.titleMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayConfig.prototype.disabledMapname;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/util.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DelonUtilConfig = /** @class */ (function () {
    function DelonUtilConfig() {
    }
    DelonUtilConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonUtilConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function DelonUtilConfig_Factory() { return new DelonUtilConfig(); }, token: DelonUtilConfig, providedIn: "root" });
    return DelonUtilConfig;
}());
if (false) {
    /** @type {?} */
    DelonUtilConfig.prototype.array;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ArrayServiceTreeToArrOptions() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.parentMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.childrenMapName;
    /**
     * 是否移除 `children` 节点，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.clearChildren;
    /**
     * 转换成数组结构时回调
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceArrToTreeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
    /**
     * 子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.childrenMapName;
    /**
     * 转换成树数据时回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceArrToTreeNodeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
    /**
     * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
    /**
     * 转换成树数据后，执行的递归回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
function ArrayServiceGetKeysByTreeNodeOptions() { }
if (false) {
    /**
     * 是否包含半选状态的值，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
    /**
     * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
    /**
     * 回调，返回一个值 `key` 值，优先级高于其他
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
}
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = __assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
    }
    /**
     * 将树结构转换成数组结构
     */
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.treeToArr = /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        function (list, parent, deep) {
            var e_1, _a;
            if (deep === void 0) { deep = 0; }
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[(/** @type {?} */ (opt.deepMapName))] = deep;
                    i[(/** @type {?} */ (opt.parentMapName))] = parent;
                    if (opt.cb) {
                        opt.cb(i, parent, deep);
                    }
                    result.push(i);
                    /** @type {?} */
                    var children = i[(/** @type {?} */ (opt.childrenMapName))];
                    if (children != null && Array.isArray(children) && children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (opt.clearChildren) {
                        delete i[(/** @type {?} */ (opt.childrenMapName))];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        inFn(tree, 1);
        return result;
    };
    /**
     * 数组转换成树数据
     */
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTree = /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        var e_2, _a;
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[(/** @type {?} */ (opt.idMapName))];
                /** @type {?} */
                var pid = item[(/** @type {?} */ (opt.parentIdMapName))];
                childrenOf[id] = childrenOf[id] || [];
                item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
                if (opt.cb) {
                    opt.cb(item);
                }
                if (pid) {
                    childrenOf[pid] = childrenOf[pid] || [];
                    childrenOf[pid].push(item);
                }
                else {
                    tree.push(item);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return tree;
    };
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTreeNode = /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        var tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (item, parent, deep) {
            item.key = item[(/** @type {?} */ (opt.idMapName))];
            item.title = item[(/** @type {?} */ (opt.titleMapName))];
            item.checked = item[(/** @type {?} */ (opt.checkedMapname))];
            item.selected = item[(/** @type {?} */ (opt.selectedMapname))];
            item.expanded = item[(/** @type {?} */ (opt.expandedMapname))];
            item.disabled = item[(/** @type {?} */ (opt.disabledMapname))];
            if (item[(/** @type {?} */ (opt.isLeafMapName))] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[(/** @type {?} */ (opt.isLeafMapName))];
            }
            if (opt.cb) {
                opt.cb(item, parent, deep);
            }
        }));
        return tree.map((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return new NzTreeNode(node); }));
    };
    /**
     * 递归访问整个树
     */
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.visitTree = /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    function (tree, cb, options) {
        options = __assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        var inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
                    if (childrenVal && childrenVal.length > 0) {
                        inFn(childrenVal, item, deep + 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
        inFn(tree, null, 1);
    };
    /**
     * 获取所有已经选中的 `key` 值
     */
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.getKeysByTreeNode = /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (item, parent, deep) {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: DelonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(ɵɵinject(DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/util.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DelonUtilModule = /** @class */ (function () {
    function DelonUtilModule() {
    }
    DelonUtilModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StringTemplateOutletDirective],
                    exports: [StringTemplateOutletDirective],
                },] }
    ];
    return DelonUtilModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ArrayService, DelonUtilConfig, DelonUtilModule, InputBoolean, InputNumber, LazyService, StringTemplateOutletDirective, _Validators, copy, deepCopy, deepGet, deepMerge, deepMergeKey, fixEndTimeOfRange, format, getTimeDistance, isDecimal, isEmpty, isIdCard, isInt, isMobile, isNum, isUrl, toBoolean, toNumber, updateHostClass };
//# sourceMappingURL=util.js.map
