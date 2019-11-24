<template>
  <div class="editor__column result-wrapper">
    <div :class="`markdown-flavored markdown-flavored--${currentFlavor}`" v-html="parsedHTML"></div>
  </div>
</template>

<style>
@import '../../assets/css/flavors/azure/index.css';
@import '../../assets/css/flavors/bitbucket/index.css';
@import '../../assets/css/flavors/github/index.css';
@import '../../assets/css/flavors/gitlab/index.css';

.result-wrapper,
.markdown-flavored {
  background-color: #fff;
}

.markdown-flavored {
  height: 100%;
  width: 100%;
  padding: 1em;
  overflow: auto;
}
</style>

<script>
export default {
  name: 'Result',
  computed: {
    parsedHTML() {
      return this.$store.getters.html;
    },

    currentFlavor() {
      return this.$store.getters.flavor;
    }
  }
};
</script>
