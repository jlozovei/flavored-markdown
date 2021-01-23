<template>
  <div class="snackbar">{{ message }}</div>
</template>

<style scoped>
.snackbar {
  position: fixed;
  top: 6rem;
  right: 2rem;
  padding: 1rem;
  background-color: #42b983;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 0 20px -10px rgba(20, 20, 20, 0.5);
  opacity: 1;
  visibility: visible;
  transition: all ease-in-out 400ms -200ms;

  &:empty {
    opacity: 0;
    visibility: hidden;
  }
}
</style>

<script>
export default {
  name: 'Snackbar',
  props: {
    message: String
  },
  updated() {
    const TIMEOUT = 5_000;

    setTimeout(() => {
      this.$store.dispatch({
        type: 'showSnackbar',
        value: null
      });
    }, TIMEOUT);
  },
  computed: {
    isActive() {
      return this.$store.getters.snackbar !== null;
    }
  }
};
</script>
