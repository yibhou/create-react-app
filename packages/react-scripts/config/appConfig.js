'use strict';

const appConfigPath = require('./paths').appConfigPath;

// 加载 react.config 配置
function getAppConfig() {
  const appConfig = Object.assign(
    {
      devServer: {},
    },
    appConfigPath && require(appConfigPath),
  );
  return appConfig;
}

module.exports = getAppConfig();
