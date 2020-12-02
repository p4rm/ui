import{r as t,c as e,h as i,H as s,g as o}from"./p-785ecf5d.js";import{d as n,f as a}from"./p-e3657887.js";let r=0;const c=class{constructor(i){t(this,i),this.p4Input=e(this,"p4Input",7),this.p4Change=e(this,"p4Change",7),this.p4ActionClick=e(this,"p4ActionClick",7),this.p4Blur=e(this,"p4Blur",7),this.p4Focus=e(this,"p4Focus",7),this.inputId="p4-select-"+r++,this.hasFocus=!1,this.name=this.inputId,this.size="md",this.variant="default",this.required=!1,this.disabled=!1,this.showLoader=!1,this.filterOptions=!0,this.type="select",this.config={itemValue:"value",itemLabel:"label"},this.options=[],this.actions=[],this.clearInput=!1,this.debounce=0,this.mode="read",this.searchString="",this.onChange=t=>{this.disabled||(this.setReadable(),this.value=this.getItemValue(t),this.searchString="",this.p4Change.emit({value:this.value,item:t}))},this.onInput=t=>{const e=t.target;e&&(this.searchString=e.value||""),this.p4Input.emit(t)},this.onKeyDown=t=>{if("Enter"===t.key)this.activeOption&&this.onChange(this.activeOption);else if("ArrowDown"===t.key){const t=this.getDisplayOptions();if(this.activeOption){const e=t.findIndex((t=>this.getItemValue(t)==this.getItemValue(this.activeOption)));this.activeOption=t[(e+1)%t.length]}else this.activeOption=t[0]}else if("ArrowUp"===t.key){const t=this.getDisplayOptions();if(this.activeOption){const e=t.findIndex((t=>this.getItemValue(t)==this.getItemValue(this.activeOption)));this.activeOption=t[(t.length+e-1)%t.length]}else this.activeOption=t[t.length-1]}},this.onActionClick=t=>{this.p4ActionClick.emit(t.name)},this.setEditable=()=>{this.disabled||"read"!=this.mode||(this.options.length&&(this.activeOption=this.value?this.options.find((t=>this.getItemValue(t)===this.value)):this.options[0]),this.mode="edit",setTimeout((()=>{this.setFocus()}),100))},this.setReadable=()=>{this.disabled||"edit"!=this.mode||(this.mode="read")},this.onBlur=t=>{this.hasFocus=!1,this.p4Blur.emit(t),setTimeout((()=>{this.setReadable()}),300)},this.onFocus=t=>{this.hasFocus=!0,this.p4Focus.emit(t)},this.clearTextOnEnter=t=>{"Enter"===t.key&&this.clearTextInput(t)},this.clearTextInput=t=>{this.clearInput&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation()),this.value=null,this.searchString="",this.nativeInput&&(this.nativeInput.value="")}}debounceChanged(){this.p4Change=n(this.p4Change,this.debounce)}async setFocus(){"select"===this.type||"menu"===this.type?this.displayElement.focus():this.nativeInput&&this.nativeInput.focus()}async setBlur(){this.nativeInput&&this.nativeInput.blur()}getOptionLabelByValue(t){if(this.options){const e=this.options.find((e=>this.getItemValue(e)===t));return e?this.getItemLabel(e):this.placeholder}}getItemValue(t){return t[this.config.itemValue]}getItemLabel(t){return t[this.config.itemLabel]}hasValue(){return(this.value||"").toString().length>0}getComponentStyleClasses(){const t=["component input-component select-component"];return t.push("variant-"+this.variant),t.push("size-"+this.size),t.push("mode-"+this.mode),t.push("type-"+this.type),this.required&&t.push("required"),this.disabled&&t.push("disabled"),t.join(" ")}getActions(){return this.actions.map((t=>i("button",{class:"btn-action",type:"button",onClick:()=>this.onActionClick(t)},i("p4-icon",{type:t.icon,size:"1rem",class:"icon"}))))}getModeIcon(){return this.showLoader?i("button",{type:"button",disabled:!0},i("p4-spinner",{class:"icon",size:"1.5rem"})):"read"===this.mode?i("button",{class:"btn-action",type:"button",onClick:()=>setTimeout((()=>this.setEditable()))},i("p4-icon",{type:"chevron-down",size:"1rem",class:"icon"})):"typeahead"===this.type?i("button",{type:"button",disabled:!0},i("p4-icon",{type:"search",size:"1rem",class:"icon"})):i("button",{class:"btn-action",type:"button",onClick:()=>setTimeout((()=>this.setReadable()))},i("p4-icon",{type:"chevron-up",size:"1rem",class:"icon"}))}getDisplayOptions(){let t=[];return"string"!=typeof this.options&&(t=this.options,this.filterOptions&&(t=this.options.filter((t=>!this.searchString||this.getItemLabel(t).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()))))),t}getOptions(){if("string"!=typeof this.options){const t=this.getDisplayOptions();if("edit"==this.mode)return i("div",{class:"select-result"},i("div",{class:"select-items"},t.length?t.map((t=>i("div",{class:{"select-option":!0,"select-option-active":this.activeOption&&this.getItemValue(t)===this.getItemValue(this.activeOption)},"data-value":this.getItemValue(t),"on-mouseover":()=>{this.activeOption=t},"on-click":()=>this.onChange(t)},this.getItemLabel(t)))):this.searchString||this.filterOptions||this.showLoader?i("div",{class:"no-data"},i("p4-icon",{type:"inbox-fill",size:"100%"}),i("div",{class:"no-data-text"},"No data")):i("div",{class:"no-data"},i("p4-icon",{type:"pencil",size:"100%"}),i("div",{class:"no-data-text"},"Please enter text to search"))))}}async componentWillLoad(){if(this.el.hasAttribute("tabindex")){const t=this.el.getAttribute("tabindex");this.tabindex=null!==t?t:void 0,this.el.removeAttribute("tabindex")}}render(){const t=this.inputId+"-lbl",e=a(this.el);return e&&(e.id=t,this.required&&e.classList.add("required")),i(s,{"aria-disabled":this.disabled?"true":null,class:{"has-focus":this.hasFocus,"has-value":this.hasValue()}},i("div",{class:this.getComponentStyleClasses()},i("input",{class:"native-input",ref:t=>this.nativeInput=t,type:"text","aria-labelledby":t,name:this.name,value:this.searchString,placeholder:this.placeholder,tabindex:this.tabindex,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.onInput,onKeyDown:this.onKeyDown}),i("div",{class:"select-selection-item display-value",tabindex:"1",onFocus:t=>{"menu"!==this.type&&"select"!==this.type||this.onFocus(t),this.setEditable()},ref:t=>this.displayElement=t,onBlur:t=>{"menu"!==this.type&&"select"!==this.type||this.onBlur(t)},onKeyDown:t=>{"menu"!==this.type&&"select"!==this.type||"Enter"!==t.key&&"ArrowUp"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.onKeyDown(t))},onClick:this.setEditable},"menu"===this.type?i("slot",null):this.getOptionLabelByValue(this.value)),i("div",{class:"input-actions"},this.clearInput&&"menu"!==this.type&&!this.disabled&&this.hasValue()&&i("button",{"aria-label":"reset",type:"button",class:"input-clear-icon",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput,onKeyDown:this.clearTextOnEnter},i("p4-icon",{type:"x",size:"1.1rem",class:"icon"})),this.getActions(),this.getModeIcon()),this.getOptions()))}get el(){return o(this)}static get watchers(){return{debounce:["debounceChanged"]}}};c.style='*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:"tnum";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.no-border) .input-component{border:0}.select-component{}.select-component .native-input{display:none}.select-component.mode-edit.type-typeahead .select-selection-item{display:none}.select-component.mode-edit.type-typeahead .native-input{display:block}.select-component.type-menu .display-value{color:var(--color-gray-10, #36363e)}.select-component .input-actions .btn-action:hover{cursor:pointer}.select-component .select-result{position:absolute;top:110%;width:100%;left:0;padding:0.2rem 0;z-index:1000;background-color:white;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);transition:background 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.select-component .select-result .select-option{padding:0.25rem 0.75rem;cursor:pointer}.select-component .select-result .select-option.select-option-active{background-color:var(--color-gray-2, #eef0f2)}.select-component .no-data{text-align:center;color:var(--color-gray-8, #626175);padding:15px}.select-component .no-data p4-icon{max-height:4em;max-width:4em}.select-component .no-data .no-data-text{font-size:1.2em}.select-component.size-lg{height:2.75rem}.select-component.size-lg .display-value{line-height:2}.select-component.size-md{height:2rem}.select-component.size-sm{height:1.5rem}.select-component.size-sm .display-value{line-height:1}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}';export{c as p4_select}