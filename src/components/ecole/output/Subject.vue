<template lang="html">
  <v-container>
    <h2 :class="[subject.color]">{{subject.subject}}</h2>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    subject () {
      return this.$store.getters.loadedSubject(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
