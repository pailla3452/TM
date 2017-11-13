<template lang="html">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line subheader>
            <!-- TODO reminder CETTE SEMAINE -->
            <v-subheader inset>Cette semaine</v-subheader>
            <!-- TODO ONCLICK IR AL reminder-->
            <v-dialog v-model="dialogReminder" lazy absolute v-for="reminder in reminders" :keys="reminder.id">
              <!-- reminder ELEMENT -->
              <v-list-tile avatar slot="activator">
                <v-list-tile-avatar>
                  <v-progress-circular
                  :value="reminder.progres"
                  v-bind:rotate="-90"
                  v-bind:class="[reminder.color]">
                  </v-progress-circular>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{reminder.title}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{reminder.description}}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>
                    {{reminder.date}}
                    {{reminder.subject}}
                  </v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>
              <!-- reminder COMPONENT-->
              <app-reminder @closeEmited="dialogReminder = false" :idEp="reminder.id"></app-reminder>
            </v-dialog>
          </v-list>
          <v-card-text style="position: relative">
            <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
              <v-btn
              absolute
              dark
              fab
              bottom
              right
              class="blue darken-3"
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
      dialogReminder: false
    }
  },
  computed: {
    reminders () {
      return this.$store.getters.loadedReminders
    }
  }
}
</script>

<style lang="css" scoped>
</style>
