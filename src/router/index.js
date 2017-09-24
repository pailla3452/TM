import Vue from 'vue'
import Router from 'vue-router'
// @ Se refiere al src component

// User components
import Signin from '@/components/User/Signin'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'

// Ecole components
import Home from '@/components/ecole/Home'
// Ecole input
// import NouveauDevoir from '@/components/ecole/input/NouveauDevoir'
// import NewSubject from '@/components/ecole/input/NewSubject'
// Ecole output
import Horaire from '@/components/ecole/output/Horaire'
import Subjects from '@/components/ecole/output/Subjects'
import Subject from '@/components/ecole/output/Subject'
import Devoirs from '@/components/ecole/output/Devoirs'
import Devoir from '@/components/ecole/output/Devoir'

Vue.use(Router)

export default new Router({
  routes: [
    // ROUTES ECOLE
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // INPUT Ecole
    // {
    //   path: '/input/nouveaudevoir',
    //   name: 'NouveauDevoir',
    //   component: NouveauDevoir
    //
    // },
    // {
    //   path: '/input/newSubject',
    //   name: 'NouveauDevoir',
    //   component: NewSubject
    //
    // },
    // OUTPUT Ecole
    {
      path: '/output/Subjects',
      name: 'Subjects',
      component: Subjects
    },
    {
      path: '/output/subjects/:id',
      name: 'Subject',
      props: true,
      component: Subject
    },
    {
      path: '/output/horaire',
      name: 'Horaire',
      component: Horaire
    },
    {
      path: '/output/devoirs',
      name: 'Devoirs',
      component: Devoirs
    },
    {
      path: '/output/devoirs/:id',
      name: 'Devoir',
      props: true,
      component: Devoir
    },
    // ROUTES USER
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
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
