<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @closeEmitted="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-container>
            <h3>Sign Up</h3>
            <form @submit.prevent="onSignup">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="email"
                  label="Mail"
                  id="email"
                  v-model="email"
                  type="email"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  v-model="password"
                  type="password"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <!--  rules: para hacer funcionar la computed property -->
                  <v-text-field
                  name="confirmPassword"
                  label="Confirm password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  :rules="[comparePasswords]"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit">Sign up</v-btn>
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
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : true
    },
    // TODO y q hago con esto??
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      // Vuex TODO + submit firebase TODO
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
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
