export const load = async () => {
  const info = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/64`).then(
    (r) => r.json(),
  );
  const legal = await fetch(`https://pp.maop.fr/wp-json/wp/v2/pages/179`).then(
    (r) => r.json(),
  );

  return {
    info: info,
    legal: legal,
  };
};
