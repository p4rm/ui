import { r as registerInstance, e as createEvent, h, f as Host } from './index-4fe82ab4.js';

const p4CheckboxCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}@-webkit-keyframes checkboxEffect{0%{transform:scale(1);opacity:0.5}100%{transform:scale(1.6);opacity:0}}@keyframes checkboxEffect{0%{transform:scale(1);opacity:0.5}100%{transform:scale(1.6);opacity:0}}.checkbox-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:var(--font-size-5, 1rem);}.checkbox-component .checkbox{margin:0;padding:0;color:rgba(0, 0, 0, 0.65);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";position:relative;display:inline-block;white-space:nowrap;vertical-align:middle;outline:none;cursor:pointer}.checkbox-component .checkbox-wrapper:hover .checkbox-inner,.checkbox-component .checkbox:hover .checkbox-inner,.checkbox-component .checkbox-input:focus+.checkbox-inner{border-color:var(--color-blue-7, #4087e2)}.checkbox-component .checkbox-checked::after{position:absolute;top:0;left:0;border:1px solid var(--color-blue-7, #4087e2);border-radius:2px;visibility:hidden;animation:checkboxEffect 0.36s ease-in-out;animation-fill-mode:backwards;content:\"\"}.checkbox-component .checkbox:hover::after,.checkbox-component .checkbox-wrapper:hover .checkbox::after{visibility:visible}.checkbox-component .checkbox-inner{position:relative;top:0;left:0;display:block;width:1.2em;height:1.2em;background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);border-radius:2px;border-collapse:separate;transition:all 0.3s}.checkbox-component .checkbox-inner::after{position:absolute;top:45%;left:12%;display:table;width:0.35em;height:0.7em;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(0) translate(-50%, -50%);opacity:0;transition:all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;content:\" \"}.checkbox-component .checkbox-input{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%;cursor:pointer;opacity:0;margin:0}.checkbox-component .checkbox-checked .checkbox-inner{background-color:var(--color-blue-7, #4087e2);border-color:var(--color-blue-7, #4087e2)}.checkbox-component .checkbox-checked .checkbox-inner::after{position:absolute;display:table;border:2px solid var(--color-white, #fff);border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%, -50%);opacity:1;transition:all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;content:\" \"}.checkbox-component .checkbox-disabled.checkbox-checked .checkbox-inner::after{animation-name:none}.checkbox-component .checkbox-disabled .checkbox-inner{background-color:#f5f5f5;border-color:#d9d9d9 !important}.checkbox-component .checkbox-disabled .checkbox-inner::after{border-color:#f5f5f5;border-collapse:separate;animation-name:none}.checkbox-component .checkbox-disabled,.checkbox-component .checkbox-disabled+span,.checkbox-component .checkbox-disabled .checkbox-input{cursor:not-allowed}.checkbox-component .checkbox-disabled:hover::after,.checkbox-component .checkbox-wrapper:hover .checkbox-disabled::after{visibility:hidden}.checkbox-component .checkbox-wrapper{display:flex;margin:0;padding:0;color:rgba(0, 0, 0, 0.65);cursor:pointer}.checkbox-component .checkbox-wrapper+.checkbox-wrapper{margin-left:8px}.checkbox-component .checkbox+span{padding-right:8px;padding-left:8px}.checkbox-component.variant-dashed .checkbox-inner{border-style:dashed}.checkbox-component.size-lg{font-size:var(--font-size-5, 1rem)}.checkbox-component.size-lg .checkbox{font-size:var(--font-size-6, 1.25rem)}.checkbox-component.size-md{font-size:var(--font-size-4, 0.875rem)}.checkbox-component.size-md .checkbox{font-size:var(--font-size-5, 1rem)}.checkbox-component.size-sm{font-size:var(--font-size-3, 0.8125rem)}";

const P4Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Change = createEvent(this, "p4Change", 7);
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The input field value.
     */
    this.value = false;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.onChange = (event) => {
      if (!this.disabled) {
        this.value = !JSON.parse(event.target.value);
        this.p4Change.emit({ value: this.value });
      }
    };
  }
  getCssClasses() {
    const cls = ['checkbox-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }
  render() {
    return (h(Host, null, h("div", { class: this.getCssClasses() }, h("label", { class: "checkbox-wrapper" }, h("span", { class: { 'checkbox': true, 'checkbox-checked': this.value, 'checkbox-disabled': this.disabled } }, h("input", { type: "checkbox", class: "checkbox-input", value: this.value + '', onClick: this.onChange, disabled: this.disabled }), h("span", { class: "checkbox-inner" })), this.label && h("span", null, this.label)))));
  }
};
P4Checkbox.style = p4CheckboxCss;

export { P4Checkbox as p4_checkbox };
