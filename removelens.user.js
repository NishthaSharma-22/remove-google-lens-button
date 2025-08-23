// ==UserScript==
// @name         remove google lens button
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  remove that annoying lens button!
// @author       Me aka Nishtha S
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const Remover =()=>{
        document.querySelectorAll('div[jsname="UCBLxb"]').forEach(lens=>{lens.remove();})
    }
        Remover();
        new MutationObserver(Remover).observe(document.body, {childList:true, subtree:true});
})();
