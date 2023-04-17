<template>
  <div class="button-container">
    <button
      :class="
        _classStringToObject(` button-color--${type} button-size--${size}`)
      "
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "tr-button",

  props: { type: { default: "primary" }, size: { default: "middle" } },

  data() {
    return { name: "Alex" };
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>

<style scoped>
.button-container {
  display: inline-block;
}
.button-container + .button-container {
  margin-left: 20px;
}
button {
  color: white;
  box-shadow: 1px 1px 5px 0px #078afe;
  border-radius: 2px;
}
.button-color--primary {
  background: linear-gradient(209deg, #0ebbff 0%, #0685fe 100%);
}
.button-color--danger {
  background: #d40000;
}
.button-color--normal {
  background: #ffffff;
  color: #000;
}
.button-color--info {
  background: #ed6a0c;
}
.button-size--samll {
  padding: 3px 8px;
}
.button-size--middle {
  padding: 6px 16px;
}
.button-size--middle {
  padding: 9px 24px;
}
</style>