'use strict';

module.exports = appInfo => {
    const config = {};
    config.test = {
        keys: appInfo.name + '_123456',
    };

    config.keys = 'test'

    return config;
};
