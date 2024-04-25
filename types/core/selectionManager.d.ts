/// <reference path="svelte.d.ts" />
/// <reference types="svelte" />
import type { EntityStore } from '../core/store';
import type { OffsetData, DraggableSettings } from '../core/drag';
import { Draggable } from '../core/drag';
import { SvelteTask } from '../core/task';
export interface SelectedItem {
    HTMLElement: HTMLElement;
    offsetData: OffsetData;
    draggable: Draggable;
}
export declare class SelectionManager {
    private taskStore;
    oldReflections: any[];
    newTasksAndReflections: any[];
    taskSettings: Map<string, DraggableSettings>;
    currentSelection: Map<string, SelectedItem>;
    selectedTasks: import("svelte/store").Writable<{}>;
    constructor(taskStore: EntityStore<SvelteTask>);
    selectSingle(taskId: any, node: any): void;
    toggleSelection(taskId: any, node: any): void;
    unSelectTasks(): void;
    dispatchSelectionEvent(taskId: any, event: any): void;
    dragOrResizeTriggered: (event: any) => void;
    selectionDragOrResizing: (event: any) => void;
    selectionDropped: (event: any) => void;
}
