import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Form from '../components/editor/Form';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Editor + store', () => {
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

  it('Should store markdown', () => {
    const textarea = wrapper.find('textarea');
    textarea.trigger('keydown.up', {});

    expect(actions.storeMarkdown).toHaveBeenCalledTimes(1);
  });

  it('Should store HTML', () => {
    const textarea = wrapper.find('textarea');
    textarea.trigger('keydown.up', {});

    expect(actions.storeHTML).toHaveBeenCalledTimes(1);
  });
});
