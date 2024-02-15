// src/index.js
import { createComponent, updateState } from 'ui-library';

function App() {
  return h('div', [
    h('h1', currentState.count),
    h('button', { on: { click: () => updateState({ count: currentState.count + 1 }) } }, 'Add'),
  ]);
}

createComponent(App, { count: 0 });
