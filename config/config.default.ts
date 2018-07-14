import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531379913613_7008';

  // add your config here
  config.middleware = [];

  // disbale csrf, just for local dev only. SHOULD remove below line in production env
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };

  config.middleware = [
    'errorHandler',
  ];

  config.errorHandler = {
    match: '/api',
  };

  // Use below command to start a MySQL docker.
  // "docker run --name=test-mysql -v /home/devan/data/mysql/test:/var/lib/mysql \
  // -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql --default-authentication-plugin=mysql_native_password"
  config.sequelize = {
    dialect: 'mysql',
    database: 'test',
    host: '172.17.0.3',
    port: '3306',
    username: 'root',
    password: '',
  };

  return config;
};
