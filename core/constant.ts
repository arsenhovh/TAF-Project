import { config } from 'dotenv';
import { User } from './objects/User';
config();

class Users {
    testUser = new User(process.env.USERNAME, process.env.PASSWORD);
}

export default new Users();
