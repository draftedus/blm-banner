import { configure, getConfiguration } from './config';
import { createModalNode, showModal } from './modal';
import { createStyleNode } from './style';
import MicroModal from 'micromodal';

/**
 * Setup our modal
 */
function setupAndInjectModal() {
  console.log('blm banner init');
  configure({ name: 'Drafted Test' });
  const node = createModalNode(getConfiguration());
  const styleNode = createStyleNode(getConfiguration());
  document.body.appendChild(node);
  document.body.appendChild(styleNode);
  MicroModal.init();
  showModal();
}

// Inject as soon as the DOM is ready (don't wait for window.onload)
document.addEventListener('DOMContentLoaded', setupAndInjectModal);
