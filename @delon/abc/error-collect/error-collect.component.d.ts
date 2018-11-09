import { OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ErrorCollectConfig } from './error-collect.config';
export declare class ErrorCollectComponent implements OnInit, OnDestroy {
    private el;
    private cd;
    private doc;
    private $time;
    private formEl;
    freq: number;
    offsetTop: number;
    _hiden: boolean;
    count: number;
    constructor(cog: ErrorCollectConfig, el: ElementRef, cd: ChangeDetectorRef, doc: any);
    private readonly errEls;
    private update;
    _click(): boolean;
    private install;
    private uninstall;
    private findParent;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
