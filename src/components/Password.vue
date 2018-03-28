<template>
  <div class="list">  
    <v-subheader class="orange--text">{{ password.group }}</v-subheader>

    <v-list-group 
      v-for="item in password.passwords" 
      v-model="item.model" 
      :key="item._id"      
      :prepend-icon="item.model ? iconup : icondown"
      append-icon="" 
      no-action>

      <v-list-tile slot="activator">                       
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-1">{{ item.system }}</v-list-tile-title>
          <v-list-tile-sub-title>system</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click.stop>
          <v-menu bottom left>
            <v-btn icon slot="activator">
              <v-icon color="orange lighten-2">more_vert</v-icon>
            </v-btn>
            <v-list dense>
              <v-list-tile v-for="(item, i) in items" :key="i" @click=item.action>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyUser(item.user_name)">
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-2">{{ item.user_name }}</v-list-tile-title>
          <v-list-tile-sub-title>user name</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :ripple="{ class: 'orange--text' }" avatar @click="copyPass(item.pass)">
        <v-list-tile-content>
          <v-list-tile-title class="orange--text text--lighten-2">
            {{ passNotVissible( item.pass, toggleVisibility ) }}
          </v-list-tile-title>
          <v-list-tile-sub-title>password</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click.stop>
          <v-btn icon @click="showPassword()">
            <v-icon color="orange lighten-2" small>{{ visibilityIcon }}</v-icon>
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
      icondown: "keyboard_arrow_down",
      iconup: "keyboard_arrow_up",
      timeout: 1000,
      snackbar: false,
      msgUserCopied: "User name copied.",
      msgPassCopied: "Password copied.",
      snackbarText: "",
      toggleVisibility: false,
      visibilityIcon: 'visibility',
      items: [
        { title: 'Edit', 
          action: 'edit()' 
        },
        { title: 'Delete',
          action: 'delete()'
        }
      ]
    };
  },
  computed: {
    
  },
  methods: {
    showPassword() {
      if (this.visibilityIcon === 'visibility') {
        this.visibilityIcon = 'visibility_off'
        this.toggleVisibility = true
      } else {
        this.visibilityIcon = 'visibility'
        this.toggleVisibility = false
      }
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
    passNotVissible(pass, toggleVisibility) {
      let pwd 

      if (toggleVisibility) {
        pwd = pass        
      } else {
        pwd = `•`.repeat(pass.length)
      }
      
      return pwd
    },
    edit() {
      console.log('Edit clicked')
    },
    delete() {

    }
  }
};
</script>
