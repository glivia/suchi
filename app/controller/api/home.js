module.exports = app => {
  class HomeController extends app.Controller {
    * index() {


        // *********** 参数获取
        /*

        const createRule = {
            title: { type: 'string' },
            content: { type: 'string' },
        };
        this.ctx.validate(createRule, this.ctx.query);
        */
        /*
         获取 GET 参数
             1. this.ctx.query
             2. this.ctx.queries
             3. this.ctx.params

         获取 POST 参数
            1. this.ctx.request.body

         获取流
         const stream = yield this.ctx.getFileStream();
         path.basename(stream.filename)
         result = yield ctx.oss.put(name, stream);
         // 多文件
         // https://eggjs.org/zh-cn/plugins/multipart.html
        */

        // *********** 扩展APP/CTX/REQUEST/RESPONSE/AGENT/HELPER
        /*
            在 extend/application中定义， 如添加了moment， 就可以用 app.moment()来调用
            在 extend/context中定义, 如添加gusuqi，就可以用 this.ctx.gusuqi()来调用
            ...
        */


        // *********** 设置响应头
        /* this.ctx.set('show-response-time', '1111'); */


        // *********** 打点耗时统计
        /*
         START: this.ctx.state.timings.startSpan('XXXXX');
         END  : this.ctx.state.timings.stopSpan('XXXXX');
         */


        // *********** 获取cookies、 session
        /*
            ctx.cookies.get('count')
            ctx.cookies.set('count', 1)
            ctx.cookies.set('count', null);
            ctx.cookies.set(key, value, {
                  httpOnly: false,
                  signed: false,
                });

            ctx.session.userId
         */

        // console.log(this.ctx.__('Email'))
        // ********** i18N
        // console.log(this.ctx.__('Email'))
        // ctx.__('Welcome back, %s!', 'Shawn');
        // console.log(this.ctx.userAgent)
        // console.log(this.ctx.state.timings)


        // *********** 打日志
        /*
            1. 自定义日志

            在config中定义如下内容：
            config.customLogger = {
              scheduleLogger: {
                file: path.join(appInfo.root, 'logs/schedule/schedule.log'),
              },
                devLogger: {
                  file: path.join(appInfo.root, 'logs/dev/dev.log'),
                }
            }

            app.getLogger('devLogger').info('info')
            app.getLogger('devLogger').error('error')

            2. 核心日志
            目录位于 logs/${name}/egg-web.log
            错误都会出现在common-error.log中
            this.ctx.coreLogger.info('fuck!');

            3. 默认日志
            this.logger.info("loggerrrrrrrr")
            目录位于 logs/${name}/suchi-web.log
        */

        // *********** 返回值
        /*
            this.ctx.ok({ id: 123, name: 'Dat Boi' });  HTTP CODE : 200  BODY : { id: 123, name: 'Dat Boi' }
            this.ctx.notFound('Not found, boii');       HTTP CODE : 404  BODY : {"message":"Not found, boii"}
            this.ctx.badRequest({id:123});     HTTP CODE : 400  BODY : {id: 123}
            this.ctx.send(201, 'new beginnings!');      HTTP CODE : 201  BODY : {"message":"new beginnings!"}

            yield this.ctx.render('index');  渲染html模板
            this.ctx.body = {};    原生返回

            this.redirect(`http://cn.bing.com/search?q=${q}`); 重定向
        */


        // *********** 调用SERVICE
        //

        /*
            同步
                /service/test => fuck
            let rst = this.ctx.service.test.fuck();

            异步
            let rst = yield this.ctx.service.test.get()

            原生查询
            const suchi = app.mysql.get('suchi');
            rst = yield suchi.query('select * from suchi_user_list');
        */


        this.ctx.body = {}
    }
  }
  return HomeController;
};