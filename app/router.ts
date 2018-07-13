import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // router.post('/api/v1/customers/list', controller.api.v1.customers.list);

  router.resources('topics', '/api/v1/topics', controller.api.v1.topics);
};
