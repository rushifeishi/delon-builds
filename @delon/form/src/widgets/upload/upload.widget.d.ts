import { OnInit } from '@angular/core';
import { UploadChangeParam, UploadFile } from 'ng-zorro-antd/upload';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class UploadWidget extends ControlWidget implements OnInit {
    i: any;
    fileList: UploadFile[];
    btnType: string;
    ngOnInit(): void;
    change(args: UploadChangeParam): void;
    reset(_value: SFValue): void;
    private _getValue;
    private _setValue;
    handleRemove: () => boolean;
    handlePreview: (file: UploadFile) => void;
}
