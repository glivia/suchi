module.exports = app => {
    app.get('/news/list', app.controller.news.list);
    app.get('/news/detail', app.controller.news.detail);
};