require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {
  Vuetify,
  VApp,
  VAvatar,
  VCard,
  VFooter,
  VList,
  VMenu,
  VBtn,
  VIcon,
  VGrid,
  VSnackbar,
  VSubheader,
  VTextField,
  VToolbar,
  transitions
} from 'vuetify'

import { routes } from './routes'
import { storeDef } from './store'
import App from './App.vue'
import Clipboard from 'v-clipboard'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VCard,
    VFooter,
    VList,
    VMenu,
    VBtn,
    VIcon,
    VGrid,
    VSnackbar,
    VSubheader,
    VTextField, 
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Clipboard)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store( storeDef )

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
