'use strict';

const path = require('path')

module.exports = appInfo => {

	const config = {};

	config.keys = ';dc2SxL;.scd2dscd'

	//** 中间件配置
    // config.middleware =  [ 'errorHandler', 'ipFilter', 'respond', 'userAgent' , 'serverTiming',
	// 					'connectionLimit', 'maxRequests', 'paramsTransform', 'notFound' ]
    //
    // config.errorHandler = {
     //    // 非 `/api/` 路径不在这里做错误处理，留给默认的 onerror 插件统一处理
     //    match: '/api',
    // }

	// config.serverTiming = {}

    // config.i18n = {
    //     // 默认语言，默认 "en_US"
    //     defaultLocale: 'zh-CN',
    //     // URL 参数，默认 "locale"
    //     queryField: 'locale',
    //     // Cookie 记录的 key, 默认："locale"
    //     cookieField: 'locale',
    //     // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    //     cookieMaxAge: '1y',
    //     dirs: [path.join(appInfo.baseDir, 'app/locale')]
    // };

	// config.maxRequests = {
	// 	max : 100
	// }
    //
    //
	// config.connectionLimit = {
	// 	mid: 5,
	// 	high: 10,
	// 	throwError: false,
	// 	pass: (ctx) => {
	// 		return false;
	// 	}
	// }

	//** ip过滤
    // config.compress = {
     //    forbidden: '403',
     //    filter: ['127.??.6*.12', '!1.2.*.4']
    // };
    //
    //
	// config.server_timing = {
    	// total: true
	// }
    //
	// config.bodyParser = {
     //    jsonLimit: '1mb',
	// 	formLimit: '1mb'
    // },

    //** 模板配置
    // config.view = {
		// defaultViewEngine: 'nunjucks',
		// defaultExtension: '.html',
		// root: [
		// 	path.join(appInfo.baseDir, 'app/view/back_end/dist/'),
		// 	path.join(appInfo.baseDir, 'app/view/front_end/pc/dist/'),
		// 	path.join(appInfo.baseDir, 'app/view/front_end/mobile/dist/'),
		// ].join(',')
    // }


	//** 静态资源配置
	// config.static = {
	// 	prefix: '/static',
	//   	dir: [
	//   		path.join(appInfo.baseDir, 'app/view/back_end/dist/'),
	//   		path.join(appInfo.baseDir, 'app/view/front_end/pc/dist/'),
	//   		path.join(appInfo.baseDir, 'app/view/front_end/mobile/dist/'),
	//   		path.join(appInfo.baseDir, 'app/public/'),
	//   	],
	//   	maxAge: 31536000,
	// };


	//** mysql orm 配置
    // config.mysql = {
     //    // 单数据库信息配置
     //    clients: {
     //        control_server : {
     //            // host
     //            host: '127.0.0.1',
     //            // 端口号
     //            port: '3306',
     //            // 用户名
     //            user: 'root',
     //            // 密码
     //            password: 'root',
     //            // 数据库名
     //            database: 'control_server',
	// 		}
    //
     //    },
     //    // 是否加载到 app 上，默认开启
     //    app: true,
     //    // 是否加载到 agent 上，默认关闭
     //    agent: false,
    //
	// 	default: {}
    // };

	//** redis 配置
	// config.redis = {
	// 	client: {
	// 		host: '127.0.0.1',
	// 		port: '6379',
	// 		password: '',
	// 		db: '0',
	// 	},
	// };

	// config.security = {
	// 	csrf :{
	// 		'enable': false
	// 	}
	// }

	//** 日志配置
	// config.logger = {
     //  appLogName: `${appInfo.name}-web.log`,
     //  coreLogName: 'egg-web.log',
     //  agentLogName: 'egg-agent.log',
     //  errorLogName: 'common-error.log',
    // }
    //
    // config.logrotator = {
	//   filesRotateByHour: [
     //      path.join(appInfo.root, 'logs', appInfo.name, `${appInfo.name}-web.log`),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'egg-agent.log'),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'common-error.log')
	//   ],           // list of files that will be rotated by hour
	//   filesRotateBySize: [
     //      path.join(appInfo.root, 'logs', appInfo.name, `${appInfo.name}-web.log`),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'egg-agent.log'),
     //      path.join(appInfo.root, 'logs', appInfo.name, 'common-error.log')
	//   ],           // list of files that will be rotated by size
	//   maxFileSize: 1 * 1024 * 1024,   // Max file size to judge if any file need rotate
	//   maxFiles: 100,                    // pieces rotate by size
	//   rotateDuration: 60000,           // time interval to judge if any file need rotate
	//   maxDays: 31,                     // keep max days log files, default is `31`. Set `0` to keep all logs
	// };

    // config.customLogger = {
    //   scheduleLogger: {
    //     file: path.join(appInfo.root, 'logs/schedule/schedule.log'),
    //   },
    // }
    //
    // config.logger = {
    //     level: 'DEBUG',
    //     consoleLevel: 'DEBUG',
    // };

	return config;
};