<template lang="html">
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
          v-for="(item, i) in menuItems"
          :src="item.imageUrl"
          :key="i">
          </v-carousel-item>
        </v-carousel>
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
          <v-btn flat outline large router to='/input/nouveaudevoir' class="blue--text text--darken-2" dark>
            <v-icon left class="blue--text text--darken-2">note add</v-icon>
            Ajouter un devoir</v-btn>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {imageUrl: 'http://www.couleurvoyage.com/wp-content/uploads/2016/02/hong-kong.jpg'},
        {imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/12/20/17/santiago031-.jpg'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
