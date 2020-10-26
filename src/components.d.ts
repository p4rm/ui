/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface P4Button {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block": boolean;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'primary' | 'dashed' | 'danger' | 'link';
    }
    interface P4Checkbox {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The checkbox label.
         */
        "label": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value": boolean;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | string;
        "type": string;
        /**
          * Icon variants to add additional styling Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'primary' | 'danger' | 'success';
    }
    interface P4Input {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `ion-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The type of control to display. The default type is text.
         */
        "type": ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
        /**
          * Input field variants to add additional styling Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
    }
    interface P4Item {
    }
    interface P4Label {
    }
    interface P4Select {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        "config": any | string;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "filterOptions": boolean;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "options": any[] | string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `ion-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value": string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
    }
    interface P4Spinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | string;
        /**
          * Spinner variants to add additional styling Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'primary' | 'danger' | 'success';
    }
    interface P4Textarea {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * If true, the form will be in inline format. Defaults to `false`.
         */
        "inline": boolean;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `ion-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"text"`. Defaults to `"text"`.
         */
        "type": 'text' | 'number';
        /**
          * The input field value.
         */
        "value": string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
    }
}
declare global {
    interface HTMLP4ButtonElement extends Components.P4Button, HTMLStencilElement {
    }
    var HTMLP4ButtonElement: {
        prototype: HTMLP4ButtonElement;
        new (): HTMLP4ButtonElement;
    };
    interface HTMLP4CheckboxElement extends Components.P4Checkbox, HTMLStencilElement {
    }
    var HTMLP4CheckboxElement: {
        prototype: HTMLP4CheckboxElement;
        new (): HTMLP4CheckboxElement;
    };
    interface HTMLP4IconElement extends Components.P4Icon, HTMLStencilElement {
    }
    var HTMLP4IconElement: {
        prototype: HTMLP4IconElement;
        new (): HTMLP4IconElement;
    };
    interface HTMLP4InputElement extends Components.P4Input, HTMLStencilElement {
    }
    var HTMLP4InputElement: {
        prototype: HTMLP4InputElement;
        new (): HTMLP4InputElement;
    };
    interface HTMLP4ItemElement extends Components.P4Item, HTMLStencilElement {
    }
    var HTMLP4ItemElement: {
        prototype: HTMLP4ItemElement;
        new (): HTMLP4ItemElement;
    };
    interface HTMLP4LabelElement extends Components.P4Label, HTMLStencilElement {
    }
    var HTMLP4LabelElement: {
        prototype: HTMLP4LabelElement;
        new (): HTMLP4LabelElement;
    };
    interface HTMLP4SelectElement extends Components.P4Select, HTMLStencilElement {
    }
    var HTMLP4SelectElement: {
        prototype: HTMLP4SelectElement;
        new (): HTMLP4SelectElement;
    };
    interface HTMLP4SpinnerElement extends Components.P4Spinner, HTMLStencilElement {
    }
    var HTMLP4SpinnerElement: {
        prototype: HTMLP4SpinnerElement;
        new (): HTMLP4SpinnerElement;
    };
    interface HTMLP4TextareaElement extends Components.P4Textarea, HTMLStencilElement {
    }
    var HTMLP4TextareaElement: {
        prototype: HTMLP4TextareaElement;
        new (): HTMLP4TextareaElement;
    };
    interface HTMLElementTagNameMap {
        "p4-button": HTMLP4ButtonElement;
        "p4-checkbox": HTMLP4CheckboxElement;
        "p4-icon": HTMLP4IconElement;
        "p4-input": HTMLP4InputElement;
        "p4-item": HTMLP4ItemElement;
        "p4-label": HTMLP4LabelElement;
        "p4-select": HTMLP4SelectElement;
        "p4-spinner": HTMLP4SpinnerElement;
        "p4-textarea": HTMLP4TextareaElement;
    }
}
declare namespace LocalJSX {
    interface P4Button {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block"?: boolean;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * On click of button a CustomEvent 'p4Click' will be triggered.
         */
        "onP4Click"?: (event: CustomEvent<any>) => void;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'primary' | 'dashed' | 'danger' | 'link';
    }
    interface P4Checkbox {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The checkbox label.
         */
        "label"?: string;
        /**
          * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value"?: boolean;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | string;
        "type"?: string;
        /**
          * Icon variants to add additional styling Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'primary' | 'danger' | 'success';
    }
    interface P4Input {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onP4Blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4Focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4Input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
        /**
          * Input field variants to add additional styling Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface P4Item {
    }
    interface P4Label {
    }
    interface P4Select {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        "config"?: any | string;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "filterOptions"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onP4Blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4Focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4Input"?: (event: CustomEvent<any>) => void;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "options"?: any[] | string;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        "showLoader"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value"?: string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface P4Spinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | string;
        /**
          * Spinner variants to add additional styling Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'primary' | 'danger' | 'success';
    }
    interface P4Textarea {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * If true, the form will be in inline format. Defaults to `false`.
         */
        "inline"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onP4Blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4Focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4Input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"text"`. Defaults to `"text"`.
         */
        "type"?: 'text' | 'number';
        /**
          * The input field value.
         */
        "value"?: string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface IntrinsicElements {
        "p4-button": P4Button;
        "p4-checkbox": P4Checkbox;
        "p4-icon": P4Icon;
        "p4-input": P4Input;
        "p4-item": P4Item;
        "p4-label": P4Label;
        "p4-select": P4Select;
        "p4-spinner": P4Spinner;
        "p4-textarea": P4Textarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p4-button": LocalJSX.P4Button & JSXBase.HTMLAttributes<HTMLP4ButtonElement>;
            "p4-checkbox": LocalJSX.P4Checkbox & JSXBase.HTMLAttributes<HTMLP4CheckboxElement>;
            "p4-icon": LocalJSX.P4Icon & JSXBase.HTMLAttributes<HTMLP4IconElement>;
            "p4-input": LocalJSX.P4Input & JSXBase.HTMLAttributes<HTMLP4InputElement>;
            "p4-item": LocalJSX.P4Item & JSXBase.HTMLAttributes<HTMLP4ItemElement>;
            "p4-label": LocalJSX.P4Label & JSXBase.HTMLAttributes<HTMLP4LabelElement>;
            "p4-select": LocalJSX.P4Select & JSXBase.HTMLAttributes<HTMLP4SelectElement>;
            "p4-spinner": LocalJSX.P4Spinner & JSXBase.HTMLAttributes<HTMLP4SpinnerElement>;
            "p4-textarea": LocalJSX.P4Textarea & JSXBase.HTMLAttributes<HTMLP4TextareaElement>;
        }
    }
}
