(function() {
    'use strict';
    var megaDriveSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return megaDriveSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = megaDriveSoftList;
    } else {
        window.gameSoft = {
            megaDrive: megaDriveSoftList
        };
    }
})();