'use strict';
{
    const SelectBox = {
        cache: {***REMOVED***,
        init: function(id) {
            const box = document.getElementById(id);
            SelectBox.cache[id***REMOVED*** = [***REMOVED***;
            const cache = SelectBox.cache[id***REMOVED***;
            for (const node of box.options) {
                cache.push({value: node.value, text: node.text, displayed: 1***REMOVED***);
        ***REMOVED***
***REMOVED***
        redisplay: function(id) {
            // Repopulate HTML select box from cache
            const box = document.getElementById(id);
            const scroll_value_from_top = box.scrollTop;
            box.innerHTML = '';
            for (const node of SelectBox.cache[id***REMOVED***) {
                if (node.displayed) {
                    const new_option = new Option(node.text, node.value, false, false);
                    // Shows a tooltip when hovering over the option
                    new_option.title = node.text;
                    box.appendChild(new_option);
            ***REMOVED***
        ***REMOVED***
            box.scrollTop = scroll_value_from_top;
***REMOVED***
        filter: function(id, text) {
            // Redisplay the HTML select box, displaying only the choices containing ALL
            // the words in text. (It's an AND search.)
            const tokens = text.toLowerCase().split(/\s+/);
            for (const node of SelectBox.cache[id***REMOVED***) {
                node.displayed = 1;
                const node_text = node.text.toLowerCase();
                for (const token of tokens) {
                    if (!node_text.includes(token)) {
                        node.displayed = 0;
                        break; // Once the first token isn't found we're done
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
            SelectBox.redisplay(id);
***REMOVED***
        delete_from_cache: function(id, value) {
            let delete_index = null;
            const cache = SelectBox.cache[id***REMOVED***;
            for (const [i, node***REMOVED*** of cache.entries()) {
                if (node.value === value) {
                    delete_index = i;
                    break;
            ***REMOVED***
        ***REMOVED***
            cache.splice(delete_index, 1);
***REMOVED***
        add_to_cache: function(id, option) {
            SelectBox.cache[id***REMOVED***.push({value: option.value, text: option.text, displayed: 1***REMOVED***);
***REMOVED***
        cache_contains: function(id, value) {
            // Check if an item is contained in the cache
            for (const node of SelectBox.cache[id***REMOVED***) {
                if (node.value === value) {
                    return true;
            ***REMOVED***
        ***REMOVED***
            return false;
***REMOVED***
        move: function(from, to) {
            const from_box = document.getElementById(from);
            for (const option of from_box.options) {
                const option_value = option.value;
                if (option.selected && SelectBox.cache_contains(from, option_value)) {
                    SelectBox.add_to_cache(to, {value: option_value, text: option.text, displayed: 1***REMOVED***);
                    SelectBox.delete_from_cache(from, option_value);
            ***REMOVED***
        ***REMOVED***
            SelectBox.redisplay(from);
            SelectBox.redisplay(to);
***REMOVED***
        move_all: function(from, to) {
            const from_box = document.getElementById(from);
            for (const option of from_box.options) {
                const option_value = option.value;
                if (SelectBox.cache_contains(from, option_value)) {
                    SelectBox.add_to_cache(to, {value: option_value, text: option.text, displayed: 1***REMOVED***);
                    SelectBox.delete_from_cache(from, option_value);
            ***REMOVED***
        ***REMOVED***
            SelectBox.redisplay(from);
            SelectBox.redisplay(to);
***REMOVED***
        sort: function(id) {
            SelectBox.cache[id***REMOVED***.sort(function(a, b) {
                a = a.text.toLowerCase();
                b = b.text.toLowerCase();
                if (a > b) {
                    return 1;
            ***REMOVED***
                if (a < b) {
                    return -1;
            ***REMOVED***
                return 0;
        ***REMOVED*** );
***REMOVED***
        select_all: function(id) {
            const box = document.getElementById(id);
            for (const option of box.options) {
                option.selected = true;
        ***REMOVED***
    ***REMOVED***
***REMOVED***;
    window.SelectBox = SelectBox;
***REMOVED***
