<template lang="html">
  <v-container>
    <v-layout row wrap class="mt-2 mb-4">
      <v-flex xs12 >
        <h3>Progrès Devoirs</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2 mb-4">
      <v-flex xs12 >
        <v-progress-circular
          v-bind:size="200"
          v-bind:width="15"
          v-bind:rotate="-90"
          v-bind:value="progres"
          class="teal--text"
        >
          <h3 class="mt-3">{{ progres }}</h3>
        </v-progress-circular>
        <v-divider class="mt-2 mb-4"></v-divider>
      </v-flex>
    </v-layout>
    <!-- BOTONES 1.Horaire 2.Nouveau devoir-->
    <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn flat large router to='/output/horaire' class="blue darken-2" dark>
            <v-icon left>dashboard</v-icon>
            Horaire</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <app-nouveauDev></app-nouveauDev>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      progres: 65,
      menuItems: [
        {imageUrl: 'http://www.couleurvoyage.com/wp-content/uploads/2016/02/hong-kong.jpg'},
        {imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/20/17/santiago031-.jpg'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  div{
    text-align: center;
  }
</style>
