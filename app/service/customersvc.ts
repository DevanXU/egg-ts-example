import { Service } from 'egg';

export default class CustomerService extends Service {
    public async list() {
        const list = await this.app.model.Customermodel.findAll();
        return list;
    }
}
