<template lang="html">
  <v-card>
    <!-- TODO Ya puedes pasar el color dentro de la funcion, ahora deberias -->
    <!-- TODO Usar la class para cambiar el stat property a true -->
    <!-- TODO Y ya sabes, hacer la wea funcionar -->
      <!-- Toolbar + TITRE -->
      <v-toolbar dark :class="[toolbarColor]">
        <v-btn icon @click.native="emitClose">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Branche</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon dark large>add</v-icon>
      </v-toolbar>
      <!-- CONTENT -->
      <form @submit.prevent="onCreateSubject" class="mt-2">
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
              <v-text-field
              name="subject"
              label="Branche"
              id="subject"
              v-model="subject"
              required>
              </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mr-3">
          <v-flex xs10 offset-xs1>
            <p>Couleur</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-layout row wrap>
              <!-- TYPE -->
              <v-flex xs3 v-for="(color, i) in colors" :key="i">
                <v-btn fab small :class="color.color" :disabled="color.stat" @click="onColorSelect(color)"></v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row class="mt-4">
          <v-flex xs10 sm6 offset-sm3 offset-xs1>
              <v-btn
              class="primary--text mb-2"
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
  data () {
    return {
      toolbarColor: 'yellow darken-4',
      subject: '',
      color: '',
      colors: [
        // COULEURS POR LES BRANCHES
        {color: 'red darken-4', stat: false},
        {color: 'pink darken-4', stat: false},
        {color: 'purple darken-4', stat: false},
        {color: 'deep-purple darken-4', stat: false},
        {color: 'indigo darken-4', stat: false},
        {color: 'blue darken-4', stat: false},
        {color: 'light-blue darken-4', stat: false},
        {color: 'cyan darken-4', stat: false},
        {color: 'teal darken-4', stat: false},
        {color: 'green darken-4', stat: false},
        {color: 'light-green darken-4', stat: false},
        {color: 'lime darken-4', stat: false},
        {color: 'yellow darken-4', stat: false},
        {color: 'amber darken-4', stat: false},
        {color: 'orange darken-4', stat: false},
        {color: 'deep-orange darken-4', stat: false},
        {color: 'brown darken-4', stat: false},
        {color: 'blue-grey darken-4', stat: false},
        {color: 'grey darken-4', stat: false}
      ]
    }
  },
  methods: {
    emitClose () {
      this.$emit('closeEmited')
    },
    onColorSelect (color) {
      var colorChanged = this.colors.find((colorIn) => {
        return colorIn.color === color.color
      })
      // TOUS les autres  --> false
      for (var i = 0, n = this.colors.length; i < n; i++) {
        this.colors[i].stat = false
      }
      // except selected
      colorChanged.stat = !colorChanged.stat
      // Toolbar colorChanged
      this.toolbarColor = colorChanged.color
      // Color for database
      this.color = colorChanged.color
    },
    onCreateSubject () {
      if (!this.formIsValid) {
        return
      }
      const subjectData = {
        subject: this.subject,
        // TODO TROUVER FAçON PLUS FACILE
        color: this.forColorText(this.color),
        colorFluid: this.color
      }
      this.$store.dispatch('createSubject', subjectData)
      this.$emit('closeEmited')
    },
    forColorText (a) {
      if (a.search(' ') === -1) {
        return a + '--text'
      }
      return a.slice(0, a.search(' ')) + '--text text--' + a.slice(a.search(' ') + 1, a.length)
    }
  },
  computed: {
    formIsValid () {
      return this.color !== '' && this.subject !== ''
    }
  }
}
</script>

<style lang="css" scoped>
  p{
    text-align: center;
  }
</style>
