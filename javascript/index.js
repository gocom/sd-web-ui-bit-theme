/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ../node_modules/lucide-static/dist/esm/icons/copy.js
/**
 * @license lucide-static v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Copy = `
<svg
  class="lucide lucide-copy"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`;


//# sourceMappingURL=copy.js.map

;// ../node_modules/lucide-static/dist/esm/icons/image.js
/**
 * @license lucide-static v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Image = `
<svg
  class="lucide lucide-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`;


//# sourceMappingURL=image.js.map

;// ./javascript/component/icons.ts

/**
 * Insert the given SVG icon to the given element.
 */
const insertIcon = (element, svg, size) => {
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
const replaceElementWithIcon = (element, contents, svg, size) => {
    var _a;
    if (element.classList.contains('has-icon')) {
        return;
    }
    if (!contents.length) {
        insertIcon(element, svg, size);
        return;
    }
    if ((element === null || element === void 0 ? void 0 : element.textContent) && svg) {
        for (const content of contents) {
            if ((_a = element === null || element === void 0 ? void 0 : element.textContent) === null || _a === void 0 ? void 0 : _a.includes(content)) {
                insertIcon(element, svg, size);
                return;
            }
        }
    }
};
/**
 * Replaces the specified icon.
 */
const replaceIcon = (elements, emojis, svg, size) => {
    for (const element of elements) {
        replaceElementWithIcon(element, emojis, svg, size);
    }
};
/* harmony default export */ const icons = (() => {
    replaceIcon(document.querySelectorAll('.img-meta-ico, .copy_code_button'), [], Copy, 16);
    replaceIcon(document.querySelectorAll('.empty .icon'), [], Image, 36);
});

;// ../node_modules/lucide-static/dist/esm/icons/eye-off.js
/**
 * @license lucide-static v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EyeOff = `
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>
`;


//# sourceMappingURL=eye-off.js.map

;// ../node_modules/lucide-static/dist/esm/icons/eye.js
/**
 * @license lucide-static v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Eye = `
<svg
  class="lucide lucide-eye"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`;


//# sourceMappingURL=eye.js.map

;// ./javascript/component/livePreviewIcon.ts


/**
 * Inject icon to the clone based on the original button content.
 */
const injectIcon = (button, clone) => {
    clone.title = button.title;
    const svg = button.innerText === '🗆'
        ? EyeOff
        : Eye;
    insertIcon(clone, svg, 36);
};
/* harmony default export */ const livePreviewIcon = (() => {
    if (!document.querySelector('.modal-toggleLivePreview-clone')) {
        const button = document.querySelector('.modalToggleLivePreview');
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
});

;// ./javascript/index.ts


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

/******/ })()
;