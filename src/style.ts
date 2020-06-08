import { $Config } from './config';

const CSS = `
    #blm-modal {
        display: none;
    }
    #blm-modal.is-open {
        display: block;
    }
    #blm-modal {
      font-family: '{{fontFamily}}', sans-serif;
      color: {{primaryColor}};
      font-weight: bold;
    }
    #blm-modal > .modal__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: {{backgroundColor}};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #blm-modal > .modal__overlay .modal__container .modal__header {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {
      font-weight: bold;
      font-size: 104px;
      line-height: 149px;
    }
     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {
      font-weight: 600;
      font-size: 140px;
      line-height: 201px;
      letter-spacing: 0.1em;
    }
     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {
      font-weight: 600;
      font-size: 90px;
      line-height: 129px;
    }
    
    #blm-modal > .modal__close {
      background: transparent;
      border: 0;
    }
    #blm-modal > .modal__header #blm-modal.modal__close:before { content: "\\2715"; }
    #blm-modal > .modal__overlay .modal__container .modal__content {
      margin-top: 5rem;
      margin-bottom: 2rem;
      min-width: 360px;
      height: 70px;
      border: 1px solid #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      font-family: Inter, sans-serif;
      padding-left: 5px;
      padding-right: 5px;
    }
    #blm-modal > .modal__btn {
      font-size: .875rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      background-color: #e6e6e6;
      color: rgba(0,0,0,.8);
      border-radius: .25rem;
      border-style: none;
      border-width: 0;
      cursor: pointer;
      -webkit-appearance: button;
      text-transform: none;
      overflow: visible;
      line-height: 1.15;
      margin: 0;
      will-change: transform;
      -moz-osx-font-smoothing: grayscale;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      transition: -webkit-transform .25s ease-out;
      transition: transform .25s ease-out;
      transition: transform .25s ease-out,-webkit-transform .25s ease-out;
    }
    #blm-modal > .modal__btn:focus, #blm-modal.modal__btn:hover {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
    #blm-modal > .modal__btn-primary {
      background-color: #00449e;
      color: #fff;
    }
    @keyframes mmfadeIn {
        from { opacity: 0; }
          to { opacity: 1; }
    }
    @keyframes mmfadeOut {
        from { opacity: 1; }
          to { opacity: 0; }
    }
    @keyframes mmslideIn {
      from { transform: translateY(15%); }
        to { transform: translateY(0); }
    }
    @keyframes mmslideOut {
        from { transform: translateY(0); }
        to { transform: translateY(-10%); }
    }
    .micromodal-slide {
      display: none;
    }
    .micromodal-slide.is-open {
      display: block;
    }
    .micromodal-slide[aria-hidden="false"] #blm-modal.modal__overlay {
      animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
    }
    .micromodal-slide[aria-hidden="false"] #blm-modal.modal__container {
      animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);
    }
    .micromodal-slide[aria-hidden="true"] #blm-modal.modal__overlay {
      animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);
    }
    .micromodal-slide[aria-hidden="true"] #blm-modal.modal__container {
      animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);
    }
    .micromodal-slide #blm-modal.modal__container,
    .micromodal-slide #blm-modal.modal__overlay {
      will-change: transform;
    }
`;

/**
 * "Render" our template with the config
 * @param config
 */
function replaceStylesWithConfig(config: $Config) {
  return CSS.replace('{{fontFamily}}', config.fontFamily)
    .replace('{{backgroundColor}}', config.backgroundColor)
    .replace('{{primaryColor}}', config.primaryColor);
}

/**
 * Create `<style>` tag with configured CSS
 * @param config
 */
export function createStyleNode(config: $Config) {
  const style = document.createElement('style') as HTMLStyleElement;
  style.setAttribute('type', 'text/css');
  const finalCss = replaceStylesWithConfig(config);
  style.appendChild(document.createTextNode(finalCss));
  return style;
}

/**
 * Create `<link>` tag for Google Font injection
 * @param fontFamily
 */
export function createFontNode(fontFamily: string) {
  const link = document.createElement('link') as HTMLLinkElement;
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute(
    'href',
    `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@700&display=swap`,
  );
  return link;
}
