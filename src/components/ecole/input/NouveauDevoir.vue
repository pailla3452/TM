<template lang="html">
  <v-card>
    <!-- Toolbar + TITRE -->
    <v-toolbar dark :class="colorFromSubject">
      <v-btn icon @click="emitClose">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Nouveau Devoir</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon dark large class="mr-3">note_add</v-icon>
    </v-toolbar>
    <!-- CONTENT -->
    <form @submit.prevent="onCreateDevoir" class="mt-2">
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
            <v-date-picker v-model="date" no-title scrollable actions class="blue--text">
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                  <v-btn flat primary @click.native="save()">Save</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <!-- SUBJECTS -->
        <v-flex xs10 sm6 offset-sm3 offset-xs1>
          <v-select
            :items="subjects"
            v-model="subject"
            label="Branche"
            single-line
            bottom
          ></v-select>
        </v-flex>
        <!-- TYPE -->
        <v-flex xs10 sm6 offset-sm3 offset-xs1>
          <v-select
            :items="types"
            v-model="type"
            label="Type"
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
</template>

<script>
export default {
  created () {
    const subjects = this.$store.state.subjects
    for (var i = 0, n = subjects.length; i < n; i++) {
      this.subjects.push({
        text: subjects[i].subject,
        colorOfSubject: subjects[i].colorFluid,
        colorForSubmit: subjects[i].color,
        id: subjects[i].id
      })
    }
  },
  data () {
    return {
      // CONFIG
      menu: false,
      modal: false,
      // PR DEVOIR
      title: '',
      description: '',
      date: '',
      subject: '',
      type: null,
      // Types
      types: [
        {text: 'Devoir'},
        {text: 'Epreuve'},
        {text: 'Reminder'}
      ],
      subjects: []
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.description !== '' && this.type !== ''
    },
    colorFromSubject () {
      if (!this.subject) {
        return 'cyan darken-2'
      }
      return this.subject.colorOfSubject
    }
  },
  methods: {
    emitClose () {
      this.$emit('closeEmited')
    },
    onCreateDevoir () {
      if (!this.formIsValid) {
        return
      }
      const devData = {
        subject: this.subject.text,
        title: this.title,
        description: this.description,
        date: this.date,
        color: this.subject.colorForSubmit,
        colorFluid: this.subject.colorOfSubject,
        subjectId: this.subject.id
      }
      // PARTICULARITES: EPREUVES: coef; DEVOIRS: - ; REMINDERS: heure
      if (this.type.text === 'Devoir') {
        this.$store.dispatch('createDevoir', devData)
        this.$emit('closeEmited')
        this.$router.push('/output/devoirs')
      } else if (this.type.text === 'Epreuve') {
        devData.coef = 'entusca'
        this.$store.dispatch('createEpreuve', devData)
        this.$emit('closeEmited')
        this.$router.push('/output/epreuves')
      } else {
        devData.heure = 'entusca'
        this.$store.dispatch('createReminder', devData)
        this.$emit('closeEmited')
        this.$router.push('/output/reminders')
      }
      this.title = ''
      this.subject = ''
      this.description = ''
      this.date = ''
      this.type = null
    }
  }
}
</script>

<style lang="css">
</style>
