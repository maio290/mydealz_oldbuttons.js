// ==UserScript==
// @name        myDealz Old-Buttons
// @namespace   myDealz
// @include    http://www.mydealz.de/*
// @include    https://www.mydealz.de/*
// @exclude    https://www.mydealz.de/profile/*
// @excluse    http://www.mydealz.de/profile/*
// @author     Mario-Luca Hoffmann
// @version     1.1
// @description  Gives you the old buttons
// @grant       none

// ==/UserScript==
document.body.innerHTML= document.body.innerHTML.replace(/link ico ico--type-megaphone-blue ico--pos-l/g,"hide--from-doc");
document.body.innerHTML= document.body.innerHTML.replace(/<span class="hide--from-doc">/g,'<span class ="hList-item">');