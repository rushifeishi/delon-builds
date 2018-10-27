import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class HTMLPipe implements PipeTransform {
    private dom;
    constructor(dom: DomSanitizer);
    transform(html: string): string;
}
