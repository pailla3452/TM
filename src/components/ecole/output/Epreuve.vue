<template lang="html">
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media>
          <v-progress-circular
          :size="150"
          :width="5"
          :value="100"
          :class="[epreuve.color] + ' mt-3 mb-2'">
            <v-icon x-large @click="onSelect">{{icon}}</v-icon>
          </v-progress-circular>
          <h3>{{epreuve.title}}</h3>
          <h6 :class="epreuve.color">({{epreuve.subject}})</h6>
        </v-card-media>
        <v-card-title>
          <h5><strong>Date: {{epreuve.date}}</strong></h5>
          <h5><strong>Information: </strong>{{epreuve.description}}</h5>
        </v-card-title>
        <v-card-text class="pt-0">
          <h3>Note <v-icon>add</v-icon></h3>
          <v-radio-group v-model="note" row>
            <v-radio label="1" value="1" color="red"></v-radio>
            <v-radio label="2" value="2" color="red"></v-radio>
            <v-radio label="3" value="3" color="red"></v-radio>
            <v-radio label="4" value="4" color="red"></v-radio>
            <v-radio label="5" value="5" color="red"></v-radio>
            <v-radio label="6" value="6" color="red"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn fab :class="[epreuve.color] + ' mb-3'" outline @click="onDelete"><v-icon>delete</v-icon></v-btn>
          <v-btn fab :class="[epreuve.color] + ' mb-3'" outline @click="onSave"><v-icon>done</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      note: 0,
      icon: 'report'
    }
  },
  computed: {
    epreuve () {
      return this.$store.getters.loadedEpreuve(this.id)
    }
  },
  methods: {
    onSelect () {
      console.log(this.note)
    },
    onSave () {
      this.$store.dispatch('updateEpreuve', {id: this.epreuve.id, note: this.note})
      this.$router.push('/')
    },
    onDelete () {
      this.$store.dispatch('deleteData', {id: this.epreuve.id, type: 'epreuves'})
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'report', text: 'Epreuve', color: 'grey darken-3'})
  },
  beforeDestroy () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'school', text: 'Upper', color: 'primary'})
  }
}
</script>

<style lang="css" scoped>
 div{
   text-align: center;
 }
</style>
