<template>
  <v-content>
    <form @keyup.enter="save">
      <v-card-text>
        <span class="subheading orange--text text--lighten-1">Add new password</span>
        <v-text-field label="System" v-model="password.system" required></v-text-field>
        <v-text-field label="User ID" v-model="password.user_name" required></v-text-field>
        <v-text-field label="Password" v-model="password.pass" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="cancel">Cancel</v-btn>
        <v-btn flat @click="save">Save</v-btn>
      </v-card-actions>
    </form>
  </v-content>
</template>

<script>
export default {
  props: {
    pass: {
      type: Object
    }
  },
  data() {
    return {
      password: {
        _id: 0,
        system: "", 
        user_name: "", 
        pass: "" 
      }
    }
  },
  created() {
    if (this.$route.params.system) {
      this.password = this.$store.getters.system(this.$route.params.system)
    }
  },
  methods: {
    cancel() {
      this.$router.push({ path: '/' })
    },
    save() {
      this.$store.commit('savePassword', this.password)
      this.password = {}
      this.$router.push({ path: '/' })
    }
  }
};
</script>