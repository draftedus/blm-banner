import { $Config } from './config';

const CSS = `
    #blm-modal {
      display: none;
    }
    #blm-modal.is-open {
      display: block;
    }
    #blm-modal {
      position: absolute;
      z-index: 2147483638;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      font-family: '{{fontFamily}}', sans-serif;
      color: {{primaryColor}};
      font-weight: bold;
      overflow: hidden;
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
    #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__black {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: bold;
      font-size: 104px;
      line-height: 1;
    }
     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__lives {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 600;
      font-size: 140px;
      line-height: 201px;
    }
     #blm-modal > .modal__overlay .modal__container .modal__header .modal__title__matter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 600;
      font-size: 90px;
      line-height: 1;
    }
    #blm-modal > .modal__close {
      background: transparent;
      border: 0;
    }
    #blm-modal > .modal__header #blm-modal.modal__close:before { content: "\\2715"; }
    #blm-modal > .modal__overlay .modal__container .modal__content {
      margin-top: 3rem;
      margin-bottom: 2rem;
      min-width: 362px;
      height: 70px;
      border: 1px solid #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      padding-left: 5px;
      padding-right: 5px;
      cursor: pointer;
    }
    @keyframes mmfadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
    }  
    @keyframes mmfadeOut {
        from { opacity: 1; }
          to { opacity: 0; }
    }
    #blm-modal[aria-hidden="false"] .modal__overlay {
      animation: mmfadeIn 1s cubic-bezier(0.0, 0.0, 0.2, 1);
    }       
    #blm-modal[aria-hidden="true"] .modal__overlay {
      animation: mmfadeOut 1s cubic-bezier(0.0, 0.0, 0.2, 1);
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
