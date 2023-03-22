import Vue from 'vue';
import App from './App.vue';
import RichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';
import { Block } from '@marvr/storyblok-rich-text-types';
import CustomParagraph from './components/CustomParagraph.vue';
import SbButton from './components/Button.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;
Vue.use(RichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.PARAGRAPH]: CustomParagraph,
    },
    components: {
      button: SbButton,
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
