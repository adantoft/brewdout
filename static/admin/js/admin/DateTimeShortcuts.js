/*global Calendar, findPosX, findPosY, get_format, gettext, gettext_noop, interpolate, ngettext, quickElement*/
// Inserts shortcut buttons after all of the following:
//     <input type="text" class="vDateField">
//     <input type="text" class="vTimeField">
'use strict';
{
    const DateTimeShortcuts = {
        calendars: [***REMOVED***,
        calendarInputs: [***REMOVED***,
        clockInputs: [***REMOVED***,
        clockHours: {
            default_: [
                [gettext_noop('Now'), -1***REMOVED***,
                [gettext_noop('Midnight'), 0***REMOVED***,
                [gettext_noop('6 a.m.'), 6***REMOVED***,
                [gettext_noop('Noon'), 12***REMOVED***,
                [gettext_noop('6 p.m.'), 18***REMOVED***
            ***REMOVED***
***REMOVED***
        dismissClockFunc: [***REMOVED***,
        dismissCalendarFunc: [***REMOVED***,
        calendarDivName1: 'calendarbox', // name of calendar <div> that gets toggled
        calendarDivName2: 'calendarin', // name of <div> that contains calendar
        calendarLinkName: 'calendarlink', // name of the link that is used to toggle
        clockDivName: 'clockbox', // name of clock <div> that gets toggled
        clockLinkName: 'clocklink', // name of the link that is used to toggle
        shortCutsClass: 'datetimeshortcuts', // class of the clock and cal shortcuts
        timezoneWarningClass: 'timezonewarning', // class of the warning for timezone mismatch
        timezoneOffset: 0,
        init: function() {
            const serverOffset = document.body.dataset.adminUtcOffset;
            if (serverOffset) {
                const localOffset = new Date().getTimezoneOffset() * -60;
                DateTimeShortcuts.timezoneOffset = localOffset - serverOffset;
        ***REMOVED***

            for (const inp of document.getElementsByTagName('input')) {
                if (inp.type === 'text' && inp.classList.contains('vTimeField')) {
                    DateTimeShortcuts.addClock(inp);
                    DateTimeShortcuts.addTimezoneWarning(inp);
            ***REMOVED***
                else if (inp.type === 'text' && inp.classList.contains('vDateField')) {
                    DateTimeShortcuts.addCalendar(inp);
                    DateTimeShortcuts.addTimezoneWarning(inp);
            ***REMOVED***
        ***REMOVED***
***REMOVED***
        // Return the current time while accounting for the server timezone.
        now: function() {
            const serverOffset = document.body.dataset.adminUtcOffset;
            if (serverOffset) {
                const localNow = new Date();
                const localOffset = localNow.getTimezoneOffset() * -60;
                localNow.setTime(localNow.getTime() + 1000 * (serverOffset - localOffset));
                return localNow;
        ***REMOVED*** else {
                return new Date();
        ***REMOVED***
***REMOVED***
        // Add a warning when the time zone in the browser and backend do not match.
        addTimezoneWarning: function(inp) {
            const warningClass = DateTimeShortcuts.timezoneWarningClass;
            let timezoneOffset = DateTimeShortcuts.timezoneOffset / 3600;

            // Only warn if there is a time zone mismatch.
            if (!timezoneOffset) {
                return;
        ***REMOVED***

            // Check if warning is already there.
            if (inp.parentNode.querySelectorAll('.' + warningClass).length) {
                return;
        ***REMOVED***

            let message;
            if (timezoneOffset > 0) {
                message = ngettext(
                    'Note: You are %s hour ahead of server time.',
                    'Note: You are %s hours ahead of server time.',
                    timezoneOffset
                );
        ***REMOVED***
            else {
                timezoneOffset *= -1;
                message = ngettext(
                    'Note: You are %s hour behind server time.',
                    'Note: You are %s hours behind server time.',
                    timezoneOffset
                );
        ***REMOVED***
            message = interpolate(message, [timezoneOffset***REMOVED***);

            const warning = document.createElement('span');
            warning.className = warningClass;
            warning.textContent = message;
            inp.parentNode.appendChild(document.createElement('br'));
            inp.parentNode.appendChild(warning);
***REMOVED***
        // Add clock widget to a given field
        addClock: function(inp) {
            const num = DateTimeShortcuts.clockInputs.length;
            DateTimeShortcuts.clockInputs[num***REMOVED*** = inp;
            DateTimeShortcuts.dismissClockFunc[num***REMOVED*** = function() { DateTimeShortcuts.dismissClock(num); return true; ***REMOVED***;

            // Shortcut links (clock icon and "Now" link)
            const shortcuts_span = document.createElement('span');
            shortcuts_span.className = DateTimeShortcuts.shortCutsClass;
            inp.parentNode.insertBefore(shortcuts_span, inp.nextSibling);
            const now_link = document.createElement('a');
            now_link.href = "#";
            now_link.textContent = gettext('Now');
            now_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.handleClockQuicklink(num, -1);
        ***REMOVED***);
            const clock_link = document.createElement('a');
            clock_link.href = '#';
            clock_link.id = DateTimeShortcuts.clockLinkName + num;
            clock_link.addEventListener('click', function(e) {
                e.preventDefault();
                // avoid triggering the document click handler to dismiss the clock
                e.stopPropagation();
                DateTimeShortcuts.openClock(num);
        ***REMOVED***);

            quickElement(
                'span', clock_link, '',
                'class', 'clock-icon',
                'title', gettext('Choose a Time')
            );
            shortcuts_span.appendChild(document.createTextNode('\u00A0'));
            shortcuts_span.appendChild(now_link);
            shortcuts_span.appendChild(document.createTextNode('\u00A0|\u00A0'));
            shortcuts_span.appendChild(clock_link);

            // Create clock link div
            //
            // Markup looks like:
            // <div id="clockbox1" class="clockbox module">
            //     <h2>Choose a time</h2>
            //     <ul class="timelist">
            //         <li><a href="#">Now</a></li>
            //         <li><a href="#">Midnight</a></li>
            //         <li><a href="#">6 a.m.</a></li>
            //         <li><a href="#">Noon</a></li>
            //         <li><a href="#">6 p.m.</a></li>
            //     </ul>
            //     <p class="calendar-cancel"><a href="#">Cancel</a></p>
            // </div>

            const clock_box = document.createElement('div');
            clock_box.style.display = 'none';
            clock_box.style.position = 'absolute';
            clock_box.className = 'clockbox module';
            clock_box.id = DateTimeShortcuts.clockDivName + num;
            document.body.appendChild(clock_box);
            clock_box.addEventListener('click', function(e) { e.stopPropagation(); ***REMOVED***);

            quickElement('h2', clock_box, gettext('Choose a time'));
            const time_list = quickElement('ul', clock_box);
            time_list.className = 'timelist';
            // The list of choices can be overridden in JavaScript like this:
            // DateTimeShortcuts.clockHours.name = [['3 a.m.', 3***REMOVED******REMOVED***;
            // where name is the name attribute of the <input>.
            const name = typeof DateTimeShortcuts.clockHours[inp.name***REMOVED*** === 'undefined' ? 'default_' : inp.name;
            DateTimeShortcuts.clockHours[name***REMOVED***.forEach(function(element) {
                const time_link = quickElement('a', quickElement('li', time_list), gettext(element[0***REMOVED***), 'href', '#');
                time_link.addEventListener('click', function(e) {
                    e.preventDefault();
                    DateTimeShortcuts.handleClockQuicklink(num, element[1***REMOVED***);
            ***REMOVED***);
        ***REMOVED***);

            const cancel_p = quickElement('p', clock_box);
            cancel_p.className = 'calendar-cancel';
            const cancel_link = quickElement('a', cancel_p, gettext('Cancel'), 'href', '#');
            cancel_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.dismissClock(num);
        ***REMOVED***);

            document.addEventListener('keyup', function(event) {
                if (event.which === 27) {
                    // ESC key closes popup
                    DateTimeShortcuts.dismissClock(num);
                    event.preventDefault();
            ***REMOVED***
        ***REMOVED***);
***REMOVED***
        openClock: function(num) {
            const clock_box = document.getElementById(DateTimeShortcuts.clockDivName + num);
            const clock_link = document.getElementById(DateTimeShortcuts.clockLinkName + num);

            // Recalculate the clockbox position
            // is it left-to-right or right-to-left layout ?
            if (window.getComputedStyle(document.body).direction !== 'rtl') {
                clock_box.style.left = findPosX(clock_link) + 17 + 'px';
        ***REMOVED***
            else {
                // since style's width is in em, it'd be tough to calculate
                // px value of it. let's use an estimated px for now
                clock_box.style.left = findPosX(clock_link) - 110 + 'px';
        ***REMOVED***
            clock_box.style.top = Math.max(0, findPosY(clock_link) - 30) + 'px';

            // Show the clock box
            clock_box.style.display = 'block';
            document.addEventListener('click', DateTimeShortcuts.dismissClockFunc[num***REMOVED***);
***REMOVED***
        dismissClock: function(num) {
            document.getElementById(DateTimeShortcuts.clockDivName + num).style.display = 'none';
            document.removeEventListener('click', DateTimeShortcuts.dismissClockFunc[num***REMOVED***);
***REMOVED***
        handleClockQuicklink: function(num, val) {
            let d;
            if (val === -1) {
                d = DateTimeShortcuts.now();
        ***REMOVED***
            else {
                d = new Date(1970, 1, 1, val, 0, 0, 0);
        ***REMOVED***
            DateTimeShortcuts.clockInputs[num***REMOVED***.value = d.strftime(get_format('TIME_INPUT_FORMATS')[0***REMOVED***);
            DateTimeShortcuts.clockInputs[num***REMOVED***.focus();
            DateTimeShortcuts.dismissClock(num);
***REMOVED***
        // Add calendar widget to a given field.
        addCalendar: function(inp) {
            const num = DateTimeShortcuts.calendars.length;

            DateTimeShortcuts.calendarInputs[num***REMOVED*** = inp;
            DateTimeShortcuts.dismissCalendarFunc[num***REMOVED*** = function() { DateTimeShortcuts.dismissCalendar(num); return true; ***REMOVED***;

            // Shortcut links (calendar icon and "Today" link)
            const shortcuts_span = document.createElement('span');
            shortcuts_span.className = DateTimeShortcuts.shortCutsClass;
            inp.parentNode.insertBefore(shortcuts_span, inp.nextSibling);
            const today_link = document.createElement('a');
            today_link.href = '#';
            today_link.appendChild(document.createTextNode(gettext('Today')));
            today_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.handleCalendarQuickLink(num, 0);
        ***REMOVED***);
            const cal_link = document.createElement('a');
            cal_link.href = '#';
            cal_link.id = DateTimeShortcuts.calendarLinkName + num;
            cal_link.addEventListener('click', function(e) {
                e.preventDefault();
                // avoid triggering the document click handler to dismiss the calendar
                e.stopPropagation();
                DateTimeShortcuts.openCalendar(num);
        ***REMOVED***);
            quickElement(
                'span', cal_link, '',
                'class', 'date-icon',
                'title', gettext('Choose a Date')
            );
            shortcuts_span.appendChild(document.createTextNode('\u00A0'));
            shortcuts_span.appendChild(today_link);
            shortcuts_span.appendChild(document.createTextNode('\u00A0|\u00A0'));
            shortcuts_span.appendChild(cal_link);

            // Create calendarbox div.
            //
            // Markup looks like:
            //
            // <div id="calendarbox3" class="calendarbox module">
            //     <h2>
            //           <a href="#" class="link-previous">&lsaquo;</a>
            //           <a href="#" class="link-next">&rsaquo;</a> February 2003
            //     </h2>
            //     <div class="calendar" id="calendarin3">
            //         <!-- (cal) -->
            //     </div>
            //     <div class="calendar-shortcuts">
            //          <a href="#">Yesterday</a> | <a href="#">Today</a> | <a href="#">Tomorrow</a>
            //     </div>
            //     <p class="calendar-cancel"><a href="#">Cancel</a></p>
            // </div>
            const cal_box = document.createElement('div');
            cal_box.style.display = 'none';
            cal_box.style.position = 'absolute';
            cal_box.className = 'calendarbox module';
            cal_box.id = DateTimeShortcuts.calendarDivName1 + num;
            document.body.appendChild(cal_box);
            cal_box.addEventListener('click', function(e) { e.stopPropagation(); ***REMOVED***);

            // next-prev links
            const cal_nav = quickElement('div', cal_box);
            const cal_nav_prev = quickElement('a', cal_nav, '<', 'href', '#');
            cal_nav_prev.className = 'calendarnav-previous';
            cal_nav_prev.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.drawPrev(num);
        ***REMOVED***);

            const cal_nav_next = quickElement('a', cal_nav, '>', 'href', '#');
            cal_nav_next.className = 'calendarnav-next';
            cal_nav_next.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.drawNext(num);
        ***REMOVED***);

            // main box
            const cal_main = quickElement('div', cal_box, '', 'id', DateTimeShortcuts.calendarDivName2 + num);
            cal_main.className = 'calendar';
            DateTimeShortcuts.calendars[num***REMOVED*** = new Calendar(DateTimeShortcuts.calendarDivName2 + num, DateTimeShortcuts.handleCalendarCallback(num));
            DateTimeShortcuts.calendars[num***REMOVED***.drawCurrent();

            // calendar shortcuts
            const shortcuts = quickElement('div', cal_box);
            shortcuts.className = 'calendar-shortcuts';
            let day_link = quickElement('a', shortcuts, gettext('Yesterday'), 'href', '#');
            day_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.handleCalendarQuickLink(num, -1);
        ***REMOVED***);
            shortcuts.appendChild(document.createTextNode('\u00A0|\u00A0'));
            day_link = quickElement('a', shortcuts, gettext('Today'), 'href', '#');
            day_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.handleCalendarQuickLink(num, 0);
        ***REMOVED***);
            shortcuts.appendChild(document.createTextNode('\u00A0|\u00A0'));
            day_link = quickElement('a', shortcuts, gettext('Tomorrow'), 'href', '#');
            day_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.handleCalendarQuickLink(num, +1);
        ***REMOVED***);

            // cancel bar
            const cancel_p = quickElement('p', cal_box);
            cancel_p.className = 'calendar-cancel';
            const cancel_link = quickElement('a', cancel_p, gettext('Cancel'), 'href', '#');
            cancel_link.addEventListener('click', function(e) {
                e.preventDefault();
                DateTimeShortcuts.dismissCalendar(num);
        ***REMOVED***);
            document.addEventListener('keyup', function(event) {
                if (event.which === 27) {
                    // ESC key closes popup
                    DateTimeShortcuts.dismissCalendar(num);
                    event.preventDefault();
            ***REMOVED***
        ***REMOVED***);
***REMOVED***
        openCalendar: function(num) {
            const cal_box = document.getElementById(DateTimeShortcuts.calendarDivName1 + num);
            const cal_link = document.getElementById(DateTimeShortcuts.calendarLinkName + num);
            const inp = DateTimeShortcuts.calendarInputs[num***REMOVED***;

            // Determine if the current value in the input has a valid date.
            // If so, draw the calendar with that date's year and month.
            if (inp.value) {
                const format = get_format('DATE_INPUT_FORMATS')[0***REMOVED***;
                const selected = inp.value.strptime(format);
                const year = selected.getUTCFullYear();
                const month = selected.getUTCMonth() + 1;
                const re = /\d{4***REMOVED***/;
                if (re.test(year.toString()) && month >= 1 && month <= 12) {
                    DateTimeShortcuts.calendars[num***REMOVED***.drawDate(month, year, selected);
            ***REMOVED***
        ***REMOVED***

            // Recalculate the clockbox position
            // is it left-to-right or right-to-left layout ?
            if (window.getComputedStyle(document.body).direction !== 'rtl') {
                cal_box.style.left = findPosX(cal_link) + 17 + 'px';
        ***REMOVED***
            else {
                // since style's width is in em, it'd be tough to calculate
                // px value of it. let's use an estimated px for now
                cal_box.style.left = findPosX(cal_link) - 180 + 'px';
        ***REMOVED***
            cal_box.style.top = Math.max(0, findPosY(cal_link) - 75) + 'px';

            cal_box.style.display = 'block';
            document.addEventListener('click', DateTimeShortcuts.dismissCalendarFunc[num***REMOVED***);
***REMOVED***
        dismissCalendar: function(num) {
            document.getElementById(DateTimeShortcuts.calendarDivName1 + num).style.display = 'none';
            document.removeEventListener('click', DateTimeShortcuts.dismissCalendarFunc[num***REMOVED***);
***REMOVED***
        drawPrev: function(num) {
            DateTimeShortcuts.calendars[num***REMOVED***.drawPreviousMonth();
***REMOVED***
        drawNext: function(num) {
            DateTimeShortcuts.calendars[num***REMOVED***.drawNextMonth();
***REMOVED***
        handleCalendarCallback: function(num) {
            let format = get_format('DATE_INPUT_FORMATS')[0***REMOVED***;
            // the format needs to be escaped a little
            format = format.replace('\\', '\\\\')
                .replace('\r', '\\r')
                .replace('\n', '\\n')
                .replace('\t', '\\t')
                .replace("'", "\\'");
            return function(y, m, d) {
                DateTimeShortcuts.calendarInputs[num***REMOVED***.value = new Date(y, m - 1, d).strftime(format);
                DateTimeShortcuts.calendarInputs[num***REMOVED***.focus();
                document.getElementById(DateTimeShortcuts.calendarDivName1 + num).style.display = 'none';
        ***REMOVED***;
***REMOVED***
        handleCalendarQuickLink: function(num, offset) {
            const d = DateTimeShortcuts.now();
            d.setDate(d.getDate() + offset);
            DateTimeShortcuts.calendarInputs[num***REMOVED***.value = d.strftime(get_format('DATE_INPUT_FORMATS')[0***REMOVED***);
            DateTimeShortcuts.calendarInputs[num***REMOVED***.focus();
            DateTimeShortcuts.dismissCalendar(num);
    ***REMOVED***
***REMOVED***;

    window.addEventListener('load', DateTimeShortcuts.init);
    window.DateTimeShortcuts = DateTimeShortcuts;
***REMOVED***
