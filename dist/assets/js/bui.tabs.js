"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// buiToggle
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiTab = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; //
  // Variables
  //

  var defaults = {
    // general
    mode: 'normal',
    event: 'click',
    list: 'tab-list',
    item: 'tab-item',
    name: 'tab-name',
    active: true,
    activeClass: 'active',
    inactive: false,
    inactiveClass: 'inactive',

    /* callback */
    onloadCallBack: function onloadCallBack() {
      return false;
    },
    eventCallBack: function eventCallBack() {
      return false;
    },
    activeCallBack: function activeCallBack() {
      return false;
    },
    inactiveCallBack: function inactiveCallBack() {
      return false;
    }
  }; //
  // Methods
  //

  /**
   * Merge two or more objects together.
   * @param   {Object}   objects  The objects to merge together
   * @returns {Object}            Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  }; // Actions Active


  function active(settings, toggleThis) {
    toggleThis.target.classList.add(settings.activeClass);
    if (settings.inactive) toggleThis.target.classList.remove(settings.inactiveClass);
    if (toggleThis.button != null) toggleThis.button.classList.add(settings.activeClass);
    if (settings.reactTarget != null) toggleThis.reactTarget.classList.add(settings.reactTargetActiveClass);
    if (settings.reactParent != null) toggleThis.target.closest(settings.reactParent).classList.add(settings.reactParentActiveClass);
    if (settings.focusin) focusin(toggleThis);
    toggleThis.active = true;
    settings.activeCallBack.call(toggleThis);
  }

  ; // Actions Inactive

  function inactive(settings, toggleThis) {
    toggleThis.target.classList.remove(settings.activeClass);
    if (settings.inactive) toggleThis.target.classList.add(settings.inactiveClass);
    if (toggleThis.button != null) toggleThis.button.classList.remove(settings.activeClass);
    if (settings.reactTarget != null) toggleThis.reactTarget.classList.remove(settings.reactTargetActiveClass);
    if (settings.reactParent != null) toggleThis.target.closest(settings.reactParent).classList.remove(settings.reactParentActiveClass);
    toggleThis.active = false;
    settings.inactiveCallBack.call(toggleThis);
  }

  ;
  /**
   * Create the Constructor object
   */

  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {});
    var publicAPIs = {};
    var settings;
    var toggleCount = 0;
    publicAPIs.myToggle = {};

    var setProperties = function setProperties(toggleTarget) {
      var toggleName = toggleTarget.id;
      var toggleTarget = toggleTarget;
      var toggleButton = document.querySelector('[data-bui-tab-button=' + toggleTarget.id + ']');
      var reactTarget = document.querySelector(settings.reactTarget);
      publicAPIs.myToggle[toggleTarget.id] = {
        name: toggleName,
        active: false,
        target: toggleTarget,
        button: toggleButton,
        reactTarget: reactTarget,
        clickoutTarget: settings.clickoutTarget != null ? toggleTarget.querySelector(settings.clickoutTarget) : toggleTarget
      };
    };

    publicAPIs.update = function () {
      var toggleTargets = document.querySelectorAll(selector);
      if (!toggleTargets) return;
      Array.prototype.forEach.call(toggleTargets, function (toggleTarget, index) {
        if (index >= toggleCount) {
          setProperties(toggleTarget);
          toggleActions(publicAPIs.myToggle[toggleTarget.id]); // check toggle item length
          // console.log(index + ', ' + toggleCount);

          toggleCount = toggleCount + 1;
        }

        settings.onloadCallBack.call(publicAPIs.myToggle[toggleTarget.id]);
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.update();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
//# sourceMappingURL=bui.tabs.js.map
