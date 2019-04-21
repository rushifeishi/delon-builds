/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DelonACLConfig } from './acl.config';
import * as i0 from "@angular/core";
import * as i1 from "./acl.config";
/**
 * 访问控制服务
 */
export class ACLService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
    }
    /**
     * ACL变更通知
     * @return {?}
     */
    get change() {
        return this.aclChange.asObservable();
    }
    /**
     * 获取所有数据
     * @return {?}
     */
    get data() {
        return {
            full: this.full,
            roles: this.roles,
            abilities: this.abilities,
        };
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    parseACLType(val) {
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return (/** @type {?} */ (val));
        }
        if (Array.isArray(val)) {
            return (/** @type {?} */ ({ role: (/** @type {?} */ (val)) }));
        }
        return (/** @type {?} */ ({
            role: [val],
        }));
    }
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    }
    /**
     * 标识当前用户为全量，即不受限
     * @param {?} val
     * @return {?}
     */
    setFull(val) {
        this.full = val;
        this.aclChange.next(val);
    }
    /**
     * 设置当前用户权限能力（会先清除所有）
     * @param {?} abilities
     * @return {?}
     */
    setAbility(abilities) {
        this.set((/** @type {?} */ ({ ability: abilities })));
    }
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    setRole(roles) {
        this.set((/** @type {?} */ ({ role: roles })));
    }
    /**
     * 为当前用户增加角色或权限能力
     * @param {?} value
     * @return {?}
     */
    add(value) {
        if (value.role && value.role.length > 0) {
            this.roles.push(...value.role);
        }
        if (value.ability && value.ability.length > 0) {
            this.abilities.push(...value.ability);
        }
    }
    /**
     * 为当前用户附加角色
     * @param {?} roles
     * @return {?}
     */
    attachRole(roles) {
        for (const val of roles) {
            if (!this.roles.includes(val)) {
                this.roles.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户附加权限
     * @param {?} abilities
     * @return {?}
     */
    attachAbility(abilities) {
        for (const val of abilities) {
            if (!this.abilities.includes(val)) {
                this.abilities.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除角色
     * @param {?} roles
     * @return {?}
     */
    removeRole(roles) {
        for (const val of roles) {
            /** @type {?} */
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除权限
     * @param {?} abilities
     * @return {?}
     */
    removeAbility(abilities) {
        for (const val of abilities) {
            /** @type {?} */
            const idx = this.abilities.indexOf(val);
            if (idx !== -1) {
                this.abilities.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     * @param {?} roleOrAbility
     * @return {?}
     */
    can(roleOrAbility) {
        if (this.full === true || !roleOrAbility) {
            return true;
        }
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan(roleOrAbility);
        }
        /** @type {?} */
        let t = {};
        if (typeof roleOrAbility === 'number') {
            t = { ability: [roleOrAbility] };
        }
        else if (Array.isArray(roleOrAbility) &&
            roleOrAbility.length > 0 &&
            typeof roleOrAbility[0] === 'number') {
            t = { ability: roleOrAbility };
        }
        else {
            t = this.parseACLType(roleOrAbility);
        }
        if (t.role) {
            if (t.mode === 'allOf')
                return t.role.every((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.roles.includes(v)));
            else
                return t.role.some((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.roles.includes(v)));
        }
        if (t.ability) {
            if (t.mode === 'allOf') {
                return ((/** @type {?} */ (t.ability))).every((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.abilities.includes(v)));
            }
            else {
                return ((/** @type {?} */ (t.ability))).some((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.abilities.includes(v)));
            }
        }
        return false;
    }
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    parseAbility(value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
            value = (/** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] }));
        }
        delete value.role;
        return value;
    }
    /**
     * 当前用户是否有对应权限点
     * @param {?} value
     * @return {?}
     */
    canAbility(value) {
        return this.can(this.parseAbility(value));
    }
}
ACLService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLService.ctorParameters = () => [
    { type: DelonACLConfig }
];
/** @nocollapse */ ACLService.ngInjectableDef = i0.defineInjectable({ factory: function ACLService_Factory() { return new ACLService(i0.inject(i1.DelonACLConfig)); }, token: ACLService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.roles;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.abilities;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.full;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.aclChange;
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWNsLyIsInNvdXJjZXMiOlsic3JjL2FjbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBTzlDLE1BQU0sT0FBTyxVQUFVOzs7O0lBb0JyQixZQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQW5CbkMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQTJCLEVBQUUsQ0FBQztRQUN2QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksZUFBZSxDQUEyQixJQUFJLENBQUMsQ0FBQztJQWdCMUIsQ0FBQzs7Ozs7SUFiL0MsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR0QsSUFBSSxJQUFJO1FBQ04sT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUlPLFlBQVksQ0FBQyxHQUF1QztRQUMxRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxtQkFBQSxHQUFHLEVBQVcsQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLG1CQUFBLEVBQUUsSUFBSSxFQUFFLG1C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RTtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxLQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXpMRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTnpCLGNBQWM7Ozs7Ozs7O0lBUXJCLDJCQUE2Qjs7Ozs7SUFDN0IsK0JBQStDOzs7OztJQUMvQywwQkFBcUI7Ozs7O0lBQ3JCLCtCQUF3RTs7Ozs7SUFnQjVELDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSwgQUNMVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIOiuv+mXruaOp+WItuacjeWKoVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFtdO1xuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBhY2xDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqIEFDTOWPmOabtOmAmuefpSAqL1xuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuYWNsQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJgOacieaVsOaNriAqL1xuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnVsbDogdGhpcy5mdWxsLFxuICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXG4gICAgICBhYmlsaXRpZXM6IHRoaXMuYWJpbGl0aWVzLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnKSB7fVxuXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBBQ0xUeXBlIHwgbnVsbCk6IEFDTFR5cGUge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gdmFsIGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiB7IHJvbGU6IHZhbCBhcyBzdHJpbmdbXSB9IGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByb2xlOiBbdmFsXSxcbiAgICB9IGFzIEFDTFR5cGU7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy5oiW5p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICB0aGlzLmFiaWxpdGllcyA9IFtdO1xuICAgIHRoaXMucm9sZXMgPSBbXTtcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICog5qCH6K+G5b2T5YmN55So5oi35Li65YWo6YeP77yM5Y2z5LiN5Y+X6ZmQXG4gICAqL1xuICBzZXRGdWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuZnVsbCA9IHZhbDtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi35p2D6ZmQ6IO95Yqb77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRBYmlsaXR5KGFiaWxpdGllczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xuICAgIHRoaXMuc2V0KHsgYWJpbGl0eTogYWJpbGl0aWVzIH0gYXMgQUNMVHlwZSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5b2T5YmN55So5oi36KeS6Imy77yI5Lya5YWI5riF6Zmk5omA5pyJ77yJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KHsgcm9sZTogcm9sZXMgfSBhcyBBQ0xUeXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLflop7liqDop5LoibLmiJbmnYPpmZDog73liptcbiAgICovXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIGlmICh2YWx1ZS5yb2xlICYmIHZhbHVlLnJvbGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuYWJpbGl0eSAmJiB2YWx1ZS5hYmlsaXR5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4uuW9k+WJjeeUqOaIt+mZhOWKoOinkuiJslxuICAgKi9cbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfpmYTliqDmnYPpmZBcbiAgICovXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog5Li65b2T5YmN55So5oi356e76Zmk6KeS6ImyXG4gICAqL1xuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHRoaXMucm9sZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuLrlvZPliY3nlKjmiLfnp7vpmaTmnYPpmZBcbiAgICovXG4gIHJlbW92ZUFiaWxpdHkoYWJpbGl0aWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeeUqOaIt+aYr+WQpuacieWvueW6lOinkuiJsu+8jOWFtuWuniBgbnVtYmVyYCDooajnpLpBYmlsaXR5XG4gICAqXG4gICAqIC0g5b2TIGBmdWxsOiB0cnVlYCDmiJblj4LmlbAgYG51bGxgIOaXtui/lOWbniBgdHJ1ZWBcbiAgICogLSDoi6Xkvb/nlKggYEFDTFR5cGVgIOWPguaVsO+8jOWPr+S7peaMh+WumiBgbW9kZWAg5qCh6aqM5qih5byPXG4gICAqL1xuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByZUNhbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwcmVDYW4pIHtcbiAgICAgIHJvbGVPckFiaWxpdHkgPSBwcmVDYW4ocm9sZU9yQWJpbGl0eSk7XG4gICAgfVxuICAgIGxldCB0OiBBQ0xUeXBlID0ge307XG4gICAgaWYgKHR5cGVvZiByb2xlT3JBYmlsaXR5ID09PSAnbnVtYmVyJykge1xuICAgICAgdCA9IHsgYWJpbGl0eTogW3JvbGVPckFiaWxpdHldIH07XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkocm9sZU9yQWJpbGl0eSkgJiZcbiAgICAgIHJvbGVPckFiaWxpdHkubGVuZ3RoID4gMCAmJlxuICAgICAgdHlwZW9mIHJvbGVPckFiaWxpdHlbMF0gPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICB0ID0geyBhYmlsaXR5OiByb2xlT3JBYmlsaXR5IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSB0aGlzLnBhcnNlQUNMVHlwZShyb2xlT3JBYmlsaXR5KTtcbiAgICB9XG5cbiAgICBpZiAodC5yb2xlKSB7XG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSByZXR1cm4gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XG4gICAgICBlbHNlIHJldHVybiB0LnJvbGUuc29tZSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgIH1cbiAgICBpZiAodC5hYmlsaXR5KSB7XG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSB7XG4gICAgICAgIHJldHVybiAodC5hYmlsaXR5IGFzIGFueVtdKS5ldmVyeSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAodC5hYmlsaXR5IGFzIGFueVtdKS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlubmVyICovXG4gIHBhcnNlQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IEFDTENhblR5cGUge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0geyBhYmlsaXR5OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9IGFzIEFDTFR5cGU7XG4gICAgfVxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPliY3nlKjmiLfmmK/lkKbmnInlr7nlupTmnYPpmZDngrlcbiAgICovXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxufVxuIl19