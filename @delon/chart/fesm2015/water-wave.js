import { Component, Input, ViewChild, ElementRef, NgZone, TemplateRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class G2WaterWaveComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cd
     * @param {?} zone
     */
    constructor(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.color = '#1890FF';
        this._height = 160;
        // #endregion
        this.resize$ = null;
        this.initFlag = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
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
        this._percent = toNumber(value);
    }
    /**
     * @return {?}
     */
    renderChart() {
        /** @type {?} */
        const data = this.percent / 100;
        if (!data)
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const canvas = (/** @type {?} */ (this.node.nativeElement));
        /** @type {?} */
        const ctx = canvas.getContext('2d');
        /** @type {?} */
        const canvasWidth = canvas.width;
        /** @type {?} */
        const canvasHeight = canvas.height;
        /** @type {?} */
        const radius = canvasWidth / 2;
        /** @type {?} */
        const lineWidth = 2;
        /** @type {?} */
        const cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        /** @type {?} */
        const axisLength = canvasWidth - lineWidth;
        /** @type {?} */
        const unit = axisLength / 8;
        /** @type {?} */
        const range = 0.2;
        // 振幅
        /** @type {?} */
        let currRange = range;
        /** @type {?} */
        const xOffset = lineWidth;
        /** @type {?} */
        let sp = 0;
        // 周期偏移量
        /** @type {?} */
        let currData = 0;
        /** @type {?} */
        const waveupsp = 0.005;
        // 水波上涨速度
        /** @type {?} */
        let arcStack = [];
        /** @type {?} */
        const bR = radius - lineWidth;
        /** @type {?} */
        const circleOffset = -(Math.PI / 2);
        /** @type {?} */
        let circleLock = true;
        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        /** @type {?} */
        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = this.color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        /**
         * @return {?}
         */
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            /** @type {?} */
            const sinStack = [];
            for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                /** @type {?} */
                const x = sp + (xOffset + i) / unit;
                /** @type {?} */
                const y = Math.sin(x) * currRange;
                /** @type {?} */
                const dx = i;
                /** @type {?} */
                const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            /** @type {?} */
            const startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            /** @type {?} */
            const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#1890FF');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        /**
         * @return {?}
         */
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock) {
                if (arcStack.length) {
                    /** @type {?} */
                    const temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = '#1890FF';
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        /** @type {?} */
                        const t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    updateRadio(radio) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${radio})`);
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
            .subscribe(() => this.resize());
    }
    /**
     * @return {?}
     */
    resize() {
        const { offsetWidth } = this.el.nativeElement.parentNode;
        this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
        this.renderChart();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.cd.detectChanges();
        this.zone.runOutsideAngular(() => {
            this.updateRadio(1);
            this.installResizeEvent();
            setTimeout(() => this.resize(), 130);
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag) {
            this.cd.detectChanges();
            this.zone.runOutsideAngular(() => this.renderChart());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timer)
            cancelAnimationFrame(this.timer);
        if (this.resize$)
            this.resize$.unsubscribe();
    }
}
G2WaterWaveComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-water-wave',
                template: `
  <div [ngStyle]="{'height.px': height, 'width.px': height, 'overflow': 'hidden'}">
    <canvas #container class="g2-water-wave__canvas" width="{{height*2}}" height="{{height*2}}"></canvas>
  </div>
  <div class="g2-water-wave__desc" [ngStyle]="{'width.px': height}">
    <ng-container *ngIf="_title; else _titleTpl"><span class="g2-water-wave__desc-title">{{_title}}</span></ng-container>
    <h4 class="g2-water-wave__desc-percent">{{percent}}%</h4>
  </div>`,
                host: { '[class.g2-water-wave]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
G2WaterWaveComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2WaterWaveComponent.propDecorators = {
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    percent: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2WaterWaveComponent];
class G2WaterWaveModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2WaterWaveModule, providers: [] };
    }
}
G2WaterWaveModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2WaterWaveComponent, G2WaterWaveModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0ZXItd2F2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUvd2F0ZXItd2F2ZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC93YXRlci13YXZlL3dhdGVyLXdhdmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi13YXRlci13YXZlJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodCwgJ3dpZHRoLnB4JzogaGVpZ2h0LCAnb3ZlcmZsb3cnOiAnaGlkZGVuJ31cIj5cbiAgICA8Y2FudmFzICNjb250YWluZXIgY2xhc3M9XCJnMi13YXRlci13YXZlX19jYW52YXNcIiB3aWR0aD1cInt7aGVpZ2h0KjJ9fVwiIGhlaWdodD1cInt7aGVpZ2h0KjJ9fVwiPjwvY2FudmFzPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImcyLXdhdGVyLXdhdmVfX2Rlc2NcIiBbbmdTdHlsZV09XCJ7J3dpZHRoLnB4JzogaGVpZ2h0fVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGU7IGVsc2UgX3RpdGxlVHBsXCI+PHNwYW4gY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjLXRpdGxlXCI+e3tfdGl0bGV9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cbiAgICA8aDQgY2xhc3M9XCJnMi13YXRlci13YXZlX19kZXNjLXBlcmNlbnRcIj57e3BlcmNlbnR9fSU8L2g0PlxuICA8L2Rpdj5gLFxuICBob3N0OiB7ICdbY2xhc3MuZzItd2F0ZXItd2F2ZV0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJyMxODkwRkYnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMTYwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuICBwcml2YXRlIHRpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICkge31cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBlcmNlbnQgLyAxMDA7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCByYWRpdXMgPSBjYW52YXNXaWR0aCAvIDI7XG4gICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICBjb25zdCBjUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoICogMjtcblxuICAgIGNvbnN0IGF4aXNMZW5ndGggPSBjYW52YXNXaWR0aCAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCB1bml0ID0gYXhpc0xlbmd0aCAvIDg7XG4gICAgY29uc3QgcmFuZ2UgPSAwLjI7IC8vIMOmwozCr8OlwrnChVxuICAgIGxldCBjdXJyUmFuZ2UgPSByYW5nZTtcbiAgICBjb25zdCB4T2Zmc2V0ID0gbGluZVdpZHRoO1xuICAgIGxldCBzcCA9IDA7IC8vIMOlwpHCqMOmwpzCn8OlwoHCj8OnwqfCu8OpwofCj1xuICAgIGxldCBjdXJyRGF0YSA9IDA7XG4gICAgY29uc3Qgd2F2ZXVwc3AgPSAwLjAwNTsgLy8gw6bCsMK0w6bCs8Kiw6TCuMKKw6bCtsKow6nCgMKfw6XCusKmXG5cbiAgICBsZXQgYXJjU3RhY2sgPSBbXTtcbiAgICBjb25zdCBiUiA9IHJhZGl1cyAtIGxpbmVXaWR0aDtcbiAgICBjb25zdCBjaXJjbGVPZmZzZXQgPSAtKE1hdGguUEkgLyAyKTtcbiAgICBsZXQgY2lyY2xlTG9jayA9IHRydWU7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSBjaXJjbGVPZmZzZXQ7XG4gICAgICBpIDwgY2lyY2xlT2Zmc2V0ICsgMiAqIE1hdGguUEk7XG4gICAgICBpICs9IDEgLyAoOCAqIE1hdGguUEkpXG4gICAgKSB7XG4gICAgICBhcmNTdGFjay5wdXNoKFtyYWRpdXMgKyBiUiAqIE1hdGguY29zKGkpLCByYWRpdXMgKyBiUiAqIE1hdGguc2luKGkpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY1N0YXJ0UG9pbnQgPSBhcmNTdGFjay5zaGlmdCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4Lm1vdmVUbyhjU3RhcnRQb2ludFswXSwgY1N0YXJ0UG9pbnRbMV0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd1NpbigpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgIGNvbnN0IHNpblN0YWNrID0gW107XG4gICAgICBmb3IgKGxldCBpID0geE9mZnNldDsgaSA8PSB4T2Zmc2V0ICsgYXhpc0xlbmd0aDsgaSArPSAyMCAvIGF4aXNMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeCA9IHNwICsgKHhPZmZzZXQgKyBpKSAvIHVuaXQ7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbih4KSAqIGN1cnJSYW5nZTtcbiAgICAgICAgY29uc3QgZHggPSBpO1xuICAgICAgICBjb25zdCBkeSA9IDIgKiBjUiAqICgxIC0gY3VyckRhdGEpICsgKHJhZGl1cyAtIGNSKSAtIHVuaXQgKiB5O1xuXG4gICAgICAgIGN0eC5saW5lVG8oZHgsIGR5KTtcbiAgICAgICAgc2luU3RhY2sucHVzaChbZHgsIGR5XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBzaW5TdGFjay5zaGlmdCgpO1xuXG4gICAgICBjdHgubGluZVRvKHhPZmZzZXQgKyBheGlzTGVuZ3RoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgY3R4LmxpbmVUbyh4T2Zmc2V0LCBjYW52YXNIZWlnaHQpO1xuICAgICAgY3R4LmxpbmVUbyhzdGFydFBvaW50WzBdLCBzdGFydFBvaW50WzFdKTtcblxuICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgY2FudmFzSGVpZ2h0KTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnI2ZmZmZmZicpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjMTg5MEZGJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICAgICAgaWYgKGNpcmNsZUxvY2spIHtcbiAgICAgICAgaWYgKGFyY1N0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcmNTdGFjay5zaGlmdCgpO1xuICAgICAgICAgIGN0eC5saW5lVG8odGVtcFswXSwgdGVtcFsxXSk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNpcmNsZUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICBjdHgubGluZVRvKGNTdGFydFBvaW50WzBdLCBjU3RhcnRQb2ludFsxXSk7XG4gICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIGFyY1N0YWNrID0gbnVsbDtcblxuICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgICAgY3R4LmFyYyhyYWRpdXMsIHJhZGl1cywgYlIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIHJhZGl1cyAtIDMgKiBsaW5lV2lkdGgsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblxuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMxODkwRkYnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YSA+PSAwLjg1KSB7XG4gICAgICAgICAgaWYgKGN1cnJSYW5nZSA+IHJhbmdlIC8gNCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSAtPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhIDw9IDAuMSkge1xuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPCByYW5nZSAqIDEuNSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHJhbmdlICogMC4wMTtcbiAgICAgICAgICAgIGN1cnJSYW5nZSArPSB0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VyclJhbmdlIDw9IHJhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gcmFuZ2UgKiAwLjAxO1xuICAgICAgICAgICAgY3VyclJhbmdlICs9IHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyUmFuZ2UgPj0gcmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSByYW5nZSAqIDAuMDE7XG4gICAgICAgICAgICBjdXJyUmFuZ2UgLT0gdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEgLSBjdXJyRGF0YSA+IDApIHtcbiAgICAgICAgICBjdXJyRGF0YSArPSB3YXZldXBzcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YSAtIGN1cnJEYXRhIDwgMCkge1xuICAgICAgICAgIGN1cnJEYXRhIC09IHdhdmV1cHNwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3AgKz0gMC4wNztcbiAgICAgICAgZHJhd1NpbigpO1xuICAgICAgfVxuICAgICAgc2VsZi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSYWRpbyhyYWRpbzogbnVtYmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYHNjYWxlKCR7cmFkaW99KWAsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemUoKSB7XG4gICAgY29uc3QgeyBvZmZzZXRXaWR0aCB9ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgdGhpcy51cGRhdGVSYWRpbyhvZmZzZXRXaWR0aCA8IHRoaXMuaGVpZ2h0ID8gb2Zmc2V0V2lkdGggLyB0aGlzLmhlaWdodCA6IDEpO1xuICAgIHRoaXMucmVuZGVyQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVJhZGlvKDEpO1xuICAgICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemUoKSwgMTMwKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEcyV2F0ZXJXYXZlQ29tcG9uZW50IH0gZnJvbSAnLi93YXRlci13YXZlLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJXYXRlcldhdmVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBHMldhdGVyV2F2ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMldhdGVyV2F2ZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BZ0NhLG9CQUFvQjs7Ozs7OztJQTZDL0IsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsRUFBcUIsRUFDckIsSUFBWTtRQUhaLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7O1FBOUN0QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBYVosVUFBSyxHQUFHLFNBQVMsQ0FBQztRQVNWLFlBQU8sR0FBRyxHQUFHLENBQUM7O1FBYWQsWUFBTyxH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