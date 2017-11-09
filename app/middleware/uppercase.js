module.exports = () => {
    return function* (next) {
        this.query.name = this.query.name && this.query.name.toUpperCase();
        yield next;
    };
};
