import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../utils/utils';

let inputIds = 0;

@Component({
  tag: 'p4-select',
  styleUrl: 'p4-select.scss',
  shadow: true,
})
export class P4Select {

  @Element() el!: HTMLElement;

  private nativeInput?: HTMLInputElement;
  private displayElement?: HTMLElement;
  private tabindex?: string | number;
  private inputId = `p4-select-${inputIds++}`;

  @State() activeOption;
  @State() hasFocus = false;

  /**
   * The input field name.
   */
  @Prop() name: string = this.inputId;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: string | number | undefined;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() showLoader: boolean = false;

  @Prop() filterOptions: boolean = true;

  @Prop() type: 'select' | 'typeahead' | 'menu' = 'select';


  @Prop() config: any = { itemValue: 'value', itemLabel: 'label' };


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() options: any[] = [];


  @Prop() actions: any[] = [];

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearInput = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  @Prop() debounce = 0;


  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() p4Input: EventEmitter;

  /**
   * Emitted when the value has changed..
   */
  @Event() p4Change: EventEmitter;

  /**
   * Emitted when the action button is clicked..
   */
  @Event() p4ActionClick: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event() p4Blur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event() p4Focus: EventEmitter;


  @State() mode: 'edit' | 'read' = 'read';

  @State() searchString: string = '';


  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.type === 'select' || this.type === 'menu')
      this.displayElement.focus();
    else if (this.nativeInput)
      this.nativeInput.focus();
  }

  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }


  private onChange = (item) => {
    if (!this.disabled) {
      this.setReadable();
      this.value = this.getItemValue(item);
      this.searchString = '';
      this.p4Change.emit({ value: this.value, item });
    }
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.searchString = input.value || '';
    }
    this.p4Input.emit(ev);
  };

  private onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      if (this.activeOption)
        this.onChange(this.activeOption);
    } else if (ev.key === 'ArrowDown') {
      const options = this.getDisplayOptions();
      if (!this.activeOption)
        this.activeOption = options[0];
      else {
        const index = options.findIndex((option) => {
          return this.getItemValue(option) == this.getItemValue(this.activeOption);
        });
        this.activeOption = options[(index + 1) % options.length];
      }
    } else if (ev.key === 'ArrowUp') {
      const options = this.getDisplayOptions();
      if (!this.activeOption)
        this.activeOption = options[options.length - 1];
      else {
        const index = options.findIndex((option) => {
          return this.getItemValue(option) == this.getItemValue(this.activeOption);
        });
        this.activeOption = options[((options.length + index - 1) % options.length)];
      }
    }
  };

  onActionClick = (action) => {
    this.p4ActionClick.emit(action.name);
  };

  getOptionLabelByValue(value) {
    if (this.options) {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }


  private setEditable = () => {
    if (!this.disabled && this.mode == 'read') {
      if (this.options.length) {
        if (this.value)
          this.activeOption = this.options.find((option) => {
            return this.getItemValue(option) === this.value;
          });
        else
          this.activeOption = this.options[0];
      }
      this.mode = 'edit';
      setTimeout(() => {
        this.setFocus();
      }, 100);
    }
  };

  private setReadable = () => {
    if (!this.disabled && this.mode == 'edit') {
      this.mode = 'read';
    }
  };


  private onBlur = (evt) => {
    this.hasFocus = false;
    this.p4Blur.emit(evt);
    setTimeout(() => {
      this.setReadable();
    }, 300);
  };

  private onFocus = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.p4Focus.emit(ev);
  };


  private getItemValue(item) {
    return item[this.config.itemValue];
  }

  private getItemLabel(item) {
    return item[this.config.itemLabel];
  }


  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }


  private getComponentStyleClasses() {
    const cls = ['component input-component select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }

  private getActions() {
    return this.actions.map((action) => {
      return <button class="btn-action" type="button" onClick={() => this.onActionClick(action)}>
        <p4-icon type={action.icon} size="1rem" class="icon" />
      </button>;
    });
  }


  private getModeIcon() {
    if (this.showLoader)
      return <button type="button" disabled>
        <p4-spinner class="icon" size="1.5rem" />
      </button>;
    else if (this.mode === 'read') {
      return <button class="btn-action" type="button" onClick={() => setTimeout(() => this.setEditable())}>
        <p4-icon type="chevron-down" size="1rem" class="icon" />
      </button>;
    } else if (this.type === 'typeahead') {
      return <button type="button" disabled>
        <p4-icon type="search" size="1rem" class="icon" />
      </button>;
    } else {
      return <button class="btn-action" type="button" onClick={() => setTimeout(() => this.setReadable())}>
        <p4-icon type="chevron-up" size="1rem" class="icon" />
      </button>;
    }
  }

  private getDisplayOptions() {
    let options = [];
    if (typeof this.options !== 'string') {
      options = this.options;
      if (this.filterOptions)
        options = this.options.filter((item) => {
          return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
        });
    }
    return options;
  }

  private getOptions() {
    if (typeof this.options !== 'string') {
      const options = this.getDisplayOptions();

      if (this.mode == 'edit')
        return <div class="select-result">
          <div class="select-items">
            {
              options.length ?
                options.map((item) => {
                  return <div
                    class={{
                      'select-option': true,
                      'select-option-active': (this.activeOption && this.getItemValue(item) === this.getItemValue(this.activeOption)),
                    }}
                    data-value={this.getItemValue(item)}
                    on-mouseover={() => {
                      this.activeOption = item;
                    }} on-click={() => this.onChange(item)}>
                    {this.getItemLabel(item)}
                  </div>;
                })
                :
                (!this.searchString && !this.filterOptions && !this.showLoader) ?
                  (<div class="no-data">
                    <p4-icon type="pencil" size="100%" />
                    <div class="no-data-text">Please enter text to search</div>
                  </div>)
                  : (<div class="no-data">
                    <p4-icon type="inbox-fill" size="100%" />
                    <div class="no-data-text">No data</div>
                  </div>)

            }
          </div>
        </div>;
    }
  }


  async componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }

  private clearTextOnEnter = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter')
      this.clearTextInput(ev);
  };

  private clearTextInput = (ev?: Event) => {
    if (this.clearInput && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.value = null;
    this.searchString = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}
            class={{ 'has-focus': this.hasFocus, 'has-value': this.hasValue() }}>
        <div class={this.getComponentStyleClasses()}>
          <input class="native-input"
                 ref={input => this.nativeInput = input}
                 type="text"
                 aria-labelledby={labelId}
                 name={this.name}
                 value={this.searchString}
                 placeholder={this.placeholder}
                 tabindex={this.tabindex}
                 onBlur={this.onBlur}
                 onFocus={this.onFocus}
                 onInput={this.onInput}
                 onKeyDown={this.onKeyDown}
          />
          <div class="select-selection-item display-value" tabindex="1"
               onFocus={(evt) => {
                 if (this.type === 'menu' || this.type === 'select') {
                   this.onFocus(evt);
                 }
                 this.setEditable();
               }}
               ref={(el) => this.displayElement = el}
               onBlur={(evt) => {
                 if (this.type === 'menu' || this.type === 'select') {
                   this.onBlur(evt);
                 }
               }}
               onKeyDown={(evt) => {
                 if (this.type === 'menu' || this.type === 'select') {
                   if (evt.key === 'Enter' || evt.key === 'ArrowUp' || evt.key === 'ArrowDown') {
                     evt.preventDefault();
                     this.onKeyDown(evt);
                   }
                 }
               }}
               onClick={this.setEditable}>
            {
              this.type === 'menu' ? <slot></slot> : this.getOptionLabelByValue(this.value)
            }
          </div>
          <div class="input-actions">
            {(this.clearInput && this.type !== 'menu' && !this.disabled && this.hasValue()) && <button
              aria-label="reset"
              type="button"
              class="input-clear-icon"
              onTouchStart={this.clearTextInput}
              onMouseDown={this.clearTextInput}
              onKeyDown={this.clearTextOnEnter}
            >
              <p4-icon type="x" size="1.1rem" class="icon" />
            </button>}
            {this.getActions()}
            {this.getModeIcon()}
          </div>
          {this.getOptions()}
        </div>
      </Host>
    );
  }

}
