export interface HighlightedDurations {
    unit: string;
    fractions: number[];
}
export interface Column {
    from: number;
    to: number;
    left: number;
    width: number;
    bgHighlightColor?: boolean;
    /**
     * Duration in milliseconds
     */
    duration: number;
}
export declare function findByPosition(columns: Column[], x: number): Column[];
export declare function findByDate(columns: Column[], x: number): Column[];
export interface ColumnService {
    getColumnByDate(date: any): Column;
    getColumnByPosition(x: any): Column;
    getPositionByDate(date: any): number;
    getDateByPosition(x: any): number;
    roundTo(date: any): number;
}
