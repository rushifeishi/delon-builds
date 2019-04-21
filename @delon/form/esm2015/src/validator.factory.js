/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject } from '@angular/core';
import { DelonFormConfig } from './config';
/**
 * @abstract
 */
export class SchemaValidatorFactory {
}
if (false) {
    /**
     * @abstract
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    SchemaValidatorFactory.prototype.createValidatorFn = function (schema, extraOptions) { };
}
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    /**
     * @param {?} options
     */
    constructor(options) {
        super();
        this.options = options;
        this.ajv = new Ajv(Object.assign({}, options.ajv, { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
        this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
        this.ajv.addFormat('color', /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
        this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
        this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
    }
    /**
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    createValidatorFn(schema, extraOptions) {
        /** @type {?} */
        const ingoreKeywords = [
            ...(/** @type {?} */ (this.options.ingoreKeywords)),
            ...(/** @type {?} */ (extraOptions.ingoreKeywords)),
        ];
        return (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            try {
                this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
                if (extraOptions.debug) {
                    console.warn(e);
                }
            }
            /** @type {?} */
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => ingoreKeywords.indexOf(w.keyword) === -1));
            }
            return errors;
        });
    }
}
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: DelonFormConfig, decorators: [{ type: Inject, args: [DelonFormConfig,] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AjvSchemaValidatorFactory.prototype.ajv;
    /**
     * @type {?}
     * @private
     */
    AjvSchemaValidatorFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBTzNDLE1BQU0sT0FBZ0Isc0JBQXNCO0NBSzNDOzs7Ozs7OztJQUpDLHlGQUdvQzs7QUFHdEMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjs7OztJQUduRSxZQUE2QyxPQUF3QjtRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQURtQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUVuRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFDYixPQUFPLENBQUMsR0FBRyxJQUNkLGFBQWEsRUFBRSxVQUFVLEVBQ3pCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsWUFBWSxFQUFFLElBQUksSUFDbEIsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixPQUFPLEVBQ1AsNFlBQTRZLENBQzdZLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FDZixNQUFnQixFQUNoQixZQUEwRDs7Y0FFcEQsY0FBYyxHQUFhO1lBQy9CLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQVk7WUFDMUMsR0FBRyxtQkFBQSxZQUFZLENBQUMsY0FBYyxFQUFZO1NBQzNDO1FBRUQ7Ozs7UUFBTyxDQUFDLEtBQWMsRUFBZSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjs7Z0JBQ0csTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7WUEzRE0sZUFBZSx1QkFpQlQsTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7SUFGbkMsd0NBQW1COzs7OztJQUVQLDRDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10sIGRlYnVnOiBib29sZWFuIH0sXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgYWp2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEZWxvbkZvcm1Db25maWcpIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4ub3B0aW9ucy5hanYsXG4gICAgICBlcnJvckRhdGFQYXRoOiAncHJvcGVydHknLFxuICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnZGF0YS11cmwnLCAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnY29sb3InLFxuICAgICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ21vYmlsZScsIC9eKDB8XFwrPzg2fDE3OTUxKT8xWzAtOV17MTB9JC8pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnaWQtY2FyZCcsIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdLCBkZWJ1ZzogYm9vbGVhbiB9LFxuICApOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbXG4gICAgICAuLi50aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgICAuLi5leHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10sXG4gICAgXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgIGlmIChleHRyYU9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==