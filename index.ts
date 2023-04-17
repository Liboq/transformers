import Button from "./output/vue/vue3/component/TrButton/index.vue";
import { App as Application, Plugin } from "vue";
type stringKey = Record<string,any>
// 解决typescript报错：“元素隐式具有 “any“ 类型，因为类型为 “string“ 的表达式不能用于索引类型”
const components:stringKey = {
  TrButton:Button,
};

const installs: Exclude<Plugin["install"], undefined> = (instance: Application) => {
  for (const componentKey in components) {
    instance.component(componentKey,components[componentKey]);
  }
};
export const install = installs;

export default {
  version: "0.0.1",
  install,
};
