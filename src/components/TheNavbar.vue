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
          signout
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
        <!-- <v-list
          :items="items"
          router :to="items"
        ></v-list> -->

        <v-list>
          <v-list-subheader>DEIN BEREICH</v-list-subheader>

          <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          router :to="item.route"
          active-color="primary"
          >

          <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>

          </v-list-item>
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
          { title: 'new Challenge', route: '/create/challenge' },
          { title: 'laufende Challenge', route: '/running/challenge' },
          { title: 'Profil', icon: 'mdi-account', route: '/profile' }
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