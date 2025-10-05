import {
  Copy,
  Image,
} from 'lucide-static';

/**
 * Insert the given SVG icon to the given element.
 */
export const insertIcon = (
  element: HTMLElement,
  svg: string,
  size: number
) => {
  element.innerHTML = svg
    .replace('width="24"', `width="${size}"`)
    .replace('height="24"', `height="${size}"`);

  element.classList.add('has-icon', 'anticon');
};

/**
 * Replaces the element with the specified icon.
 *
 * If `contents` is not an empty array, check that the
 * element contains any of the given text contents. If it does,
 * replaces the element with the given svg.
 */
export const replaceElementWithIcon = (
  element: HTMLElement,
  contents: string[],
  svg: string,
  size: number
) => {
  if (element.classList.contains('has-icon')) {
    return;
  }

  if (!contents.length) {
    insertIcon(element, svg, size);
    return;
  }

  if (element?.textContent && svg) {
    for (const content of contents) {
      if (element?.textContent?.includes(content)) {
        insertIcon(element, svg, size);
        return;
      }
    }
  }
};

/**
 * Replaces the specified icon.
 */
export const replaceIcon = (
  elements: NodeListOf<HTMLElement>,
  emojis: string[],
  svg: string,
  size: number
) => {
  for (const element of elements) {
    replaceElementWithIcon(element, emojis, svg, size);
  }
};

export default () => {
  replaceIcon(
    document.querySelectorAll('.img-meta-ico, .copy_code_button'),
    [],
    Copy,
    16
  );

  replaceIcon(
    document.querySelectorAll('.empty .icon'),
    [],
    Image,
    36
  );
};
