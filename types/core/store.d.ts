/// <reference path="svelte.d.ts" />
/// <reference types="svelte" />
import type { Readable } from 'svelte/store';
import type { SvelteTask } from './task';
import type { SvelteRow } from './row';
import type { SvelteTimeRange } from './timeRange';
interface EntityState<T> {
    ids: (string | number)[];
    entities: {
        [key: string]: T;
    };
}
interface EntityType {
    model: {
        id: string | number;
    };
    hidden?: boolean;
}
export type EntityKey = string | number;
export interface EntityStore<T extends EntityType, K extends EntityKey = EntityKey> extends Readable<EntityState<T>> {
    _update(updater: (value: EntityState<T>) => EntityState<T>): void;
    add(entity: T): void;
    addAll(entities: T[]): void;
    update(entity: T): void;
    upsert(entity: T): void;
    upsertAll(entities: T[]): void;
    delete(id: K): void;
    deleteAll(ids: K[]): void;
    refresh(): void;
    set(value: EntityState<T>): void;
    entities?: Record<K, T>;
}
export declare function all<T extends EntityType>(store: EntityStore<T>): Readable<T[]>;
export declare function where<T extends EntityType>(store: EntityStore<T>, filterFn: (value: T) => boolean): Readable<T[]>;
export declare function createDataStore(): {
    taskStore: EntityStore<SvelteTask, EntityKey>;
    rowStore: EntityStore<SvelteRow, EntityKey>;
    timeRangeStore: EntityStore<SvelteTimeRange, EntityKey>;
    allTasks: Readable<SvelteTask[]>;
    allRows: Readable<SvelteRow[]>;
    allTimeRanges: Readable<SvelteTimeRange[]>;
    rowTaskCache: Readable<{}>;
    draggingTaskCache: import("svelte/store").Writable<{
        [id: string]: boolean;
    }>;
};
export type GanttDataStore = ReturnType<typeof createDataStore>;
export {};
