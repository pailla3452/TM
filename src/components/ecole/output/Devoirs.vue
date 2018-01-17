<template lang="html">
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="(devoir, i) in devoirs">
            <!-- TODO DEVOIRS CETTE SEMAINE -->
            <!-- TODO ONCLICK IR AL DEVOIR -->
              <!-- DEVOIR LIST ELEMENT -->
              <v-list-tile
              avatar
              ripple
              :key="devoir.id"
              :to="'/output/devoirs/' + devoir.id"
              >
                <v-list-tile-avatar>
                  <v-progress-circular
                  :value="devoir.progres"
                  v-bind:rotate="-90"
                  v-bind:class="[devoir.color]">
                </v-progress-circular>
                </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{devoir.title}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{devoir.description}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>
                    {{devoir.date}}
                    {{devoir.subject}}
                  </v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="i + 1 < devoirs.length"></v-divider>
              <!-- DEVOIR COMPONENT -->
          </template>
        </v-list>
        <v-card-text style="position: relative">
          <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
            <v-btn
            absolute
            dark
            fab
            bottom
            right
            class="cyan darken-3"
            slot="activator"
            >
              <v-icon>add</v-icon>
            </v-btn>
            <app-nouveauDev @closeEmited="dialog = false"></app-nouveauDev>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    devoirs () {
      return this.$store.getters.loadedDevoirs
    }
  }
}
</script>

<style lang="css">
</style>
