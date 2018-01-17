<template lang="html">
  <v-container>
    <p>{{epreuve.title}}</p>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    epreuve () {
      return this.$store.getters.loadedEpreuve(this.id)
    }
  }
}
</script>

<style lang="css" scoped>
 div{
   text-align: center;
 }
</style>
