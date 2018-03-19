<template>
  <v-app dark>
    <v-layout row>
      <v-flex>
        <v-card tile>          
          <v-toolbar dark dense fixed app>
            <v-toolbar-title class="orange--text">Local Pass</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>    
          <main>
            <router-view></router-view>
          </main>
          <v-btn fab fixed color="orange" bottom right @click="add">
            <v-icon>{{ fabIcon }}</v-icon>
          </v-btn>
        </v-card>
      </v-flex>    
    </v-layout>
  </v-app>
</template>

<script>
import PasswordList from "./components/PasswordList.vue";
import Password from "./components/Password.vue";
export default {
  components: {
    PasswordList
  },
  data() {
    return {
      fabIcon: "add",
    };
  },
  methods: {
    add() {
    
      if (this.fabIcon === "add") {
        this.fabIcon = "keyboard_backspace"
        this.$router.push({ path: '/form' })
      } else {
        this.fabIcon = "add"
        this.$router.push({ path: '/' })
      }

    }
  },
  name: 'App'
};
</script>
