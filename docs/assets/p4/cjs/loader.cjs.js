'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9711ecf8.js');

/*
 Stencil Client Patch Esm v2.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["p4-checkbox.cjs",[[1,"p4-checkbox",{"label":[1],"variant":[1],"value":[4],"size":[1],"required":[4],"disabled":[4]}]]],["p4-grid.cjs",[[1,"p4-grid",{"columnConfig":[16],"data":[16],"selectionType":[1,"selection-type"],"selectedRows":[16],"rowKey":[1,"row-key"],"hoverRecord":[32],"isSelectAll":[32]}]]],["p4-button.cjs",[[1,"p4-button",{"size":[1],"variant":[1],"block":[4],"disabled":[4]}]]],["p4-icon_7.cjs",[[1,"p4-select",{"name":[1],"placeholder":[1],"value":[1032],"size":[1],"variant":[1],"required":[4],"disabled":[4],"showLoader":[4,"show-loader"],"filterOptions":[4,"filter-options"],"config":[8],"options":[1],"actions":[16],"clearInput":[4,"clear-input"],"debounce":[2],"activeOption":[32],"hasFocus":[32],"mode":[32],"searchString":[32],"setFocus":[64],"setBlur":[64]}],[1,"p4-input",{"name":[1],"placeholder":[1],"value":[1032],"size":[1],"variant":[1],"type":[1],"disabled":[4],"required":[4],"clearInput":[4,"clear-input"],"debounce":[2],"autocomplete":[1],"hasFocus":[32],"setFocus":[64],"setBlur":[64]}],[1,"p4-textarea",{"name":[1],"placeholder":[1],"value":[1],"size":[1],"variant":[1],"inline":[4],"type":[1],"disabled":[4],"required":[4],"clearInput":[4,"clear-input"],"debounce":[2],"hasFocus":[32],"setFocus":[64],"setBlur":[64]}],[1,"p4-item"],[1,"p4-label"],[1,"p4-spinner",{"variant":[1],"size":[1]}],[1,"p4-icon",{"type":[1],"variant":[1],"size":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;