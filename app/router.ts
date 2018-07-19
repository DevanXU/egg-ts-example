import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.resources('customers', '/api/v1/customers', controller.api.v1.customerctl);

  router.resources('topics', '/api/v1/topics', controller.api.v1.topicctl);

  router.post('/dd/suite/callback/suitexbhoxzylsbf8rrxc', controller.dd.callbackctl.handleCallback);
};
