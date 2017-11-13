import Vue from 'vue'
import Router from 'vue-router'
// @ Se refiere al src component

// User components
import Signin from '@/components/User/Signin'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'

// Ecole components
import Home from '@/components/ecole/Home'
// Ecole output
import Horaire from '@/components/ecole/output/Horaire'
import Subjects from '@/components/ecole/output/Subjects'
import Subject from '@/components/ecole/output/Subject'
import Devoirs from '@/components/ecole/output/Devoirs'
import Devoir from '@/components/ecole/output/Devoir'
import Epreuves from '@/components/ecole/output/Epreuves'
import Epreuve from '@/components/ecole/output/Epreuve'
import Reminders from '@/components/ecole/output/Reminders'
import Notes from '@/components/ecole/output/Notes'

// AUTHGUARD
import authGuard from './authGuard'

Vue.use(Router)

export default new Router({
  routes: [
    // ROUTES ECOLE
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: authGuard
    },
    // OUTPUT Ecole
    // TODO SIMPLIFIER ROUTER
    {
      path: '/output/Subjects',
      name: 'Subjects',
      component: Subjects,
      beforeEnter: authGuard
    },
    {
      path: '/output/subjects/:id',
      name: 'Subject',
      props: true,
      component: Subject,
      beforeEnter: authGuard
    },
    {
      path: '/output/horaire',
      name: 'Horaire',
      component: Horaire,
      beforeEnter: authGuard
    },
    {
      path: '/output/reminders',
      name: 'Reminders',
      component: Reminders,
      beforeEnter: authGuard
    },
    {
      path: '/output/epreuves',
      name: 'Epreuves',
      component: Epreuves,
      beforeEnter: authGuard
    },
    {
      path: '/output/epreuves/:id',
      name: 'Epreuve',
      props: true,
      component: Epreuve,
      beforeEnter: authGuard
    },
    {
      path: '/output/devoirs',
      name: 'Devoirs',
      component: Devoirs,
      beforeEnter: authGuard
    },
    {
      path: '/output/devoirs/:id',
      name: 'Devoir',
      props: true,
      component: Devoir,
      beforeEnter: authGuard
    },
    {
      path: '/output/notes',
      name: 'Notes',
      component: Notes,
      beforeEnter: authGuard
    },
    // ROUTES USER
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
