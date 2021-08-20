// Core javascript helper functions
'use strict';

// quickElement(tagType, parentReference [, textInChildNode, attribute, attributeValue ...***REMOVED***);
function quickElement() {
    const obj = document.createElement(arguments[0***REMOVED***);
    if (arguments[2***REMOVED***) {
        const textNode = document.createTextNode(arguments[2***REMOVED***);
        obj.appendChild(textNode);
***REMOVED***
    const len = arguments.length;
    for (let i = 3; i < len; i += 2) {
        obj.setAttribute(arguments[i***REMOVED***, arguments[i + 1***REMOVED***);
***REMOVED***
    arguments[1***REMOVED***.appendChild(obj);
    return obj;
***REMOVED***

// "a" is reference to an object
function removeChildren(a) {
    while (a.hasChildNodes()) {
        a.removeChild(a.lastChild);
***REMOVED***
***REMOVED***

// ----------------------------------------------------------------------------
// Find-position functions by PPK
// See https://www.quirksmode.org/js/findpos.html
// ----------------------------------------------------------------------------
function findPosX(obj) {
    let curleft = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curleft += obj.offsetLeft - obj.scrollLeft;
            obj = obj.offsetParent;
    ***REMOVED***
***REMOVED*** else if (obj.x) {
        curleft += obj.x;
***REMOVED***
    return curleft;
***REMOVED***

function findPosY(obj) {
    let curtop = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curtop += obj.offsetTop - obj.scrollTop;
            obj = obj.offsetParent;
    ***REMOVED***
***REMOVED*** else if (obj.y) {
        curtop += obj.y;
***REMOVED***
    return curtop;
***REMOVED***

//-----------------------------------------------------------------------------
// Date object extensions
// ----------------------------------------------------------------------------
{
    Date.prototype.getTwelveHours = function() {
        return this.getHours() % 12 || 12;
***REMOVED***;

    Date.prototype.getTwoDigitMonth = function() {
        return (this.getMonth() < 9) ? '0' + (this.getMonth() + 1) : (this.getMonth() + 1);
***REMOVED***;

    Date.prototype.getTwoDigitDate = function() {
        return (this.getDate() < 10) ? '0' + this.getDate() : this.getDate();
***REMOVED***;

    Date.prototype.getTwoDigitTwelveHour = function() {
        return (this.getTwelveHours() < 10) ? '0' + this.getTwelveHours() : this.getTwelveHours();
***REMOVED***;

    Date.prototype.getTwoDigitHour = function() {
        return (this.getHours() < 10) ? '0' + this.getHours() : this.getHours();
***REMOVED***;

    Date.prototype.getTwoDigitMinute = function() {
        return (this.getMinutes() < 10) ? '0' + this.getMinutes() : this.getMinutes();
***REMOVED***;

    Date.prototype.getTwoDigitSecond = function() {
        return (this.getSeconds() < 10) ? '0' + this.getSeconds() : this.getSeconds();
***REMOVED***;

    Date.prototype.getAbbrevMonthName = function() {
        return typeof window.CalendarNamespace === "undefined"
            ? this.getTwoDigitMonth()
            : window.CalendarNamespace.monthsOfYearAbbrev[this.getMonth()***REMOVED***;
***REMOVED***;

    Date.prototype.getFullMonthName = function() {
        return typeof window.CalendarNamespace === "undefined"
            ? this.getTwoDigitMonth()
            : window.CalendarNamespace.monthsOfYear[this.getMonth()***REMOVED***;
***REMOVED***;

    Date.prototype.strftime = function(format) {
        const fields = {
            b: this.getAbbrevMonthName(),
            B: this.getFullMonthName(),
            c: this.toString(),
            d: this.getTwoDigitDate(),
            H: this.getTwoDigitHour(),
            I: this.getTwoDigitTwelveHour(),
            m: this.getTwoDigitMonth(),
            M: this.getTwoDigitMinute(),
            p: (this.getHours() >= 12) ? 'PM' : 'AM',
            S: this.getTwoDigitSecond(),
            w: '0' + this.getDay(),
            x: this.toLocaleDateString(),
            X: this.toLocaleTimeString(),
            y: ('' + this.getFullYear()).substr(2, 4),
            Y: '' + this.getFullYear(),
            '%': '%'
    ***REMOVED***;
        let result = '', i = 0;
        while (i < format.length) {
            if (format.charAt(i) === '%') {
                result = result + fields[format.charAt(i + 1)***REMOVED***;
                ++i;
        ***REMOVED***
            else {
                result = result + format.charAt(i);
        ***REMOVED***
            ++i;
    ***REMOVED***
        return result;
***REMOVED***;

    // ----------------------------------------------------------------------------
    // String object extensions
    // ----------------------------------------------------------------------------
    String.prototype.strptime = function(format) {
        const split_format = format.split(/[.\-/***REMOVED***/);
        const date = this.split(/[.\-/***REMOVED***/);
        let i = 0;
        let day, month, year;
        while (i < split_format.length) {
            switch (split_format[i***REMOVED***) {
            case "%d":
                day = date[i***REMOVED***;
                break;
            case "%m":
                month = date[i***REMOVED*** - 1;
                break;
            case "%Y":
                year = date[i***REMOVED***;
                break;
            case "%y":
                // A %y value in the range of [00, 68***REMOVED*** is in the current
                // century, while [69, 99***REMOVED*** is in the previous century,
                // according to the Open Group Specification.
                if (parseInt(date[i***REMOVED***, 10) >= 69) {
                    year = date[i***REMOVED***;
            ***REMOVED*** else {
                    year = (new Date(Date.UTC(date[i***REMOVED***, 0))).getUTCFullYear() + 100;
            ***REMOVED***
                break;
        ***REMOVED***
            ++i;
    ***REMOVED***
        // Create Date object from UTC since the parsed value is supposed to be
        // in UTC, not local time. Also, the calendar uses UTC functions for
        // date extraction.
        return new Date(Date.UTC(year, month, day));
***REMOVED***;
***REMOVED***
