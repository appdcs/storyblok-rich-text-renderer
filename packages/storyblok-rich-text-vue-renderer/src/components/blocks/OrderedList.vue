<template>
  <ol>
    <slot />
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SbOrderedList',
});
</script>
