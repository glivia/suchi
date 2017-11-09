module.exports = app => {
    // const isAdmin = app.middlewares.isAdmin();
    const hasLogin = app.middlewares.hasLogin();
    // app.all('/api/home/:id', hasLogin, app.controller.api.home.index)
    //app.all('/api/home/:id/', app.controller.api.home.index)

    // 支持JSONP
    // app.get('/api/posts/:id', jsonp, 'posts.show');

    // REST API
    // app.resources('posts', '/api/posts', app.controller.posts);


    // app.get('/home', app.controller.home);
    // app.get('/user/:id', app.controller.user.page);
    // app.post('/admin', isAdmin, app.controller.admin);
    // app.post('/user', isLoginUser, hasAdminPermission, app.controller.user.create);
    // app.post('/api/v1/comments', app.controller.v1.comments.create);

    // 重定向
    // app.redirect('/', '/home/index', 302);

    // 添加中间件
    // app.middlewares.uppercase() 获取中间件
    // app.all('/api/home', app.middlewares.uppercase(), app.controller.api.home.index)

    // app.all('/_api/', )
    // app.all('/api/*', hasLogin)
    app.all('/api/home', hasLogin, app.controller.api.home.index)

};