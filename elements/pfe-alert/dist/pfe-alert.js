import PFElement from '../../pfelement/dist/pfelement.js';

/*!
 * PatternFly Elements: PfeAlert 1.6.0
 * @license
 * Copyright 2021 Red Hat, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
*/

class PfeAlert extends PFElement {

  // Injected at build-time
  static get version() {
    return "1.6.0";
  }

  // Injected at build-time
  get html() {
    return `
<style>:host{display:block}:host([hidden]){display:none}.pfe-alert__container{border-width:3px;border-width:var(--pfe-alert--BorderWidth,3px);border-color:#009596;border-color:var(--pfe-alert--BorderColor,#009596);border-style:solid;border-style:var(--pfe-alert--BorderStyle,solid);background-color:#f2f9f9;background-color:var(--pfe-alert--BackgroundColor,#f2f9f9);padding:16px;padding:var(--pfe-alert--Padding,16px);display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content var(--pfe-alert--Gap,4px) 1fr;-ms-grid-columns:min-content var(--pfe-alert--Gap,4px) 1fr;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;gap:4px;gap:var(--pfe-alert--Gap,4px)}.pfe-alert__left-column{display:inline-block;vertical-align:top}.pfe-alert__middle-column{display:inline-block;vertical-align:top}.pfe-alert__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:4px;margin-bottom:var(--pfe-alert__header--MarginBottom,var(--pfe-alert--Gap,4px))}.pfe-alert__header-actions{margin-right:4px;margin-right:var(--pfe-alert__headerActions--MarginRight,4px)}.pfe-alert__title{font-size:14px;font-size:var(--pfe-alert__title--FontSize,14px);color:#003737;color:var(--pfe-alert__title--Color,#003737);font-size:14px;font-size:var(--pfe-alert__title--FontSize,14px);font-weight:500;font-weight:var(--pfe-alert__title--FontWeight,500);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.pfe-alert__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:24px;width:var(--pfe-alert__icon--Width,var(--pfe-alert__icon--Size,24px));height:24px;height:var(--pfe-alert__icon--Height,var(--pfe-alert__icon--Size,24px));color:#009596;color:var(--pfe-alert__icon--Color,#009596)}.pfe-alert__close-button{color:#6a6e73;color:var(--pfe-alert__close-button--Color,#6a6e73);background-color:transparent;background-color:var(--pfe-alert__close-button--BackgroundColor,transparent);border:none;border:var(--pfe-alert__close-button--Border,none);width:24px;width:var(--pfe-alert__close-button--Width,var(--pfe-alert__close-button--Size,24px));height:24px;height:var(--pfe-alert__close-button--Height,var(--pfe-alert__close-button--Size,24px));cursor:pointer}.pfe-alert__close-button:hover{color:var(--pfe-alert__close-button--hover--Width)}.pfe-alert__close-button:focus{color:var(--pfe-alert__close-button--hover--Width)}.pfe-alert__description{font-size:14px;font-size:var(--pfe-alert__description--FontSize,14px)}.pfe-alert__action-group{margin-top:16px;margin-top:var(--pfe-alert__action-group--MarginTop,var(--pfe-alert--Padding,16px))}#action-group::slotted(.pfe-alert__action-group-item),.pfe-alert__action-group-item{margin-right:24px;margin-right:var(--pfe-alert__action-group-item--MarginRight,var(--pfe-alert__action-group--Gap,24px));padding:0;padding:var(--pfe-alert__action-group-item--Padding,0);border:var(--pfe-alert__action-group-item--Border);background-color:transparent;background-color:var(--pfe-alert__action-group-item--BackgroundColor,transparent);color:#06c;color:var(--pfe-alert__action-group-item--Color,#06c);font-size:14px;font-size:var(--pfe-alert__action-group-item--FontSize,14px)}#action-group::slotted(.pfe-alert__action-group-item:hover),.pfe-alert__action-group-item:hover{text-decoration:underline;-webkit-text-decoration:var(--pfe-alert__action-group-item--hover--TextDecoration,underline);text-decoration:var(--pfe-alert__action-group-item--hover--TextDecoration,underline);color:#004080;color:var(--pfe-alert__action-group-item--hover--Color,#004080)}#action-group::slotted(.pfe-alert__action-group-item),button.pfe-alert__action-group-item{margin-right:24px!important;margin-right:var(--pfe-alert__action-group-item--MarginRight,var(--pfe-alert__action-group--Gap,24px))!important}:host([state=info]) .pfe-alert__container{--pfe-alert--BorderColor:#2B9AF3;--pfe-alert__icon--Color:#2B9AF3;--pfe-alert__title--Color:#002952;--pfe-alert--BackgroundColor:#E7F1FA}:host([state=success]) .pfe-alert__container{--pfe-alert--BorderColor:#3E8635;--pfe-alert__icon--Color:#3E8635;--pfe-alert__title--Color:#1E4F18;--pfe-alert--BackgroundColor:#F3FAF2}:host([state=warning]) .pfe-alert__container{--pfe-alert__title--Color:#795600;--pfe-alert--BorderColor:#F0AB00;--pfe-alert__icon--Color:#F0AB00;--pfe-alert--BackgroundColor:#FDF7E7}:host([state=danger]) .pfe-alert__container{--pfe-alert--BorderColor:#C9190B;--pfe-alert__icon--Color:#C9190B;--pfe-alert__title--Color:#7D1007;--pfe-alert--BackgroundColor:#FAEAE8}:host(:not([variant])) .pfe-alert__container{border-left:none;border-bottom:none;border-right:none} /*# sourceMappingURL=pfe-alert.min.css.map */</style>
<div class="pfe-alert__container" role="alert" aria-hidden="false">
    <div class="pfe-alert__left-column">
        <div class="pfe-alert__icon">
            ${this.renderIcon()}
        </div>
    </div>
    <div class="pfe-alert__middle-column">
        <div class="pfe-alert__header">
            <div class="pfe-alert__title">
                <slot name="title"></slot>
            </div>
            <div class="pfe-alert__header-actions">
                <button id="close-button" class="pfe-alert__close-button" type="button" aria-label="Close" confirm>
                    <svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 352 512" aria-hidden="true" role="img"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </button>
            </div>
        </div>
        <div class="pfe-alert__description">
            <slot name="description"></slot>
        </div>
        <div class="pfe-alert__action-group">
            <slot id="action-group" name="action-group"></slot>
        </div>
    </div>
</div>`;
  }

