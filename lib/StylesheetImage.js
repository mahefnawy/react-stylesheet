"use strict";

/**
 * Create image markup for the stylesheet.
 *
 * @private
 *
 * @param {String} href
 */
function createImageMarkup(href) {
  return '<link rel="stylesheet" data-react-stylesheet="true" href="' + href + '">';
}

/**
 * Create DOM node image for the stylesheet.
 *
 * @param {String} href
 */
function createImageNode(href) {
  var link = document.createElement('link');
  link.dataset.reactStylesheet = "true";
  link.rel = 'stylesheet';
  link.href = href;
  return link;
}

/**
 * Get DOM node image for the stylesheet or null if there are no corresponding
 * images exists in DOM.
 *
 * @param {String} href
 */
function getImage(href) {
  return document.head.querySelector('link[href="' + href + '"]');
}

/**
 * Insert stylesheet image into DOM.
 *
 * @param {String} href
 */
function insertImage(href) {
  var node = createImageNode(href);
  var images = document.head.querySelectorAll('link[data-react-stylesheet]');

  if (images.length === 0) {
    if (document.head.firstChild) {
      document.head.insertBefore(node, document.head.firstChild);
    } else {
      document.head.appendChild(node);
    }
  } else {
    var last = images[images.length - 1];
    if (last.nextSibling) {
      document.head.insertBefore(node, last.nextSibling);
    } else {
      document.head.appendChild(node);
    }
  }
}

module.exports = {
  createImageMarkup: createImageMarkup,
  createImageNode: createImageNode,
  insertImage: insertImage,
  getImage: getImage
};