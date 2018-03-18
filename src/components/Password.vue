<template>
  <div>  
    <v-subheader class="orange--text">{{ password.group }}</v-subheader>

    <v-list-group v-for="item in password.passwords" :key="item._id">
      
      <v-list-tile slot="activator" class="px-0">                       
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-1">{{ item.system }}</v-list-tile-title>
          <v-list-tile-sub-title>system</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyUser(item.user_name)">
        <v-list-tile-avatar>
          <v-icon color="orange lighten-2">lock_outline</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-2">{{ item.user_name }}</v-list-tile-title>
          <v-list-tile-sub-title>User name</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click.stop>
          <v-btn icon @click="hover()">
            <v-icon color="orange lighten-2" small>edit</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyPass(item.pass)">
        <v-list-tile-avatar>
          <v-icon color="orange lighten-2">lock_open</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-2">
            {{ passNotVissible( item.pass ) }}
          </v-list-tile-title>
          <v-list-tile-sub-title>Password</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click.stop>
          <v-btn icon @click="hover()">
            <v-icon color="orange lighten-2" small>edit</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile> 

    </v-list-group>  

    <v-snackbar v-model="snackbar" bottom :timeout="timeout">{{ snackbarText }}
      <v-btn color="orange" dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

  </div>
</template>

<script>
export default {
  props: {
    password: {
      type: Object,
      default() {
        return {
          group: "<Group>",
          passwords: [
            {
              _id: 0,
              system: "<System>",
              user_name: "<User name>",
              pass: "<password>"
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      timeout: 1000,
      snackbar: false,
      msgUserCopied: "User name copied.",
      msgPassCopied: "Password copied.",
      snackbarText: "",
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      pwd: 'Password'
    };
  },
  computed: {
    
  },
  methods: {
    hover() {
      console.log("Edit clicked.");
    }, //delete later
    copyPass(value) {
      this.$clipboard(value);
      this.snackbarText = this.msgPassCopied;
      this.snackbar = true;
    },
    copyUser(value) {
      this.$clipboard(value);
      this.snackbarText = this.msgUserCopied;
      this.snackbar = true;
    },
    passNotVissible(pass) {
      return `*`.repeat(pass.length)
    }
  }
};
</script>
