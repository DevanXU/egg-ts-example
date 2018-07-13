/**
 * Refer to below URL for usage code:
 * https://blog.csdn.net/qq_30101131/article/details/78578281
 */

export default (app) => {
    const { STRING, INTEGER } = app.Sequelize;

    const customerModel = app.model.define('CustomerModel', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING,
            allowNull: false,
        },
    },
        {
            tableName: 'customers',
        }
    );

    return customerModel;
};
