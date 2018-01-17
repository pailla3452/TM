<template lang="html">
  <v-container>
    <v-layout row wrap class="mt-2 mb-4">
      <v-flex xs12 >
        <h3>Bienvenu!</h3>
      </v-flex>
    </v-layout>
    <!-- PROGRESS -->
    <v-layout row wrap class="mt-2 mb-4">
      <v-flex xs6 offset-xs1 class="mt-3">
        <!-- DEVOIRS -->
        <v-progress-circular
          v-bind:size="150"
          v-bind:width="10"
          v-bind:rotate="-90"
          v-bind:value="100"
          class="cyan--text text--darken-3"
        >
          <h3 class="mt-3">{{ devoirs.length }}</h3>
        </v-progress-circular>
        <h4>Devoirs</h4>
      </v-flex>
      <v-layout>
        <v-flex xs6 offset-xs3>
          <!-- EPREUVES -->
          <v-progress-circular
            v-bind:size="75"
            v-bind:width="5"
            v-bind:rotate="-90"
            v-bind:value="100"
            class="deep-orange--text text--darken-3"
          >
            <h4 class="mt-3">{{ epreuves.length }}</h4>
          </v-progress-circular>
          <h5 class="ml-2 deep-orange--text text--darken-3">Epreuves</h5>
          <!-- REMINDERS -->
          <v-progress-circular
          v-bind:size="75"
          v-bind:width="5"
          v-bind:rotate="-90"
          v-bind:value="100"
          class="blue--text text--darken-3"
          >
            <h4 class="mt-3">{{ reminders.length }}</h4>
          </v-progress-circular>
          <h5 class="ml-1 blue--text text--darken-3">Reminders</h5>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-divider class="mt-2 mb-4"></v-divider>
    <!-- BOTONES 1.Horaire 2.Nouveau devoir-->
    <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn flat large router to='/output/horaire' class="blue darken-2" dark>
            <v-icon left>dashboard</v-icon>
            Horaire</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
            <v-btn large outline fab slot="activator" primary>
              <v-icon>note_add</v-icon></v-btn>
            <app-nouveauDev @closeEmited="dialog = false"></app-nouveauDev>
          </v-dialog>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    epreuves () {
      return this.$store.getters.loadedEpreuves
    },
    devoirs () {
      return this.$store.getters.loadedDevoirs
    },
    reminders () {
      return this.$store.getters.loadedReminders
    }
  }
}
</script>

<style lang="css" scoped>
  div{
    text-align: center;
  }
</style>
