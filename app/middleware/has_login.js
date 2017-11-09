module.exports = (options, app) => {
    return function* (next) {
        yield next;
    };
};