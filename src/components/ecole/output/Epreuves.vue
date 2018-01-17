<template lang="html">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line subheader>
            <!-- TODO epreuves CETTE SEMAINE -->
            <v-subheader inset>Cette semaine</v-subheader>
            <!-- epreuveLIST ELEMENT -->
            <v-list-tile avatar
            v-for="epreuve in epreuves"
            :key="epreuve.id"
            :to="'/output/epreuves/' + epreuve.id"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{epreuve.title}}</v-list-tile-title>
                <v-list-tile-sub-title>{{epreuve.description}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>
                  {{epreuve.date}}
                  {{epreuve.subject}}
                </v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-card-text style="position: relative">
            <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
              <v-btn
              absolute
              dark
              fab
              bottom
              right
              class="deep-orange darken-3"
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
      dialog: false,
      dialogEpreuve: false
    }
  },
  computed: {
    epreuves () {
      return this.$store.getters.loadedEpreuves
    }
  },
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'report', text: 'Epreuves', color: 'primary'})
  },
  beforeDestroy () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'school', text: 'Upper', color: 'primary'})
  }
}
</script>

<style lang="css" scoped>
</style>
