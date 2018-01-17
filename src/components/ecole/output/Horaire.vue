<template lang="html">
  <v-container>
    <v-progress-circular
    :size="150"
    :width="3"
    indeterminate
    class="red--text">
      <v-icon x-large>build</v-icon>
    </v-progress-circular>
    <h2>Cette page n'est pas toujours fini</h2>
    <hr>
    <v-icon>lightbulb_outline</v-icon>
  </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'dashboard', text: 'Horaire!', color: 'cyan darken-3'})
  },
  beforeDestroy () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'school', text: 'Collège!', color: 'primary'})
  },
  computed: {
    subjects () {
      return this.$store.getters.loadedSubjects
    }
  }
}
</script>

<style lang="css" scoped>
 div{
   text-align: center;
 }
</style>
