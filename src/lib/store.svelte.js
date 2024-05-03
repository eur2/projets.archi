let isOpen = $state(true);
export const splash = {
  get isOpen() {
    return isOpen;
  },
  set isOpen(v) {
    isOpen = v;
  },
};

// export function createSplash() {
// 	const state = $state({isOpen: true})
// 	return state
// }
