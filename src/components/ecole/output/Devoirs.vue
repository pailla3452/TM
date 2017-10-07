<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line subheader>
            <!-- TODO DEVOIRS CETTE SEMAINE -->
            <v-subheader inset>Cette semaine</v-subheader>
            <!-- TODO ONCLICK IR AL DEVOIR -->
            <v-list-tile avatar v-for="devoir in devoirs" :keys="devoir.id" :to="'/output/devoirs/' + devoir.id">
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
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      devoirs: this.$store.state.devoirs
    }
  }
}
</script>

<style lang="css">
</style>
