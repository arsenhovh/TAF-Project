import { User } from './objects/User';
import { Dashboard } from './objects/Dashboard';


export class Users {
    static testUser = new User(process.env.USERNAME, process.env.PASSWORD);
}

export class Dashboards {
    static dashboard1 = new Dashboard('New Dashboard1', 'Some Description1');
    static dashboard2 = new Dashboard('New Dashboard2', 'Some Description2');
    static dashboard3 = new Dashboard('New Dashboard3', 'Some Description3');
    static dashboardEdit = new Dashboard('Edit Dashboard3', 'Edit Description3');
}


