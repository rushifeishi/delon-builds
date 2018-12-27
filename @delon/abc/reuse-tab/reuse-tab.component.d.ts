import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlainI18NService } from '@delon/theme';
import { ReuseContextCloseEvent, ReuseContextI18n, ReuseItem, ReuseTabMatchMode } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
export declare class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
    private srv;
    private cdr;
    private router;
    private route;
    private render;
    private i18nSrv;
    private el;
    private sub$;
    private i18n$;
    list: ReuseItem[];
    item: ReuseItem;
    pos: number;
    mode: ReuseTabMatchMode;
    i18n: ReuseContextI18n;
    debug: boolean;
    max: number;
    excludes: RegExp[];
    allowClose: boolean;
    showCurrent: boolean;
    readonly change: EventEmitter<ReuseItem>;
    readonly close: EventEmitter<ReuseItem>;
    constructor(el: ElementRef, srv: ReuseTabService, cdr: ChangeDetectorRef, router: Router, route: ActivatedRoute, render: Renderer2, i18nSrv: AlainI18NService);
    private genTit;
    private genList;
    private visibility;
    cmChange(res: ReuseContextCloseEvent): void;
    refStatus(dc?: boolean): void;
    to(e: Event, index: number): void;
    _close(e: Event, idx: number, includeNonCloseable: boolean): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
