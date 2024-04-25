import type { offsetMousePostion } from '../../utils/dom';
export interface OffsetData {
    offsetPos: {
        x: number | null;
        y: number | null;
    };
    offsetWidth: number;
}
export interface DraggableSettings {
    onDown?(event?: DownDropEvent): void;
    onResize?(event?: ResizeEvent): void;
    onDrag?(event?: DragEvent): void;
    onMouseUp?(): void;
    onDrop?(event?: DownDropEvent | number[]): void;
    dragAllowed: (() => boolean) | boolean;
    resizeAllowed: (() => boolean) | boolean;
    container: HTMLElement;
    resizeHandleWidth?: number;
    getX?: (event?: MouseEvent) => number;
    getY?: (event?: MouseEvent) => number;
    getWidth?: () => number;
    modelId?: number;
}
export interface DownDropEvent {
    mouseEvent: MouseEvent | offsetMousePostion;
    x: number;
    y: number;
    width: number;
    resizing: boolean;
    dragging: boolean;
}
export interface DragEvent {
    x: number;
    y: number;
    event?: MouseEvent;
}
export interface ResizeEvent {
    x: number;
    width: number;
    event?: MouseEvent;
}
export interface offsetPos {
    x: number | null;
    y: number | null;
}
export type directions = 'left' | 'right' | undefined;
/**
 * Applies dragging interaction to gantt elements
 */
export declare class Draggable {
    mouseStartPosX: number;
    mouseStartPosY: number;
    mouseStartRight: number;
    direction: directions;
    dragging: boolean;
    resizing: boolean;
    initialX: number;
    initialY: number;
    initialW: number;
    resizeTriggered: boolean;
    settings: DraggableSettings;
    node: HTMLElement;
    offsetPos: offsetPos;
    offsetWidth: number;
    overRezisedOffset: directions;
    constructor(node: HTMLElement, settings: DraggableSettings, offsetData?: OffsetData);
    get dragAllowed(): boolean;
    get resizeAllowed(): boolean;
    onmousedown: (event: any) => void;
    onmousemove: (event: MouseEvent) => void;
    onmouseup: (event: MouseEvent) => void;
    destroy(): void;
}
