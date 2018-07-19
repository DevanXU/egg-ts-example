import { Controller } from 'egg';

export default class DingCallbackController extends Controller {
    public async handleCallback() {
        const ctx = this.ctx;

        ctx.logger.debug('DingCallbackController, request', ctx.request);

        ctx.body = {
        };

        ctx.status = 200;
    }
}
