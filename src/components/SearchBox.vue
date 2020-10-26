<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link :to="'/products/' + search">Products</router-link></li>
    </ul>
    <ais-search-box :attribute="attribute" v-model="search">
      <form action="" @submit.prevent="triggerSearch">
        <input
          type="text"
          v-model="search"
          placeholder="Start searching for an item"
          slot-scope=""
        />
      </form>
    </ais-search-box>
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    triggerSearch() {
      // refine($event.currentTarget.value)
      console.log("Searching...");
      this.$router.push({
        name: "Product",
        params: { search: this.search, data: this.search },
      });
    },
  },
};
</script>
