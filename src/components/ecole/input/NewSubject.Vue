<template lang="html">
  <v-card>
    <v-card-title>
      <div class="headline">Use Google's location service?</div>
    </v-card-title>
    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="green--text darken-1" flat="flat" @click="emitClose">Disagree</v-btn>
      <v-btn class="green--text darken-1" flat="flat" @click="emitClose">Agree</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    emitClose () {
      this.$emit('closeEmited')
    }
  }
}
</script>

<style lang="css">
</style>
