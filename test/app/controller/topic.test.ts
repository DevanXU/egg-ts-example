// import * as assert from 'assert';
import { app, mock } from 'egg-mock/bootstrap';

describe('test/app/controller/topics.test.js', () => {
    it('should POST /api/v1/topics/ 422', () => {
        app.mockCsrf();
        return app.httpRequest()
            .post('/api/v1/topics')
            .send({
                accessToken: '123',
            })
            .expect(422)
            .expect({
                error: 'Validation Failed',
                detail: [
                    { message: 'required', field: 'title', code: 'missing_field' },
                    { message: 'required', field: 'content', code: 'missing_field' },
                ],
            });
    });

    it('should POST /api/v1/topics/ 201', () => {
        app.mockCsrf();
        app.mockService('topicsvc', 'create', '123');

        return app.httpRequest()
            .post('/api/v1/topics')
            .send({
                accessToken: '123',
                title: 'title',
                content: 'hello',
            })
            .expect(201)
            .expect({
                topic_id: 123,
            });
    });
});
