import { Controller } from 'egg';

export default class CustomersController extends Controller {
    public async list() {
        const { ctx } = this;
        ctx.logger.info('Customer List Request: ', ctx.request.header);
        ctx.logger.debug('Customer List Request: ', ctx.request.body);
        ctx.logger.debug('Customer List Request: ', ctx.request.body.user);
        ctx.body = 'Customer List';
    }
}
