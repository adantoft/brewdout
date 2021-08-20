'use strict';
{
    const toggleNavSidebar = document.getElementById('toggle-nav-sidebar');
    if (toggleNavSidebar !== null) {
        const navLinks = document.querySelectorAll('#nav-sidebar a');
        function disableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = -1;
        ***REMOVED***
    ***REMOVED***
        function enableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = 0;
        ***REMOVED***
    ***REMOVED***

        const main = document.getElementById('main');
        let navSidebarIsOpen = localStorage.getItem('django.admin.navSidebarIsOpen');
        if (navSidebarIsOpen === null) {
            navSidebarIsOpen = 'true';
    ***REMOVED***
        if (navSidebarIsOpen === 'false') {
            disableNavLinkTabbing();
    ***REMOVED***
        main.classList.toggle('shifted', navSidebarIsOpen === 'true');

        toggleNavSidebar.addEventListener('click', function() {
            if (navSidebarIsOpen === 'true') {
                navSidebarIsOpen = 'false';
                disableNavLinkTabbing();
        ***REMOVED*** else {
                navSidebarIsOpen = 'true';
                enableNavLinkTabbing();
        ***REMOVED***
            localStorage.setItem('django.admin.navSidebarIsOpen', navSidebarIsOpen);
            main.classList.toggle('shifted');
    ***REMOVED***);
***REMOVED***
***REMOVED***
