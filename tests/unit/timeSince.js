"use strict";

describe("sn.timeSince", function (){

    var timeSince, $filter, SECONDS_IN_YEAR, SECONDS_IN_MONTH, SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MIN, MILLISECONDS_IN_SECOND;

    beforeEach(function(){
        module("sn.timeSince");
    });

    beforeEach(inject(function ( $injector ) {
        $filter = $injector.get("$filter");
        timeSince = $filter("timeSince");
        SECONDS_IN_YEAR = $injector.get("SECONDS_IN_YEAR");
        SECONDS_IN_MONTH = $injector.get("SECONDS_IN_MONTH");
        SECONDS_IN_DAY = $injector.get("SECONDS_IN_DAY");
        SECONDS_IN_HOUR = $injector.get("SECONDS_IN_HOUR");
        SECONDS_IN_MIN = $injector.get("SECONDS_IN_MIN");
        MILLISECONDS_IN_SECOND = $injector.get("MILLISECONDS_IN_SECOND");
    }));

    it("should return number of years", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (SECONDS_IN_YEAR * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 year");

        d.setTime(now.getTime() - ((SECONDS_IN_YEAR * MILLISECONDS_IN_SECOND) * 2));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 years");
    });

    it("should return number of months", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (SECONDS_IN_MONTH * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 month");

        d.setTime(now.getTime() - ((SECONDS_IN_MONTH * MILLISECONDS_IN_SECOND) * 2));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 months");
    });

    it("should return number of days", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (SECONDS_IN_DAY * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 day");

        d.setTime(now.getTime() - ((SECONDS_IN_DAY * MILLISECONDS_IN_SECOND) * 2));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 days");
    });

    it("should return number of hours", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 hour");

        d.setTime(now.getTime() - ((SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND) * 2));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 hours");
    });

    it("should return number of minutes", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (SECONDS_IN_MIN * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 minute");

        d.setTime(now.getTime() - ((SECONDS_IN_MIN * MILLISECONDS_IN_SECOND) * 2));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 minutes");
    });

    it("should return number of seconds", function() {
        var now = new Date();
        var d = new Date();

        d.setTime(now.getTime() - (1 * MILLISECONDS_IN_SECOND));
        var result = timeSince(d.getTime());
        expect(result).toEqual("1 seconds");

        d.setTime(now.getTime() - (2 * MILLISECONDS_IN_SECOND));
        result = timeSince(d.getTime());
        expect(result).toEqual("2 seconds");
    });

    it("should return original string if NOT a valid date", function() {
        var d = "abc";

        var result = timeSince(d);
        expect(result).toEqual(d);
    });


});
