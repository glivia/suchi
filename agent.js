module.exports = agent => {
    agent.messenger.on('egg-ready', () => {
        const data = { 'glivia': 10 };
        agent.messenger.sendToApp('glivia_action', data);
    });
};