import icons from './component/icons';
import livePreviewIcon from './component/livePreviewIcon';

/**
 * Inject scripts and DOM modifiers.
 */
document.addEventListener('DOMContentLoaded', () => {
  icons();
  livePreviewIcon();

  const observer = new MutationObserver(() => {
    icons();
  });

  observer.observe(gradioApp(), {
    subtree: true,
    childList: true,
  });
});
