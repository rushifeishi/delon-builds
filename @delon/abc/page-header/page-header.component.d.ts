import { AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, MenuService, SettingsService, TitleService } from '@delon/theme';
import { PageHeaderConfig } from './page-header.config';
interface PageHeaderPath {
    title?: string;
    link?: string[];
}
export declare class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private renderer;
    private router;
    private menuSrv;
    private i18nSrv;
    private titleSrv;
    private reuseSrv;
    private cdr;
    private inited;
    private ref$;
    private set$;
    private conTpl;
    private affix;
    private _menus;
    private readonly menus;
    _titleVal: string;
    paths: PageHeaderPath[];
    _title: string;
    _titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void>;
    loading: boolean;
    wide: boolean;
    home: string;
    homeLink: string;
    homeI18n: string;
    autoBreadcrumb: boolean;
    autoTitle: boolean;
    syncTitle: boolean;
    fixed: boolean;
    fixedOffsetTop: number;
    breadcrumb: TemplateRef<void>;
    recursiveBreadcrumb: boolean;
    logo: TemplateRef<void>;
    action: TemplateRef<void>;
    content: TemplateRef<void>;
    extra: TemplateRef<void>;
    tab: TemplateRef<void>;
    constructor(cog: PageHeaderConfig, settings: SettingsService, renderer: Renderer2, router: Router, menuSrv: MenuService, i18nSrv: AlainI18NService, titleSrv: TitleService, reuseSrv: ReuseTabService, cdr: ChangeDetectorRef);
    refresh(): void;
    private genBreadcrumb;
    private setTitle;
    checkContent(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
export {};
