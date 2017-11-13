import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
// FIREBASE INCLUDE
import * as firebase from 'firebase'
// OUTPUT!!
import DevoirCmp from './components/ecole/output/Devoir'
import EpreuveCmp from './components/ecole/output/Epreuve'
import ReminderCmp from './components/ecole/output/Reminder'
import SubjectCmp from './components/ecole/output/Subject'
// INPUT!!
import NouveauDevoir from './components/ecole/input/NouveauDevoir'
import NewSubject from './components/ecole/input/NewSubject'
import { store } from './store'
// GENERAL
import Alert from './components/Alert'

Vue.use(Vuetify)
Vue.config.productionTip = false

// Components!
// OUTPUT
Vue.component('app-devoir', DevoirCmp)
Vue.component('app-epreuve', EpreuveCmp)
Vue.component('app-reminder', ReminderCmp)
// ***
Vue.component('app-subject', SubjectCmp)
// INPUT
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
      storageBucket: 'travailmatu-5f93e.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadData')
  }
})
