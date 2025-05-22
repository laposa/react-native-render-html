//@ts-expect-error __DEV__ does not exists at top-level
global.__DEV__ = true;
//@ts-expect-error performance does not exists at top-level
global.performance = {
    now: function () {
        var _a = process.hrtime(), seconds = _a[0], nano = _a[1];
        return seconds * 1000000 + nano / 1000;
    }
};
console.warn = function () { };
