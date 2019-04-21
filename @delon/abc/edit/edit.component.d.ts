import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { SEContainerComponent } from './edit-container.component';
export declare class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
    private parent;
    private rep;
    private ren;
    private cdr;
    private el;
    private status$;
    private readonly ngModel;
    private readonly formControlName;
    private readonly contentElement;
    private clsMap;
    private inited;
    private onceFlag;
    invalid: boolean;
    _labelWidth: any;
    optional: string;
    optionalHelp: string;
    error: string;
    extra: string;
    label: string | TemplateRef<void>;
    col: number;
    required: boolean;
    controlClass: string;
    line: boolean;
    labelWidth: number;
    id: string;
    _id: string;
    _autoId: boolean;
    readonly paddingValue: number;
    readonly showErr: boolean;
    private readonly ngControl;
    constructor(el: ElementRef, parent: SEContainerComponent, rep: ResponsiveService, ren: Renderer2, cdr: ChangeDetectorRef);
    private setClass;
    private bindModel;
    private updateStatus;
    checkContent(): void;
    ngAfterContentInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
