import type { SvelteGanttComponent, SvelteGanttOptions } from './gantt';
import type { ComponentCreator } from './core/svelte';
import { SvelteGanttTable } from './modules/table';
import { SvelteGanttDependencies } from './modules/dependencies';
import { SvelteGanttExternal } from './modules/external/external';
import { MomentSvelteGanttDateAdapter } from './utils/momentDateAdapter';
declare const SvelteGantt: ComponentCreator<SvelteGanttComponent, SvelteGanttOptions>;
export { SvelteGantt, SvelteGanttTable, SvelteGanttDependencies, SvelteGanttExternal, MomentSvelteGanttDateAdapter };
export type { SvelteGanttComponent, SvelteGanttOptions };
