/**
 * New node file
 */

define(function(require) {
	'use strict';

    var Yawl = function() {

    };

    Yawl.prototype = {
    
        getBoatType: function() {
            return 'Yawl';
        },

        tack : function() {
            return "Yawl tack called.";
        },

        luff : function() {
            return "Yawl luff called.";
        },

        reach : function() {
            return "Yawl reach called.";
        },

        anchor : function() {
            return "Yawl anchor called.";
        },

        dock : function() {
            return "Yawl dock called.";
        }
    };

    return new Yawl();
});
