<template>
  <v-content>
    <v-list subheader dense>    
      <password v-for="password in allPasswords" :key="password.group" :password="password"></password>
    </v-list>    
  </v-content>
</template>

<script>
import Password from "./Password.vue";
import { mapGetters } from 'vuex'
export default {
  components: {
    Password
  },
  computed: {
    ...mapGetters(['allPasswords'])
  }
}
</script>

