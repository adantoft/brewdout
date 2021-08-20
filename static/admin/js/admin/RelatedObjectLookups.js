/*global SelectBox, interpolate*/
// Handles related-objects functionality: lookup link for raw_id_fields
// and Add Another links.
'use strict';
{
    const $ = django.jQuery;

    function showAdminPopup(triggeringLink, name_regexp, add_popup) {
        const name = triggeringLink.id.replace(name_regexp, '');
        const href = new URL(triggeringLink.href);
        if (add_popup) {
            href.searchParams.set('_popup', 1);
    ***REMOVED***
        const win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes');
        win.focus();
        return false;
***REMOVED***

    function showRelatedObjectLookupPopup(triggeringLink) {
        return showAdminPopup(triggeringLink, /^lookup_/, true);
***REMOVED***

    function dismissRelatedLookupPopup(win, chosenId) {
        const name = win.name;
        const elem = document.getElementById(name);
        if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
            elem.value += ',' + chosenId;
    ***REMOVED*** else {
            document.getElementById(name).value = chosenId;
    ***REMOVED***
        win.close();
***REMOVED***

    function showRelatedObjectPopup(triggeringLink) {
        return showAdminPopup(triggeringLink, /^(change|add|delete)_/, false);
***REMOVED***

    function updateRelatedObjectLinks(triggeringLink) {
        const $this = $(triggeringLink);
        const siblings = $this.nextAll('.view-related, .change-related, .delete-related');
        if (!siblings.length) {
            return;
    ***REMOVED***
        const value = $this.val();
        if (value) {
            siblings.each(function() {
                const elm = $(this);
                elm.attr('href', elm.attr('data-href-template').replace('__fk__', value));
        ***REMOVED***);
    ***REMOVED*** else {
            siblings.removeAttr('href');
    ***REMOVED***
***REMOVED***

    function dismissAddRelatedObjectPopup(win, newId, newRepr) {
        const name = win.name;
        const elem = document.getElementById(name);
        if (elem) {
            const elemName = elem.nodeName.toUpperCase();
            if (elemName === 'SELECT') {
                elem.options[elem.options.length***REMOVED*** = new Option(newRepr, newId, true, true);
        ***REMOVED*** else if (elemName === 'INPUT') {
                if (elem.classList.contains('vManyToManyRawIdAdminField') && elem.value) {
                    elem.value += ',' + newId;
            ***REMOVED*** else {
                    elem.value = newId;
            ***REMOVED***
        ***REMOVED***
            // Trigger a change event to update related links if required.
            $(elem).trigger('change');
    ***REMOVED*** else {
            const toId = name + "_to";
            const o = new Option(newRepr, newId);
            SelectBox.add_to_cache(toId, o);
            SelectBox.redisplay(toId);
    ***REMOVED***
        win.close();
***REMOVED***

    function dismissChangeRelatedObjectPopup(win, objId, newRepr, newId) {
        const id = win.name.replace(/^edit_/, '');
        const selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id***REMOVED***);
        const selects = $(selectsSelector);
        selects.find('option').each(function() {
            if (this.value === objId) {
                this.textContent = newRepr;
                this.value = newId;
        ***REMOVED***
    ***REMOVED***);
        selects.next().find('.select2-selection__rendered').each(function() {
            // The element can have a clear button as a child.
            // Use the lastChild to modify only the displayed value.
            this.lastChild.textContent = newRepr;
            this.title = newRepr;
    ***REMOVED***);
        win.close();
***REMOVED***

    function dismissDeleteRelatedObjectPopup(win, objId) {
        const id = win.name.replace(/^delete_/, '');
        const selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id***REMOVED***);
        const selects = $(selectsSelector);
        selects.find('option').each(function() {
            if (this.value === objId) {
                $(this).remove();
        ***REMOVED***
    ***REMOVED***).trigger('change');
        win.close();
***REMOVED***

    window.showRelatedObjectLookupPopup = showRelatedObjectLookupPopup;
    window.dismissRelatedLookupPopup = dismissRelatedLookupPopup;
    window.showRelatedObjectPopup = showRelatedObjectPopup;
    window.updateRelatedObjectLinks = updateRelatedObjectLinks;
    window.dismissAddRelatedObjectPopup = dismissAddRelatedObjectPopup;
    window.dismissChangeRelatedObjectPopup = dismissChangeRelatedObjectPopup;
    window.dismissDeleteRelatedObjectPopup = dismissDeleteRelatedObjectPopup;

    // Kept for backward compatibility
    window.showAddAnotherPopup = showRelatedObjectPopup;
    window.dismissAddAnotherPopup = dismissAddRelatedObjectPopup;

    $(document).ready(function() {
        $("a[data-popup-opener***REMOVED***").on('click', function(event) {
            event.preventDefault();
            opener.dismissRelatedLookupPopup(window, $(this).data("popup-opener"));
    ***REMOVED***);
        $('body').on('click', '.related-widget-wrapper-link', function(e) {
            e.preventDefault();
            if (this.href) {
                const event = $.Event('django:show-related', {href: this.href***REMOVED***);
                $(this).trigger(event);
                if (!event.isDefaultPrevented()) {
                    showRelatedObjectPopup(this);
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***);
        $('body').on('change', '.related-widget-wrapper select', function(e) {
            const event = $.Event('django:update-related');
            $(this).trigger(event);
            if (!event.isDefaultPrevented()) {
                updateRelatedObjectLinks(this);
        ***REMOVED***
    ***REMOVED***);
        $('.related-widget-wrapper select').trigger('change');
        $('body').on('click', '.related-lookup', function(e) {
            e.preventDefault();
            const event = $.Event('django:lookup-related');
            $(this).trigger(event);
            if (!event.isDefaultPrevented()) {
                showRelatedObjectLookupPopup(this);
        ***REMOVED***
    ***REMOVED***);
***REMOVED***);
***REMOVED***
