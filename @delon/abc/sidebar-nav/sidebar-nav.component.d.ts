import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuService, SettingsService } from '@delon/theme';
import { Nav } from './sidebar-nav.types';
export declare class SidebarNavComponent implements OnInit, OnDestroy {
    private menuSrv;
    private settings;
    private router;
    private render;
    private cdr;
    private ngZone;
    private sanitizer;
    private doc;
    private win;
    private bodyEl;
    private unsubscribe$;
    private floatingEl;
    list: Nav[];
    disabledAcl: boolean;
    autoCloseUnderPad: boolean;
    recursivePath: boolean;
    openStrictly: boolean;
    readonly select: EventEmitter<Menu>;
    readonly collapsed: boolean;
    constructor(menuSrv: MenuService, settings: SettingsService, router: Router, render: Renderer2, cdr: ChangeDetectorRef, ngZone: NgZone, sanitizer: DomSanitizer, doc: any, win: Window);
    private getLinkNode;
    private floatingAreaClickHandle;
    private clearFloatingContainer;
    private genFloatingContainer;
    private genSubNode;
    private hideAll;
    private calPos;
    showSubMenu(e: MouseEvent, item: Nav): void;
    to(item: Menu): void;
    toggleOpen(item: Nav): void;
    _click(): void;
    _docClick(): void;
    private openedByUrl;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private readonly isPad;
    private underPad;
    private openAside;
}
