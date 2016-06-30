import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Dashboard/.stories');
}

configure(loadStories, module);
