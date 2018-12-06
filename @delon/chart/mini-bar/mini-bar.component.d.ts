import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
export interface G2MiniBarData {
    x: any;
    y: any;
    [key: string]: any;
}
export declare class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private chart;
    delay: number;
    color: string;
    height: number;
    borderWidth: number;
    padding: Array<string | number>;
    data: G2MiniBarData[];
    yTooltipSuffix: string;
    constructor(el: ElementRef);
    private install;
    private attachChart;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
