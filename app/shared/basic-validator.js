System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicValidators;
    return {
        setters:[],
        execute: function() {
            BasicValidators = (function () {
                function BasicValidators() {
                }
                BasicValidators.invalidEmail = function (control) {
                    var emailRegexPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                    if (!emailRegexPattern.test(control.value)) {
                        return { invalidEmail: true };
                    }
                    return null;
                };
                return BasicValidators;
            }());
            exports_1("BasicValidators", BasicValidators);
        }
    }
});
//# sourceMappingURL=basic-validator.js.map