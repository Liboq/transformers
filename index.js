import Button from "./output/vue/vue3/component/TrButton/index.vue";
const components = {
  TrButton:Button,
};

const installs = (instance) => {
  for (const componentKey in components) {
    instance.component(componentKey,components[componentKey]);
  }
};
export const install = installs;

export default {
  version: "0.0.1",
  install,
};
