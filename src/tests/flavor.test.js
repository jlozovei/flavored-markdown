import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Menu from '../components/editor/Menu';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Menu + store', () => {
  let store;
  let state;
  let actions;
  let wrapper;

  beforeEach(() => {
    state = {
      flavor: ''
    };
    actions = {
      storeFlavor: jest.fn()
    };

    store = new Vuex.Store({
      actions,
      state
    });

    wrapper = shallowMount(Menu, { store, localVue });
  });

  it('Should store flavor', () => {
    const select = wrapper.find('select');
    select.trigger('change', {});

    expect(actions.storeFlavor).toHaveBeenCalledTimes(1);
  });
});
