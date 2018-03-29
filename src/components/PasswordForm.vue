<template>
  <v-content>
    <v-card-text>
      <span class="title">Add new password</span>
      <v-text-field label="System" v-model="password.system"></v-text-field>
      <v-text-field label="User ID" v-model="password.user_name"></v-text-field>
      <v-text-field label="Password" v-model="password.pass"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat @click="cancel">Cancel</v-btn>
      <v-btn flat @click="save">Save</v-btn>
    </v-card-actions>
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
  methods: {
    cancel() {
      this.$router.push({ path: '/' })
    },
    save() {
      this.$store.commit('savePassword', this.password)
      this.password = {}
    }
  }
};
</script>