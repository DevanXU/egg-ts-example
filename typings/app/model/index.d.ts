// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Customermodel from '../../../app/model/customermodel';

declare module 'sequelize' {
  interface Sequelize {
    Customermodel: ReturnType<typeof Customermodel>;
  }
}
