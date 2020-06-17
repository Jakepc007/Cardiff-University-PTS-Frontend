<template>
  <div>
    <nuxt-link to="/records"><v-icon large>mdi-arrow-left</v-icon></nuxt-link>

    <div class="record-display">
      <!-- {{ record }} -->
      <!-- <ul>
        <li v-for="input in record" :key="input.label">{{ input }}</li>
      </ul> -->
      <h1>
        {{ record.title }}
      </h1>

      <!-- <h2 class="mt-2">Description</h2> -->
      <h4 class="grey--text text--darken-2">{{ record.description }}</h4>

      <v-divider class="my-2"></v-divider>

      <h2 class="mt-2">Status</h2>
      <h4 class="grey--text text--darken-2">{{ record.status }}</h4>

      <h2 class="mt-2">Scheme</h2>
      <h4 class="grey--text text--darken-2">{{ record.scheme }}</h4>

      <v-divider class="my-2"></v-divider>

      <h2 class="mt-2">Principal Investigator</h2>
      <h4 class="grey--text text--darken-2">
        {{ record['principal investigator'] }}
      </h4>

      <h2 class="mt-2">Co-investigators</h2>
      <h4 class="grey--text text--darken-2">
        {{ record['co-people'] }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {
      default() {},
      type: Object
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.record-display {
  width: 90%;
  margin-top: 3rem;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
}
</style>
