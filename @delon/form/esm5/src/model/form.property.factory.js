/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { retrieveSchema } from '../utils';
import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';
var FormPropertyFactory = /** @class */ (function () {
    function FormPropertyFactory(schemaValidatorFactory, options) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.options = options;
    }
    /**
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?=} parent
     * @param {?=} propertyId
     * @return {?}
     */
    FormPropertyFactory.prototype.createProperty = /**
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?=} parent
     * @param {?=} propertyId
     * @return {?}
     */
    function (schema, ui, formData, parent, propertyId) {
        if (parent === void 0) { parent = null; }
        /** @type {?} */
        var newProperty = null;
        /** @type {?} */
        var path = '';
        if (parent) {
            path += parent.path;
            if (parent.parent !== null) {
                path += '/';
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += ((/** @type {?} */ (parent))).tick++;
            }
            else {
                throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
            }
        }
        else {
            path = '/';
        }
        if (schema.$ref) {
            /** @type {?} */
            var refSchema = retrieveSchema(schema, parent.root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if (propertyId && ((/** @type {?} */ (((/** @type {?} */ (parent)).schema.required || [])))).indexOf(propertyId) !== -1) {
                ui._required = true;
            }
            // fix title
            if (schema.title == null)
                schema.title = propertyId;
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') &&
                !schema.format &&
                !((/** @type {?} */ (ui))).format) {
                if (((/** @type {?} */ (ui))).widget === 'date')
                    ui.format =
                        schema.type === 'string'
                            ? this.options.uiDateStringFormat
                            : this.options.uiDateNumberFormat;
                else if (((/** @type {?} */ (ui))).widget === 'time')
                    ui.format =
                        schema.type === 'string'
                            ? this.options.uiTimeStringFormat
                            : this.options.uiTimeNumberFormat;
            }
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new NumberProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'string':
                    newProperty = new StringProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'boolean':
                    newProperty = new BooleanProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'object':
                    newProperty = new ObjectProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'array':
                    newProperty = new ArrayProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                default:
                    throw new TypeError("Undefined type " + schema.type);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    };
    /**
     * @param {?} rootProperty
     * @return {?}
     */
    FormPropertyFactory.prototype.initializeRoot = /**
     * @param {?} rootProperty
     * @return {?}
     */
    function (rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    };
    return FormPropertyFactory;
}());
export { FormPropertyFactory };
if (false) {
    /** @type {?} */
    FormPropertyFactory.prototype.schemaValidatorFactory;
    /** @type {?} */
    FormPropertyFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUNFLDZCQUNVLHNCQUE4QyxFQUM5QyxPQUF3QjtRQUR4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQy9CLENBQUM7Ozs7Ozs7OztJQUVKLDRDQUFjOzs7Ozs7OztJQUFkLFVBQ0UsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQTRCLEVBQzVCLFVBQW1CO1FBRG5CLHVCQUFBLEVBQUEsYUFBNEI7O1lBR3hCLFdBQVcsR0FBRyxJQUFJOztZQUNsQixJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQzthQUNiO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsSUFBSSxJQUFJ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SSxDQUFDLE9BQU8sQ0FDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxFQUNKLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsTUFBTSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsV0FBVyxHQUFHLElBQUksYUFBYSxDQUM3QixJQUFJLEVBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQzthQUN4RDtTQUNGO1FBRUQsSUFBSSxXQUFXLFlBQVksYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLDRDQUFjOzs7O0lBQXRCLFVBQXVCLFlBQTJCO1FBQ2hELHVCQUF1QjtRQUN2QixZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXZJRCxJQXVJQzs7OztJQXJJRyxxREFBc0Q7O0lBQ3RELHNDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5cbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4vYm9vbGVhbi5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuL251bWJlci5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7fVxuXG4gIGNyZWF0ZVByb3BlcnR5KFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwID0gbnVsbCxcbiAgICBwcm9wZXJ0eUlkPzogc3RyaW5nLFxuICApOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBuZXdQcm9wZXJ0eSA9IG51bGw7XG4gICAgbGV0IHBhdGggPSAnJztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXRoICs9IHBhcmVudC5wYXRoO1xuICAgICAgaWYgKHBhcmVudC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcGF0aCArPSAnLyc7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50LnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhdGggKz0gcHJvcGVydHlJZDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgcGF0aCArPSAocGFyZW50IGFzIEFycmF5UHJvcGVydHkpLnRpY2srKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnSW5zdGFuY2lhdGlvbiBvZiBhIEZvcm1Qcm9wZXJ0eSB3aXRoIGFuIHVua25vd24gcGFyZW50IHR5cGU6ICcgKyBwYXJlbnQudHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50LnJvb3Quc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4IHJlcXVpcmVkXG4gICAgICBpZiAocHJvcGVydHlJZCAmJiAoKHBhcmVudCEuc2NoZW1hLnJlcXVpcmVkIHx8IFtdKSBhcyBzdHJpbmdbXSkuaW5kZXhPZihwcm9wZXJ0eUlkKSAhPT0gLTEpIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmIChcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXG4gICAgICAgICFzY2hlbWEuZm9ybWF0ICYmXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxuICAgICAgKSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiJdfQ==