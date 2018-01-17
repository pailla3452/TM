import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    toolbarInfo: {
      icon: 'school',
      text: 'Upper',
      color: 'primary'
    },
    user: null,
    error: null,
    // TODO: Si on a le temps faire LOADING
    loading: false,
    devoirs: [
      {
        id: 'iuahfauedhfj',
        subject: 'Informatique',
        title: 'Projet Info',
        description: 'Utiliser Vue + Firebase',
        date: '23-01-17',
        progres: 40,
        color: 'blue-grey--text text--darken-2'
      },
      {
        id: 'iuahfauedhfjasfasf',
        subject: 'Math',
        title: 'Exercises théorie',
        description: 'Ex 2 3 et 6',
        date: '23-01-17',
        progres: 90,
        color: 'red--text text--darken-4'
      },
      {
        id: 'oiasjdoasijdasoifj',
        subject: 'Français',
        title: 'Disser!!',
        description: 'Faire intro + planning',
        date: '23-01-17',
        progres: 79,
        color: 'indigo--text text--darken-1'
      }
    ],
    epreuves: [
      {
        // TODO AGREGAR CARACTERISTICAS DE CADA CLASE
        id: 'vyxxyvyxv',
        subject: 'Français',
        title: 'Disser!!',
        description: 'Faire intro + planning',
        date: '23-01-17',
        color: 'indigo--text text--darken-1'
      }
    ],
    reminders: [
      {
        // TODO AGREGAR CARACTERISTICAS DE CADA CLASE
        id: 'yxvyxvyxvxyv',
        subject: 'Français',
        title: 'Disser!!',
        description: 'Faire intro + planning',
        date: '23-01-17',
        color: 'indigo--text text--darken-1'
      }
    ],
    subjects: [
      {
        id: 'aisjfoiajfoiasdj',
        subject: 'Math',
        horaire: {
          'L': ['h1', 'h2']
        },
        color: 'red--text text--darken-4',
        colorFluid: 'red darken-4'
      },
      {
        id: 'aisjfoiajfasfasfagfdoiasdj',
        subject: 'Français',
        horaire: {

        },
        color: 'indigo--text text--darken-1',
        colorFluid: 'indigo darken-1'
      },
      {
        id: 'hdhdhfhdf',
        subject: 'Informatique',
        horaire: {

        },
        color: 'blue-grey--text text--darken-2',
        colorFluid: 'blue-grey darken-2'
      }
    ]
  },
  mutations: {
    createDevoir (state, payload) {
      state.devoirs.push(payload)
    },
    createEpreuve (state, payload) {
      state.epreuves.push(payload)
    },
    createReminder (state, payload) {
      state.reminders.push(payload)
    },
    createSubject (state, payload) {
      state.subjects.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoadedDevoirs (state, payload) {
      state.devoirs = payload
    },
    setLoadedEpreuves (state, payload) {
      state.epreuves = payload
    },
    setLoadedReminders (state, payload) {
      state.reminders = payload
    },
    setLoadedSubjects (state, payload) {
      state.subjects = payload
    },
    clearError (state) {
      state.error = null
    },
    changeToolbarInfo (state, payload) {
      state.toolbarInfo = payload
    },
    updateDevoir (state, payload) {
      const devoir = state.devoirs.find((devoir) => {
        return devoir.id === payload.id
      })
      devoir.progres = payload.progres
    },
    deleteData (state, payload) {
      const newData = state[payload.type].filter((item) => {
        return item.id !== payload.id
      })
      state[payload.type] = newData
    }
  },
  actions: {
    loadData ({commit}, payload) {
      // FIREBASE DEVOIRS
      firebase.database().ref('devoirs').once('value')
      .then((data) => {
        console.log(data.val())
        const devoirs = []
        const ob = data.val()
        for (let key in ob) {
          devoirs.push({
            id: key,
            subject: ob[key].subject,
            title: ob[key].title,
            description: ob[key].description,
            date: ob[key].date,
            color: ob[key].color,
            colorFluid: ob[key].colorFluid,
            // PARTICULARITES DEVOIRS
            progres: ob[key].progres,
            // POUR L'UTILISATEUR
            creatorId: ob[key].id,
            subjectId: ob[key].subjectId
          })
        }
        commit('setLoadedDevoirs', devoirs)
      })
      .catch((error) => {
        console.log(error)
      })
      // FIREBASE EPREUVES
      firebase.database().ref('epreuves').once('value')
      .then((data) => {
        console.log(data.val())
        const epreuves = []
        const ob = data.val()
        for (let key in ob) {
          epreuves.push({
            id: key,
            subject: ob[key].subject,
            title: ob[key].title,
            description: ob[key].description,
            date: ob[key].date,
            color: ob[key].color,
            colorFluid: ob[key].colorFluid,
            // PARTICULARITES EPREUVES
            coef: ob[key].coef,
            note: ob[key].note,
            // POUR L'UTILISATEUR
            creatorId: ob[key].id,
            subjectId: ob[key].subjectId
          })
        }
        commit('setLoadedEpreuves', epreuves)
      })
      .catch((error) => {
        console.log(error)
      })
      // FIREBASE REMINDERS
      firebase.database().ref('reminders').once('value')
      .then((data) => {
        console.log(data.val())
        const reminders = []
        const ob = data.val()
        for (let key in ob) {
          reminders.push({
            id: key,
            subject: ob[key].subject,
            title: ob[key].title,
            description: ob[key].description,
            date: ob[key].date,
            color: ob[key].color,
            colorFluid: ob[key].colorFluid,
            // PARTICULARITES REMINDERS
            heure: ob[key].heure,
            // POUR L'UTILISATEUR
            creatorId: ob[key].id,
            subjectId: ob[key].subjectId
          })
        }
        commit('setLoadedReminders', reminders)
      })
      .catch((error) => {
        console.log(error)
      })
      // FIREBASE SUBJECTS
      firebase.database().ref('subjects').once('value')
      .then((data) => {
        console.log(data.val())
        const subjects = []
        const ob = data.val()
        for (let key in ob) {
          subjects.push({
            id: key,
            creatorId: ob[key].id,
            // CONFIG
            subject: ob[key].subject,
            color: ob[key].color,
            colorFluid: ob[key].colorFluid,
            // INFORMATIONS
            cours: ob[key].cours,
            notes: ob[key].notes
          })
        }
        commit('setLoadedSubjects', subjects)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    // CREER DEVOIR
    createDevoir ({commit, getters}, payload) {
      const devoir = {
        subject: payload.subject,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        color: payload.color,
        colorFluid: payload.colorFluid,
        // PARTICULARITES DEVOIR
        progres: 0,
        // POUR L'UTILISATEUR
        creatorId: getters.user.id,
        subjectId: payload.subjectId
      }
      // FIREBASE
      // let key
      firebase.database().ref('devoirs').push(devoir)
      .then((data) => {
        const key = data.key
        console.log(data)
        // STORE
        commit('createDevoir', {
          ...devoir,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    // CREER EPREUVE
    createEpreuve ({commit, getters}, payload) {
      const epreuve = {
        subject: payload.subject,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        color: payload.color,
        colorFluid: payload.colorFluid,
        // PARTICULARITES EPREUVES
        coef: payload.coef,
        note: 0,
        // POUR L'UTILISATEUR
        creatorId: getters.user.id,
        subjectId: payload.subjectId
      }
      // FIREBASE
      // let key
      firebase.database().ref('epreuves').push(epreuve)
      .then((data) => {
        const key = data.key
        console.log(data)
        // STORE
        commit('createEpreuve', {
          ...epreuve,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    // CREER REMINDER
    createReminder ({commit, getters}, payload) {
      const reminder = {
        subject: payload.subject,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        color: payload.color,
        colorFluid: payload.colorFluid,
        // PARTICULARITES REMINDERS
        heure: payload.heure,
        // POUR L'UTILISATEUR
        creatorId: getters.user.id,
        subjectId: payload.subjectId
      }
      // FIREBASE
      // let key
      firebase.database().ref('reminders').push(reminder)
      .then((data) => {
        const key = data.key
        console.log(data)
        // STORE
        commit('createReminder', {
          ...reminder,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    createSubject ({commit, getters}, payload) {
      const subject = {
        subject: payload.subject,
        color: payload.color,
        colorFluid: payload.colorFluid,
        creatorId: getters.user.id,
        // INFORMATIONS, TODO
        cours: [null],
        notes: [null]
      }
      // FIREBASE
      firebase.database().ref('subjects').push(subject)
      .then((data) => {
        const key = data.key
        console.log(data)
        // STORE
        commit('createSubject', {
          ...subject,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    signUserUp ({commit}, payload) {
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        const newUser = {
          id: user.uid,
          registeredDevoirs: [],
          registeredEpreuves: [],
          registeredReminders: []
        }
        commit('setUser', newUser)
      }).catch((error) => {
        commit('setError', error)
      })
    },
    signUserIn ({commit}, payload) {
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        commit('setUser', user)
      })
      .catch((error) => {
        commit('setError', error)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredDevoirs: []})
    },
    clearError ({commit}) {
      commit('clearError')
    },
    logOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    changeToolbarInfo ({commit}, payload) {
      commit('changeToolbarInfo', payload)
    },
    updateDevoir ({commit}, payload) {
      const updateObj = {}
      updateObj.progres = payload.progres
      console.log('DESDE STORE: ' + updateObj)
      firebase.database().ref('devoirs').child(payload.id).update(updateObj)
      .then(() => {
        commit('updateDevoir', payload)
      })
      .catch(error => {
        console.log(error)
      })
    },
    deleteData ({commit}, payload) {
      firebase.database().ref(payload.type).child(payload.id).remove()
      .then(() => {
        commit('deleteData', payload)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    // DEVOIRS
    loadedDevoir (state) {
      return (devoirId) => {
        return state.devoirs.find((devoir) => {
          return devoir.id === devoirId
        })
      }
    },
    loadedDevoirs (state) {
      return state.devoirs
    },
    // SUBJECTS
    loadedSubject (state) {
      return (subjectId) => {
        return state.subjects.find((subject) => {
          return subject.id === subjectId
        })
      }
    },
    loadedSubjects (state) {
      return state.subjects
    },
    // EPREUVES
    loadedEpreuve (state) {
      return (epreuveId) => {
        return state.epreuves.find((epreuve) => {
          return epreuve.id === epreuveId
        })
      }
    },
    loadedEpreuves (state) {
      return state.epreuves
    },
    // REMINDERS
    loadedReminder (state) {
      return (reminderId) => {
        return state.reminders.find((reminder) => {
          return reminder.id === reminderId
        })
      }
    },
    loadedReminders (state) {
      return state.reminders
    },
    // AUTRES
    error (state) {
      return state.error
    },
    user (state) {
      return state.user
    },
    toolbarInfo (state) {
      return state.toolbarInfo
    }
  }
})
