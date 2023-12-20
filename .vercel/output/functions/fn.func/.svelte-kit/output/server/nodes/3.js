import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.jLI8WfVX.js","_app/immutable/chunks/scheduler.Sga31Z68.js","_app/immutable/chunks/index.5_Pvhs1g.js"];
export const stylesheets = [];
export const fonts = [];
