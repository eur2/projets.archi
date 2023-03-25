import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { footer } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jw7t2c_START -->${$$result.title = `<title>Projets: plateforme de publication des concours et consultations d’architecture</title>`, ""}<!-- HEAD_svelte-1jw7t2c_END -->`, ""}
<nav class="${"fixed b0 l0 r0 z5 flex jc-center"}"><a href="${"/"}" class="${["p05 m025 bg-green border-radius", $page.url.pathname === "/" ? "current" : ""].join(" ").trim()}"${add_attribute("aria-current", $page.url.pathname === "/" ? "true" : "false", 0)} data-sveltekit-preload-data="${"hover"}">Index</a>
	<a href="${"/carte"}" class="${[
    "p05 m025 bg-green border-radius",
    $page.url.pathname === "/carte" ? "current" : ""
  ].join(" ").trim()}"${add_attribute("aria-current", $page.url.pathname === "/carte" ? "true" : "false", 0)} data-sveltekit-preload-data="${"hover"}">Carte</a>
	<a href="${"/info"}" class="${[
    "p05 m025 bg-green border-radius",
    $page.url.pathname === "/info" ? "current" : ""
  ].join(" ").trim()}"${add_attribute("aria-current", $page.url.pathname === "/info" ? "true" : "false", 0)} data-sveltekit-preload-data="${"hover"}">Info</a></nav>
${$page.url.pathname === "/carte" ? `${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``}
	<footer class="${"relativeee center bg-grey p"}">
		<div style="${"max-width: 100px;"}"><a href="${"https://maop.fr/"}" target="${"_blank"}" rel="${"noreferrer"}"><svg data-name="${"Logo MAOP"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"70.56mm"}" height="${"70.6mm"}" viewBox="${"0 0 200 200.12"}"><title>logo-maop</title><path d="${"M106.51,5.93a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M63.56,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M149.22,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M174.29,57.47a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M200,99.79a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M173.68,142.29a6,6,0,0,1-12,0v0a6,6,0,0,1,12,0Z"}"></path><path d="${"M149.21,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M105.52,194.21a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M63.17,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M39,142.3a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path><path d="${"M12,99.93a6,6,0,0,1-6,5.91,6,6,0,0,1-6-5.92H0A6,6,0,0,1,6,94a6,6,0,0,1,6,5.92h0"}"></path><path d="${"M38.67,57.54a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"}"></path></svg></a></div>

		<!-- HTML_TAG_START -->${footer.content.rendered}<!-- HTML_TAG_END -->
		<br></footer>`}`;
});
export {
  Layout as default
};
