<template lang="html">
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card class="green">
          <v-card-title>
            <h3>Yais</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn fab ><v-icon>add</v-icon></v-btn>
            <v-btn fab> <v-icon>delete</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  created () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'bookmark', text: this.subject.subject, color: this.subject.colorFluid})
  },
  beforeDestroy () {
    this.$store.dispatch('changeToolbarInfo', {icon: 'school', text: 'Collège!', color: 'primary'})
  },
  computed: {
    subject () {
      return this.$store.getters.loadedSubject(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
