import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
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
        color: 'red--text text--darken-4',
        colorFluid: 'red darken-4'
      },
      {
        id: 'aisjfoiajfasfasfagfdoiasdj',
        subject: 'Français',
        color: 'indigo--text text--darken-1',
        colorFluid: 'indigo darken-1'
      },
      {
        id: 'hdhdhfhdf',
        subject: 'Informatique',
        color: 'blue-grey--text text--darken-2',
        colorFluid: 'blue-grey darken-2'
      }
    ]
  },
  mutations: {
    createDevoir (state, payload) {
      state.devoirs.push(payload)
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
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    // TODO ESCRIBIR FUNCION PARA LOAD DEVOIR
    createDevoir ({commit}, payload) {
      const devoir = {
        subject: payload.subject,
        title: payload.title,
        description: payload.description,
        date: payload.date,
        progres: 50,
        // TODO: ir a sacar color de subjects
        color: payload.color,
        // TODO: ESTO LO ASIGNARA DESPUES FIREBASE
        id: 'IUASFIASHFIAUSHFIA'
      }
      commit('createDevoir', devoir)
    },
    createSubject ({commit}, payload) {
      const subject = {
        subject: payload.subject,
        color: payload.color,
        colorFluid: payload.colorFluid,
        // TODO: estp se asignara con firebase
        id: '092i3r0wejfoisj'
      }
      commit('createSubject', subject)
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
    }
  },
  getters: {
    loadedDevoir (state) {
      return (devoirId) => {
        return state.devoirs.find((devoir) => {
          return devoir.id === devoirId
        })
      }
    },
    loadedSubject (state) {
      return (subjectId) => {
        return state.subjects.find((subject) => {
          return subject.id === subjectId
        })
      }
    },
    error (state) {
      return state.error
    },
    user (state) {
      return state.user
    }
  }
})
