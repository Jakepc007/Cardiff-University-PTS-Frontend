<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-lazy
        :options="{
          threshold: 1
        }"
        transition="scroll-x-transition"
      >
        <v-card class="record-card" ripple outlined :elevation="hover ? 2 : 0">
          <router-link :to="{ path: 'records/' + r.id }">
            <v-list-item three-line>
              <v-list-item-content>
                <div>
                  <span class="red--text">{{ r.id }} | </span>
                  <span>{{ r.title }}</span>
                </div>
                <v-list-item-subtitle>{{ r.status }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-card>
      </v-lazy>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    r: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.record-card {
  margin-left: auto;
  margin-right: auto;
  background: rgb(255, 238, 238);
}

a {
  text-decoration: none;
}
</style>
