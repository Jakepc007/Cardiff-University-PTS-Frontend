<template>
  <nav>
    <v-lazy>
      <v-app-bar flat color="white">
        <!-- consider passing CU svg here -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- <img
        style="width: 50px; margin-right: 1rem"
        src="~/assets/logo.png"
        @click="drawer = !drawer"
      /> -->

        <v-toolbar-title
          >Research Pipeline : School of Engineering
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn depressed class="create-new-record-desktop">
          Create New Record
          <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-btn depressed class="create-new-record-mobile">
          Create
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>
    </v-lazy>

    <v-navigation-drawer v-model="drawer" width="400" temporary app>
      <div class="img-and-title-header">
        <v-icon
          style="position: absolute; top: 1rem;  right: 1rem"
          large
          @click="toggleDrawer"
          >mdi-close</v-icon
        >

        <img
          style="width: 80px; height: 80px; margin-right: 1rem"
          src="~/assets/logo.png"
          @click="drawer = !drawer"
        />
        <span class="title">
          <p>Research Pipeline School of Engineering</p>
        </span>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
.create-new-record-desktop {
  @media only screen and (max-width: 900px) {
    display: none;
  }
}

.create-new-record-mobile {
  @media only screen and (min-width: 900px) {
    display: none;
  }
}

.v-navigation-drawer {
  padding: 1rem;
}
</style>
