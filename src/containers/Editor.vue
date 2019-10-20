<template>
  <div class="page__editor editor">
    <Form />
    <Result />
  </div>
</template>

<style>
.editor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;

  &__column {
    flex-basis: 50%;
    width: 50%;
  }
}
</style>

<script>
import Form from 'components/editor/Form';
import Result from 'components/editor/Result';

export default {
  name: 'Editor',
  components: {
    Form,
    Result
  }
};
</script>
