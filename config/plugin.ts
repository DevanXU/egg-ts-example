import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // disable security for local dev only
  // security: {
  //   enable: false,
  // },
};

export default plugin;
