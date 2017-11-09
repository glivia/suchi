'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    keys: appInfo.name + '_123456',
  };

  config.keys = 'test'

  return config;
};
