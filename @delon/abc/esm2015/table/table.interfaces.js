/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function STWidthMode() { }
if (false) {
    /**
     * 宽度类型
     * - `default` 默认行为
     * - `strict` 严格模式，即强制按 `width` 指定的宽度呈现，并根据 `strictBehavior` 类型处理
     * @type {?|undefined}
     */
    STWidthMode.prototype.type;
    /**
     * 严格模式的处理行为
     * - `wrap` 强制换行
     * - `truncate` 截短
     * @type {?|undefined}
     */
    STWidthMode.prototype.strictBehavior;
}
/**
 * @record
 */
export function STResetColumnsOption() { }
if (false) {
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.pi;
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.ps;
    /** @type {?|undefined} */
    STResetColumnsOption.prototype.columns;
    /**
     * Whether to trigger a data load, default: `true`
     * @type {?|undefined}
     */
    STResetColumnsOption.prototype.emitReload;
}
/**
 * @record
 */
export function STReq() { }
if (false) {
    /**
     * 分页类型，默认：`page`
     * - `page` 使用 `pi`，`ps` 组合
     * - `skip` 使用 `skip`，`limit` 组合
     * @type {?|undefined}
     */
    STReq.prototype.type;
    /**
     * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
     * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
     * @type {?|undefined}
     */
    STReq.prototype.params;
    /**
     * 请求方法，默认：`GET`
     * @type {?|undefined}
     */
    STReq.prototype.method;
    /**
     * 请求体 `body`
     * @type {?|undefined}
     */
    STReq.prototype.body;
    /**
     * 请求体 `Header`
     * @type {?|undefined}
     */
    STReq.prototype.headers;
    /**
     * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps' }`
     * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
     * @type {?|undefined}
     */
    STReq.prototype.reName;
    /**
     * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
     * @type {?|undefined}
     */
    STReq.prototype.allInBody;
    /**
     * 是否延迟加载数据，即渲染结束后不会主动发起请求，默认：`false`
     * @type {?|undefined}
     */
    STReq.prototype.lazyLoad;
    /**
     * 请求前数据处理
     * @type {?|undefined}
     */
    STReq.prototype.process;
}
/**
 * @record
 */
export function STRequestOptions() { }
if (false) {
    /** @type {?|undefined} */
    STRequestOptions.prototype.body;
    /** @type {?|undefined} */
    STRequestOptions.prototype.headers;
    /** @type {?|undefined} */
    STRequestOptions.prototype.params;
    /** @type {?|undefined} */
    STRequestOptions.prototype.observe;
    /** @type {?|undefined} */
    STRequestOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    STRequestOptions.prototype.responseType;
    /** @type {?|undefined} */
    STRequestOptions.prototype.withCredentials;
}
/**
 * @record
 */
export function STLoadOptions() { }
if (false) {
    /**
     * 是否合并，默认：`false`
     * @type {?|undefined}
     */
    STLoadOptions.prototype.merge;
}
/**
 * @record
 */
export function STRes() { }
if (false) {
    /**
     * 重命名返回参数 `total`、`list`
     * - `{ total: 'Total' }` => Total 会被当作 `total`
     * @type {?|undefined}
     */
    STRes.prototype.reName;
    /**
     * 数据预处理
     * @type {?|undefined}
     */
    STRes.prototype.process;
}
/**
 * @record
 */
export function STPage() { }
if (false) {
    /**
     * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
     * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
     * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
     * @type {?|undefined}
     */
    STPage.prototype.front;
    /**
     * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.zeroIndexed;
    /**
     * 指定分页显示的位置，默认：`bottom`
     * @type {?|undefined}
     */
    STPage.prototype.position;
    /**
     * 指定分页分页方向，默认：`right`
     * @type {?|undefined}
     */
    STPage.prototype.placement;
    /**
     * 是否显示分页器，默认：`true`
     * @type {?|undefined}
     */
    STPage.prototype.show;
    /**
     * 是否显示分页器中改变页数，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.showSize;
    /**
     * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
     * @type {?|undefined}
     */
    STPage.prototype.pageSizes;
    /**
     * 是否显示分页器中快速跳转，默认：`false`
     * @type {?|undefined}
     */
    STPage.prototype.showQuickJumper;
    /**
     * 是否显示总数据量
     * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
     * - `string` 自定义模板，模板变量：
     *  - `{{total}}` 表示数据总量
     *  - `{{range[0]}}` 表示当前页开始数量值
     *  - `{{range[1]}}` 表示当前页结束数量值
     * @type {?|undefined}
     */
    STPage.prototype.total;
    /**
     * 数据变更后是否保留在数据变更前的页码，默认：`true`
     * @deprecated
     * @type {?|undefined}
     */
    STPage.prototype.indexReset;
    /**
     * 切换分页时返回顶部，默认：`true`
     * @type {?|undefined}
     */
    STPage.prototype.toTop;
    /**
     * 返回顶部偏移值，默认：`100`
     * @type {?|undefined}
     */
    STPage.prototype.toTopOffset;
}
/**
 * 数据源
 * @record
 */
