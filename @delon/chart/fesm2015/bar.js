import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TITLE_HEIGHT = 41;
class G2BarComponent {
    constructor() {
        this.resize$ = null;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
    }
    // #endregion
    /**
     * @return {?}
     */
    install() {
        /** @type {?} */
        const container = (/** @type {?} */ (this.node.nativeElement));
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container,
            forceFit: true,
            legend: null,
            height: this.getHeight(),
            padding: this.padding,
        });
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source(this.data, {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart
            .interval()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', (x, y) => ({
            name: x,
            value: y,
        }));
        chart.render();
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data } = this;
        if (!chart)
            return;
        this.installResizeEvent();
        chart
            .changeHeight(this.getHeight())
            .changeData(data);
        // color
        chart.get('geoms')[0].color(this.color);
        chart.set('padding', padding);
        chart.repaint();
    }
    /**
     * @return {?}
     */
    updatelabel() {
        /** @type {?} */
        const canvasWidth = this.node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = this.data.length * 30;
        this.chart.axis('x', canvasWidth > minWidth);
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => this.chart), debounceTime(200))
            .subscribe(() => this.updatelabel());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
G2BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-bar',
                template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
G2BarComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    autoLabel: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2BarComponent];
class G2BarModule {
}
G2BarModule.decorators = [
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

export { G2BarComponent, G2BarModule };

//# sourceMappingURL=bar.js.map