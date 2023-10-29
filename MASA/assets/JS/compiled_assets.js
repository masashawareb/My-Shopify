/** Shopify CDN: Minification failed

Line 26:2 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 27:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 31:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 35:8 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 40:19 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 45:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 46:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 47:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 65:2 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 66:15 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
... and 14 more hidden warnings

**/
(function() {
    var __sections__ = {};
    (function() {
      for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
        __sections__[s[i]] = true;
    })();
    (function() {
    if (!__sections__["Ishi_single_product"] && !window.DesignMode) return;
    try {
      
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }
  
      hide() {
        super.hide();
      }
  
      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }
  
      showActiveMedia() {
        this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
            element.classList.remove('active');
          }
        )
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();
  
        if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
          activeMedia.loadContent();
      }
    }
  
    customElements.define('product-modal', ProductModal);
  
    } catch(e) { console.error(e); }
  })();
  
  (function() {
    if (!__sections__["main-cart-footer"]) return;
    try {
      
    class CartNote extends HTMLElement {
      constructor() {
        super();
  
        this.addEventListener('change', debounce((event) => {
          const body = JSON.stringify({ note: event.target.value });
          fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{ body }});
        }, 300))
      }
    }
  
    customElements.define('cart-note', CartNote);
  
    } catch(e) { console.error(e); }
  })();
  
  (function() {
    if (!__sections__["main-product"]) return;
    try {
      
    class ProductModal extends ModalDialog {
      constructor() {
        super();
      }
  
      hide() {
        super.hide();
      }
  
      show(opener) {
        super.show(opener);
        this.showActiveMedia();
      }
  
      showActiveMedia() {
        this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach((element) => {
            element.classList.remove('active');
          }
        )
        const activeMedia = this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);
        const activeMediaTemplate = activeMedia.querySelector('template');
        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
        activeMedia.classList.add('active');
        activeMedia.scrollIntoView();
  
        if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
          activeMedia.loadContent();
      }
    }
  
    customElements.define('product-modal', ProductModal);
  
    } catch(e) { console.error(e); }
  })();
  
  (function() {
    if (!__sections__["product-recommendations"]) return;
    try {
      
    class ProductRecommendations extends HTMLElement {
      constructor() {
        super();
  
        const handleIntersection = (entries, observer) => {
          if (!entries[0].isIntersecting) return;
          observer.unobserve(this);
  
          fetch(this.dataset.url)
            .then(response => response.text())
            .then(text => {
              const html = document.createElement('div');
              html.innerHTML = text;
              const recommendations = html.querySelector('product-recommendations');
              if (recommendations && recommendations.innerHTML.trim().length) {
                this.innerHTML = recommendations.innerHTML;
              }
            })
            .catch(e => {
              console.error(e);
            });
        }
  
        new IntersectionObserver(handleIntersection.bind(this), {rootMargin: '0px 0px 200px 0px'}).observe(this);
      }
    }
  
    customElements.define('product-recommendations', ProductRecommendations);
  
    } catch(e) { console.error(e); }
  })();
  
  })();