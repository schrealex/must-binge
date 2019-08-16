import './firebase'

import Vue from 'vue'
import App from './App.vue'

import { firestorePlugin } from 'vuefire'

import { library } from '@fortawesome/fontawesome-svg-core';

import { faSdCard } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/pro-regular-svg-icons';
import {faDownload } from '@fortawesome/pro-light-svg-icons';


import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faDownload, faFlagCheckered, faSdCard);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(firestorePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
});
