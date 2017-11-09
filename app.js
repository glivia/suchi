const easyMonitor = require('easy-monitor');

module.exports = app => {

    easyMonitor('suchi');

	app.sessionStore = {
		*get(key) {
			const res = yield app.redis.get(key);
			if (!res) return null;
			return JSON.parse(res);
		},

		*set(key, value, maxAge) {
			// maxAge not present means session cookies
			// we can't exactly know the maxAge and just set an appropriate value like one day
			if (!maxAge) maxAge = 24 * 60 * 60 * 1000;
			value = JSON.stringify(value);
			yield app.redis.set(key, value, 'PX', maxAge);
		},

		* destroy(key) {
			yield app.redis.del(key);
		},
	};

	//** 自定义Params类型
    app.validator.addRule('jsonString', (rule, value) => {
		try {
			JSON.parse(value);
		} catch (err) {
			return 'must be json string';
		}
	});

    // app.config.coreMiddleware.unshift('errorHandler');

    // 启动自定义 初始化一些参数
    // app.beforeStart(function* () {
    //     // 保证应用启动监听端口前数据已经准备好了
    //     // 后续数据的更新由定时任务自动触发
    //     yield app.runSchedule('UpdateCache');
    // });

    app.messenger.on('glivia_action', data => {
        console.log(data)
    });


    /*
    app.messenger.broadcast(action, data)
        发送给所有的 agent / app 进程（包括自己）

    app.messenger.sendToApp(action, data):
        发送给所有的 app 进程
            在 app 上调用该方法会发送给自己和其他的 app 进程
            在 agent 上调用该方法会发送给所有的 app 进程

    app.messenger.sendToAgent(action, data):
        发送给 agent 进程
            在 app 上调用该方法会发送给 agent 进程
            在 agent 上调用该方法会发送给 agent 自己

    agent.messenger.sendRandom(action, data):
        app 上没有该方法（现在 Egg 的实现是等同于 sentToAgent）
            agent 会随机发送消息给一个 app 进程（由 master 来控制发送给谁）

    app.messenger.sendTo(pid, action, data): 发送给指定进程



    app.messenger.once('egg-ready', () => {
        app.messenger.sendToAgent('agent-event', { foo: 'bar' });
        app.messenger.sendToApp('app-egent', { foo: 'bar' });
    });

    agent.messenger.on('egg-ready', () => {
        const data = { 'glivia': 10 };
        agent.messenger.sendToApp('glivia_action', data);
    });
    */
};