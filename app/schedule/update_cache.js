module.exports = {
    schedule: {
        interval: '10s', // 1 分钟间隔
        type: 'all', // 指定所有的 worker 都需要执行
    },
    * task(ctx) {
        // const res = yield ctx.curl('http://www.api.com/cache', {
        //     dataType: 'json',
        // });
        console.log(111111)
        ctx.app.cache = 10;
    },
};