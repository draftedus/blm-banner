import { $Config, configure, getConfiguration } from './config';
import { createModalNode, MODAL_ID, showModal } from './modal';
import { createStyleNode, createFontNode } from './style';
import MicroModal from 'micromodal';
import * as Cookies from 'es-cookie';
import { trackDomain } from './metrics';

// Check to see if we showed this already
const BLM_COOKIE = 'BLM_MODAL_SHOWN';

/**
 * Setup our modal
 */
function setupAndInjectModal() {
  const node = createModalNode(getConfiguration());
  const styleNode = createStyleNode(getConfiguration());
  document.head.appendChild(styleNode);
  document.body.appendChild(node);
  if (getConfiguration().preview) {
    document.getElementById(MODAL_ID).classList.add('is-open');
  } else {
    MicroModal.init();
    showModal();
    Cookies.set(BLM_COOKIE, 'true'); // store we showed it
  }
}

/**
 * Function called by injection script to set configuration and add listener
 * NOTE: Inject as soon as the DOM is ready (don't wait for window.onload)
 * @param config
 */
function init(config: $Config) {
  // Store config in local variable
  configure(config);

  // Inject our font in <head> first
  const fontNode = createFontNode(getConfiguration().fontFamily);
  document.head.appendChild(fontNode);

  // Collect metrics if we are allowed to
  if (getConfiguration().metricsEnabled) {
    trackDomain(
      getConfiguration().name,
      getConfiguration().metricsUrl,
    ).catch((e) => console.error('Failed to send metrics', e));
  }

  // Add modal / style when DOM is ready, only if cookie doesn't exist
  if (!Cookies.get(BLM_COOKIE)) {
    if (document.readyState !== 'loading') {
      setupAndInjectModal();
    } else {
      document.addEventListener('DOMContentLoaded', setupAndInjectModal);
    }
  }
}

// Setup the config from the snippet
if (window.BLM && window.BLM._loadOptions) {
  init(window.BLM._loadOptions);
} else {
  init({ name: 'site' });
}

// Export this globally so we can call `init` in the script as `BLM.init(...)`
declare global {
  interface Window {
    BLM: any;
  }
}
