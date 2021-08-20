/*!
 * Select2 4.0.13
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'***REMOVED***, factory);
  ***REMOVED*** else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
    ***REMOVED***
        else {
          jQuery = require('jquery')(root);
    ***REMOVED***
  ***REMOVED***
      factory(jQuery);
      return jQuery;
***REMOVED***;
  ***REMOVED*** else {
    // Browser globals
    factory(jQuery);
  ***REMOVED***
***REMOVED*** (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  ***REMOVED***
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {***REMOVED***; ***REMOVED*** else { require = S2; ***REMOVED***
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {***REMOVED***,
        waiting = {***REMOVED***,
        config = {***REMOVED***,
        defining = {***REMOVED***,
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [***REMOVED***.slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
***REMOVED***

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String***REMOVED*** name the relative name
     * @param {String***REMOVED*** baseName a real name that the name arg is relative
     * to.
     * @returns {String***REMOVED*** normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*'***REMOVED***) || {***REMOVED***;

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex***REMOVED***)) {
                name[lastIndex***REMOVED*** = name[lastIndex***REMOVED***.replace(jsSuffixRegExp, '');
        ***REMOVED***

            // Starts with a '.' so need the baseName
            if (name[0***REMOVED***.charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
        ***REMOVED***

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i***REMOVED***;
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
            ***REMOVED*** else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2***REMOVED*** === '..') || name[i - 1***REMOVED*** === '..') {
                        continue;
                ***REMOVED*** else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
            //end trimDots

            name = name.join('/');
    ***REMOVED***

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')***REMOVED***;

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment***REMOVED***;
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***

                if (foundMap) {
                    break;
            ***REMOVED***

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment***REMOVED***) {
                    foundStarMap = starMap[nameSegment***REMOVED***;
                    starI = i;
            ***REMOVED***
        ***REMOVED***

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
        ***REMOVED***

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
        ***REMOVED***
    ***REMOVED***

        return name;
***REMOVED***

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0***REMOVED*** !== 'string' && args.length === 1) {
                args.push(null);
        ***REMOVED***
            return req.apply(undef, args.concat([relName, forceSync***REMOVED***));
    ***REMOVED***;
***REMOVED***

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
    ***REMOVED***;
***REMOVED***

    function makeLoad(depName) {
        return function (value) {
            defined[depName***REMOVED*** = value;
    ***REMOVED***;
***REMOVED***

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name***REMOVED***;
            delete waiting[name***REMOVED***;
            defining[name***REMOVED*** = true;
            main.apply(undef, args);
    ***REMOVED***

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
    ***REMOVED***
        return defined[name***REMOVED***;
***REMOVED***

    //Turns a plugin!resource to [plugin, resource***REMOVED***
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
    ***REMOVED***
        return [prefix, name***REMOVED***;
***REMOVED***

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [***REMOVED***;
***REMOVED***

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0***REMOVED***,
            relResourceName = relParts[1***REMOVED***;

        name = parts[1***REMOVED***;

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
    ***REMOVED***

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
        ***REMOVED*** else {
                name = normalize(name, relResourceName);
        ***REMOVED***
    ***REMOVED*** else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0***REMOVED***;
            name = parts[1***REMOVED***;
            if (prefix) {
                plugin = callDep(prefix);
        ***REMOVED***
    ***REMOVED***

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
    ***REMOVED***;
***REMOVED***;

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name***REMOVED***) || {***REMOVED***;
    ***REMOVED***;
***REMOVED***

    handlers = {
        require: function (name) {
            return makeRequire(name);
***REMOVED***
        exports: function (name) {
            var e = defined[name***REMOVED***;
            if (typeof e !== 'undefined') {
                return e;
        ***REMOVED*** else {
                return (defined[name***REMOVED*** = {***REMOVED***);
        ***REMOVED***
***REMOVED***
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name***REMOVED***,
                config: makeConfig(name)
        ***REMOVED***;
    ***REMOVED***
***REMOVED***;

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [***REMOVED***,
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module***REMOVED*** if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'***REMOVED*** : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i***REMOVED***, relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i***REMOVED*** = handlers.require(name);
            ***REMOVED*** else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i***REMOVED*** = handlers.exports(name);
                    usingExports = true;
            ***REMOVED*** else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i***REMOVED*** = handlers.module(name);
            ***REMOVED*** else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i***REMOVED*** = callDep(depName);
            ***REMOVED*** else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {***REMOVED***);
                    args[i***REMOVED*** = defined[depName***REMOVED***;
            ***REMOVED*** else {
                    throw new Error(name + ' missing ' + depName);
            ***REMOVED***
        ***REMOVED***

            ret = callback ? callback.apply(defined[name***REMOVED***, args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name***REMOVED***) {
                    defined[name***REMOVED*** = cjsModule.exports;
            ***REMOVED*** else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name***REMOVED*** = ret;
            ***REMOVED***
        ***REMOVED***
    ***REMOVED*** else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name***REMOVED*** = callback;
    ***REMOVED***
***REMOVED***;

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps***REMOVED***) {
                //callback in this case is really relName
                return handlers[deps***REMOVED***(callback);
        ***REMOVED***
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
    ***REMOVED*** else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
        ***REMOVED***
            if (!callback) {
                return;
        ***REMOVED***

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
        ***REMOVED*** else {
                deps = undef;
        ***REMOVED***
    ***REMOVED***

        //Support require(['a'***REMOVED***)
        callback = callback || function () {***REMOVED***;

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
    ***REMOVED***

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
    ***REMOVED*** else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
    ***REMOVED*** 4);
    ***REMOVED***

        return req;
***REMOVED***;

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
***REMOVED***;

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
    ***REMOVED***

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [***REMOVED***;
    ***REMOVED***

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name***REMOVED*** = [name, deps, callback***REMOVED***;
    ***REMOVED***
***REMOVED***;

    define.amd = {
        jQuery: true
***REMOVED***;
***REMOVED***());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
***REMOVED***
***REMOVED***());
S2.define("almond", function(){***REMOVED***);

/* global jQuery:false, $:false */
S2.define('jquery',[***REMOVED***,function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  ***REMOVED***

  return _$;
***REMOVED***);

S2.define('select2/utils',[
  'jquery'
***REMOVED***, function ($) {
  var Utils = {***REMOVED***;

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {***REMOVED***.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
***REMOVED***

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key***REMOVED*** = SuperClass[key***REMOVED***;
  ***REMOVED***
***REMOVED***

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  ***REMOVED***;

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [***REMOVED***;

    for (var methodName in proto) {
      var m = proto[methodName***REMOVED***;

      if (typeof m !== 'function') {
        continue;
  ***REMOVED***

      if (methodName === 'constructor') {
        continue;
  ***REMOVED***

      methods.push(methodName);
***REMOVED***

    return methods;
  ***REMOVED***

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
  ***REMOVED***

      calledConstructor.apply(this, arguments);
***REMOVED***

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
***REMOVED***

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m***REMOVED***;

      DecoratedClass.prototype[superMethod***REMOVED*** =
        SuperClass.prototype[superMethod***REMOVED***;
***REMOVED***

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {***REMOVED***;

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName***REMOVED***;
  ***REMOVED***

      var decoratedMethod = DecoratorClass.prototype[methodName***REMOVED***;

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
  ***REMOVED***;
***REMOVED***;

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d***REMOVED***;

      DecoratedClass.prototype[decoratedMethod***REMOVED*** = calledMethod(decoratedMethod);
***REMOVED***

    return DecoratedClass;
  ***REMOVED***;

  var Observable = function () {
    this.listeners = {***REMOVED***;
  ***REMOVED***;

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {***REMOVED***;

    if (event in this.listeners) {
      this.listeners[event***REMOVED***.push(callback);
***REMOVED*** else {
      this.listeners[event***REMOVED*** = [callback***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {***REMOVED***;

    // Params should always come in as an array
    if (params == null) {
      params = [***REMOVED***;
***REMOVED***

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({***REMOVED***);
***REMOVED***

    // Set the `_type` of the first object to the event
    params[0***REMOVED***._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event***REMOVED***, slice.call(arguments, 1));
***REMOVED***

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'***REMOVED***, arguments);
***REMOVED***
  ***REMOVED***;

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i***REMOVED***.apply(this, params);
***REMOVED***
  ***REMOVED***;

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
***REMOVED***

    return chars;
  ***REMOVED***;

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
***REMOVED***;
  ***REMOVED***;

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
  ***REMOVED***

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k***REMOVED***;

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key***REMOVED*** = {***REMOVED***;
    ***REMOVED***

        if (k == keys.length - 1) {
          dataLevel[key***REMOVED*** = data[originalKey***REMOVED***;
    ***REMOVED***

        dataLevel = dataLevel[key***REMOVED***;
  ***REMOVED***

      delete data[originalKey***REMOVED***;
***REMOVED***

    return data;
  ***REMOVED***;

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
***REMOVED***

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
***REMOVED***

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  ***REMOVED***;

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
***REMOVED***;

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
***REMOVED***

    return String(markup).replace(/[&<>"'\/\\***REMOVED***/g, function (match) {
      return replaceMap[match***REMOVED***;
***REMOVED***);
  ***REMOVED***;

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
  ***REMOVED***);

      $nodes = $jqNodes;
***REMOVED***

    $element.append($nodes);
  ***REMOVED***;

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {***REMOVED***;

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id.
    // If an id already exists, it simply returns it.

    var select2Id = element.getAttribute('data-select2-id');
    if (select2Id == null) {
      // If element has id, use it.
      if (element.id) {
        select2Id = element.id;
        element.setAttribute('data-select2-id', select2Id);
  ***REMOVED*** else {
        element.setAttribute('data-select2-id', ++id);
        select2Id = id.toString();
  ***REMOVED***
***REMOVED***
    return select2Id;
  ***REMOVED***;

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id***REMOVED***) {
      Utils.__cache[id***REMOVED*** = {***REMOVED***;
***REMOVED***

    Utils.__cache[id***REMOVED***[name***REMOVED*** = value;
  ***REMOVED***;

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id***REMOVED***) {
        if (Utils.__cache[id***REMOVED***[name***REMOVED*** != null) {
          return Utils.__cache[id***REMOVED***[name***REMOVED***;
    ***REMOVED***
        return $(element).data(name); // Fallback to HTML5 data attribs.
  ***REMOVED***
      return $(element).data(name); // Fallback to HTML5 data attribs.
***REMOVED*** else {
      return Utils.__cache[id***REMOVED***;
***REMOVED***
  ***REMOVED***;

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id***REMOVED*** != null) {
      delete Utils.__cache[id***REMOVED***;
***REMOVED***

    element.removeAttribute('data-select2-id');
  ***REMOVED***;

  return Utils;
***REMOVED***);

S2.define('select2/results',[
  'jquery',
  './utils'
***REMOVED***, function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  ***REMOVED***

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
***REMOVED***

    this.$results = $results;

    return $results;
  ***REMOVED***;

  Results.prototype.clear = function () {
    this.$results.empty();
  ***REMOVED***;

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0***REMOVED***.className += ' select2-results__message';

    this.$results.append($message);
  ***REMOVED***;

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  ***REMOVED***;

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [***REMOVED***;

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
    ***REMOVED***);
  ***REMOVED***

      return;
***REMOVED***

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d***REMOVED***;

      var $option = this.option(item);

      $options.push($option);
***REMOVED***

    this.$results.append($options);
  ***REMOVED***;

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  ***REMOVED***;

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  ***REMOVED***;

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected***REMOVED***');

    var $selected = $options.filter('[aria-selected=true***REMOVED***');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
***REMOVED*** else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
***REMOVED***

    this.ensureHighlightVisible();
  ***REMOVED***;

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
  ***REMOVED***);

      var $options = self.$results
        .find('.select2-results__option[aria-selected***REMOVED***');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
    ***REMOVED*** else {
          $option.attr('aria-selected', 'false');
    ***REMOVED***
  ***REMOVED***);

***REMOVED***);
  ***REMOVED***;

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
***REMOVED***;
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  ***REMOVED***;

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  ***REMOVED***;

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'option',
      'aria-selected': 'false'
***REMOVED***;

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      delete attrs['aria-selected'***REMOVED***;
      attrs['aria-disabled'***REMOVED*** = 'true';
***REMOVED***

    if (data.id == null) {
      delete attrs['aria-selected'***REMOVED***;
***REMOVED***

    if (data._resultId != null) {
      option.id = data._resultId;
***REMOVED***

    if (data.title) {
      option.title = data.title;
***REMOVED***

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'***REMOVED*** = data.text;
      delete attrs['aria-selected'***REMOVED***;
***REMOVED***

    for (var attr in attrs) {
      var val = attrs[attr***REMOVED***;

      option.setAttribute(attr, val);
***REMOVED***

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [***REMOVED***;

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c***REMOVED***;

        var $child = this.option(child);

        $children.push($child);
  ***REMOVED***

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
  ***REMOVED***);

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
***REMOVED*** else {
      this.template(data, option);
***REMOVED***

    Utils.StoreData(option, 'data', data);

    return option;
  ***REMOVED***;

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
  ***REMOVED***
***REMOVED***);

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
  ***REMOVED***
***REMOVED***);

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
***REMOVED***);

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
  ***REMOVED***

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
  ***REMOVED***
***REMOVED***);

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
  ***REMOVED***

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
  ***REMOVED***
***REMOVED***);

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
***REMOVED***);

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
***REMOVED***);

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
  ***REMOVED***

      $highlighted.trigger('mouseup');
***REMOVED***);

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
  ***REMOVED***

      var data = Utils.GetData($highlighted[0***REMOVED***, 'data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {***REMOVED***);
  ***REMOVED*** else {
        self.trigger('select', {
          data: data
    ***REMOVED***);
  ***REMOVED***
***REMOVED***);

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected***REMOVED***');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
  ***REMOVED***

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
  ***REMOVED***

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
  ***REMOVED*** else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
  ***REMOVED***
***REMOVED***);

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected***REMOVED***');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
  ***REMOVED***

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
  ***REMOVED*** else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
  ***REMOVED***
***REMOVED***);

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
***REMOVED***);

    container.on('results:message', function (params) {
      self.displayMessage(params);
***REMOVED***);

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
    ***REMOVED*** else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

    this.$results.on('mouseup', '.select2-results__option[aria-selected***REMOVED***',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
      ***REMOVED***);
    ***REMOVED*** else {
          self.trigger('close', {***REMOVED***);
    ***REMOVED***

        return;
  ***REMOVED***

      self.trigger('select', {
        originalEvent: evt,
        data: data
  ***REMOVED***);
***REMOVED***);

    this.$results.on('mouseenter', '.select2-results__option[aria-selected***REMOVED***',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
  ***REMOVED***);
***REMOVED***);
  ***REMOVED***;

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  ***REMOVED***;

  Results.prototype.destroy = function () {
    this.$results.remove();
  ***REMOVED***;

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
***REMOVED***

    var $options = this.$results.find('[aria-selected***REMOVED***');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
***REMOVED*** else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
***REMOVED***
  ***REMOVED***;

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
***REMOVED*** else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
***REMOVED*** else {
      $(container).append(content);
***REMOVED***
  ***REMOVED***;

  return Results;
***REMOVED***);

S2.define('select2/keys',[

***REMOVED***, function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  ***REMOVED***;

  return KEYS;
***REMOVED***);

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
***REMOVED***, function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  ***REMOVED***

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0***REMOVED***, 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0***REMOVED***, 'old-tabindex');
***REMOVED*** else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
***REMOVED***

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  ***REMOVED***;

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
***REMOVED***);

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
***REMOVED***);

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
  ***REMOVED***
***REMOVED***);

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
***REMOVED***);

    container.on('selection:update', function (params) {
      self.update(params.data);
***REMOVED***);

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
***REMOVED***);

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
***REMOVED***);

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
***REMOVED***);

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
***REMOVED***);
  ***REMOVED***;

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0***REMOVED***) ||
        ($.contains(self.$selection[0***REMOVED***, document.activeElement))
      ) {
        return;
  ***REMOVED***

      self.trigger('blur', evt);
***REMOVED*** 1);
  ***REMOVED***;

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0***REMOVED***) {
          return;
    ***REMOVED***

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
  ***REMOVED***);
***REMOVED***);
  ***REMOVED***;

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  ***REMOVED***;

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  ***REMOVED***;

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  ***REMOVED***;

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  ***REMOVED***;

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true***REMOVED*** if the instance is not disabled.
   * @return {false***REMOVED*** if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  ***REMOVED***;

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true***REMOVED*** if the disabled option is true.
   * @return {false***REMOVED*** if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  ***REMOVED***;

  return BaseSelection;
***REMOVED***);

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
***REMOVED***, function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  ***REMOVED***

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  ***REMOVED***;

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
  ***REMOVED***

      self.trigger('toggle', {
        originalEvent: evt
  ***REMOVED***);
***REMOVED***);

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
***REMOVED***);

    this.$selection.on('blur', function (evt) {
      // User exits the container
***REMOVED***);

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
  ***REMOVED***
***REMOVED***);
  ***REMOVED***;

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  ***REMOVED***;

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  ***REMOVED***;

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  ***REMOVED***;

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
***REMOVED***

    var selection = data[0***REMOVED***;

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
***REMOVED*** else {
      $rendered.removeAttr('title');
***REMOVED***
  ***REMOVED***;

  return SingleSelection;
***REMOVED***);

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
***REMOVED***, function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  ***REMOVED***

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  ***REMOVED***;

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
  ***REMOVED***);
***REMOVED***);

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
    ***REMOVED***

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0***REMOVED***, 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
    ***REMOVED***);
  ***REMOVED***
    );
  ***REMOVED***;

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  ***REMOVED***;

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  ***REMOVED***;

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  ***REMOVED***;

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
***REMOVED***

    var $selections = [***REMOVED***;

    for (var d = 0; d < data.length; d++) {
      var selection = data[d***REMOVED***;

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
  ***REMOVED***

      Utils.StoreData($selection[0***REMOVED***, 'data', selection);

      $selections.push($selection);
***REMOVED***

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  ***REMOVED***;

  return MultipleSelection;
***REMOVED***);

S2.define('select2/selection/placeholder',[
  '../utils'
***REMOVED***, function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  ***REMOVED***

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
  ***REMOVED***;
***REMOVED***

    return placeholder;
  ***REMOVED***;

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  ***REMOVED***;

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0***REMOVED***.id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
***REMOVED***

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  ***REMOVED***;

  return Placeholder;
***REMOVED***);

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
***REMOVED***, function ($, KEYS, Utils) {
  function AllowClear () { ***REMOVED***

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
  ***REMOVED***
***REMOVED***

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
***REMOVED***);

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
***REMOVED***);
  ***REMOVED***;

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
***REMOVED***

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
***REMOVED***

    evt.stopPropagation();

    var data = Utils.GetData($clear[0***REMOVED***, 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
***REMOVED***;
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
***REMOVED***

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d***REMOVED***
  ***REMOVED***;

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
  ***REMOVED***
***REMOVED***

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {***REMOVED***);
  ***REMOVED***;

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
***REMOVED***

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
***REMOVED***
  ***REMOVED***;

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
***REMOVED***

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<span class="select2-selection__clear" title="' + removeAll() +'">' +
        '&times;' +
      '</span>'
    );
    Utils.StoreData($remove[0***REMOVED***, 'data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  ***REMOVED***;

  return AllowClear;
***REMOVED***);

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
***REMOVED***, function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  ***REMOVED***

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  ***REMOVED***;

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
***REMOVED***);

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
***REMOVED***);

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
***REMOVED***);

    container.on('disable', function () {
      self.$search.prop('disabled', true);
***REMOVED***);

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
***REMOVED***);

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
  ***REMOVED*** else {
        self.$search.removeAttr('aria-activedescendant');
  ***REMOVED***
***REMOVED***);

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
***REMOVED***);

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
***REMOVED***);

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0***REMOVED***, 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
    ***REMOVED***
  ***REMOVED***
***REMOVED***);

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
  ***REMOVED***
***REMOVED***);

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
    ***REMOVED***

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
  ***REMOVED***
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
    ***REMOVED***

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
    ***REMOVED***

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
    ***REMOVED***

        self.handleSearch(evt);
  ***REMOVED***
    );
  ***REMOVED***;

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  ***REMOVED***;

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  ***REMOVED***;

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0***REMOVED*** == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
***REMOVED***
  ***REMOVED***;

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
  ***REMOVED***);
***REMOVED***

    this._keyUpPrevented = false;
  ***REMOVED***;

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
***REMOVED***);

    this.$search.val(item.text);
    this.handleSearch();
  ***REMOVED***;

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').width();
***REMOVED*** else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
***REMOVED***

    this.$search.css('width', width);
  ***REMOVED***;

  return Search;
***REMOVED***);

S2.define('select2/selection/eventRelay',[
  'jquery'
***REMOVED***, function ($) {
  function EventRelay () { ***REMOVED***

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ***REMOVED***;

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ***REMOVED***;

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
  ***REMOVED***

      // The parameters should always be an object
      params = params || {***REMOVED***;

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
  ***REMOVED***);

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
  ***REMOVED***

      params.prevented = evt.isDefaultPrevented();
***REMOVED***);
  ***REMOVED***;

  return EventRelay;
***REMOVED***);

S2.define('select2/translation',[
  'jquery',
  'require'
***REMOVED***, function ($, require) {
  function Translation (dict) {
    this.dict = dict || {***REMOVED***;
  ***REMOVED***

  Translation.prototype.all = function () {
    return this.dict;
  ***REMOVED***;

  Translation.prototype.get = function (key) {
    return this.dict[key***REMOVED***;
  ***REMOVED***;

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({***REMOVED***, translation.all(), this.dict);
  ***REMOVED***;

  // Static functions

  Translation._cache = {***REMOVED***;

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path***REMOVED*** = translations;
***REMOVED***

    return new Translation(Translation._cache[path***REMOVED***);
  ***REMOVED***;

  return Translation;
***REMOVED***);

S2.define('select2/diacritics',[

***REMOVED***, function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  ***REMOVED***;

  return diacritics;
***REMOVED***);

S2.define('select2/data/base',[
  '../utils'
***REMOVED***, function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  ***REMOVED***

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  ***REMOVED***;

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  ***REMOVED***;

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  ***REMOVED***;

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  ***REMOVED***;

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
***REMOVED*** else {
      id += '-' + Utils.generateChars(4);
***REMOVED***
    return id;
  ***REMOVED***;

  return BaseAdapter;
***REMOVED***);

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
***REMOVED***, function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  ***REMOVED***

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [***REMOVED***;
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
***REMOVED***);

    callback(data);
  ***REMOVED***;

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
***REMOVED***

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [***REMOVED***;

        data = [data***REMOVED***;
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d***REMOVED***.id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
      ***REMOVED***
    ***REMOVED***

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
  ***REMOVED***);
***REMOVED*** else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
***REMOVED***
  ***REMOVED***;

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
***REMOVED***

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
***REMOVED***

    this.current(function (currentData) {
      var val = [***REMOVED***;

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d***REMOVED***.id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
    ***REMOVED***
  ***REMOVED***

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
***REMOVED***);
  ***REMOVED***;

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
***REMOVED***);

    container.on('unselect', function (params) {
      self.unselect(params.data);
***REMOVED***);
  ***REMOVED***;

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
***REMOVED***);
  ***REMOVED***;

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [***REMOVED***;
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
  ***REMOVED***

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
  ***REMOVED***
***REMOVED***);

    callback({
      results: data
***REMOVED***);
  ***REMOVED***;

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  ***REMOVED***;

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
***REMOVED*** else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
  ***REMOVED*** else {
        option.innerText = data.text;
  ***REMOVED***
***REMOVED***

    if (data.id !== undefined) {
      option.value = data.id;
***REMOVED***

    if (data.disabled) {
      option.disabled = true;
***REMOVED***

    if (data.selected) {
      option.selected = true;
***REMOVED***

    if (data.title) {
      option.title = data.title;
***REMOVED***

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $option;
  ***REMOVED***;

  SelectAdapter.prototype.item = function ($option) {
    var data = {***REMOVED***;

    data = Utils.GetData($option[0***REMOVED***, 'data');

    if (data != null) {
      return data;
***REMOVED***

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
  ***REMOVED***;
***REMOVED*** else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [***REMOVED***,
        title: $option.prop('title')
  ***REMOVED***;

      var $children = $option.children('option');
      var children = [***REMOVED***;

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c***REMOVED***);

        var child = this.item($child);

        children.push(child);
  ***REMOVED***

      data.children = children;
***REMOVED***

    data = this._normalizeItem(data);
    data.element = $option[0***REMOVED***;

    Utils.StoreData($option[0***REMOVED***, 'data', data);

    return data;
  ***REMOVED***;

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
  ***REMOVED***;
***REMOVED***

    item = $.extend({***REMOVED***, {
      text: ''
***REMOVED*** item);

    var defaults = {
      selected: false,
      disabled: false
***REMOVED***;

    if (item.id != null) {
      item.id = item.id.toString();
***REMOVED***

    if (item.text != null) {
      item.text = item.text.toString();
***REMOVED***

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
***REMOVED***

    return $.extend({***REMOVED***, defaults, item);
  ***REMOVED***;

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  ***REMOVED***;

  return SelectAdapter;
***REMOVED***);

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
***REMOVED***, function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [***REMOVED***;

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  ***REMOVED***

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  ***REMOVED***;

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
***REMOVED***);

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
***REMOVED***

    ArrayAdapter.__super__.select.call(this, data);
  ***REMOVED***;

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
***REMOVED***).get();

    var $options = [***REMOVED***;

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
  ***REMOVED***;
***REMOVED***

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d***REMOVED***);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {***REMOVED***, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
  ***REMOVED***

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
  ***REMOVED***

      $options.push($option);
***REMOVED***

    return $options;
  ***REMOVED***;

  return ArrayAdapter;
***REMOVED***);

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
***REMOVED***, function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
***REMOVED***

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  ***REMOVED***

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({***REMOVED***, params, {
          q: params.term
    ***REMOVED***);
  ***REMOVED***
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
  ***REMOVED***
***REMOVED***;

    return $.extend({***REMOVED***, defaults, options, true);
  ***REMOVED***;

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  ***REMOVED***;

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [***REMOVED***;
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
  ***REMOVED***

      this._request = null;
***REMOVED***

    var options = $.extend({
      type: 'GET'
***REMOVED*** this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
***REMOVED***

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
***REMOVED***

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
      ***REMOVED***
    ***REMOVED***

        callback(results);
  ***REMOVED*** function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
    ***REMOVED***

        self.trigger('results:message', {
          message: 'errorLoading'
    ***REMOVED***);
  ***REMOVED***);

      self._request = $request;
***REMOVED***

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
  ***REMOVED***

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
***REMOVED*** else {
      request();
***REMOVED***
  ***REMOVED***;

  return AjaxAdapter;
***REMOVED***);

S2.define('select2/data/tags',[
  'jquery'
***REMOVED***, function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
***REMOVED***

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
***REMOVED***

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t***REMOVED***;
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
  ***REMOVED***
***REMOVED***
  ***REMOVED***

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
***REMOVED***

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i***REMOVED***;

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
  ***REMOVED*** true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
      ***REMOVED***

          obj.data = data;
          callback(obj);

          return;
    ***REMOVED***
  ***REMOVED***

      if (child) {
        return true;
  ***REMOVED***

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option***REMOVED***);

        self.insertTag(data, tag);
  ***REMOVED***

      obj.results = data;

      callback(obj);
***REMOVED***

    decorated.call(this, params, wrapper);
  ***REMOVED***;

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
***REMOVED***

    return {
      id: term,
      text: term
***REMOVED***;
  ***REMOVED***;

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  ***REMOVED***;

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag***REMOVED***');

    $options.each(function () {
      if (this.selected) {
        return;
  ***REMOVED***

      $(this).remove();
***REMOVED***);
  ***REMOVED***;

  return Tags;
***REMOVED***);

S2.define('select2/data/tokenizer',[
  'jquery'
***REMOVED***, function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
***REMOVED***

    decorated.call(this, $element, options);
  ***REMOVED***

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  ***REMOVED***;

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
  ***REMOVED***);

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option***REMOVED***);
  ***REMOVED***

      // Select the item, now that we know there is an option for it
      select(item);
***REMOVED***

    function select (data) {
      self.trigger('select', {
        data: data
  ***REMOVED***);
***REMOVED***

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
  ***REMOVED***

      params.term = tokenData.term;
***REMOVED***

    decorated.call(this, params, callback);
  ***REMOVED***;

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [***REMOVED***;
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
  ***REMOVED***;
***REMOVED***;

    while (i < term.length) {
      var termChar = term[i***REMOVED***;

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
  ***REMOVED***

      var part = term.substr(0, i);
      var partParams = $.extend({***REMOVED***, params, {
        term: part
  ***REMOVED***);

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
  ***REMOVED***

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
***REMOVED***

    return {
      term: term
***REMOVED***;
  ***REMOVED***;

  return Tokenizer;
***REMOVED***);

S2.define('select2/data/minimumInputLength',[

***REMOVED***, function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  ***REMOVED***

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
    ***REMOVED***
  ***REMOVED***);

      return;
***REMOVED***

    decorated.call(this, params, callback);
  ***REMOVED***;

  return MinimumInputLength;
***REMOVED***);

S2.define('select2/data/maximumInputLength',[

***REMOVED***, function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  ***REMOVED***

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
    ***REMOVED***
  ***REMOVED***);

      return;
***REMOVED***

    decorated.call(this, params, callback);
  ***REMOVED***;

  return MaximumInputLength;
***REMOVED***);

S2.define('select2/data/maximumSelectionLength',[

***REMOVED***, function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  ***REMOVED***

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
  ***REMOVED***);
  ***REMOVED***;

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
  ***REMOVED***);
  ***REMOVED***;

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
        ***REMOVED***
      ***REMOVED***);
          return;
    ***REMOVED***

        if (successCallback) {
          successCallback();
    ***REMOVED***
  ***REMOVED***);
  ***REMOVED***;

  return MaximumSelectionLength;
***REMOVED***);

S2.define('select2/dropdown',[
  'jquery',
  './utils'
***REMOVED***, function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  ***REMOVED***

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  ***REMOVED***;

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  ***REMOVED***;

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  ***REMOVED***;

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  ***REMOVED***;

  return Dropdown;
***REMOVED***);

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
***REMOVED***, function ($, Utils) {
  function Search () { ***REMOVED***

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  ***REMOVED***;

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
***REMOVED***);

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
***REMOVED***);

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
***REMOVED***);

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
  ***REMOVED*** 0);
***REMOVED***);

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
***REMOVED***);

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
  ***REMOVED***
***REMOVED***);

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
    ***REMOVED*** else {
          self.$searchContainer.addClass('select2-search--hide');
    ***REMOVED***
  ***REMOVED***
***REMOVED***);

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
  ***REMOVED*** else {
        self.$search.removeAttr('aria-activedescendant');
  ***REMOVED***
***REMOVED***);
  ***REMOVED***;

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
  ***REMOVED***);
***REMOVED***

    this._keyUpPrevented = false;
  ***REMOVED***;

  Search.prototype.showSearch = function (_, params) {
    return true;
  ***REMOVED***;

  return Search;
***REMOVED***);

S2.define('select2/dropdown/hidePlaceholder',[

***REMOVED***, function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  ***REMOVED***

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  ***REMOVED***;

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
  ***REMOVED***;
***REMOVED***

    return placeholder;
  ***REMOVED***;

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d***REMOVED***;

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
  ***REMOVED***
***REMOVED***

    return modifiedData;
  ***REMOVED***;

  return HidePlaceholder;
***REMOVED***);

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
***REMOVED***, function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {***REMOVED***;

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  ***REMOVED***

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
***REMOVED***
  ***REMOVED***;

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
***REMOVED***);

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
***REMOVED***);

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  ***REMOVED***;

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0***REMOVED***
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
***REMOVED***

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
***REMOVED***
  ***REMOVED***;

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({***REMOVED***, {page: 1***REMOVED***, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  ***REMOVED***;

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  ***REMOVED***;

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  ***REMOVED***;

  return InfiniteScroll;
***REMOVED***);

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
***REMOVED***, function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  ***REMOVED***

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
***REMOVED***);

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
***REMOVED***);

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
***REMOVED***);
  ***REMOVED***;

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  ***REMOVED***;

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
***REMOVED***);

    this.$container = $container;
  ***REMOVED***;

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  ***REMOVED***;

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  ***REMOVED***;

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
***REMOVED***

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);

    this._containerResultsHandlersBound = true;
  ***REMOVED***;

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
  ***REMOVED***);
***REMOVED***);

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
***REMOVED***);

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
***REMOVED***);
  ***REMOVED***;

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  ***REMOVED***;

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
***REMOVED***;

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
***REMOVED***;

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
***REMOVED***;

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
***REMOVED***;

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
***REMOVED***

    var parentOffset = {
      top: 0,
      left: 0
***REMOVED***;

    if (
      $.contains(document.body, $offsetParent[0***REMOVED***) ||
      $offsetParent[0***REMOVED***.isConnected
      ) {
      parentOffset = $offsetParent.offset();
***REMOVED***

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
***REMOVED***

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
***REMOVED*** else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
***REMOVED***

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
***REMOVED***

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
***REMOVED***

    this.$dropdownContainer.css(css);
  ***REMOVED***;

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
***REMOVED***;

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
***REMOVED***

    this.$dropdown.css(css);
  ***REMOVED***;

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  ***REMOVED***;

  return AttachBody;
***REMOVED***);

S2.define('select2/dropdown/minimumResultsForSearch',[

***REMOVED***, function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d***REMOVED***;

      if (item.children) {
        count += countResults(item.children);
  ***REMOVED*** else {
        count++;
  ***REMOVED***
***REMOVED***

    return count;
  ***REMOVED***

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
***REMOVED***

    decorated.call(this, $element, options, dataAdapter);
  ***REMOVED***

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
***REMOVED***

    return decorated.call(this, params);
  ***REMOVED***;

  return MinimumResultsForSearch;
***REMOVED***);

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
***REMOVED***, function (Utils) {
  function SelectOnClose () { ***REMOVED***

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
***REMOVED***);
  ***REMOVED***;

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
  ***REMOVED***
***REMOVED***

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
***REMOVED***

    var data = Utils.GetData($highlightedResults[0***REMOVED***, 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
***REMOVED***

    this.trigger('select', {
        data: data
***REMOVED***);
  ***REMOVED***;

  return SelectOnClose;
***REMOVED***);

S2.define('select2/dropdown/closeOnSelect',[

***REMOVED***, function () {
  function CloseOnSelect () { ***REMOVED***

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
***REMOVED***);

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
***REMOVED***);
  ***REMOVED***;

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
***REMOVED***

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
***REMOVED***);
  ***REMOVED***;

  return CloseOnSelect;
***REMOVED***);

S2.define('select2/i18n/en',[***REMOVED***,function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
***REMOVED***
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
  ***REMOVED***

      return message;
***REMOVED***
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
***REMOVED***
    loadingMore: function () {
      return 'Loading more results…';
***REMOVED***
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
  ***REMOVED***

      return message;
***REMOVED***
    noResults: function () {
      return 'No results found';
***REMOVED***
    searching: function () {
      return 'Searching…';
***REMOVED***
    removeAllItems: function () {
      return 'Remove all items';
***REMOVED***
  ***REMOVED***;
***REMOVED***);

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
***REMOVED***, function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  ***REMOVED***

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {***REMOVED***, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
  ***REMOVED*** else if (options.data != null) {
        options.dataAdapter = ArrayData;
  ***REMOVED*** else {
        options.dataAdapter = SelectData;
  ***REMOVED***

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
  ***REMOVED***

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
  ***REMOVED***

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
  ***REMOVED***

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
  ***REMOVED***

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
  ***REMOVED***

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
  ***REMOVED***

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
  ***REMOVED***
***REMOVED***

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
  ***REMOVED***

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
  ***REMOVED***

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
  ***REMOVED***
***REMOVED***

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
  ***REMOVED*** else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
  ***REMOVED***

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
  ***REMOVED***

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
  ***REMOVED***

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
  ***REMOVED***

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
***REMOVED***

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
  ***REMOVED*** else {
        options.selectionAdapter = SingleSelection;
  ***REMOVED***

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
  ***REMOVED***

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
  ***REMOVED***

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
  ***REMOVED***

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
  ***REMOVED***

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
***REMOVED***

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [***REMOVED***;

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l***REMOVED***;

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
  ***REMOVED***
***REMOVED***

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  ***REMOVED***;

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a***REMOVED*** || a;
  ***REMOVED***

      return text.replace(/[^\u0000-\u007E***REMOVED***/g, match);
***REMOVED***

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
  ***REMOVED***

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {***REMOVED***, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c***REMOVED***;

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
      ***REMOVED***
    ***REMOVED***

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
    ***REMOVED***

        // If there were no matching children, check just the plain object
        return matcher(params, match);
  ***REMOVED***

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
  ***REMOVED***

      // If it doesn't contain the term, don't return anything
      return null;
***REMOVED***

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {***REMOVED***,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
  ***REMOVED***
      templateResult: function (result) {
        return result.text;
  ***REMOVED***
      templateSelection: function (selection) {
        return selection.text;
  ***REMOVED***
      theme: 'default',
      width: 'resolve'
***REMOVED***;
  ***REMOVED***;

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang***REMOVED***').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  ***REMOVED***;

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [***REMOVED***;
***REMOVED***

    if ($.isEmptyObject(language)) {
      return [***REMOVED***;
***REMOVED***

    if ($.isPlainObject(language)) {
      return [language***REMOVED***;
***REMOVED***

    var languages;

    if (!$.isArray(language)) {
      languages = [language***REMOVED***;
***REMOVED*** else {
      languages = language;
***REMOVED***

    var resolvedLanguages = [***REMOVED***;

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l***REMOVED***);

      if (typeof languages[l***REMOVED*** === 'string' && languages[l***REMOVED***.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l***REMOVED***.split('-');
        var baseLanguage = languageParts[0***REMOVED***;

        resolvedLanguages.push(baseLanguage);
  ***REMOVED***
***REMOVED***

    return resolvedLanguages;
  ***REMOVED***;

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l***REMOVED***;

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
    ***REMOVED*** catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
      ***REMOVED*** catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED*** else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
  ***REMOVED*** else {
        languageData = language;
  ***REMOVED***

      translations.extend(languageData);
***REMOVED***

    return translations;
  ***REMOVED***;

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {***REMOVED***;
    data[camelKey***REMOVED*** = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  ***REMOVED***;

  var defaults = new Defaults();

  return defaults;
***REMOVED***);

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
***REMOVED***, function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
***REMOVED***

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
***REMOVED***

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
***REMOVED***
  ***REMOVED***

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'***REMOVED***;

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
***REMOVED***

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
***REMOVED***

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
  ***REMOVED*** else if ($e.closest('[dir***REMOVED***').prop('dir')) {
        this.options.dir = $e.closest('[dir***REMOVED***').prop('dir');
  ***REMOVED*** else {
        this.options.dir = 'ltr';
  ***REMOVED***
***REMOVED***

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0***REMOVED***, 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
  ***REMOVED***

      Utils.StoreData($e[0***REMOVED***, 'data', Utils.GetData($e[0***REMOVED***, 'select2Tags'));
      Utils.StoreData($e[0***REMOVED***, 'tags', true);
***REMOVED***

    if (Utils.GetData($e[0***REMOVED***, 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
  ***REMOVED***

      $e.attr('ajax--url', Utils.GetData($e[0***REMOVED***, 'ajaxUrl'));
      Utils.StoreData($e[0***REMOVED***, 'ajax-Url', Utils.GetData($e[0***REMOVED***, 'ajaxUrl'));
***REMOVED***

    var dataset = {***REMOVED***;

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
***REMOVED***

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0***REMOVED***.attributes.length; attr++) {
      var attributeName = $e[0***REMOVED***.attributes[attr***REMOVED***.name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0***REMOVED***, dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z***REMOVED***)/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName***REMOVED*** = dataValue;
  ***REMOVED***
***REMOVED***

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0***REMOVED***.dataset) {
      dataset = $.extend(true, {***REMOVED***, $e[0***REMOVED***.dataset, dataset);
***REMOVED***

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {***REMOVED***, Utils.GetData($e[0***REMOVED***), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
  ***REMOVED***

      if ($.isPlainObject(this.options[key***REMOVED***)) {
        $.extend(this.options[key***REMOVED***, data[key***REMOVED***);
  ***REMOVED*** else {
        this.options[key***REMOVED*** = data[key***REMOVED***;
  ***REMOVED***
***REMOVED***

    return this;
  ***REMOVED***;

  Options.prototype.get = function (key) {
    return this.options[key***REMOVED***;
  ***REMOVED***;

  Options.prototype.set = function (key, val) {
    this.options[key***REMOVED*** = val;
  ***REMOVED***;

  return Options;
***REMOVED***);

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
***REMOVED***, function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0***REMOVED***, 'select2') != null) {
      Utils.GetData($element[0***REMOVED***, 'select2').destroy();
***REMOVED***

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {***REMOVED***;

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0***REMOVED***, 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
  ***REMOVED***);
***REMOVED***);

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0***REMOVED***, 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  ***REMOVED***;

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
***REMOVED*** else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
***REMOVED*** else {
      id = Utils.generateChars(4);
***REMOVED***

    id = id.replace(/(:|\.|\[|\***REMOVED***|,)/g, '');
    id = 'select2-' + id;

    return id;
  ***REMOVED***;

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
***REMOVED***
  ***REMOVED***;

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+***REMOVED***?([0-9***REMOVED****\.)?[0-9***REMOVED***+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
  ***REMOVED***

      return this._resolveWidth($element, 'element');
***REMOVED***

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
  ***REMOVED***

      return elementWidth + 'px';
***REMOVED***

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
  ***REMOVED***

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i***REMOVED***.replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1***REMOVED***;
    ***REMOVED***
  ***REMOVED***

      return null;
***REMOVED***

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0***REMOVED***);

      return computedStyle.width;
***REMOVED***

    return method;
  ***REMOVED***;

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  ***REMOVED***;

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
***REMOVED***);

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0***REMOVED***.attachEvent) {
      this.$element[0***REMOVED***.attachEvent('onpropertychange', this._syncA);
***REMOVED***

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        self._syncA();
        self._syncS(null, mutations);
  ***REMOVED***);
      this._observer.observe(this.$element[0***REMOVED***, {
        attributes: true,
        childList: true,
        subtree: false
  ***REMOVED***);
***REMOVED*** else if (this.$element[0***REMOVED***.addEventListener) {
      this.$element[0***REMOVED***.addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0***REMOVED***.addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0***REMOVED***.addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
***REMOVED***
  ***REMOVED***;

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
***REMOVED***);
  ***REMOVED***;

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'***REMOVED***;

    this.selection.on('toggle', function () {
      self.toggleDropdown();
***REMOVED***);

    this.selection.on('focus', function (params) {
      self.focus(params);
***REMOVED***);

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
  ***REMOVED***

      self.trigger(name, params);
***REMOVED***);
  ***REMOVED***;

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
***REMOVED***);
  ***REMOVED***;

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
***REMOVED***);
  ***REMOVED***;

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
***REMOVED***);

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
***REMOVED***);

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
***REMOVED***);

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
***REMOVED***);

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
***REMOVED***);

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {***REMOVED***);
  ***REMOVED***

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***);

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
    ***REMOVED*** else if (key === KEYS.ENTER) {
          self.trigger('results:select', {***REMOVED***);

          evt.preventDefault();
    ***REMOVED*** else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {***REMOVED***);

          evt.preventDefault();
    ***REMOVED*** else if (key === KEYS.UP) {
          self.trigger('results:previous', {***REMOVED***);

          evt.preventDefault();
    ***REMOVED*** else if (key === KEYS.DOWN) {
          self.trigger('results:next', {***REMOVED***);

          evt.preventDefault();
    ***REMOVED***
  ***REMOVED*** else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
    ***REMOVED***
  ***REMOVED***
***REMOVED***);
  ***REMOVED***;

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
  ***REMOVED***

      this.trigger('disable', {***REMOVED***);
***REMOVED*** else {
      this.trigger('enable', {***REMOVED***);
***REMOVED***
  ***REMOVED***;

  Select2.prototype._isChangeMutation = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
***REMOVED***

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
***REMOVED*** else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n***REMOVED***;

        if (node.selected) {
          changed = true;
    ***REMOVED***
  ***REMOVED***
***REMOVED*** else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
***REMOVED*** else if ($.isArray(mutations)) {
      $.each(mutations, function(evt, mutation) {
        if (self._isChangeMutation(evt, mutation)) {
          // We've found a change mutation.
          // Let's escape from the loop and continue
          changed = true;
          return false;
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
    return changed;
  ***REMOVED***;

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = this._isChangeMutation(evt, mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***
  ***REMOVED***;

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
***REMOVED***;

    if (args === undefined) {
      args = {***REMOVED***;
***REMOVED***

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name***REMOVED***;
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
  ***REMOVED***;

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
  ***REMOVED***
***REMOVED***

    actualTrigger.call(this, name, args);
  ***REMOVED***;

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
***REMOVED***

    if (this.isOpen()) {
      this.close();
***REMOVED*** else {
      this.open();
***REMOVED***
  ***REMOVED***;

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
***REMOVED***

    if (this.isDisabled()) {
      return;
***REMOVED***

    this.trigger('query', {***REMOVED***);
  ***REMOVED***;

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
***REMOVED***

    this.trigger('close', { originalEvent : evt ***REMOVED***);
  ***REMOVED***;

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true***REMOVED*** if the instance is not disabled.
   * @return {false***REMOVED*** if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  ***REMOVED***;

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true***REMOVED*** if the disabled option is true.
   * @return {false***REMOVED*** if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  ***REMOVED***;

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  ***REMOVED***;

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  ***REMOVED***;

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
***REMOVED***

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {***REMOVED***);
  ***REMOVED***;

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
***REMOVED***

    if (args == null || args.length === 0) {
      args = [true***REMOVED***;
***REMOVED***

    var disabled = !args[0***REMOVED***;

    this.$element.prop('disabled', disabled);
  ***REMOVED***;

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
***REMOVED***

    var data = [***REMOVED***;

    this.dataAdapter.current(function (currentData) {
      data = currentData;
***REMOVED***);

    return data;
  ***REMOVED***;

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
***REMOVED***

    if (args == null || args.length === 0) {
      return this.$element.val();
***REMOVED***

    var newVal = args[0***REMOVED***;

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
  ***REMOVED***);
***REMOVED***

    this.$element.val(newVal).trigger('input').trigger('change');
  ***REMOVED***;

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0***REMOVED***.detachEvent) {
      this.$element[0***REMOVED***.detachEvent('onpropertychange', this._syncA);
***REMOVED***

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
***REMOVED*** else if (this.$element[0***REMOVED***.removeEventListener) {
      this.$element[0***REMOVED***
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0***REMOVED***
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0***REMOVED***
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
***REMOVED***

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0***REMOVED***, 'old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0***REMOVED***);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  ***REMOVED***;

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0***REMOVED***, 'element', this.$element);

    return $container;
  ***REMOVED***;

  return Select2;
***REMOVED***);

S2.define('select2/compat/utils',[
  'jquery'
***REMOVED***, function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [***REMOVED***, adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

    $dest.attr('class', replacements.join(' '));
  ***REMOVED***

  return {
    syncCssClasses: syncCssClasses
  ***REMOVED***;
***REMOVED***);

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
***REMOVED***, function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  ***REMOVED***

  function ContainerCSS () { ***REMOVED***

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
***REMOVED***

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
    ***REMOVED***

        return clazz;
  ***REMOVED***;
***REMOVED***

    var containerCss = this.options.get('containerCss') || {***REMOVED***;

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
***REMOVED***

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  ***REMOVED***;

  return ContainerCSS;
***REMOVED***);

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
***REMOVED***, function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  ***REMOVED***

  function DropdownCSS () { ***REMOVED***

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
***REMOVED***

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
    ***REMOVED***

        return clazz;
  ***REMOVED***;
***REMOVED***

    var dropdownCss = this.options.get('dropdownCss') || {***REMOVED***;

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
***REMOVED***

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  ***REMOVED***;

  return DropdownCSS;
***REMOVED***);

S2.define('select2/compat/initSelection',[
  'jquery'
***REMOVED***, function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
***REMOVED***

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  ***REMOVED***

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
***REMOVED***

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data***REMOVED***;
  ***REMOVED***

      callback(data);
***REMOVED***);
  ***REMOVED***;

  return InitSelection;
***REMOVED***);

S2.define('select2/compat/inputData',[
  'jquery',
  '../utils'
***REMOVED***, function ($, Utils) {
  function InputData (decorated, $element, options) {
    this._currentData = [***REMOVED***;
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
  ***REMOVED***
***REMOVED***

    decorated.call(this, $element, options);
  ***REMOVED***

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [***REMOVED***;

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
  ***REMOVED*** else {
        data.selected = false;
  ***REMOVED***

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
  ***REMOVED***

      return selected;
***REMOVED***

    var selected = [***REMOVED***;

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d***REMOVED***;

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
***REMOVED***

    callback(selected);
  ***REMOVED***;

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
    ***REMOVED***);
  ***REMOVED***);

      this.$element.val(data.id);
      this.$element.trigger('input').trigger('change');
***REMOVED*** else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('input').trigger('change');
***REMOVED***
  ***REMOVED***;

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [***REMOVED***;

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d***REMOVED***;

        if (data.id == item.id) {
          continue;
    ***REMOVED***

        values.push(item.id);
  ***REMOVED***

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('input').trigger('change');
***REMOVED***);
  ***REMOVED***;

  InputData.prototype.query = function (_, params, callback) {
    var results = [***REMOVED***;

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d***REMOVED***;

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
  ***REMOVED***
***REMOVED***

    callback({
      results: results
***REMOVED***);
  ***REMOVED***;

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return Utils.GetData($option[0***REMOVED***, 'data');
***REMOVED***);

    this._currentData.push.apply(this._currentData, options);
  ***REMOVED***;

  return InputData;
***REMOVED***);

S2.define('select2/compat/matcher',[
  'jquery'
***REMOVED***, function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {***REMOVED***, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
  ***REMOVED***

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c***REMOVED***;

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
      ***REMOVED***
    ***REMOVED***

        if (match.children.length > 0) {
          return match;
    ***REMOVED***
  ***REMOVED***

      if (matcher(params.term, data.text, data)) {
        return match;
  ***REMOVED***

      return null;
***REMOVED***

    return wrappedMatcher;
  ***REMOVED***

  return oldMatcher;
***REMOVED***);

S2.define('select2/compat/query',[

***REMOVED***, function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
***REMOVED***

    decorated.call(this, $element, options);
  ***REMOVED***

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  ***REMOVED***;

  return Query;
***REMOVED***);

S2.define('select2/dropdown/attachContainer',[

***REMOVED***, function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  ***REMOVED***

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  ***REMOVED***;

  return AttachContainer;
***REMOVED***);

S2.define('select2/dropdown/stopPropagation',[

***REMOVED***, function () {
  function StopPropagation () { ***REMOVED***

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ***REMOVED***;

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
***REMOVED***);
  ***REMOVED***;

  return StopPropagation;
***REMOVED***);

S2.define('select2/selection/stopPropagation',[

***REMOVED***, function () {
  function StopPropagation () { ***REMOVED***

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ***REMOVED***;

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
***REMOVED***);
  ***REMOVED***;

  return StopPropagation;
***REMOVED***);

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'***REMOVED***, factory);
***REMOVED*** else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
***REMOVED*** else {
        // Browser globals
        factory(jQuery);
***REMOVED***
***REMOVED***(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'***REMOVED***,
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'***REMOVED*** : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'***REMOVED***,
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i***REMOVED*** ***REMOVED*** = $.event.mouseHooks;
    ***REMOVED***
***REMOVED***

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i***REMOVED***, handler, false );
            ***REMOVED***
        ***REMOVED*** else {
                this.onmousewheel = handler;
        ***REMOVED***
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
***REMOVED***

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i***REMOVED***, handler, false );
            ***REMOVED***
        ***REMOVED*** else {
                this.onmousewheel = null;
        ***REMOVED***
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
***REMOVED***

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent'***REMOVED***();
            if (!$parent.length) {
                $parent = $('body');
        ***REMOVED***
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
***REMOVED***

        getPageHeight: function(elem) {
            return $(elem).height();
***REMOVED***

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
    ***REMOVED***
***REMOVED***;

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
***REMOVED***

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
    ***REMOVED***
***REMOVED***);


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;  ***REMOVED***
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;   ***REMOVED***
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;  ***REMOVED***
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; ***REMOVED***

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
    ***REMOVED***

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
    ***REMOVED***
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; ***REMOVED***
    ***REMOVED***

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; ***REMOVED***

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
    ***REMOVED*** else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
    ***REMOVED***

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
        ***REMOVED***
    ***REMOVED***

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
    ***REMOVED***

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ***REMOVED***(delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ***REMOVED***(deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ***REMOVED***(deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
    ***REMOVED***

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); ***REMOVED***
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
***REMOVED***

    function nullLowestDelta() {
        lowestDelta = null;
***REMOVED***

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
***REMOVED***

***REMOVED***));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
***REMOVED***, function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'***REMOVED***;

    $.fn.select2 = function (options) {
      options = options || {***REMOVED***;

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {***REMOVED***, options);

          var instance = new Select2($(this), instanceOptions);
    ***REMOVED***);

        return this;
  ***REMOVED*** else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
      ***REMOVED***

          ret = instance[options***REMOVED***.apply(instance, args);
    ***REMOVED***);

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
    ***REMOVED***

        return ret;
  ***REMOVED*** else {
        throw new Error('Invalid arguments for Select2: ' + options);
  ***REMOVED***
***REMOVED***;
  ***REMOVED***

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  ***REMOVED***

  return Select2;
***REMOVED***);

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  ***REMOVED***;
***REMOVED***());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
***REMOVED***));
