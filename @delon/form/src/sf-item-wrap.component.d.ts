import { SFSchema } from './schema/index';
import { SFUISchemaItem } from './schema/ui';
export declare class SFItemWrapComponent {
    id: string;
    schema: SFSchema;
    ui: SFUISchemaItem;
    showError: boolean;
    error: string;
    showTitle: boolean;
    title: string;
    readonly t: string;
}
