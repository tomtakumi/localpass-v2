<template>
  <v-app dark>
    <v-layout row>
      <v-flex>
        <v-card tile>          
          <v-toolbar dark dense fixed app>
            <v-toolbar-title class="orange--text">LocalPass</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>    
          <main>
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </main>
          <v-btn fab fixed color="orange" bottom right @click="add" small>
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
  }
};
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
  .slide-leave-active,
  .slide-enter-active {
    transition: 0.3s;
  }
</style>
