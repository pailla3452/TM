<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line subheader>
            <!-- TODO ONCLICK IR AL SUBJECT -->
            <v-list-tile avatar v-for="subject in subjects" :keys="subject.id" :to="'/output/subjects/' + subject.id">
              <!-- TODO PONER PROGRES!! -->
              <v-list-tile-content>
                <v-list-tile-title>{{subject.subject}}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn fab small flat :class="[subject.colorFluid]"></v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-card-text style="position: relative">
            <v-dialog v-model="dialog" lazy absolute>
              <v-btn
              absolute
              dark
              fab
              bottom
              right
              class="pink"
              slot="activator"
              >
                <v-icon>add</v-icon>
              </v-btn>
              <app-newSubject @closeEmited="dialog = false"></app-newSubject>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      subjects: this.$store.state.subjects
    }
  }
}
</script>

<style lang="css">
</style>
