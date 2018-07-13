import { Controller } from 'egg';

const createRule = {
    accessToken: 'string',
    title: 'string',
    tab: {
        type: 'enum',
        values: ['ask', 'share', 'job'],
        required: false,
    },
    content: 'string',
};

export default class TopicController extends Controller {
    public async create() {
        const ctx = this.ctx;

        ctx.logger.debug('TopicController entry');

        ctx.validate(createRule);

        const id = await ctx.service.topics.create(ctx.request.body);

        ctx.logger.debug('TopicController, id: ', id);

        ctx.body = {
            topic_id: id,
        };

        ctx.status = 201;
    }
}
