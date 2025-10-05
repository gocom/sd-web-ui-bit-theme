import {
  Eye,
  EyeOff,
} from 'lucide-static';
import {insertIcon} from './icons';

/**
 * Inject icon to the clone based on the original button content.
 */
const injectIcon = (button: HTMLSpanElement, clone: HTMLSpanElement) => {
  clone.title = button.title;

  const svg = button.innerText === '🗆'
    ? EyeOff
    : Eye;

  insertIcon(clone, svg, 36);
};

export default () => {
  if (!document.querySelector('.modal-toggleLivePreview-clone')) {
    const button = document.querySelector<HTMLSpanElement>('.modalToggleLivePreview');

    if (button) {
      const clone = document.createElement('span');

      clone.classList.add('modal-toggleLivePreview-clone', 'cursor');
      injectIcon(button, clone);

      clone.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        button.dispatchEvent(new Event('click'));
        injectIcon(button, clone);
      };

      button.after(clone);
    }
  }
};
