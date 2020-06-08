<template>
  <router-link :to="{ params: { id: r.id } }">
    <v-card
      class="record-card"
      :raised="hover"
      ripple
      outlined
      width="full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div>{{ r.title }}</div>
          <v-list-item-subtitle>{{ r.desc }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </router-link>
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
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.record-card {
  border-radius: 100px;
  background: rgb(255, 238, 238);
}

a {
  text-decoration: none;
}
</style>