  static get tag() {
    return "pfe-alert";
  }

  static get meta() {
    return {
      title: "Alert",
      description:
        "Notify the user about a change in status or other event without blocking other actions in an interface."
    };
  }

  get templateUrl() {
    return "pfe-alert.html";
  }

  get styleUrl() {
    return "pfe-alert.scss";
  }

  static get events() {
    return {
      confirm: `${this.tag}:confirm`,
      dismiss: `${this.tag}:dismiss`
    };
  }

  // Declare the type of this component
  static get PfeType() {
    return PFElement.PfeTypes.Content;
  }

  static get properties() {
    return {
      state: { type: String, default: "default" },
      variant: { type: Boolean, default: false }
    };
  }

  // @todo maybe we can move these into pfe-icon
  renderIcon() {
    if (this.state === "default") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 896 1024" aria-hidden="true" role="img"><path d="M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z"></path></svg>`;
    }
    if (this.state === "error") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`;
    }
    if (this.state === "success") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>`;
    }
    if (this.state === "warning") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 576 512" aria-hidden="true" role="img"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`;
    }
    if (this.state === "danger") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`;
    }
    if (this.state === "info") {
      return `<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`;
    }
    return ``;
  }

  static get slots() {
    return {};
  }

  constructor() {
    super(PfeAlert, { type: PfeAlert.PfeType });
    // Listen to click events to see if anyone clicked on a confirm / dismiss
    this.addEventListener("click", this._clickHandler.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    // If you need to initialize any attributes, do that here
    this.render();
  }

  render() {
    super.render();
    this._addEventListeners();
  }

  _addEventListeners() {
    this.shadowRoot.querySelector("#close-button").addEventListener("click", this._clickHandler.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._clickHandler.bind(this));
    this.shadowRoot.querySelector("#close-button").removeEventListener("click", this._clickHandler.bind(this));
  }

  /**
   * Dismiss the alert
   *
   * This will remove the alert from the dom.
   */
  dismiss() {
    this.remove();
  }

  _clickHandler(event) {
    // look for confirm or dismiss
    const target = event.target.closest("button, .pfe-alert__action-group-item");
    if (target) {
      if (target.hasAttribute("confirm")) {
        this.emitEvent(PfeAlert.events.confirm, {
          detail: {
            target
          }
        });
        this.dismiss();
      }
      if (target.hasAttribute("dismiss")) {
        this.emitEvent(PfeAlert.events.confirm, {
          detail: {
            target
          }
        });
        this.dismiss();
      }
    }
  }
}

PFElement.create(PfeAlert);

export default PfeAlert;
//# sourceMappingURL=pfe-alert.js.map
