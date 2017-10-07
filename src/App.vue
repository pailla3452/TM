<template>
  <!-- v-app es principal fuera de main NO ES ESTATICO-->
  <v-app>
    <!-- SIDEBAR-->
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to='item.link'>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        v-if="userIsAuthenticated"
        @click="onSignOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Log out</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- TOOLBAR principal -->
    <v-toolbar dark class="primary">
      <!-- Open sidebar -->
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <!-- Toolbar :B -->
      <v-toolbar-title>
        <router-link flat to='/' tag='span' style="cursor: pointer">
           <v-icon left dark class="mr-1 mb-1">school</v-icon>
           Collège
         </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer >
      <v-toolbar-items class="hidden-xs-only">
        <!-- Array of MENU ITEMS -->
        <v-btn flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat
        @click="onSignOut"
        v-if="userIsAuthenticated">
          <v-icon left>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- El resto del app!! -->
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        var menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            // {icon: 'home', title: 'Home', link: '/'},
            {icon: 'assignment', title: 'Devoirs', link: '/output/devoirs'},
            {icon: 'report', title: 'Epreuves', link: '/output/epreuves'},
            {icon: 'date_range', title: 'Horaire', link: '/output/horaire'},
            {icon: 'trending_up', title: 'Notes', link: '/output/notes'},
            {icon: 'view_week', title: 'Subjects', link: '/output/subjects'},
            {icon: 'build', title: 'Config', link: '/profile'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onSignOut () {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
