/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toNumber } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
export class G2ProgressComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.color = '#1890FF';
    }
    /**
     * @return {?}
     */
    get target() {
        return this._target;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set target(value) {
        this._target = Math.min(Math.max(toNumber(value), 0), 100);
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set strokeWidth(value) {
        this._strokeWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    get percent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set percent(value) {
        this._percent = Math.min(Math.max(toNumber(value), 0), 100);
    }
}
G2ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-progress',
                template: `
  <nz-tooltip [nzTitle]="i18n.getData('miniProgress').target + target + '%'">
    <div nz-tooltip class="g2-mini-progress__target" [ngStyle]="{'left.%': target}">
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
    </div>
  </nz-tooltip>
  <div class="g2-mini-progress__wrap">
    <div class="g2-mini-progress__value" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
  </div>
  `,
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
G2ProgressComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
G2ProgressComponent.propDecorators = {
    color: [{ type: Input }],
    target: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    percent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    G2ProgressComponent.prototype.color;
    /** @type {?} */
    G2ProgressComponent.prototype._target;
    /** @type {?} */
    G2ProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    G2ProgressComponent.prototype._percent;
    /** @type {?} */
    G2ProgressComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWtCbEQsTUFBTTs7OztJQStCSixZQUFtQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtxQkE3Qm5DLFNBQVM7S0E2QjhCOzs7O0lBM0IvQyxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDNUQ7Ozs7SUFHRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7O0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7OztJQUdELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM3RDs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFqQlEsa0JBQWtCOzs7b0JBbUJ4QixLQUFLO3FCQUdMLEtBQUs7MEJBU0wsS0FBSztzQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG56LXRvb2x0aXAgW256VGl0bGVdPVwiaTE4bi5nZXREYXRhKCdtaW5pUHJvZ3Jlc3MnKS50YXJnZXQgKyB0YXJnZXQgKyAnJSdcIj5cbiAgICA8ZGl2IG56LXRvb2x0aXAgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXRcIiBbbmdTdHlsZV09XCJ7J2xlZnQuJSc6IHRhcmdldH1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L256LXRvb2x0aXA+XG4gIDxkaXYgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX193cmFwXCI+XG4gICAgPGRpdiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3ZhbHVlXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IsICd3aWR0aC4lJzogcGVyY2VudCwgJ2hlaWdodC5weCc6c3Ryb2tlV2lkdGh9XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MuZzItbWluaS1wcm9ncmVzc10nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEcyUHJvZ3Jlc3NDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjb2xvciA9ICcjMTg5MEZGJztcblxuICBASW5wdXQoKVxuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gIH1cbiAgc2V0IHRhcmdldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuICBwcml2YXRlIF90YXJnZXQ6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgc3Ryb2tlV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoO1xuICB9XG4gIHNldCBzdHJva2VXaWR0aCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfc3Ryb2tlV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgcGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XG59XG4iXX0=