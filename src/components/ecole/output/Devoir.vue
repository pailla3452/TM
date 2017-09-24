<template lang="html">
  <v-container>
    <p>{{devoir.id}}</p>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    devoir () {
      return this.$store.getters.loadedDevoir(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
