import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1jw7t2c_START -->${$$result.title = `<title>Projets: plateforme de publication des concours et consultations d’architecture</title>`, ""}<!-- HEAD_svelte-1jw7t2c_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
