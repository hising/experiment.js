"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBucketPersistance = 365 * 24 * 60 * 60;
exports.random = function () {
    // From - https://github.com/olahol/react-ab/blob/master/react-ab.js
    try {
        var arr = new Uint16Array(1);
        window.crypto.getRandomValues(arr);
        return arr[0] / 65536;
    }
    catch (e) {
        return Math.random();
    }
};
exports.cookieGet = function (name) { };
exports.cookieSet = function (name, value, seconds) {
    if (seconds === void 0) { seconds = exports.defaultBucketPersistance; }
};
exports.localStorageGet = function (name) { };
exports.localStorageSet = function (name, value, seconds) {
    if (seconds === void 0) { seconds = exports.defaultBucketPersistance; }
};
exports.getBucket = function (name) { };
exports.setBucket = function (name, value, seconds) {
    if (seconds === void 0) { seconds = exports.defaultBucketPersistance; }
};
exports.chooseVariation = function (randomFunc) {
    if (randomFunc === void 0) { randomFunc = exports.random; }
    var rnd = randomFunc();
};
//# sourceMappingURL=index.js.map