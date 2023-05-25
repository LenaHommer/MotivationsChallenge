<template>
  <div>
      <v-app-bar>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light">my</span>
          <span>Discipline</span>
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <v-btn @click="signout">
          logout
          <v-icon
            end
            icon="mdi-export"
          ></v-icon>
        </v-btn>
      </v-app-bar>
        
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list>
          <v-list-subheader>let's get started</v-list-subheader>
          <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          router :to="item.route"
          active-color="bg-vue2"
          >

          <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

        

        <v-list v-model:opened="open">
        <v-list-group value="Profil">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon='mdi-account'
              title="Profil"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="(profile, i) in profiles"
            :key="i"
            :value="profile"
            router :to="profile.route"
          >

          <template v-slot:prepend>
          <v-icon :icon="profile.icon"></v-icon>
        </template>
        <v-list-item-title>{{ profile.title }}</v-list-item-title>
          </v-list-item>
        
  
  
        </v-list-group>
    </v-list>
        



      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "TheNavbar",
    data: () => ({
        drawer: false,
        group: null,
        items: [
          { title: 'Home',icon: 'mdi-home', route: "/first" },
          { title: 'new Challenge',icon: 'mdi-plus-outline', route: '/create/challenge' },
          { title: 'laufende Challenge', icon: 'mdi-file-outline',route: '/running/challenge' },
        ],
        open: ['Users'],
        profiles: [
        { title: 'Profil', icon: 'mdi-account', route: '/profiledata' },
        { title: 'Einstellungen', icon: 'mdi-cog-outline', route: '/profile' }
      ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
        async signout() {
            try {
            await this.$store.dispatch("signout");
            this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
    },

};
</script>

<style scoped>

</style>