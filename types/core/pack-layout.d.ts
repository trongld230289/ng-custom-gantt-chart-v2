import { SvelteTask } from './task';
/**
 * Layouts tasks in a 'pack' layout:
 *  - overlapping tasks display in the same row, but shrink to not overlap with eachother
 *
 * @param tasks
 * @param params
 *
 * TODO:: tests, optimization: update only rows that have changes, update only overlapping tasks
 */
export declare function layout(tasks: SvelteTask[], params: {
    rowContentHeight: number;
}): void;
