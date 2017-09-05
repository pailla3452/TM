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
        <router-link to='/' tag='span' style="cursor: pointer">Collège</router-link>
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
        sideNav: false,
        menuItems: [
          {icon: 'person', title: 'Profile', link: '/profile'},
          {icon: 'face', title: 'Sign up', link: 'signup'},
          {icon: 'lock_open', title: 'Sign in', link: 'signin'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
