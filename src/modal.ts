import { $Config } from './config';
import MicroModal from 'micromodal';

const MODAL_HTML = `<div id="blm-modal" class="modal micromodal-slide" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <div class="modal__header">
          <div class="modal__title__black">
            <span>B</span>
            <span>L</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </div>
          <div class="modal__title__lives">
            <span>L</span>
            <span>I</span>
            <span>V</span>
            <span>E</span>
            <span>S</span>
          </div>
          <div class="modal__title__matter">
            <span>M</span>
            <span>A</span>
            <span>T</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
          </div>
        </div>
        <div class="modal__content">
            Continue to {{name}} ->
        </div>
      </div>
    </div>
  </div>`;

function replaceTextWithConfig(config: $Config) {
  return MODAL_HTML.replace('{{name}}', config.name);
}

export function createModalNode(config: $Config) {
  return document
    .createRange()
    .createContextualFragment(replaceTextWithConfig(config));
}

export function showModal() {
  MicroModal.show(MODAL_ID);
}

export const MODAL_ID = 'blm-modal';
