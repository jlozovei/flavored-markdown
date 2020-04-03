import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Form from '../components/editor/Form';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Markup testing', () => {
  let store;
  let state;
  let actions;
  let wrapper;

  beforeEach(() => {
    state = {
      editor: {
        markdown: '',
        html: ''
      }
    };
    actions = {
      storeMarkdown: jest.fn(),
      storeHTML: jest.fn()
    };

    store = new Vuex.Store({
      actions,
      state
    });

    wrapper = shallowMount(Form, { store, localVue });
  });

  it('Should parse markdown to HTML', () => {
    const markdown = `# This test should:

- Parse the markdown correctly
- Create a title
- Create a list`;

    const html = `<h1 id="this-test-should">This test should:</h1>
<ul>
<li>Parse the markdown correctly</li>
<li>Create a title</li>
<li>Create a list</li>
</ul>
`;

    const expectedHTML = wrapper.vm.parse(markdown);
    expect(expectedHTML).toBe(html);
  });

  it('Should parse markdown and emojis to HTML', () => {
    const markdownWithEmojis = `# This test should:

- Parse the markdown correctly :smile:
- Create a title :pencil:
- Create a list :books:`;

    const html = `<h1 id="this-test-should">This test should:</h1>
<ul>
<li>Parse the markdown correctly <img src="/emoji-data/img-apple-64/1f604.png" class="emoji" data-codepoints="1f604" /></li>
<li>Create a title <img src="/emoji-data/img-apple-64/1f4dd.png" class="emoji" data-codepoints="1f4dd" /></li>
<li>Create a list <img src="/emoji-data/img-apple-64/1f4da.png" class="emoji" data-codepoints="1f4da" /></li>
</ul>
`;

    const expectedHTML = wrapper.vm.parse(markdownWithEmojis);
    expect(expectedHTML).toBe(html);
  });
});
