<template>
  <div class="editor__column form-wrapper">
    <form class="form">
      <fieldset>
        <textarea @keyup="keyup" v-model="markdown" autofocus></textarea>
      </fieldset>
    </form>
  </div>
</template>

<style>
.form {
  position: relative;

  &,
  fieldset,
  textarea {
    height: 100%;
  }

  textarea {
    padding: 1em;
    width: 100%;
    resize: none;
    background-color: transparent;
    border: 0;
    color: #fff;
    font-family: monospace;
    font-size: 1.125em;
    line-height: 1.8;
  }
}
</style>

<script>
import marked from 'marked';
import Emoji from 'emoji-js';

export default {
  name: 'Form',
  data() {
    return {
      markdown: ''
    };
  },
  mounted() {
    if (this.hasPreviousData) {
      this.$data.markdown = this.urlData || this.previousStoredMarkdown;
      this.parse(this.rawMarkdown);
    } else {
      this.initialState();
    }
  },
  methods: {
    initialState() {
      const initialMarkdown = '# Start typing here :smile:';
      this.$data.markdown = initialMarkdown;

      this.$store.dispatch({
        type: 'storeMarkdown',
        value: initialMarkdown
      });

      this.parse(initialMarkdown);
    },

    keyup() {
      const markdown = this.rawMarkdown;

      this.parse(markdown);

      this.$store.dispatch({
        type: 'storeMarkdown',
        value: markdown
      });
    },

    parse(markdown) {
      // parse emojis
      const emojiConvertor = new Emoji.EmojiConvertor(),
        textWithEmojis = emojiConvertor.replace_colons(markdown);

      // parse html
      const htmlWithEmojis = marked(textWithEmojis);

      this.$store.dispatch({
        type: 'storeHTML',
        value: htmlWithEmojis
      });

      return htmlWithEmojis;
    }
  },
  computed: {
    rawMarkdown() {
      return this.$data.markdown;
    },

    previousStoredMarkdown() {
      return this.$store.getters['markdown'];
    },

    hasURLParam() {
      const searchParams = new URLSearchParams(location.search);

      return searchParams.get('md') !== '' && searchParams.get('md') !== null;
    },

    urlData() {
      const searchParams = new URLSearchParams(location.search);

      return location.search !== '' && atob(searchParams.get('md'));
    },

    hasPreviousData() {
      return this.hasURLParam || this.previousStoredMarkdown !== '';
    }
  }
};
</script>
