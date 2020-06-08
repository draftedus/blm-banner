import { $Config, configure, getConfiguration } from './config';
import { createModalNode, showModal } from './modal';
import { createStyleNode, createFontNode } from './style';
import MicroModal from 'micromodal';

/**
 * Setup our modal
 */
function setupAndInjectModal() {
  console.log('blm: init');
  const fontNode = createFontNode(getConfiguration().fontFamily);
  const node = createModalNode(getConfiguration());
  const styleNode = createStyleNode(getConfiguration());
  document.body.appendChild(fontNode);
  document.body.appendChild(styleNode);
  document.body.appendChild(node);
  MicroModal.init();
  showModal();
}

/**
 * Function called by injection script to set configuration and add listener
 * NOTE: Inject as soon as the DOM is ready (don't wait for window.onload)
 * @param config
 */
function init(config: $Config) {
  configure(config);
  if (document.readyState === 'interactive') {
    setupAndInjectModal();
  } else {
    document.addEventListener('DOMContentLoaded', setupAndInjectModal);
  }
}

// Run the modal right away for default config
if (window.BLM && window.BLM._loadOptions) {
  console.log('blm: opening modal with custom config', window.BLM._loadOptions);
  init(window.BLM._loadOptions);
} else {
  console.log('blm: opening modal with default config');
  init({ name: 'site' });
}

// Export this globally so we can call `init` in the script as `BLM.init(...)`
declare global {
  interface Window {
    BLM: any;
  }
}
