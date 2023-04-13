# Button

## 基础
::: demo

``` js
<template>
<tr-button @click="click" type="primary">primary</tr-button>
<tr-button :onLog="click" type="info">info</tr-button>
<tr-button type="normal">normal</tr-button>
<tr-button type="danger">danger</tr-button>
<div>{{a}}</div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ButtonDemo',
    setup() {
      const methods = {
        click(e: Event) {
          console.log('点击了按钮', e)
        }
      }

      return {
        ...methods
      }
    }
  })
</script>
</script>

```
