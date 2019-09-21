<template>
  <header class="page__header">
    <h1 class="header__title">Flavored Markdown</h1>

    <div class="header__menu"></div>

    <div class="header__disclaimer">
      Crafted with <span class="heart" aria-label="love">&hearts;</span> by
      <a href="https://jlozovei.dev" target="_blank" rel="noopener noreferrer"
        >jlozovei</a
      >
      | &copy; {{ currentYear }}
    </div>
  </header>
</template>

<style>
.page__header {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: space-between;
  padding: 1em;
  color: #fff;
  border-bottom: 1px solid #404040;

  h1 {
    font-size: 1.125em;
  }
}

.header {
  &__disclaimer {
    font-size: 0.875em;

    a {
      color: #67e6fd;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .heart {
      color: #bf2626;
    }
  }
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
