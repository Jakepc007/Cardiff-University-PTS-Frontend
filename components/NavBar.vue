<template>
  <nav>
    <v-lazy>
      <v-app-bar flat color="white" height="80">
        <!-- consider passing CU svg here -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- <img
        style="width: 50px; margin-right: 1rem"
        src="~/assets/logo.png"
        @click="drawer = !drawer"
      /> -->

        <nuxt-link to="/">
          <v-toolbar-title>
            <div class="d-flex align-center" style="height: 100%">
              <img
                style="width: 60px; height: 60px; margin-right: 1rem"
                src="~/assets/logo.png"
                @click="drawer = !drawer"
              />
              <h2>
                <span class="brand-intro">Research Pipeline</span>
                <span class="brand-tag">: School of Engineering</span>
              </h2>
            </div>
          </v-toolbar-title>
        </nuxt-link>
        <v-spacer></v-spacer>

        <div v-if="!createState">
          <nuxt-link to="/records/create">
            <v-btn depressed class="create-new-record-desktop">
              Create New Record
              <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn depressed class="create-new-record-mobile">
              Create
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </nuxt-link>
        </div>

        <div v-if="createState">
          <nuxt-link to="/">
            <v-btn depressed class="create-new-record-desktop">
              <v-icon>mdi-arrow-left</v-icon>
              Back
            </v-btn>

            <v-btn depressed class="create-new-record-mobile">
              <v-icon>mdi-arrow-left</v-icon>
              Back
            </v-btn>
          </nuxt-link>
        </div>
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
        <div class="title">
          <p>Research Pipeline School of Engineering</p>
        </div>
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
  computed: {
    createState() {
      const r = this.$route.path
      if (r === '/records/create') {
        return true
      } else {
        return false
      }
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

.brand-tag {
  @media only screen and (max-width: 850px) {
    display: none;
  }
}

.brand-intro {
  @media only screen and (max-width: 500px) {
    display: none;
  }
}

.v-navigation-drawer {
  padding: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
