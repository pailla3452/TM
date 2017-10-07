<template lang="html">
  <v-container>
    <v-progress-circular
    :size="150"
    :width="3"
    indeterminate
    class="red--text">
      <v-icon x-large>build</v-icon>
    </v-progress-circular>
    <h2>Este sitio esta en construcción!</h2>
    <hr>
    <p><v-icon>lightbulb_outline</v-icon> :)!</p>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
 div{
   text-align: center;
 }
</style>
