<template>
  <v-container id="imagen">
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @closeEmitted="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-container>
            <h3>Se connecter</h3>
            <v-layout>
              <v-flex xs12 class="text-xs-center mb-3 mt-2">
                <v-icon large>fingerprint</v-icon>
              </v-flex>
            </v-layout>
            <form @submit.prevent="onSignIn">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="email"
                  label="e-mail"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="password"
                  label="Mot de passe"
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 class="text-xs-center mt-3">
                  <v-btn type="submit">Se connecter</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  }
}

</script>

<style lang="css" scoped>
  h3{
    text-align: center;
  }
  /*#imagen{
    background-image: url(../../assets/signIn.jpg);
    background-size: 100% 100%;
  }*/
</style>
