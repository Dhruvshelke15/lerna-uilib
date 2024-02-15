// ui-library/src/index.js
import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

let currentState;
let currentRender;

const patch = init([]);

function render(component) {
  currentRender = component;
  const newVNode = component();
  currentState = { ...currentState };
  patch(currentRender(), newVNode);
}

function createComponent(template, initialState = {}) {
  currentState = initialState;
  render(template);
}

function updateState(newState) {
  currentState = { ...currentState, ...newState };
  render(currentRender);
}

export { createComponent, updateState };
