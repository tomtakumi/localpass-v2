<template>
  <div>  
    <v-subheader class="orange--text">{{ password.group }}</v-subheader>

    <v-list-group 
      v-for="item in password.passwords" 
      v-model="item.model" 
      :key="item._id"      
      :prepend-icon="item.model ? iconup : icondown"
      append-icon=""
      no-action
      >

      <v-list-tile slot="activator" class="px-0">                       
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-1">{{ item.system }}</v-list-tile-title>
          <v-list-tile-sub-title>system</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyUser(item.user_name)">
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-2">{{ item.user_name }}</v-list-tile-title>
          <v-list-tile-sub-title>User name</v-list-tile-sub-title>
        </v-list-tile-content>
        
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyPass(item.pass)">
        <v-list-tile-content>
          <!--<v-list-tile-title class="orange--text text--lighten-2">
            {{ passNotVissible( item.pass ) }}
          </v-list-tile-title>
          <v-list-tile-sub-title>Password</v-list-tile-sub-title>-->
          <v-text-field
            name="input-10-1"
            hint="At least 8 characters"
            v-model="pwd"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            disabled
          ></v-text-field>
        </v-list-tile-content>
        <!--<v-list-tile-action @click.stop>
          <v-btn icon @click="edit()">
            <v-icon color="orange lighten-2" small>visibility</v-icon>
          </v-btn>
        </v-list-tile-action>-->
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
      icondown: "keyboard_arrow_down",
      iconup: "keyboard_arrow_up",
      timeout: 1000,
      snackbar: false,
      msgUserCopied: "User name copied.",
      msgPassCopied: "Password copied.",
      snackbarText: "",
      pwd: "Password",
      e1: true,
      e2: false,
      e3: false,
      e4: false,
    };
  },
  computed: {
    
  },
  methods: {
    edit() {
      this.$router.push({ path: '/form' })
    },
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
