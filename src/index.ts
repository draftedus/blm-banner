import { configure, getConfiguration } from './config';
import { createModalNode, showModal } from './modal';
import { createStyleNode, createFontNode } from './style';
import MicroModal from 'micromodal';

/**
 * Setup our modal
 */
function setupAndInjectModal() {
  console.log('blm banner init');
  configure({ name: 'Drafted Test' });
  const fontNode = createFontNode(getConfiguration().fontFamily);
  const node = createModalNode(getConfiguration());
  const styleNode = createStyleNode(getConfiguration());
  document.body.appendChild(fontNode);
  document.body.appendChild(styleNode);
  document.body.appendChild(node);
  MicroModal.init();
  showModal();
}

// Inject as soon as the DOM is ready (don't wait for window.onload)
document.addEventListener('DOMContentLoaded', setupAndInjectModal);
