import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
// OUTPUT!!
import DevoirCmp from './components/ecole/output/Devoir'
// INPUT!!
import NouveauDevoir from './components/ecole/input/NouveauDevoir'
import NewSubject from './components/ecole/input/NewSubject'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

// Components!
Vue.component('app-devoir', DevoirCmp)
Vue.component('app-nouveauDev', NouveauDevoir)
Vue.component('app-newSubject', NewSubject)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
