<template>
  <div class="page">
    <slot></slot>

    <Snackbar :message="snackbarMessage" />
  </div>
</template>

<script>
import Snackbar from '@/components/editor/Snackbar';

export default {
  name: 'Page',
  components: {
    Snackbar
  },
  computed: {
    snackbarMessage() {
      return this.$store.getters['snackbar'];
    }
  }
};
</script>
