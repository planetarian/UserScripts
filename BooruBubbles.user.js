// ==UserScript==
// @name         Booru Bubbles
// @namespace    https://danbooru.donmai.us/
// @version      0.1
// @description  Makes danbooru bubbles visible everywhere
// @author       Chami
// @match        http*://*/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    var elements = $('.note-box-inner-border');
    for (var i = 0; i < elements.length; i++) {
        let el = elements[i];
        el.innerText = el.parentNode.nextSibling.innerText;
        el.style.opacity = 0.9;
        if (el.clientWidth < 50) {
            el.style.width = '50px';
            el.parentNode.style.width = '52px';
        }
    }
})();
