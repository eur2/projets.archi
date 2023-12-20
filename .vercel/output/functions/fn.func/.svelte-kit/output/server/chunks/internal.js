import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let building = false;
function set_building() {
  building = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: true,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="fr">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="preconnect" href="https://pp.maop.fr" />\n	<link rel="preload" href="' + assets2 + '/subset-SelfModern-Regular.woff2" as="font" crossorigin="anonymous" />\n	<link rel="preload" href="' + assets2 + '/subset-SelfModern-Italic.woff2" as="font" crossorigin="anonymous" />\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\n	<meta name="viewport" content="width=device-width" />\n	<meta name="theme-color" content="#efefef" />\n	<link rel="manifest" href="' + assets2 + '/manifest.json" crossorigin="use-credentials">\n	<link rel="apple-touch-icon" href="' + assets2 + '/apple-touch-icon.png">\n	<meta name="description"\n		content="Projets est un atlas factuel d’architectures possibles sur la Région Occitanie. Projets est un outil informatif, développé par la Maison de l’Architecture Occitanie – Pyrénées, avec le soutien de Toulouse Métropole, du Conseil Départemental de la Haute Garonne, de la Région Occitanie et de Oppidea / Europolia." />\n	<meta name="og:title" content="Projets: plateforme de publication des concours et consultations d’architecture" />\n	<meta name="og:description"\n		content="Projets est un atlas factuel d’architectures possibles sur la Région Occitanie. Projets est un outil informatif, développé par la Maison de l’Architecture Occitanie – Pyrénées, avec le soutien de Toulouse Métropole, du Conseil Départemental de la Haute Garonne, de la Région Occitanie et de Oppidea / Europolia." />\n	<meta name="og:type" content="website" />\n	<meta name="og:image" content="' + assets2 + '/android-chrome-256x256.png" />\n	<meta name="twitter:card" content="summary" />\n	<meta name="twitter:title"\n		content="Projets: plateforme de publication des concours et consultations d’architecture" />\n	<meta name="twitter:description"\n		content="Projets est un atlas factuel d’architectures possibles sur la Région Occitanie. Projets est un outil informatif, développé par la Maison de l’Architecture Occitanie – Pyrénées, avec le soutien de Toulouse Métropole, du Conseil Départemental de la Haute Garonne, de la Région Occitanie et de Oppidea / Europolia." />\n	<meta name="twitter:image" content="' + assets2 + `/android-chrome-256x256.png" />
	<style>
		@font-face {
			font-family: 'Self Modern';
			src: url('` + assets2 + "/subset-SelfModern-Regular.woff') format('woff');\n			src: url('" + assets2 + "/subset-SelfModern-Regular.woff2') format('woff2');\n			font-weight: normal;\n			font-style: normal;\n			font-display: fallback;\n		}\n\n		@font-face {\n			font-family: 'Self Modern';\n			src: url('" + assets2 + "/subset-SelfModern-Italic.woff') format('woff');\n			src: url('" + assets2 + `/subset-SelfModern-Italic.woff2') format('woff2');
			font-weight: normal;
			font-style: italic;
			font-display: fallback;
		}
	</style>
	<script src="https://cdn.jsdelivr.net/npm/@minimal-analytics/ga4/dist/index.js" async><\/script>

	<script>
		window.minimalAnalytics = {
			trackingId: 'G-4H2FXQMLC9', // <-- replace with your GA4 property ID
			autoTrack: true,
		};
	<\/script>
	<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-4H2FXQMLC9"><\/script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'G-4H2FXQMLC9');
	<\/script> -->
	` + head + '\n</head>\n\n<body data-sveltekit-preload-data="hover">\n	<div style="display: contents">' + body + "</div>\n</body>\n\n</html>",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1evcz8e"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  building as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
