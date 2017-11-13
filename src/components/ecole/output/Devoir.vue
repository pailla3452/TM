<template lang="html">
  <v-card>
    <!-- Toolbar + TITRE -->
    <v-toolbar dark :class="devoir.colorFluid">
      <v-btn icon @click="emitClose">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Devoir</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon dark large class="mt-1">alarm_on</v-icon>
    </v-toolbar>
    <v-card-text>
      <h3>{{devoir.title}}</h3>
      <p>{{devoir.description}}</p>
      <v-slider v-model="devoir.progres" thumb-label step="10" snap></v-slider>
    </v-card-text>
    <v-card-actions>
      <v-btn>save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['idDev'],
  data () {
    return {
      devoir: ''
    }
  },
  methods: {
    emitClose () {
      console.log(this.devoir)
      this.$emit('closeEmitted')
    }
  },
  created () {
    this.devoir = this.$store.getters.loadedDevoir(this.idDev)
  },
  beforeDestroy () {
    console.log('Se destruyooooooOOOoOoOoOOOoOOOOooO')
  }
}
</script>

<style lang="css">
</style>
