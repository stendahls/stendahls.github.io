(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jshint esversion: 6 */

//import app from './modules/app';
//import threeSixty from './modules/threeSixty';
//import tray from './modules/tray/tray';
//import vrBlock from './modules/vrBlock';
//import benefitBlock from './modules/benefitBlock';
//import subNav from './modules/nav/nav.js';
//
///**
// * this array contains a list of modules
// * that are automatically instantiated.
// */
//const modules = [
//  threeSixty,
//  vrBlock,
//  tray,
//  benefitBlock,
//  subNav
//];
//
//const instance = app(modules);
//instance.bootstrap();
//
//// included in head in separate bundle
//// (best practice for the polyfill)
//if (typeof(objectFitImages) !== 'undefined') {
//  objectFitImages();
//}
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGVmYXVsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmpzaGludCBlc3ZlcnNpb246IDYgKi9cblxuLy9pbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlcy9hcHAnO1xuLy9pbXBvcnQgdGhyZWVTaXh0eSBmcm9tICcuL21vZHVsZXMvdGhyZWVTaXh0eSc7XG4vL2ltcG9ydCB0cmF5IGZyb20gJy4vbW9kdWxlcy90cmF5L3RyYXknO1xuLy9pbXBvcnQgdnJCbG9jayBmcm9tICcuL21vZHVsZXMvdnJCbG9jayc7XG4vL2ltcG9ydCBiZW5lZml0QmxvY2sgZnJvbSAnLi9tb2R1bGVzL2JlbmVmaXRCbG9jayc7XG4vL2ltcG9ydCBzdWJOYXYgZnJvbSAnLi9tb2R1bGVzL25hdi9uYXYuanMnO1xuLy9cbi8vLyoqXG4vLyAqIHRoaXMgYXJyYXkgY29udGFpbnMgYSBsaXN0IG9mIG1vZHVsZXNcbi8vICogdGhhdCBhcmUgYXV0b21hdGljYWxseSBpbnN0YW50aWF0ZWQuXG4vLyAqL1xuLy9jb25zdCBtb2R1bGVzID0gW1xuLy8gIHRocmVlU2l4dHksXG4vLyAgdnJCbG9jayxcbi8vICB0cmF5LFxuLy8gIGJlbmVmaXRCbG9jayxcbi8vICBzdWJOYXZcbi8vXTtcbi8vXG4vL2NvbnN0IGluc3RhbmNlID0gYXBwKG1vZHVsZXMpO1xuLy9pbnN0YW5jZS5ib290c3RyYXAoKTtcbi8vXG4vLy8vIGluY2x1ZGVkIGluIGhlYWQgaW4gc2VwYXJhdGUgYnVuZGxlXG4vLy8vIChiZXN0IHByYWN0aWNlIGZvciB0aGUgcG9seWZpbGwpXG4vL2lmICh0eXBlb2Yob2JqZWN0Rml0SW1hZ2VzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICBvYmplY3RGaXRJbWFnZXMoKTtcbi8vfVxuIl19
