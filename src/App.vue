<template>
  <div id="app">
    <Page>
      <Header />
      <Editor />
    </Page>
  </div>
</template>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/custom.css";
</style>

<script>
import Page from "containers/Page";
import Editor from "containers/Editor";
import Header from "containers/layout/Header";

export default {
  name: "app",
  components: {
    Page,
    Header,
    Editor
  }
};
</script>
