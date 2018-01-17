<template lang="html">
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media>
          <v-progress-circular
          :size="150"
          :width="5"
          :value="100"
          :class="[devoir.color] + ' mt-3 mb-2'">
            <v-icon x-large>{{icon}}</v-icon>
          </v-progress-circular>
          <h3>{{devoir.title}}</h3>
          <h6 :class="devoir.color">({{devoir.subject}})</h6>
        </v-card-media>
        <v-card-title>
          <h5><strong>A faire pour le: {{devoir.date}}</strong></h5>
          <h5>Notes: {{devoir.description}}</h5>
        </v-card-title>
        <v-card-text>
          <v-slider @click="onSlide" v-model="slider.val" thumb-color="red" thumb-label></v-slider>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn fab :class="[devoir.color] + ' mb-3'" outline @click="onDelete"><v-icon>delete</v-icon></v-btn>
          <v-btn fab :class="[devoir.color] + ' mb-3'" outline @click="onSave"><v-icon>done</v-icon></v-btn>
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
      slider: {label: 'thumb-color', val: 0, color: 'primary'},
      icon: 'assignment'
    }
  },
  computed: {
    devoir () {
      return this.$store.getters.loadedDevoir(this.id)
    }
  },
  methods: {
    onSlide () {
      console.log('LA VALOR NUEVA ES: ' + this.slider.val)
    },
    onSave () {
      this.$store.dispatch('updateDevoir', {id: this.devoir.id, progres: this.slider.val})
      this.$router.push('/output/devoirs')
    },
    onDelete () {
      this.$store.dispatch('deleteData', {id: this.devoir.id, type: 'devoirs'})
      this.$router.push('/output/devoirs')
    }
  },
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'assignment', text: 'Devoir', color: 'grey darken-3'})
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
