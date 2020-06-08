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
    #blm-modal > .modal__container {
      background-color: #fff;
      padding: 30px;
      max-width: 500px;
      max-height: 100vh;
      border-radius: 4px;
      overflow-y: auto;
      box-sizing: border-box;
    }
    #blm-modal > .modal__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #blm-modal > .modal__title {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.25;
      color: #fff;
      box-sizing: border-box;
    }
    #blm-modal > .modal__close {
      background: transparent;
      border: 0;
    }
    #blm-modal > .modal__header #blm-modal.modal__close:before { content: "\\2715"; }
    #blm-modal > .modal__content {
      margin-top: 2rem;
      margin-bottom: 2rem;
      line-height: 1.5;
      color: #fff;
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

function replaceStylesWithConfig(config: $Config) {
  return CSS.replace('{{fontFamily}}', config.fontFamily)
    .replace('{{backgroundColor}}', config.backgroundColor)
    .replace('{{primaryColor}}', config.primaryColor);
}

export function createStyleNode(config: $Config) {
  let style = document.createElement('style');
  style.type = 'text/css';
  const finalCss = replaceStylesWithConfig(config);
  // @ts-ignore
  if (style.styleSheet) {
    // @ts-ignore
    style.styleSheet.cssText = finalCss;
  } else {
    style.appendChild(document.createTextNode(finalCss));
  }
  return style;
}

export function createFontNode(fontFamily: string) {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@700&display=swap`;
  return link;
}
