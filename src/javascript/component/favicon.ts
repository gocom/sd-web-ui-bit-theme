/**
 * Replaces favicon with the configured logo.
 */
const replaceFavicon = () => {
  const logo = document.querySelector<HTMLImageElement>('a .ant-space-item > img[alt="logo"]')?.src;

  if (logo) {
    const links = document.querySelectorAll<HTMLLinkElement>('link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="icon"]');

    for (const link of links) {
      if (!link.classList.contains('has-logo')) {
        link.href = logo;
        link.removeAttribute('type');
        link.classList.add('has-logo');
      }
    }
  }
};

export default replaceFavicon;
