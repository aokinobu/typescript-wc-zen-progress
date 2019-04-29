import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ZenProgress extends PolymerElement {
  static get template() {
    return html`
<style type="text/css">
</style>

 selection: {{selection}}
`;
  }
  static get properties() {
    return {
      selection: {
        notify: true,
        type: String,
        value: function() {
          return new String();
        }
      }
    };
  }

  ready() {
    super.ready();
    console.log("ready");
    this.selection = "sample";
  }
  handleClick(e) {
    console.log('click');
  }
  _handleAjaxPostError(e) {
    console.log('error: ' + e);
  }
}

customElements.define('wc-zen-progress', ZenProgress);
