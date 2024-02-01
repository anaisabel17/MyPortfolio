class MyRombo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div class="rombo"></div>`;
    }
  }
      
  customElements.define('my-rombo', MyRombo);