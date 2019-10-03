<template>
  <nav>
    <label for="md-style">Style</label>
    <select id="md-style" @change="setFlavor">
      <option
        v-for="flavor in availableFlavors"
        :key="flavor.value"
        :value="flavor.value"
        :selected="flavor.value === previousStoredFlavor"
      >
        {{ flavor.name }}
      </option>
    </select>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      flavors: [
        {
          name: "GitHub",
          value: "github"
        },
        {
          name: "Bitbucket",
          value: "bitbucket"
        }
      ]
    };
  },
  methods: {
    setFlavor(event) {
      const flavor = event.target.value;

      this.$store.dispatch({
        type: "storeFlavor",
        value: flavor
      });
    }
  },
  computed: {
    availableFlavors() {
      return this.$data.flavors;
    },

    previousStoredFlavor() {
      return this.$store.getters.flavor;
    }
  }
};
</script>
