import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    devoirs: [
      {
        id: 'iuahfauedhfj',
        branche: 'Informatique',
        title: 'Projet Info',
        description: 'Utiliser Vue + Firebase',
        date: '23-01-17',
        progres: 40,
        color: 'blue-grey--text text--darken-2'
      },
      {
        id: 'iuahfauedhfjasfasf',
        branche: 'Math',
        title: 'Exercises théorie',
        description: 'Ex 2 3 et 6',
        date: '23-01-17',
        progres: 90,
        color: 'red--text text--darken-4'
      },
      {
        id: 'oiasjdoasijdasoifj',
        branche: 'Français',
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
        branche: 'Français',
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
        branche: 'Français',
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
        color: 'red--text text--darken-4'
      },
      {
        id: 'aisjfoiajfasfasfagfdoiasdj',
        subject: 'Français',
        color: 'indigo--text text--darken-1'
      },
      {
        id: 'hdhdhfhdf',
        subject: 'Informatique',
        color: 'blue-grey--text text--darken-2'
      }
    ]
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
    }
  }
})
