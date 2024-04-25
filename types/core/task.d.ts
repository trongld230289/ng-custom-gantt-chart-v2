import type { SvelteRow } from './row';
import type { ColumnService } from './column';
export interface TaskModel {
    id: number;
    resourceId: number | string;
    from: number;
    to: number;
    amountDone?: number;
    classes?: string | string[];
    label?: string;
    html?: string;
    showButton?: boolean;
    buttonClasses?: string | string[];
    buttonHtml?: string;
    enableDragging?: boolean;
    labelBottom?: string;
    type?: 'milestone' | 'task';
    stickyLabel?: boolean;
}
export interface SvelteTask {
    model: TaskModel;
    left: number;
    top: number;
    width: number;
    height: number;
    reflections?: string[];
    intersectsWith?: SvelteTask[];
    numYSlots?: number;
    yPos?: number;
    topDelta?: number;
}
export declare class TaskFactory {
    columnService: ColumnService;
    rowPadding: number;
    rowEntities: {
        [key: number]: SvelteRow;
    };
    constructor(columnService: ColumnService);
    createTask(model: TaskModel): SvelteTask;
    createTasks(tasks: TaskModel[]): SvelteTask[];
    row(resourceId: any): SvelteRow;
    getHeight(model: any): number;
    getPosY(model: any): number;
}
export declare function overlap(one: SvelteTask, other: SvelteTask): boolean;
export declare function reflectTask(task: SvelteTask, row: SvelteRow, options: {
    rowPadding: number;
}): {
    model: {
        resourceId: string | number;
        id: string;
        enableDragging: boolean;
        from: number;
        to: number;
        amountDone?: number;
        classes?: string | string[];
        label?: string;
        html?: string;
        showButton?: boolean;
        buttonClasses?: string | string[];
        buttonHtml?: string;
        labelBottom?: string;
        type?: "milestone" | "task";
        stickyLabel?: boolean;
    };
    top: number;
    reflected: boolean;
    reflectedOnParent: boolean;
    reflectedOnChild: boolean;
    originalId: number;
    left: number;
    width: number;
    height: number;
    reflections?: string[];
    intersectsWith?: SvelteTask[];
    numYSlots?: number;
    yPos?: number;
    topDelta?: number;
};
