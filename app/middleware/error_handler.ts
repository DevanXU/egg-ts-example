import { Context } from 'egg';

const errorHandler = () => {
    return async (ctx: Context, next: () => Promise<any>) => {
        try {
            await next();
        } catch (err) {
            ctx.app.emit('error', err, ctx);

            const status = err.status || 500;

            const error = status === 500 && ctx.app.config.env === 'prod'
                ? 'Internal Server Error'
                : err.message;

            ctx.body = { error };
            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = status;
        }
    };
};

export default errorHandler;
