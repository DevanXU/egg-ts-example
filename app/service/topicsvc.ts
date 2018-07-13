import { Context, Service } from 'egg';

export default class TopicService extends Service {
    root: string;

    constructor(ctx: Context) {
        super(ctx);
        this.root = 'https://cnodejs.org/api/v1';
    }

    public async create(params) {
        const result = await this.ctx.curl(`${this.root}/topics`, {
            method: 'POST',
            data: params,
            dataType: 'json',
            contentType: 'json',
        });

        this.checkSuccess(result);

        return result.data.topic_id;
    }

    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknow error';
            this.ctx.throw(result.status, errorMsg);
        }

        if (!result.data.success) {
            this.ctx.throw(500, 'remote response error', { data: result.data });
        }
    }
}
