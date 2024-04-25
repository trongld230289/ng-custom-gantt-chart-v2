import type { SvelteRow } from '../row';
import type { EntityStore } from '../store';
export type DropHandler = (event: MouseEvent) => any;
export declare class DragDropManager {
    handlerMap: {
        [key: string]: DropHandler;
    };
    constructor(rowStore: EntityStore<SvelteRow>);
    register(target: string, handler: DropHandler): void;
    getTarget(target: string, event: MouseEvent): SvelteRow;
}
