'use strict';
const path = require('path');

module.exports = appInfo => {

    const config = {};
    config.keys = 'test';

    config.middleware =  [ 'errorHandler', 'ipFilter', 'respond', 'userAgent' , 'serverTiming',
        'connectionLimit', 'maxRequests', 'paramsTransform', 'notFound' ];

    config.errorHandler = {
        // 非 `/api/` 路径不在这里做错误处理，留给默认的 onerror 插件统一处理
        match: '/api',
    }

    config.mysql = {
        // 单数据库信息配置
        clients: {
            suchi : {
                // host
                host: '127.0.0.1',
                // 端口号
                port: '3306',
                // 用户名
                user: 'root',
                // 密码
                password: 'root',
                // 数据库名
                database: 'suchi',
            }

        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,

        default: {}
    };

    config.redis = {
        client: {
            host: '127.0.0.1',
            port: '6379',
            password: '',
            db: '0',
        },
    };

    // 日志相关
    config.logger = {
     appLogName: `${appInfo.name}.log`,
     coreLogName: 'core.log',
     agentLogName: 'agent.log',
     errorLogName: 'error.log',
    }

    config.logrotator = {
      filesRotateByHour: [
         path.join(appInfo.root, 'logs', appInfo.name, `${appInfo.name}.log`),
         path.join(appInfo.root, 'logs', appInfo.name, 'core.log'),
         path.join(appInfo.root, 'logs', appInfo.name, 'agent.log'),
         path.join(appInfo.root, 'logs', appInfo.name, 'error.log')
      ],           // list of files that will be rotated by hour
      filesRotateBySize: [
         path.join(appInfo.root, 'logs', appInfo.name, `${appInfo.name}.log`),
         path.join(appInfo.root, 'logs', appInfo.name, 'core.log'),
         path.join(appInfo.root, 'logs', appInfo.name, 'agent.log'),
         path.join(appInfo.root, 'logs', appInfo.name, 'error.log')
      ],           // list of files that will be rotated by size
      maxFileSize: 1 * 1024 * 1024,   // Max file size to judge if any file need rotate
      maxFiles: 100,                    // pieces rotate by size
      rotateDuration: 60000,           // time interval to judge if any file need rotate
      maxDays: 31,                     // keep max days log files, default is `31`. Set `0` to keep all logs
    };


    // 自定义log目录
    config.customLogger = {
      scheduleLogger: {
        file: path.join(appInfo.root, 'logs/schedule/schedule.log'),
      },
        devLogger: {
          file: path.join(appInfo.root, 'logs/dev/dev.log'),
        }
    }

    config.logger = {
        level: 'DEBUG',
        consoleLevel: 'DEBUG',
    };

    // session 相关
    config.session = {
        key: 'EGG_SESS',
        maxAge: 24 * 3600 * 1000, // 1 天
        httpOnly: true,
        encrypt: true,
    };

    // 文件上传
    config.multipart = {
        fileSize: '50mb',
        fileExtensions: [
            '.foo',
            '.apk',
        ],
        whitelist: [
            '.png',
        ],
    };

    // i18N
    config.i18n = {
        defaultLocale: 'zh-CN',
    };

    // bodyparser
    config.bodyParser ={
        jsonLimit: '1mb',
        formLimit: '1mb',
    };

    // JSONP
    config.jsonp = {
        callback: 'callback', // 识别 query 中的 `callback` 参数
        limit: 100, // 函数名最长为 100 个字符
    };


    return config;
};
