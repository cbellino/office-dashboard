import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Dashboard/.stories');
  require('../src/components/InstancesList/.stories');
}

configure(loadStories, module);
