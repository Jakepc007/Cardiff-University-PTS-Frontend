<template>
  <v-hover>
    <template v-slot="{ hover }">
      <div>
        <v-card class="record-card" ripple outlined :elevation="hover ? 2 : 0">
          <router-link :to="{ path: 'records/' + r.id }">
            <v-list-item three-line>
              <v-list-item-content>
                <div>
                  <span class="red--text">{{ r.id }} | </span>
                  <span>{{ r.title }}</span>
                </div>
                <v-list-item-subtitle>{{ status }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-card>
      </div>
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
  },
  computed: {
    status() {
      return this.r.statuses.slice(-1)[0].status.name
    }
  }
}
</script>

<style scoped>
.record-card {
  margin-left: auto;
  margin-right: auto;
  background: white;
}

a {
  text-decoration: none;
}
</style>