export function STData() { }
if (false) {
    /**
     * 选择框或单选框状态值
     * @type {?|undefined}
     */
    STData.prototype.checked;
    /**
     * 选择框或单选框 `disabled` 值
     * @type {?|undefined}
     */
    STData.prototype.disabled;
    /**
     * 是否展开状态
     * @type {?|undefined}
     */
    STData.prototype.expand;
    /**
     * 是否显示展开按钮
     * @type {?|undefined}
     */
    STData.prototype.showExpand;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * 列描述
 * @record
 */
export function STColumn() { }
if (false) {
    /**
     * 用于定义数据源主键，例如：`STStatistical`
     * @type {?|undefined}
     */
    STColumn.prototype.key;
    /**
     * 列标题
     * @type {?|undefined}
     */
    STColumn.prototype.title;
    /**
     * 列标题 i18n
     * @type {?|undefined}
     */
    STColumn.prototype.i18n;
    /**
     * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
     * - `id`
     * - `price.market`
     * - `[ 'price', 'market' ]`
     * @type {?|undefined}
     */
    STColumn.prototype.index;
    /**
     * 类型
     * - `no` 行号，计算规则：`index + noIndex`
     * - `checkbox` 多选
     * - `radio` 单选
     * - `link` 链接，务必指定 `click`
     * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
     * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
     * - `img` 图片且居中(若 `className` 存在则优先)
     * - `number` 数字且居右(若 `className` 存在则优先)
     * - `currency` 货币且居右(若 `className` 存在则优先)
     * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
     * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
     * @type {?|undefined}
     */
    STColumn.prototype.type;
    /**
     * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
     * @type {?|undefined}
     */
    STColumn.prototype.click;
    /**
     * 按钮组
     * @type {?|undefined}
     */
    STColumn.prototype.buttons;
    /**
     * 自定义渲染ID
     * \@example
     * <ng-template st-row="custom" let-item let-index="index" let-column="column">
     *  {{ c.title }}
     * </ng-template>
     * @type {?|undefined}
     */
    STColumn.prototype.render;
    /**
     * 标题自定义渲染ID
     * \@example
     * <ng-template st-row="custom" type="title" let-c>
     *  {{ item | json }}
     * </ng-template>
     * @type {?|undefined}
     */
    STColumn.prototype.renderTitle;
    /**
     * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
     *
     * **注意：** 若固定列必须是数字
     * @type {?|undefined}
     */
    STColumn.prototype.width;
    /**
     * 排序配置项，远程数据配置**优先**规则：
     * - `true` 表示允许排序
     * - `string` 表示远程数据排序相对应 `key` 值
     * @type {?|undefined}
     */
    STColumn.prototype.sort;
    /**
     * 过滤配置项
     * @type {?|undefined}
     */
    STColumn.prototype.filter;
    /**
     * 格式化列值
     * @type {?|undefined}
     */
    STColumn.prototype.format;
    /**
     * 自定义全/反选选择项
     * @type {?|undefined}
     */
    STColumn.prototype.selections;
    /**
     * 列 `class` 属性值（注：无须 `.` 点），例如：
     * - `text-center` 居中
     * - `text-right` 居右
     * - `text-success` 成功色
     * - `text-danger` 异常色
     * @type {?|undefined}
     */
    STColumn.prototype.className;
    /**
     * 合并列
     * @type {?|undefined}
     */
    STColumn.prototype.colSpan;
    /**
     * 数字格式，`type=number` 有效
     * @type {?|undefined}
     */
    STColumn.prototype.numberDigits;
    /**
     * 日期格式，`type=date` 有效，（默认：`YYYY-MM-DD HH:mm`）
     * @type {?|undefined}
     */
    STColumn.prototype.dateFormat;
    /**
     * 当 `type=yn` 有效
     * @type {?|undefined}
     */
    STColumn.prototype.yn;
    /**
     * 是否允许导出，默认 `true`
     * @type {?|undefined}
     */
    STColumn.prototype.exported;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumn.prototype.acl;
    /**
     * 当不存在数据时以默认值替代
     * @type {?|undefined}
     */
    STColumn.prototype.default;
    /**
     * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
     *
     * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
     * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
     * @type {?|undefined}
     */
    STColumn.prototype.fixed;
    /**
     * 徽标配置项
     * @type {?|undefined}
     */
    STColumn.prototype.badge;
    /**
     * 标签配置项
     * @type {?|undefined}
     */
    STColumn.prototype.tag;
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     * - 支持自定义方法
     * @type {?|undefined}
     */
    STColumn.prototype.noIndex;
    /**
     * 条件表达式
     * - 仅赋值 `columns` 时执行一次
     * - 可调用 `resetColumns()` 再一次触发
     * @type {?|undefined}
     */
    STColumn.prototype.iif;
    /**
     * 统计
     * @type {?|undefined}
     */
    STColumn.prototype.statistical;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STStatistical() { }
if (false) {
    /** @type {?} */
    STStatistical.prototype.type;
    /**
     * 保留小数位数，默认：`2`
     * @type {?|undefined}
     */
    STStatistical.prototype.digits;
    /**
     * 是否需要货币格式化，默认以下情况为 `true`
     * - `type` 为 `STStatisticalFn`、 `sum`、`average`、`max`、`min`
     * @type {?|undefined}
     */
    STStatistical.prototype.currency;
}
/**
 * @record
 */
export function STStatisticalResults() { }
/**
 * @record
 */
export function STStatisticalResult() { }
if (false) {
    /** @type {?} */
    STStatisticalResult.prototype.value;
    /** @type {?|undefined} */
    STStatisticalResult.prototype.text;
}
/**
 * @record
 */
export function STColumnSort() { }
if (false) {
    /**
     * 排序的默认受控属性
     * @type {?|undefined}
     */
    STColumnSort.prototype.default;
    /**
     * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
     * - `null` 忽略本地排序，但保持排序功能
     * @type {?|undefined}
     */
    STColumnSort.prototype.compare;
    /**
     * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
     * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
     * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则
     * @type {?|undefined}
     */
    STColumnSort.prototype.key;
    /**
     * 远程数据的排序时后端相对应的VALUE
     * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
     * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
     * @type {?|undefined}
     */
    STColumnSort.prototype.reName;
}
/**
 * @record
 */
export function STColumnFilter() { }
if (false) {
    /**
     * 搜索方式
     * - `defualt` 默认形式
     * - `keyword` 文本框形式
     * @type {?|undefined}
     */
    STColumnFilter.prototype.type;
    /**
     * 表头的筛选菜单项，至少一项才会生效
     * - 当 `type='keyword'` 时可为空
     * @type {?|undefined}
     */
    STColumnFilter.prototype.menus;
    /**
     * 本地数据的筛选函数
     * @type {?|undefined}
     */
    STColumnFilter.prototype.fn;
    /**
     * 标识数据是否已过滤，筛选图标会高亮
     * @type {?|undefined}
     */
    STColumnFilter.prototype.default;
    /**
     * 自定义 filter 图标
     * - 当 `type='default'` 默认 `filter`
     * - 当 `type='keyword'` 默认 `search`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.icon;
    /**
     * 确认按钮文本，默认 `确认`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.confirmText;
    /**
     * 清除按钮文本，默认 `重置`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.clearText;
    /**
     * 是否多选，默认 `true`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.multiple;
    /**
     * 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性
     * `key: 'name'` 结果 `?name=1&pi=1`
     * @type {?|undefined}
     */
    STColumnFilter.prototype.key;
    /**
     * 远程数据的过滤时后端相对应的VALUE
     * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
     * \@return 返回为 Object 对象
     * @type {?|undefined}
     */
    STColumnFilter.prototype.reName;
}
/**
 * @record
 */
export function STColumnFilterMenu() { }
if (false) {
    /**
     * 文本
     * - 当 `type: 'keyword'` 时表示 `placeholder`
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.text;
    /**
     * 值
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.value;
    /**
     * 是否选中
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.checked;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumnFilterMenu.prototype.acl;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnSelection() { }
if (false) {
    /**
     * 选择项显示的文字
     * @type {?}
     */
    STColumnSelection.prototype.text;
    /**
     * 选择项点击回调，允许对参数 `data.checked` 进行操作
     * @type {?}
     */
    STColumnSelection.prototype.select;
    /**
     * 权限，等同 `can()` 参数值
     * @type {?|undefined}
     */
    STColumnSelection.prototype.acl;
}
/**
 * 当 `type=yn` 有效
 * @record
 */
export function STColumnYn() { }
if (false) {
    /**
     * 真值条件，（默认：`true`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.truth;
    /**
     * 徽章 `true` 时文本，（默认：`是`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.yes;
    /**
     * 徽章 `false` 时文本，（默认：`否`）
     * @type {?|undefined}
     */
    STColumnYn.prototype.no;
    /**
     * 徽章显示风格
     * - `full` 图标和文本
     * - `icon` 图标
     * - `text` 文本
     * @type {?|undefined}
     */
    STColumnYn.prototype.mode;
}
/**
 * @record
 */
export function STIcon() { }
if (false) {
    /**
     * 图标类型
     * @type {?}
     */
    STIcon.prototype.type;
    /**
     * 图标主题风格，默认：`outline`
     * @type {?|undefined}
     */
    STIcon.prototype.theme;
    /**
     * 是否有旋转动画，默认：`false`
     * @type {?|undefined}
     */
    STIcon.prototype.spin;
    /**
     * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
     * @type {?|undefined}
     */
    STIcon.prototype.twoToneColor;
    /**
     * 指定来自 IconFont 的图标类型
     * @type {?|undefined}
     */
    STIcon.prototype.iconfont;
}
/**
 * 按钮配置
 * @record
 */
export function STColumnButton() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnButton.prototype.text;
    /**
     * 文本 i18n
     * @type {?|undefined}
     */
    STColumnButton.prototype.i18n;
    /**
     * 图标
     * @type {?|undefined}
     */
    STColumnButton.prototype.icon;
    /**
     * 格式化文本
     * @deprecated 使用 `text` 代替
     * @type {?|undefined}
     */
    STColumnButton.prototype.format;
    /**
     * 按钮类型
     * - `none` 无任何互动
     * - `del` 删除，默认开启 `pop: true`
     * - `modal` 对话框，需要指定 `component` 才会生效
     * - `static` 静态对话框，需要指定 `component` 才会生效
     * - `drawer` 抽屉，需要指定 `component` 才会生效
     * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
     * @type {?|undefined}
     */
    STColumnButton.prototype.type;
    /**
     * 点击回调
     * - Function
     *  - `type=modal` 只会在当有传回值时才会触发回调
     * - reload：重新刷新当前页
     * - load：重新加载数据，并重置页码为：`1`
     * @type {?|undefined}
     */
    STColumnButton.prototype.click;
    /**
     * 是否需要气泡确认框
     * @type {?|undefined}
     */
    STColumnButton.prototype.pop;
    /**
     * 气泡确认框内容，默认 `确认删除吗？`
     * @type {?|undefined}
     */
    STColumnButton.prototype.popTitle;
    /**
     * 对话框参数
     * @type {?|undefined}
     */
    STColumnButton.prototype.modal;
    /**
     * 抽屉参数
     * @type {?|undefined}
     */
    STColumnButton.prototype.drawer;
    /**
     * 下拉菜单，当存在时以 `dropdown` 形式渲染
     * - 只支持一级
     * @type {?|undefined}
     */
    STColumnButton.prototype.children;
    /**
     * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
     * @type {?|undefined}
     */
    STColumnButton.prototype.acl;
    /**
     * Conditional expression
     * @type {?|undefined}
     */
    STColumnButton.prototype.iif;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
     * @type {?|undefined}
     */
    STColumnButton.prototype.iifBehavior;
    /** @type {?|undefined} */
    STColumnButton.prototype.tooltip;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function STColumnButtonModal() { }
if (false) {
    /**
     * 对话框组件对象，务必在 `entryComponents` 注册
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.component;
    /**
     * 对话框参数
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.params;
    /**
     * 对话框目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonModal.prototype.paramsName;
}
/**
 * @record
 */
export function STColumnButtonModalConfig() { }
if (false) {
    /**
     * 指定模态框目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.paramsName;
    /**
     * 大小；例如：lg、600，默认：`lg`
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.size;
    /**
     * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.modalOptions;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    STColumnButtonModalConfig.prototype.exact;
}
/**
 * @record
 */
export function STColumnButtonDrawer() { }
if (false) {
    /**
     * 标题
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.title;
    /**
     * 抽屉组件对象，务必在 `entryComponents` 注册
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.component;
    /**
     * 抽屉参数
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.params;
    /**
     * 抽屉目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonDrawer.prototype.paramsName;
}
/**
 * @record
 */
export function STColumnButtonDrawerConfig() { }
if (false) {
    /**
     * 抽屉目标组件的接收参数名，默认：`record`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.paramsName;
    /**
     * 大小；例如：lg、600，默认：`md`
     *
     * | 类型 | 默认大小 |
     * | --- | ------ |
     * | `sm` | `300` |
     * | `md` | `600` |
     * | `lg` | `900` |
     * | `xl` | `1200` |
     *
     * > 以上值，可通过覆盖相应的LESS参数自行调整
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.footerHeight;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    STColumnButtonDrawerConfig.prototype.drawerOptions;
}
/**
 * @record
 */
export function STReqReNameType() { }
if (false) {
    /** @type {?|undefined} */
    STReqReNameType.prototype.pi;
    /** @type {?|undefined} */
    STReqReNameType.prototype.ps;
    /** @type {?|undefined} */
    STReqReNameType.prototype.skip;
    /** @type {?|undefined} */
    STReqReNameType.prototype.limit;
}
/**
 * @record
 */
export function STResReNameType() { }
if (false) {
    /** @type {?|undefined} */
    STResReNameType.prototype.total;
    /** @type {?|undefined} */
    STResReNameType.prototype.list;
}
/**
 * @record
 */
export function STExportOptions() { }
if (false) {
    /** @type {?|undefined} */
    STExportOptions.prototype._d;
    /** @type {?|undefined} */
    STExportOptions.prototype._c;
    /**
     * 工作溥名
     * @type {?|undefined}
     */
    STExportOptions.prototype.sheetname;
    /**
     * 文件名
     * @type {?|undefined}
     */
    STExportOptions.prototype.filename;
    /**
     * triggers when saveas
     * @type {?|undefined}
     */
    STExportOptions.prototype.callback;
}
/**
 * 单排序规则
 * - 若不指定，则返回：`columnName=ascend|descend`
 * - 若指定，则返回：`sort=columnName.(ascend|descend)`
 * @record
 */
export function STSingleSort() { }
if (false) {
    /**
     * 请求参数名，默认：`sort`
     * @type {?|undefined}
     */
    STSingleSort.prototype.key;
    /**
     * 列名与状态间分隔符，默认：`.`
     * @type {?|undefined}
     */
    STSingleSort.prototype.nameSeparator;
}
/**
 * 多排序相同排序 key 时合并规则
 * @record
 */
export function STMultiSort() { }
if (false) {
    /**
     * 请求参数名，默认：`sort`
     * @type {?|undefined}
     */
    STMultiSort.prototype.key;
    /**
     * 不同属性间分隔符，默认：`-`
     * @type {?|undefined}
     */
    STMultiSort.prototype.separator;
    /**
     * 列名与状态间分隔符，默认：`.`
     * @type {?|undefined}
     */
    STMultiSort.prototype.nameSeparator;
    /**
     * 是否全局多排序模式，默认：`true`
     * - `true` 表示所有 `st` 默认为多排序
     * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
     * @type {?|undefined}
     */
    STMultiSort.prototype.global;
}
/**
 * 徽标信息
 * @record
 */
export function STColumnBadge() { }
/**
 * @record
 */
export function STColumnBadgeValue() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnBadgeValue.prototype.text;
    /**
     * 徽标颜色值
     * @type {?|undefined}
     */
    STColumnBadgeValue.prototype.color;
}
/**
 * 标签信息
 * @record
 */
export function STColumnTag() { }
/**
 * @record
 */
export function STColumnTagValue() { }
if (false) {
    /**
     * 文本
     * @type {?|undefined}
     */
    STColumnTagValue.prototype.text;
    /**
     * 颜色值，支持预设和色值
     * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
     * - 色值：#f50,#ff0
     * @type {?|undefined}
     */
    STColumnTagValue.prototype.color;
}
/**
 * 回调数据
 * @record
 */
export function STChange() { }
if (false) {
    /**
     * 回调类型
     * @type {?}
     */
    STChange.prototype.type;
    /**
     * 当前页码
     * @type {?}
     */
    STChange.prototype.pi;
    /**
     * 每页数量
     * @type {?}
     */
    STChange.prototype.ps;
    /**
     * 数据总量
     * @type {?}
     */
    STChange.prototype.total;
    /**
     * `checkbox` 参数
     * @type {?|undefined}
     */
    STChange.prototype.checkbox;
    /**
     * `radio` 参数
     * @type {?|undefined}
     */
    STChange.prototype.radio;
    /**
     * 排序参数
     * @type {?|undefined}
     */
    STChange.prototype.sort;
    /**
     * 过滤参数
     * @type {?|undefined}
     */
    STChange.prototype.filter;
    /**
     * 行点击或双击参数
     * @type {?|undefined}
     */
    STChange.prototype.click;
    /**
     * `expand` 参数
     * @type {?|undefined}
     */
    STChange.prototype.expand;
}
/**
 * 行单击参数
 * @record
 */
export function STChangeSort() { }
if (false) {
    /** @type {?|undefined} */
    STChangeSort.prototype.value;
    /** @type {?|undefined} */
    STChangeSort.prototype.map;
    /** @type {?|undefined} */
    STChangeSort.prototype.column;
}
/**
 * 行单击参数
 * @record
 */
export function STChangeRowClick() { }
if (false) {
    /** @type {?|undefined} */
    STChangeRowClick.prototype.e;
    /** @type {?|undefined} */
    STChangeRowClick.prototype.item;
    /** @type {?|undefined} */
    STChangeRowClick.prototype.index;
}
/**
 * @record
 */
export function STError() { }
if (false) {
    /** @type {?|undefined} */
    STError.prototype.type;
    /** @type {?|undefined} */
    STError.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxpQ0FhQzs7Ozs7Ozs7SUFQQywyQkFBNEI7Ozs7Ozs7SUFNNUIscUNBQXFDOzs7OztBQUd2QywwQ0FRQzs7O0lBUEMsa0NBQVk7O0lBQ1osa0NBQVk7O0lBQ1osdUNBQXFCOzs7OztJQUlyQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJCQW1DQzs7Ozs7Ozs7SUE3QkMscUJBQXVCOzs7Ozs7SUFLdkIsdUJBQWE7Ozs7O0lBRWIsdUJBQWdCOzs7OztJQUVoQixxQkFBVzs7Ozs7SUFFWCx3QkFBYzs7Ozs7O0lBS2QsdUJBQXlCOzs7OztJQUl6QiwwQkFBb0I7Ozs7O0lBSXBCLHlCQUFtQjs7Ozs7SUFJbkIsd0JBQWlFOzs7OztBQUduRSxzQ0FnQkM7OztJQWZDLGdDQUFXOztJQUNYLG1DQUlNOztJQUNOLGtDQUlNOztJQUNOLG1DQUF5Qzs7SUFDekMsMENBQXlCOztJQUN6Qix3Q0FBd0Q7O0lBQ3hELDJDQUEwQjs7Ozs7QUFHNUIsbUNBR0M7Ozs7OztJQURDLDhCQUFnQjs7Ozs7QUFHbEIsMkJBVUM7Ozs7Ozs7SUFMQyx1QkFBeUI7Ozs7O0lBSXpCLHdCQUFzRDs7Ozs7QUFHeEQsNEJBeURDOzs7Ozs7OztJQW5EQyx1QkFBZ0I7Ozs7O0lBSWhCLDZCQUFzQjs7Ozs7SUFJdEIsMEJBQXFDOzs7OztJQUlyQywyQkFBd0M7Ozs7O0lBSXhDLHNCQUFlOzs7OztJQUlmLDBCQUFtQjs7Ozs7SUFJbkIsMkJBQXFCOzs7OztJQUlyQixpQ0FBMEI7Ozs7Ozs7Ozs7SUFTMUIsdUJBQXlCOzs7Ozs7SUFLekIsNEJBQXFCOzs7OztJQUlyQix1QkFBZ0I7Ozs7O0lBSWhCLDZCQUFxQjs7Ozs7O0FBTXZCLDRCQW1CQzs7Ozs7O0lBZkMseUJBQWtCOzs7OztJQUlsQiww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QUZDLHVCQUFhOztJQUNiLHdCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXJPcHRpb25zLCBNb2RhbEhlbHBlck9wdGlvbnMsIFlOTW9kZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTVFdpZHRoTW9kZSB7XG4gIC8qKlxuICAgKiDlrr3luqbnsbvlnotcbiAgICogLSBgZGVmYXVsdGAg6buY6K6k6KGM5Li6XG4gICAqIC0gYHN0cmljdGAg5Lil5qC85qih5byP77yM5Y2z5by65Yi25oyJIGB3aWR0aGAg5oyH5a6a55qE5a695bqm5ZGI546w77yM5bm25qC55o2uIGBzdHJpY3RCZWhhdmlvcmAg57G75Z6L5aSE55CGXG4gICAqL1xuICB0eXBlPzogJ3N0cmljdCcgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDkuKXmoLzmqKHlvI/nmoTlpITnkIbooYzkuLpcbiAgICogLSBgd3JhcGAg5by65Yi25o2i6KGMXG4gICAqIC0gYHRydW5jYXRlYCDmiKrnn61cbiAgICovXG4gIHN0cmljdEJlaGF2aW9yPzogJ3dyYXAnIHwgJ3RydW5jYXRlJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc2V0Q29sdW1uc09wdGlvbiB7XG4gIHBpPzogbnVtYmVyO1xuICBwcz86IG51bWJlcjtcbiAgY29sdW1ucz86IFNUQ29sdW1uW107XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHRyaWdnZXIgYSBkYXRhIGxvYWQsIGRlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgZW1pdFJlbG9hZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXEge1xuICAvKipcbiAgICog5YiG6aG157G75Z6L77yM6buY6K6k77yaYHBhZ2VgXG4gICAqIC0gYHBhZ2VgIOS9v+eUqCBgcGlg77yMYHBzYCDnu4TlkIhcbiAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAqL1xuICB0eXBlPzogJ3BhZ2UnIHwgJ3NraXAnO1xuICAvKipcbiAgICog6aKd5aSW6K+35rGC5Y+C5pWw77yM6buY6K6k6Ieq5Yqo6ZmE5YqgIGBwaWDjgIFgcHNgIOiHs1VSTFxuICAgKiAtIGB7IHN0YXR1czogJ25ldycgfWAgPT4gYHVybD9waT0xJnBzPTEwJnN0YXR1cz1uZXdgXG4gICAqL1xuICBwYXJhbXM/OiBhbnk7XG4gIC8qKiDor7fmsYLmlrnms5XvvIzpu5jorqTvvJpgR0VUYCAqL1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIC8qKiDor7fmsYLkvZMgYGJvZHlgICovXG4gIGJvZHk/OiBhbnk7XG4gIC8qKiDor7fmsYLkvZMgYEhlYWRlcmAgKi9cbiAgaGVhZGVycz86IGFueTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeWPguaVsCBgcGlg44CBYHBzYO+8jOm7mOiupO+8mmB7IHBpOiAncGknLCBwczogJ3BzJyB9YFxuICAgKiAtIGB7IHBpOiAnUGFnZScgfWAgPT4gYHBpYCDkvJrooqvmm7/mjaLmiJAgUGFnZVxuICAgKi9cbiAgcmVOYW1lPzogU1RSZXFSZU5hbWVUeXBlO1xuICAvKipcbiAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxJbkJvZHk/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bu26L+f5Yqg6L295pWw5o2u77yM5Y2z5riy5p+T57uT5p2f5ZCO5LiN5Lya5Li75Yqo5Y+R6LW36K+35rGC77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog6K+35rGC5YmN5pWw5o2u5aSE55CGXG4gICAqL1xuICBwcm9jZXNzPzogKHJlcXVlc3RPcHRpb25zOiBTVFJlcXVlc3RPcHRpb25zKSA9PiBTVFJlcXVlc3RPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVxdWVzdE9wdGlvbnMge1xuICBib2R5PzogYW55O1xuICBoZWFkZXJzPzpcbiAgICB8IEh0dHBIZWFkZXJzXG4gICAgfCB7XG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgcGFyYW1zPzpcbiAgICB8IEh0dHBQYXJhbXNcbiAgICB8IHtcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIH07XG4gIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVExvYWRPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWQiOW5tu+8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgbWVyZ2U/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUUmVzIHtcbiAgLyoqXG4gICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3RgXG4gICAqIC0gYHsgdG90YWw6ICdUb3RhbCcgfWAgPT4gVG90YWwg5Lya6KKr5b2T5L2cIGB0b3RhbGBcbiAgICovXG4gIHJlTmFtZT86IFNUUmVzUmVOYW1lVHlwZTtcbiAgLyoqXG4gICAqIOaVsOaNrumihOWkhOeQhlxuICAgKi9cbiAgcHJvY2Vzcz86IChkYXRhOiBTVERhdGFbXSwgcmF3RGF0YT86IGFueSkgPT4gU1REYXRhW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RQYWdlIHtcbiAgLyoqXG4gICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg55SxIGBzdGAg5qC55o2uIGBkYXRhYCDplb/luqblj5fmjqfliIbpobXvvIzljIXmi6zvvJrmjpLluo/jgIHov4fmu6TnrYlcbiAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAqL1xuICBmcm9udD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuWIhumhteaYvuekuueahOS9jee9ru+8jOm7mOiupO+8mmBib3R0b21gXG4gICAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gIC8qKlxuICAgKiDmjIflrprliIbpobXliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YiG6aG15Zmo5Lit5pS55Y+Y6aG15pWw77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NpemU/OiBib29sZWFuO1xuICAvKipcbiAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgKi9cbiAgcGFnZVNpemVzPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65oC75pWw5o2u6YePXG4gICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICogIC0gYHt7dG90YWx9fWAg6KGo56S65pWw5o2u5oC76YePXG4gICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICovXG4gIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaVsOaNruWPmOabtOWQjuaYr+WQpuS/neeVmeWcqOaVsOaNruWPmOabtOWJjeeahOmhteegge+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaW5kZXhSZXNldD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHRvVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/lOWbnumhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMDBgXG4gICAqL1xuICB0b1RvcE9mZnNldD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiDmlbDmja7mupBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTVERhdGEge1xuICAvKipcbiAgICog6YCJ5oup5qGG5oiW5Y2V6YCJ5qGG54q25oCB5YC8XG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOmAieaLqeahhuaIluWNlemAieahhiBgZGlzYWJsZWRgIOWAvFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5bGV5byA54q25oCBXG4gICAqL1xuICBleHBhbmQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65bGV5byA5oyJ6ZKuXG4gICAqL1xuICBzaG93RXhwYW5kPzogYm9vbGVhbjtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICog5YiX5o+P6L+wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW4ge1xuICAvKipcbiAgICog55So5LqO5a6a5LmJ5pWw5o2u5rqQ5Li76ZSu77yM5L6L5aaC77yaYFNUU3RhdGlzdGljYWxgXG4gICAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5qCH6aKYIGkxOG5cbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDliJfmlbDmja7lnKjmlbDmja7pobnkuK3lr7nlupTnmoQga2V577yM5pSv5oyBIGBhLmIuY2Ag55qE5bWM5aWX5YaZ5rOV77yM5L6L5aaC77yaXG4gICAqIC0gYGlkYFxuICAgKiAtIGBwcmljZS5tYXJrZXRgXG4gICAqIC0gYFsgJ3ByaWNlJywgJ21hcmtldCcgXWBcbiAgICovXG4gIGluZGV4Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsO1xuICAvKipcbiAgICog57G75Z6LXG4gICAqIC0gYG5vYCDooYzlj7fvvIzorqHnrpfop4TliJnvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKiAtIGBjaGVja2JveGAg5aSa6YCJXG4gICAqIC0gYHJhZGlvYCDljZXpgIlcbiAgICogLSBgbGlua2Ag6ZO+5o6l77yM5Yqh5b+F5oyH5a6aIGBjbGlja2BcbiAgICogLSBgYmFkZ2VgIFvlvr3moIddKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2JhZGdlL3poKe+8jOWKoeW/heaMh+WumiBgYmFkZ2VgIOWPguaVsOmFjee9ruW+veagh+WvueW6lOWAvFxuICAgKiAtIGB0YWdgIFvmoIfnrb5dKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL3RhZy96aCnvvIzliqHlv4XmjIflrpogYHRhZ2Ag5Y+C5pWw6YWN572u5qCH562+5a+55bqU5YC8XG4gICAqIC0gYGltZ2Ag5Zu+54mH5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYG51bWJlcmAg5pWw5a2X5LiU5bGF5Y+zKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgpXG4gICAqIC0gYGN1cnJlbmN5YCDotKfluIHkuJTlsYXlj7Mo6IulIGBjbGFzc05hbWVgIOWtmOWcqOWImeS8mOWFiClcbiAgICogLSBgZGF0ZWAg5pel5pyf5qC85byP5LiU5bGF5LitKOiLpSBgY2xhc3NOYW1lYCDlrZjlnKjliJnkvJjlhYgp77yM5L2/55SoIGBkYXRlRm9ybWF0YCDoh6rlrprkuYnmoLzlvI9cbiAgICogLSBgeW5gIOWwhmBib29sZWFuYOexu+Wei+W+veeroOWMliBbZG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZGF0YS1yZW5kZXIjeW4pXG4gICAqL1xuICB0eXBlPzogJ2NoZWNrYm94JyB8ICdsaW5rJyB8ICdiYWRnZScgfCAndGFnJyB8ICdyYWRpbycgfCAnaW1nJyB8ICdjdXJyZW5jeScgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICd5bicgfCAnbm8nO1xuICAvKipcbiAgICog6ZO+5o6l5Zue6LCD77yM6Iul6L+U5Zue5LiA5Liq5a2X56ym5Liy6KGo56S65a+86IiqVVJM5Lya6Ieq5Yqo6Kem5Y+RIGByb3V0ZXIubmF2aWdhdGVCeVVybGBcbiAgICovXG4gIGNsaWNrPzogKHJlY29yZDogU1REYXRhLCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnk7XG4gIC8qKlxuICAgKiDmjInpkq7nu4RcbiAgICovXG4gIGJ1dHRvbnM/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIGxldC1pdGVtIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgKiAge3sgYy50aXRsZSB9fVxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKi9cbiAgcmVuZGVyPzogc3RyaW5nO1xuICAvKipcbiAgICog5qCH6aKY6Ieq5a6a5LmJ5riy5p+TSURcbiAgICogQGV4YW1wbGVcbiAgICogPG5nLXRlbXBsYXRlIHN0LXJvdz1cImN1c3RvbVwiIHR5cGU9XCJ0aXRsZVwiIGxldC1jPlxuICAgKiAge3sgaXRlbSB8IGpzb24gfX1cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICovXG4gIHJlbmRlclRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5YiX5a6977yI5pWw5a2X5Z6L6KGo56S6IGBweGAg5YC877yJ77yM5L6L5aaC77yaYDEwMGDjgIFgMTAlYOOAgWAxMDBweGBcbiAgICpcbiAgICogKirms6jmhI/vvJoqKiDoi6Xlm7rlrprliJflv4XpobvmmK/mlbDlrZdcbiAgICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAvKipcbiAgICog5o6S5bqP6YWN572u6aG577yM6L+c56iL5pWw5o2u6YWN572uKirkvJjlhYgqKuinhOWIme+8mlxuICAgKiAtIGB0cnVlYCDooajnpLrlhYHorrjmjpLluo9cbiAgICogLSBgc3RyaW5nYCDooajnpLrov5znqIvmlbDmja7mjpLluo/nm7jlr7nlupQgYGtleWAg5YC8XG4gICAqL1xuICBzb3J0PzogdHJ1ZSB8IHN0cmluZyB8IFNUQ29sdW1uU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOmFjee9rumhuVxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW5GaWx0ZXI7XG4gIC8qKlxuICAgKiDmoLzlvI/ljJbliJflgLxcbiAgICovXG4gIGZvcm1hdD86IChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieWFqC/lj43pgInpgInmi6npoblcbiAgICovXG4gIHNlbGVjdGlvbnM/OiBTVENvbHVtblNlbGVjdGlvbltdO1xuICAvKipcbiAgICog5YiXIGBjbGFzc2Ag5bGe5oCn5YC877yI5rOo77ya5peg6aG7IGAuYCDngrnvvInvvIzkvovlpoLvvJpcbiAgICogLSBgdGV4dC1jZW50ZXJgIOWxheS4rVxuICAgKiAtIGB0ZXh0LXJpZ2h0YCDlsYXlj7NcbiAgICogLSBgdGV4dC1zdWNjZXNzYCDmiJDlip/oibJcbiAgICogLSBgdGV4dC1kYW5nZXJgIOW8guW4uOiJslxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICog5ZCI5bm25YiXXG4gICAqL1xuICBjb2xTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5pWw5a2X5qC85byP77yMYHR5cGU9bnVtYmVyYCDmnInmlYhcbiAgICovXG4gIG51bWJlckRpZ2l0cz86IHN0cmluZztcbiAgLyoqXG4gICAqIOaXpeacn+agvOW8j++8jGB0eXBlPWRhdGVgIOacieaViO+8jO+8iOm7mOiupO+8mmBZWVlZLU1NLUREIEhIOm1tYO+8iVxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIOW9kyBgdHlwZT15bmAg5pyJ5pWIXG4gICAqL1xuICB5bj86IFNUQ29sdW1uWW47XG4gIC8qKlxuICAgKiDmmK/lkKblhYHorrjlr7zlh7rvvIzpu5jorqQgYHRydWVgXG4gICAqL1xuICBleHBvcnRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnYPpmZDvvIznrYnlkIwgW0FDTENhblR5cGVdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbC9nZXR0aW5nLXN0YXJ0ZWQvI0FDTENhblR5cGUpIOWPguaVsOWAvFxuICAgKi9cbiAgYWNsPzogYW55O1xuICAvKiog5b2T5LiN5a2Y5Zyo5pWw5o2u5pe25Lul6buY6K6k5YC85pu/5LujICovXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlm7rlrprliY3lkI7liJfvvIzlvZPmjIflrprml7bliqHlv4XmjIflrpogYHdpZHRoYCDlkKbliJnop4bkuLrml6DmlYjvvIzmnInoi6XlubIgKirms6jmhI/vvJoqKiDpobnvvJpcbiAgICpcbiAgICogLSDoi6XliJflpLTkuI7lhoXlrrnkuI3lr7npvZDmiJblh7rnjrDliJfph43lpI3vvIzor7fmjIflrprliJfnmoTlrr3luqYgYHdpZHRoYFxuICAgKiAtIOW7uuiuruaMh+WumiBgc2Nyb2xsLnhgIOS4uuWkp+S6juihqOagvOWuveW6pueahOWbuuWumuWAvOaIlueZvuWIhuavlOOAguazqOaEj++8jOS4lOmdnuWbuuWumuWIl+WuveW6puS5i+WSjOS4jeimgei2hei/hyBgc2Nyb2xsLnhgXG4gICAqL1xuICBmaXhlZD86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiDlvr3moIfphY3nva7poblcbiAgICovXG4gIGJhZGdlPzogU1RDb2x1bW5CYWRnZSB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIfnrb7phY3nva7poblcbiAgICovXG4gIHRhZz86IFNUQ29sdW1uVGFnIHwgbnVsbDtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqIC0g5pSv5oyB6Ieq5a6a5LmJ5pa55rOVXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyIHwgKChpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyKSA9PiBudW1iZXIpO1xuICAvKipcbiAgICog5p2h5Lu26KGo6L6+5byPXG4gICAqIC0g5LuF6LWL5YC8IGBjb2x1bW5zYCDml7bmiafooYzkuIDmrKFcbiAgICogLSDlj6/osIPnlKggYHJlc2V0Q29sdW1ucygpYCDlho3kuIDmrKHop6blj5FcbiAgICovXG4gIGlpZj86IChpdGVtOiBTVENvbHVtbikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog57uf6K6hXG4gICAqL1xuICBzdGF0aXN0aWNhbD86IFNUU3RhdGlzdGljYWxUeXBlIHwgU1RTdGF0aXN0aWNhbDtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFNUU3RhdGlzdGljYWxUeXBlID0gJ2NvdW50JyB8ICdkaXN0aW5jdENvdW50JyB8ICdzdW0nIHwgJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJztcblxuZXhwb3J0IHR5cGUgU1RTdGF0aXN0aWNhbEZuID0gKHZhbHVlczogbnVtYmVyW10sIGNvbDogU1RDb2x1bW4sIGxpc3Q6IFNURGF0YVtdLCByYXdEYXRhPzogYW55KSA9PiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUU3RhdGlzdGljYWwge1xuICB0eXBlOiBTVFN0YXRpc3RpY2FsVHlwZSB8IFNUU3RhdGlzdGljYWxGbjtcbiAgLyoqXG4gICAqIOS/neeVmeWwj+aVsOS9jeaVsO+8jOm7mOiupO+8mmAyYFxuICAgKi9cbiAgZGlnaXRzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6LSn5biB5qC85byP5YyW77yM6buY6K6k5Lul5LiL5oOF5Ya15Li6IGB0cnVlYFxuICAgKiAtIGB0eXBlYCDkuLogYFNUU3RhdGlzdGljYWxGbmDjgIEgYHN1bWDjgIFgYXZlcmFnZWDjgIFgbWF4YOOAgWBtaW5gXG4gICAqL1xuICBjdXJyZW5jeT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdHMge1xuICBba2V5OiBzdHJpbmddOiBTVFN0YXRpc3RpY2FsUmVzdWx0O1xuICBbaW5kZXg6IG51bWJlcl06IFNUU3RhdGlzdGljYWxSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTdGF0aXN0aWNhbFJlc3VsdCB7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqXG4gICAqIOaOkuW6j+eahOm7mOiupOWPl+aOp+WxnuaAp1xuICAgKi9cbiAgZGVmYXVsdD86ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnO1xuICAvKipcbiAgICog5pys5Zyw5pWw5o2u55qE5o6S5bqP5Ye95pWw77yM5L2/55So5LiA5Liq5Ye95pWwKOWPguiAgyBbQXJyYXkuc29ydF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCkg55qEIGNvbXBhcmVGdW5jdGlvbilcbiAgICogLSBgbnVsbGAg5b+955Wl5pys5Zyw5o6S5bqP77yM5L2G5L+d5oyB5o6S5bqP5Yqf6IO9XG4gICAqL1xuICBjb21wYXJlPzogKChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4gbnVtYmVyKSB8IG51bGw7XG4gIC8qKlxuICAgKiDov5znqIvmlbDmja7nmoTmjpLluo/ml7blkI7nq6/nm7jlr7nlupTnmoRLRVnvvIzpu5jorqTkvb/nlKggYGluZGV4YCDlsZ7mgKdcbiAgICogLSDoi6UgYG11bHRpU29ydDogZmFsc2VgIOaXtu+8mmBrZXk6ICduYW1lJyA9PiA/bmFtZT0xJnBpPTFgXG4gICAqIC0g6IulIGBtdWx0aVNvcnQ6IHRydWVgIOWFgeiuuOWkmuS4quaOkuW6jyBrZXkg5a2Y5Zyo77yM5oiW5L2/55SoIGBTVE11bHRpU29ydGAg5oyH5a6a5aSa5YiX5o6S5bqPa2V55ZCI5bm26KeE5YiZXG4gICAqL1xuICBrZXk/OiBzdHJpbmcgfCBudWxsO1xuICAvKipcbiAgICog6L+c56iL5pWw5o2u55qE5o6S5bqP5pe25ZCO56uv55u45a+55bqU55qEVkFMVUVcbiAgICogLSBgeyBhc2NlbmQ6ICcwJywgZGVzY2VuZDogJzEnIH1gIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKiAtIGB7IGFzY2VuZDogJ2FzYycsIGRlc2NlbmQ6ICdkZXNjJyB9YCDnu5PmnpwgYD9uYW1lPWRlc2MmcGk9MWBcbiAgICovXG4gIHJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXIge1xuICAvKipcbiAgICog5pCc57Si5pa55byPXG4gICAqIC0gYGRlZnVhbHRgIOm7mOiupOW9ouW8j1xuICAgKiAtIGBrZXl3b3JkYCDmlofmnKzmoYblvaLlvI9cbiAgICovXG4gIHR5cGU/OiAnZGVmYXVsdCcgfCAna2V5d29yZCc7XG4gIC8qKlxuICAgKiDooajlpLTnmoTnrZvpgInoj5zljZXpobnvvIzoh7PlsJHkuIDpobnmiY3kvJrnlJ/mlYhcbiAgICogLSDlvZMgYHR5cGU9J2tleXdvcmQnYCDml7blj6/kuLrnqbpcbiAgICovXG4gIG1lbnVzPzogU1RDb2x1bW5GaWx0ZXJNZW51W107XG4gIC8qKlxuICAgKiDmnKzlnLDmlbDmja7nmoTnrZvpgInlh73mlbBcbiAgICovXG4gIGZuPzogKChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyTWVudSwgcmVjb3JkOiBTVERhdGEpID0+IGJvb2xlYW4pIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagh+ivhuaVsOaNruaYr+WQpuW3sui/h+a7pO+8jOetm+mAieWbvuagh+S8mumrmOS6rlxuICAgKi9cbiAgZGVmYXVsdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYkgZmlsdGVyIOWbvuagh1xuICAgKiAtIOW9kyBgdHlwZT0nZGVmYXVsdCdgIOm7mOiupCBgZmlsdGVyYFxuICAgKiAtIOW9kyBgdHlwZT0na2V5d29yZCdgIOm7mOiupCBgc2VhcmNoYFxuICAgKi9cbiAgaWNvbj86IHN0cmluZyB8IFNUSWNvbjtcbiAgLyoqXG4gICAqIOehruiupOaMiemSruaWh+acrO+8jOm7mOiupCBg56Gu6K6kYFxuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7mlofmnKzvvIzpu5jorqQgYOmHjee9rmBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+WQpuWkmumAie+8jOm7mOiupCBgdHJ1ZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahEtFWe+8jOm7mOiupOS9v+eUqCBgaW5kZXhgIOWxnuaAp1xuICAgKiBga2V5OiAnbmFtZSdgIOe7k+aenCBgP25hbWU9MSZwaT0xYFxuICAgKi9cbiAga2V5Pzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOi/nOeoi+aVsOaNrueahOi/h+a7pOaXtuWQjuerr+ebuOWvueW6lOeahFZBTFVFXG4gICAqIC0g6buY6K6k5b2TIGBtdWx0aXBsZTogdHJ1ZWAg5pe25Lul6Iux5paH6YCX5Y+35ou85o6l55qE5a2X56ym5LiyXG4gICAqIEByZXR1cm4g6L+U5Zue5Li6IE9iamVjdCDlr7nosaFcbiAgICovXG4gIHJlTmFtZT86IChsaXN0OiBTVENvbHVtbkZpbHRlck1lbnVbXSwgY29sOiBTVENvbHVtbikgPT4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5GaWx0ZXJNZW51IHtcbiAgLyoqXG4gICAqIOaWh+acrFxuICAgKiAtIOW9kyBgdHlwZTogJ2tleXdvcmQnYCDml7booajnpLogYHBsYWNlaG9sZGVyYFxuICAgKi9cbiAgdGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOWAvFxuICAgKi9cbiAgdmFsdWU/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5TZWxlY3Rpb24ge1xuICAvKipcbiAgICog6YCJ5oup6aG55pi+56S655qE5paH5a2XXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpgInmi6npobnngrnlh7vlm57osIPvvIzlhYHorrjlr7nlj4LmlbAgYGRhdGEuY2hlY2tlZGAg6L+b6KGM5pON5L2cXG4gICAqL1xuICBzZWxlY3Q6IChkYXRhOiBTVERhdGFbXSkgPT4gdm9pZDtcbiAgLyoqIOadg+mZkO+8jOetieWQjCBgY2FuKClgIOWPguaVsOWAvCAqL1xuICBhY2w/OiBhbnk7XG59XG5cbi8qKiDlvZMgYHR5cGU9eW5gIOacieaViCAqL1xuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblluIHtcbiAgLyoqXG4gICAqIOecn+WAvOadoeS7tu+8jO+8iOm7mOiupO+8mmB0cnVlYO+8iVxuICAgKi9cbiAgdHJ1dGg/OiBhbnk7XG4gIC8qKlxuICAgKiDlvr3nq6AgYHRydWVgIOaXtuaWh+acrO+8jO+8iOm7mOiupO+8mmDmmK9g77yJXG4gICAqL1xuICB5ZXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6AgYGZhbHNlYCDml7bmlofmnKzvvIzvvIjpu5jorqTvvJpg5ZCmYO+8iVxuICAgKi9cbiAgbm8/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlvr3nq6DmmL7npLrpo47moLxcbiAgICogLSBgZnVsbGAg5Zu+5qCH5ZKM5paH5pysXG4gICAqIC0gYGljb25gIOWbvuagh1xuICAgKiAtIGB0ZXh0YCDmlofmnKxcbiAgICovXG4gIG1vZGU/OiBZTk1vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RJY29uIHtcbiAgLyoqIOWbvuagh+exu+WeiyAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiDmmK/lkKbmnInml4vovazliqjnlLvvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gIHNwaW4/OiBib29sZWFuO1xuICAvKiog5LuF6YCC55So5Y+M6Imy5Zu+5qCH77yM6K6+572u5Y+M6Imy5Zu+5qCH55qE5Li76KaB6aKc6Imy77yM5LuF5a+55b2T5YmNIGljb24g55Sf5pWIICovXG4gIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgLyoqIOaMh+WumuadpeiHqiBJY29uRm9udCDnmoTlm77moIfnsbvlnosgKi9cbiAgaWNvbmZvbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICog5oyJ6ZKu6YWN572uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b24ge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nIHwgKChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikgPT4gc3RyaW5nKTtcbiAgLyoqXG4gICAqIOaWh+acrCBpMThuXG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5Zu+5qCHXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgU1RJY29uO1xuICAvKipcbiAgICog5qC85byP5YyW5paH5pysXG4gICAqIEBkZXByZWNhdGVkIOS9v+eUqCBgdGV4dGAg5Luj5pu/XG4gICAqL1xuICBmb3JtYXQ/OiAocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruexu+Wei1xuICAgKiAtIGBub25lYCDml6Dku7vkvZXkupLliqhcbiAgICogLSBgZGVsYCDliKDpmaTvvIzpu5jorqTlvIDlkK8gYHBvcDogdHJ1ZWBcbiAgICogLSBgbW9kYWxgIOWvueivneahhu+8jOmcgOimgeaMh+WumiBgY29tcG9uZW50YCDmiY3kvJrnlJ/mlYhcbiAgICogLSBgc3RhdGljYCDpnZnmgIHlr7nor53moYbvvIzpnIDopoHmjIflrpogYGNvbXBvbmVudGAg5omN5Lya55Sf5pWIXG4gICAqIC0gYGRyYXdlcmAg5oq95bGJ77yM6ZyA6KaB5oyH5a6aIGBjb21wb25lbnRgIOaJjeS8mueUn+aViFxuICAgKiAtIGBsaW5rYCDpk77mjqXvvIzlvZMgYGNsaWNrYCDov5Tlm57lrZfnrKbkuLLml7boh6rliqjosIPnlKggYG5hdmlnYXRlQnlVcmxgIOWvvOiIqlxuICAgKi9cbiAgdHlwZT86ICdub25lJyB8ICdkZWwnIHwgJ21vZGFsJyB8ICdzdGF0aWMnIHwgJ2RyYXdlcicgfCAnbGluayc7XG4gIC8qKlxuICAgKiDngrnlh7vlm57osINcbiAgICogLSBGdW5jdGlvblxuICAgKiAgLSBgdHlwZT1tb2RhbGAg5Y+q5Lya5Zyo5b2T5pyJ5Lyg5Zue5YC85pe25omN5Lya6Kem5Y+R5Zue6LCDXG4gICAqIC0gcmVsb2Fk77ya6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIC0gbG9hZO+8mumHjeaWsOWKoOi9veaVsOaNru+8jOW5tumHjee9rumhteeggeS4uu+8mmAxYFxuICAgKi9cbiAgY2xpY2s/OiAncmVsb2FkJyB8ICdsb2FkJyB8ICgocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpO1xuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB5rCU5rOh56Gu6K6k5qGGXG4gICAqL1xuICBwb3A/OiBib29sZWFuO1xuICAvKipcbiAgICog5rCU5rOh56Gu6K6k5qGG5YaF5a6577yM6buY6K6kIGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAqL1xuICBwb3BUaXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIOWvueivneahhuWPguaVsFxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsO1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlcjtcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNle+8jOW9k+WtmOWcqOaXtuS7pSBgZHJvcGRvd25gIOW9ouW8j+a4suafk1xuICAgKiAtIOWPquaUr+aMgeS4gOe6p1xuICAgKi9cbiAgY2hpbGRyZW4/OiBTVENvbHVtbkJ1dHRvbltdO1xuICAvKipcbiAgICog5p2D6ZmQ77yM562J5ZCMIFtBQ0xDYW5UeXBlXShodHRwczovL25nLWFsYWluLmNvbS9hY2wvZ2V0dGluZy1zdGFydGVkLyNBQ0xDYW5UeXBlKSDlj4LmlbDlgLxcbiAgICovXG4gIGFjbD86IGFueTtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb25cbiAgICovXG4gIGlpZj86IChpdGVtOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGNvbHVtbjogU1RDb2x1bW4pID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uIHJlbmRlcmluZyBiZWhhdmlvciwgY2FuIGJlIHNldCB0byBgaGlkZWAgKGRlZmF1bHQpIG9yIGBkaXNhYmxlZGBcbiAgICovXG4gIGlpZkJlaGF2aW9yPzogSWlmQmVoYXZpb3JUeXBlO1xuXG4gIHRvb2x0aXA/OiBzdHJpbmc7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJaWZCZWhhdmlvclR5cGUgPSAnaGlkZScgfCAnZGlzYWJsZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uTW9kYWwgZXh0ZW5kcyBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICog5a+56K+d5qGG57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5a+56K+d5qGG5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5a+56K+d5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyB7XG4gIC8qKlxuICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgKi9cbiAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQnV0dG9uRHJhd2VyIGV4dGVuZHMgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICog5oq95bGJ57uE5Lu25a+56LGh77yM5Yqh5b+F5ZyoIGBlbnRyeUNvbXBvbmVudHNgIOazqOWGjFxuICAgKi9cbiAgY29tcG9uZW50PzogYW55O1xuICAvKipcbiAgICog5oq95bGJ5Y+C5pWwXG4gICAqL1xuICBwYXJhbXM/OiAocmVjb3JkOiBTVERhdGEpID0+IHt9O1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcge1xuICAvKipcbiAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICovXG4gIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RSZXFSZU5hbWVUeXBlIHtcbiAgcGk/OiBzdHJpbmc7XG4gIHBzPzogc3RyaW5nO1xuICBza2lwPzogc3RyaW5nO1xuICBsaW1pdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVFJlc1JlTmFtZVR5cGUge1xuICB0b3RhbD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RFeHBvcnRPcHRpb25zIHtcbiAgX2Q/OiBhbnlbXTtcbiAgX2M/OiBTVENvbHVtbltdO1xuICAvKiog5bel5L2c5rql5ZCNICovXG4gIHNoZWV0bmFtZT86IHN0cmluZztcbiAgLyoqIOaWh+S7tuWQjSAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqIHRyaWdnZXJzIHdoZW4gc2F2ZWFzICovXG4gIGNhbGxiYWNrPzogKHdiOiBhbnkpID0+IHZvaWQ7XG59XG5cbi8qKlxuICog5Y2V5o6S5bqP6KeE5YiZXG4gKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RTaW5nbGVTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiDlpJrmjpLluo/nm7jlkIzmjpLluo8ga2V5IOaXtuWQiOW5tuinhOWImVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUTXVsdGlTb3J0IHtcbiAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICBrZXk/OiBzdHJpbmc7XG4gIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmmK/lkKblhajlsYDlpJrmjpLluo/mqKHlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg6KGo56S65omA5pyJIGBzdGAg6buY6K6k5Li65aSa5o6S5bqPXG4gICAqIC0gYGZhbHNlYCDooajnpLrpnIDopoHkuLrmr4/kuKogYHN0YCDmt7vliqAgYG11bHRpU29ydGAg5omN5Lya6KeG5Li65aSa5o6S5bqP5qih5byPXG4gICAqL1xuICBnbG9iYWw/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOW+veagh+S/oeaBr1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uQmFkZ2Uge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtbkJhZGdlVmFsdWU7XG4gIFtrZXk6IHN0cmluZ106IFNUQ29sdW1uQmFkZ2VWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtbkJhZGdlVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5b695qCH6aKc6Imy5YC8XG4gICAqL1xuICBjb2xvcj86ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG59XG5cbi8qKlxuICog5qCH562+5L+h5oGvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5UYWcge1xuICBba2V5OiBudW1iZXJdOiBTVENvbHVtblRhZ1ZhbHVlO1xuICBba2V5OiBzdHJpbmddOiBTVENvbHVtblRhZ1ZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uVGFnVmFsdWUge1xuICAvKipcbiAgICog5paH5pysXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6aKc6Imy5YC877yM5pSv5oyB6aKE6K6+5ZKM6Imy5YC8XG4gICAqIC0g6aKE6K6+77yaZ2Vla2JsdWUsYmx1ZSxwdXJwbGUsc3VjY2VzcyxyZWQsdm9sY2FubyxvcmFuZ2UsZ29sZCxsaW1lLGdyZWVuLGN5YW5cbiAgICogLSDoibLlgLzvvJojZjUwLCNmZjBcbiAgICovXG4gIGNvbG9yPzogJ2dlZWtibHVlJyB8ICdibHVlJyB8ICdwdXJwbGUnIHwgJ3N1Y2Nlc3MnIHwgJ3JlZCcgfCAndm9sY2FubycgfCAnb3JhbmdlJyB8ICdnb2xkJyB8ICdsaW1lJyB8ICdncmVlbicgfCAnY3lhbicgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNUQ2hhbmdlVHlwZSA9ICdwaScgfCAncHMnIHwgJ2NoZWNrYm94JyB8ICdyYWRpbycgfCAnc29ydCcgfCAnZmlsdGVyJyB8ICdjbGljaycgfCAnZGJsQ2xpY2snIHwgJ2V4cGFuZCc7XG5cbi8qKlxuICog5Zue6LCD5pWw5o2uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1RDaGFuZ2Uge1xuICAvKipcbiAgICog5Zue6LCD57G75Z6LXG4gICAqL1xuICB0eXBlOiBTVENoYW5nZVR5cGU7XG4gIC8qKlxuICAgKiDlvZPliY3pobXnoIFcbiAgICovXG4gIHBpOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmr4/pobXmlbDph49cbiAgICovXG4gIHBzOiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDmja7mgLvph49cbiAgICovXG4gIHRvdGFsOiBudW1iZXI7XG4gIC8qKlxuICAgKiBgY2hlY2tib3hgIOWPguaVsFxuICAgKi9cbiAgY2hlY2tib3g/OiBTVERhdGFbXTtcbiAgLyoqXG4gICAqIGByYWRpb2Ag5Y+C5pWwXG4gICAqL1xuICByYWRpbz86IFNURGF0YTtcbiAgLyoqXG4gICAqIOaOkuW6j+WPguaVsFxuICAgKi9cbiAgc29ydD86IFNUQ2hhbmdlU29ydDtcbiAgLyoqXG4gICAqIOi/h+a7pOWPguaVsFxuICAgKi9cbiAgZmlsdGVyPzogU1RDb2x1bW47XG4gIC8qKlxuICAgKiDooYzngrnlh7vmiJblj4zlh7vlj4LmlbBcbiAgICovXG4gIGNsaWNrPzogU1RDaGFuZ2VSb3dDbGljaztcbiAgLyoqXG4gICAqIGBleHBhbmRgIOWPguaVsFxuICAgKi9cbiAgZXhwYW5kPzogU1REYXRhO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlU29ydCB7XG4gIHZhbHVlPzogJ2FzY2VuZCcgfCAnZGVzY2VuZCc7XG4gIG1hcD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbHVtbj86IFNUQ29sdW1uO1xufVxuXG4vKiog6KGM5Y2V5Ye75Y+C5pWwICovXG5leHBvcnQgaW50ZXJmYWNlIFNUQ2hhbmdlUm93Q2xpY2sge1xuICBlPzogRXZlbnQ7XG4gIGl0ZW0/OiBTVERhdGE7XG4gIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURXJyb3Ige1xuICB0eXBlPzogJ3JlcSc7XG4gIGVycm9yPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBTVFJvd0NsYXNzTmFtZSA9IChyZWNvcmQ6IFNURGF0YSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuIl19