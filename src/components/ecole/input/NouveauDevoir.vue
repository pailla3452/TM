<template lang="html">
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
    <v-btn large dark slot="activator" primary>
      <v-icon left >note_add</v-icon>Ajouter un devoir</v-btn>
    <v-card>
      <!-- Toolbar + TITRE -->
      <v-toolbar dark class="blue-grey lighten-2">
        <v-btn icon @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Nouveau Devoir</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon dark large class="mr-5">alarm_on</v-icon>
      </v-toolbar>
      <!-- CONTENT -->
      <form>
        <v-layout row>
          <v-flex xs10 sm6 offset-sm3 offset-xs1>
              <v-text-field
              name="title"
              label="Titre"
              id="title"
              v-model="title"
              required>
              </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <!-- DATE PICKER -->
          <v-flex  xs10 sm6 offset-sm3 offset-xs1>
            <v-menu
              lazy
              :close-on-content-click="false"
              v-model="menu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-left="40"
              max-width="290px"
            >
               <!-- TODO hacer fecha mas linda -->
              <v-text-field
                slot="activator"
                label="Date"
                v-model="date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" no-title scrollable actions>
                <template scope="{ save, cancel }">
                  <v-card-actions>
                    <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                    <v-btn flat primary @click.native="save()">Save</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <!-- TYPE -->
          <v-flex xs10 sm6 offset-sm3 offset-xs1>
            <v-select
              :items="types"
              v-model="type"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>
        </v-layout>
          <v-layout>
            <v-flex xs10 sm6 offset-sm3 offset-xs1>
                <v-text-field
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required>
                </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs10 sm6 offset-sm3 offset-xs1>
                <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"
                >Save</v-btn>
            </v-flex>
          </v-layout>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      // CONFIG
      menu: false,
      modal: false,
      dialog: false,
      // PR DEVOIR
      title: '',
      date: new Date(),
      type: '',
      description: '',
      // Types
      types: [
        {text: 'Devoir'},
        {text: 'Epreuve'},
        {text: 'Reminder'}
      ]
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.description !== '' && this.type !== ''
    }
  }
}
</script>

<style lang="css">
</style>
