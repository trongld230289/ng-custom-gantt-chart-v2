export interface offsetMousePostion {
    clientX: number | null;
    clientY: number | null;
    isOffsetMouseEvent?: boolean;
}
export declare function isLeftClick(event: any): boolean;
/**
 * Gets mouse position within an element
 * @param node
 * @param event
 */
export declare function getRelativePos(node: HTMLElement, event: MouseEvent | offsetMousePostion): {
    x: number;
    y: number;
};
/**
 * Adds an event listener that triggers once.
 * @param target
 * @param type
 * @param listener
 * @param addOptions
 * @param removeOptions
 */
export declare function addEventListenerOnce(target: HTMLElement | Window, type: string, listener: any, addOptions?: any, removeOptions?: any): void;
/**
 * Sets the cursor on an element. Globally by default.
 * @param cursor
 * @param node
 */
export declare function setCursor(cursor: string, node?: HTMLElement): void;
export declare function sortFn(prop: (element: any) => number | string): (a: any, b: any) => 0 | 1 | -1;
export declare function normalizeClassAttr(classes: Array<string> | string): string;
export declare function debounce<F extends (...args: any[]) => void>(func: F, wait: number, immediate?: boolean): F;
export declare function throttle<F extends (...args: any[]) => void>(func: F, limit: number): F;
