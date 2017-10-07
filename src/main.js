import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
// FIREBASE INCLUDE
import * as firebase from 'firebase'
// OUTPUT!!
import DevoirCmp from './components/ecole/output/Devoir'
// INPUT!!
import NouveauDevoir from './components/ecole/input/NouveauDevoir'
import NewSubject from './components/ecole/input/NewSubject'
import { store } from './store'
// GENERAL
import Alert from './components/Alert'

Vue.use(Vuetify)
Vue.config.productionTip = false

// Components!
Vue.component('app-devoir', DevoirCmp)
Vue.component('app-nouveauDev', NouveauDevoir)
Vue.component('app-newSubject', NewSubject)
Vue.component('app-alert', Alert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBh2v0yMgeKpW8kZIq1hzqkgjnQayHUHsk',
      authDomain: 'travailmatu-5f93e.firebaseapp.com',
      databaseURL: 'https://travailmatu-5f93e.firebaseio.com',
      projectId: 'travailmatu-5f93e',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
