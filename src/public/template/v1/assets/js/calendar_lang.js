/* ============================================================
 * Calendar
 * This is a Demo App that was created using Pages Calendar Plugin
 * We have demonstrated a few function that are useful in creating
 * a custom calendar. Please refer docs for more information
 * ============================================================ */

(function($) {

    'use strict';

    $(document).ready(function() {

        var selectedEvent;
        $('#calendar_lang').pagescalendar({
            //Loading Dummy EVENTS for demo Purposes, you can feed the events attribute from 
            //Web Service
            events: [],
            view:"week"
        });

    });

    $(document).ready(function() {
        $('#calendar_lang').pagescalendar("setLocale",'pt-br');
    })
})(window.jQuery);
