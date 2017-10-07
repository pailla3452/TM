<template lang="html">
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">

  </v-dialog>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    devoir () {
      return this.$store.getters.loadedDevoir(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
