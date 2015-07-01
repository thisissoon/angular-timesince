/*! angular-timesince - v0.0.1 - 2015-07-01 */
"use strict";
/**
 * Based on {@link http://stackoverflow.com/questions/3177836/how-to-format-
 * time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site}
 * Returns the number of seconds, minutes, days, months or years
 * for a Date object from the current system time.
 * @main   sn.timeSince
 * @module sn.timeSince
 * @author SOON_
 */
angular.module("sn.timeSince", [

])
.constant("SECONDS_IN_YEAR", 31536000)
.constant("SECONDS_IN_MONTH", 2592000)
.constant("SECONDS_IN_DAY", 86400)
.constant("SECONDS_IN_HOUR", 3600)
.constant("SECONDS_IN_MIN", 60)
.constant("MILLISECONDS_IN_SECOND", 1000)
/**
 * @class timeSince
 * @param {Number} SECONDS_IN_YEAR
 * @param {Number} SECONDS_IN_MONTH
 * @param {Number} SECONDS_IN_DAY
 * @param {Number} SECONDS_IN_HOUR
 * @param {Number} SECONDS_IN_MIN
 * @param {Number} MILLISECONDS_IN_SECOND
 */
.filter("timeSince", [
    "SECONDS_IN_YEAR",
    "SECONDS_IN_MONTH",
    "SECONDS_IN_DAY",
    "SECONDS_IN_HOUR",
    "SECONDS_IN_MIN",
    "MILLISECONDS_IN_SECOND",
    function (SECONDS_IN_YEAR, SECONDS_IN_MONTH, SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MIN, MILLISECONDS_IN_SECOND){
        return function (input) {
            /**
             * Attempt to convert the input into a Date object
             * @property date
             * @type {Date}
             */
            var date = new Date(input);
            // If not a valid date return the original input
            if ( isNaN( date.getTime() ) ){
                return input;
            }
            /**
             * Calulate the time in seconds from Date Object to 'now'
             * @property seconds
             * @type {Integer}
             */
            var seconds = Math.abs( Math.floor( ( new Date() - date ) / MILLISECONDS_IN_SECOND ) );
            /**
             * We try to divide the number of seconds between now
             * and the date by the number of seconds in a year, month,
             * day, hour or minute
             * @property interval
             * @type {Integer}
             */
            var interval = Math.floor(seconds / SECONDS_IN_YEAR);


            if (interval > 1) { return interval + " years"; }
            if (interval === 1) { return interval + " year"; }

            interval = Math.floor(seconds / SECONDS_IN_MONTH);

            if (interval > 1) { return interval + " months"; }
            if (interval === 1) { return interval + " month"; }

            interval = Math.floor(seconds / SECONDS_IN_DAY);

            if (interval > 1) { return interval + " days"; }
            if (interval === 1) { return interval + " day"; }

            interval = Math.floor(seconds / SECONDS_IN_HOUR);

            if (interval > 1) { return interval + " hours"; }
            if (interval === 1) { return interval + " hour"; }

            interval = Math.floor(seconds / SECONDS_IN_MIN);

            if (interval > 1) { return interval + " minutes"; }
            if (interval === 1) { return interval + " minute"; }

            return Math.floor(seconds) + " seconds";
        };
    }
]);
