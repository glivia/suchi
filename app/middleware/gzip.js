const isJSON = require('koa-is-json');
const zlib = require('zlib');


/*
通用配置：

enable：控制中间件是否开启。

match：设置只有符合某些规则的请求才会经过这个中间件。
    match: '/static',
    match(ctx) {
      // 只有 ios 设备才开启
      const reg = /iphone|ipad|ipod/i;
      return reg.test(ctx.get('user-agent'));
    },

ignore：设置符合某些规则的请求不经过这个中间件。

*/

module.exports = options => {
    // options 在配置文件中 config.gzip中定义
    return function* gzip(next) {
        yield next;

        // 后续中间件执行完成后将响应体转换成 gzip
        let body = this.body;
        if (!body) return;

        // 支持 options.threshold
        if (options.threshold && this.length < options.threshold) return;

        if (isJSON(body)) body = JSON.stringify(body);

        // 设置 gzip body，修正响应头
        const stream = zlib.createGzip();
        stream.end(body);
        this.body = stream;
        this.set('Content-Encoding', 'gzip');
    };
};
