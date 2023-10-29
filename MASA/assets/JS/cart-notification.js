/** Shopify CDN: Minification failed

Line 15:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 43:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 61:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 76:21 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 76:37 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 82:17 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 83:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 85:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 91:18 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class CartNotification extends HTMLElement {
  constructor() {
    super();
    this.notification = document.getElementById('cart-notification');
    //this.header = document.querySelector('sticky-header');
    //this.onBodyClick = this.handleBodyClick.bind(this);
    //this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
     //this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
     //closeButton.addEventListener('click', this.close.bind(this))
    //);
    //document.getElementsByClassName("cart-logo")[0].addEventListener("click", this.open.bind(this));   
  }
  
//   open() {
//    this.notification.classList.add('animate', 'active');
//     this.notification.addEventListener('transitionend', () => {
//       this.notification.focus();
//       trapFocus(this.notification);
//     }, { once: true });
//     document.body.addEventListener('click', this.onBodyClick);
//   }

//   close() {
//     this.notification.classList.remove('active');
//     document.body.removeEventListener('click', this.onBodyClick);
//     removeTrapFocus(this.activeElement);
//   }

  renderContents(parsedState) {
      document.getElementById("cart-notification-default").innerHTML="";
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));
    
    //document.getElementsByClassName("cart-logo")[0].addEventListener("click", this.open.bind(this));
	var dropDownIcon = document.querySelector('#cart-icon-bubble');
    if(dropDownIcon.getAttribute("aria-expanded") == "false")
    {
    	dropDownIcon.click();
    }      
    //this.header?.reveal();
    //this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
       // selector: `#cart-notification-product-${this.productId}`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);