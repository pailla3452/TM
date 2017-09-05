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
import NouveauDevoir from '@/components/ecole/input/NouveauDevoir'
// Ecole output
import Horaire from '@/components/ecole/output/Horaire'

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
    {
      path: '/input/nouveaudevoir',
      name: 'NouveauDevoir',
      component: NouveauDevoir

    },
    // OUTPUT Ecole
    {
      path: '/output/horaire',
      name: 'Horaire',
      component: Horaire
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
