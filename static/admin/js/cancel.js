'use strict';
{
    // Call function fn when the DOM is loaded and ready. If it is already
    // loaded, call the function now.
    // http://youmightnotneedjquery.com/#ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
    ***REMOVED*** else {
            document.addEventListener('DOMContentLoaded', fn);
    ***REMOVED***
***REMOVED***

    ready(function() {
        function handleClick(event) {
            event.preventDefault();
            const params = new URLSearchParams(window.location.search);
            if (params.has('_popup')) {
                window.close(); // Close the popup.
        ***REMOVED*** else {
                window.history.back(); // Otherwise, go back.
        ***REMOVED***
    ***REMOVED***

        document.querySelectorAll('.cancel-link').forEach(function(el) {
            el.addEventListener('click', handleClick);
    ***REMOVED***);
***REMOVED***);
***REMOVED***
