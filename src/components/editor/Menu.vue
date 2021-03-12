<template>
  <nav class="menu">
    <div class="menu__option">
      <label for="md-style">Style:</label>
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
    </div>

    <div class="menu__option">
      <button class="share-button" v-clipboard="() => shareURL()" v-clipboard:success="copySuccess">
        Share
      </button>
    </div>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin: 0 -0.5rem;

  & * {
    font-size: 1rem;
  }

  &__option {
    padding: 0 0.5rem;
  }

  select,
  button {
    height: 1.5rem;
    padding: 0.125rem 0.5rem;
    background-color: white;
    border: 1px solid #858585;
    border-radius: 2px;
  }

  select {
    margin-left: 0.5rem;
    padding-right: 1.625rem;
  }

  button {
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      flavors: [
        {
          name: 'Azure',
          value: 'azure'
        },
        {
          name: 'Bitbucket',
          value: 'bitbucket'
        },
        {
          name: 'GitHub',
          value: 'github'
        },
        {
          name: 'GitLab',
          value: 'gitlab'
        },
        {
          name: 'npm',
          value: 'npm'
        },
        {
          name: 'Yarn',
          value: 'yarn'
        }
      ]
    };
  },
  methods: {
    setFlavor(event) {
      const { value } = event.target;

      this.$store.dispatch({
        type: 'storeFlavor',
        value: value
      });

      this.$ga.event({
        eventCategory: 'Editor',
        eventAction: 'Changed glavor',
        eventLabel: value,
        eventValue: value
      });
    },

    shareURL() {
      const encoded = btoa(this.currentContent);
      const searchParams = new URLSearchParams(location.search);

      searchParams.set('md', encoded);

      return `${location.host}?${searchParams.toString()}`;
    },

    copySuccess({ value }) {
      this.$store.dispatch({
        type: 'showSnackbar',
        value: 'URL copied! You can share it everywhere. ✨'
      });

      this.$ga.event({
        eventCategory: 'Editor',
        eventAction: 'Copied',
        eventLabel: value,
        eventValue: value
      });
    }
  },
  computed: {
    availableFlavors() {
      return this.$data.flavors;
    },

    previousStoredFlavor() {
      return this.$store.getters.flavor;
    },

    currentContent() {
      return this.$store.getters.editor.markdown;
    }
  }
};
</script>
