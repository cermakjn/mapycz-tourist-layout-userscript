// ==UserScript==
// @name         Mapy.cz - výchozí turistický podklad
// @description  Při vstupu na mapy.cz nastaví turistický podklad jako výchozí
// @version      1.0.0
// @author       Jan Cermak
// @match        https://mapy.cz/*
// @match        https://*.mapy.cz/*
// @icon         https://mapy.cz/img/favicon/apple-touch-icon-180x180.png
// @copyright    2020, Jan Cermak (https://jan-cermak.cz)
// @licence      MIT
// @run-at       document-idle
// @homepageURL  https://github.com/cermakjn/mapycz-tourist-layout-userscript
// @supportURL   https://github.com/cermakjn/mapycz-tourist-layout-userscript/issues
// @updateURL    https://raw.githubusercontent.com/cermakjn/mapycz-tourist-layout-userscript/master/src/mapycz-tourist-layout.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function setLayout() {
        document.getElementsByClassName('control-layer')[0].firstElementChild.click();
        document.getElementById('mapset-switch').getElementsByClassName('turisticka')[0].click();
    }

    function docReady() {
        if (document.getElementsByClassName('control-layer').length > 0) {
            setLayout();
        } else {
            setTimeout(docReady, 1000);
        }
    }

    if (document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0) {
        docReady();
    }
})();
