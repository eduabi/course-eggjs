/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552470702605_7934';
  config.cluster = { //设置egg监听的ip地址和端口号
    listen: {
      path: '',
      port: 7003,
      hostname: '127.0.0.1',
    }
  };
  config.security = { //egg服务白名单配置,解决跨域问题
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['http://localhost:3001']
  };
  config.cors = { //允许的请求方式
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.view = { //配置视图模板引擎
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    }
  }
  config.mongoose = { //mongoose配置
    client: {
      url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27019/wyy',  //wyy为数据库名称
      options: {
        server: {
          poolSize: 40,
        },
      }
    }
  };
  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: 'egg'
  };

  return {
    ...config,
    ...userConfig,
  };
};