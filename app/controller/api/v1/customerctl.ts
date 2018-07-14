import { Controller } from 'egg';

export default class CustomerController extends Controller {
    public async index() {
        const ctx = this.ctx;

        ctx.logger.debug('CustomerController.index');

        const customerList = await ctx.service.customersvc.list();

        ctx.logger.debug('CustomerController, list: ', customerList);

        ctx.body = {
            list: customerList,
        };

        ctx.status = 200;
    }
}
