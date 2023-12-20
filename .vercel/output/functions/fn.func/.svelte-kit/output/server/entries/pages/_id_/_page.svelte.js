import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { post } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main${add_attribute("id", post.id, 0)}> ${post.acf.image1 ? `<img class="w100"${add_attribute("src", post.acf.image1.sizes.large, 0)} srcset="${escape(post.acf.image1.sizes.medium, true) + " 400w, " + escape(post.acf.image1.sizes.large, true) + " 800w, " + escape(post.acf.image1.sizes["2048x2048"], true) + " 1600w"}" width="800" height="600" alt="alt">` : ``} ${post.acf.image2 ? `<img class="w100"${add_attribute("src", post.acf.image2.sizes.medium, 0)} srcset="${escape(post.acf.image2.sizes.medium, true) + " 400w, " + escape(post.acf.image2.sizes.large, true) + " 800w, " + escape(post.acf.image2.sizes["2048x2048"], true) + " 1600w"}" width="800" height="600" alt="alt">` : ``} ${post.acf.image3 ? `<img class="w100"${add_attribute("src", post.acf.image3.sizes.medium, 0)} srcset="${escape(post.acf.image3.sizes.medium, true) + " 400w, " + escape(post.acf.image3.sizes.large, true) + " 800w, " + escape(post.acf.image3.sizes["2048x2048"], true) + " 1600w"}" width="800" height="600" alt="alt">` : ``}</main>`;
});
export {
  Page as default
};
