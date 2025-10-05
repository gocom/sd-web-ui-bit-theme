import icons from './component/icons';
import livePreviewIcon from './component/livePreviewIcon';
import favicon from './component/favicon';

/**
 * Inject scripts and DOM modifiers.
 */
document.addEventListener('DOMContentLoaded', () => {
  icons();
  livePreviewIcon();
  favicon();

  const observer = new MutationObserver(() => {
    icons();
    favicon();
  });

  observer.observe(gradioApp(), {
    subtree: true,
    childList: true,
  });
});
