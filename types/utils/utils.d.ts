import { SvelteGanttDateAdapter } from './date';
export declare class GanttUtils {
    from: number;
    to: number;
    width: number;
    magnetOffset: number;
    magnetUnit: string;
    magnetDuration: number;
    dateAdapter: SvelteGanttDateAdapter;
    /** because gantt width is not always correct */
    /**BlueFox 09.01.23: couldn't reproduce the above so I removed the code
    //totalColumnDuration: number;
    //totalColumnWidth: number;

    constructor() {
    }

    /**
     * Returns position of date on a line if from and to represent length of width
     * @param {*} date
     */
    getPositionByDate(date: number): number;
    getDateByPosition(x: any): number;
    roundTo(date: number): number;
}
export declare function getPositionByDate(date: number, from: number, to: number, width: number): number;
export declare function getDateByPosition(x: number, from: number, to: number, width: number): number;
export declare function getIndicesOnly<T, C = number | Date>(input: T[], value: C, comparer: {
    (T: T): C;
}, strict?: boolean): number[];
export declare function get<T, C = number | Date>(input: T[], value: C, comparer: {
    (T: T): C;
}, strict?: boolean): T[];
