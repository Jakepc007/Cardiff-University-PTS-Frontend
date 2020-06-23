<template>
  <h2 v-if="large">
    <div :class="{ 'text-center': center }">
      <v-icon large color="black" class="mr-1">{{ icon }}</v-icon>
      {{ title }}
    </div>
  </h2>

  <h3 v-else class="mb-2">
    <div :class="{ 'text-center': center }">
      <v-icon color="black" class="mr-1">{{ icon }}</v-icon>
      {{ title }}
    </div>
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    center: {
      default: false,
      type: Boolean
    },
    large: {
      default: false,
      type: Boolean
    }
  }
}
</script>
