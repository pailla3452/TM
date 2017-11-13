<template lang="html">
  <v-container>

  </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'accessibility', text: 'watapuuun!', color: 'deep-purple lighten-3'})
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
