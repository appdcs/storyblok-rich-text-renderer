<template>
  <div>
    No rendering definition for component
    <strong>{{ componentName }}</strong> found.
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ComponentBody } from '@marvr/storyblok-rich-text-types';

export default defineComponent({
  name: 'SbComponentFallback',
  props: {
    body: {
      type: Object as () => ComponentBody,
      required: true,
    },
  },
  setup({ body: { component } }) {
    const componentName = ref(component);

    return {
      componentName,
    };
  },
});
</script>
