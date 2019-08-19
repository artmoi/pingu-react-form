"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDeferred() {
    var deferred = {
        promise: null,
        resolve: null,
        reject: null,
    };
    deferred.promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}
exports.createDeferred = createDeferred;
//# sourceMappingURL=Util.js.map