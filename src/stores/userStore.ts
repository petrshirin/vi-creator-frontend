import { observable} from 'mobx';
import UserApi, {UserInfoType} from "../api/UserApi";

class UserStore {
    @observable firstName: string;
    @observable secondName: string;
    @observable birthDate: string;
    @observable email: string;
    @observable token: string;
    @observable role: string;
    @observable username: string;
    @observable telegramToken: string;
    userApi: UserApi;

    constructor() {
        this.firstName = 'Петр'
        this.secondName = 'Ширин'
        this.birthDate = '23.01.2001'
        this.email = 'p.e.shirin@gmail.com'
        this.role = 'student'
        this.username = 'petr_shirin'
        this.telegramToken = '5543736434:AAE1HG5yU8xBpEGhNeOr28V-XZfC-OFRzhA'
        this.token = localStorage.getItem('auth-token') || ''
        this.userApi = new UserApi(this.token)
    }
}

const userStore = new UserStore();

export default userStore;
export { UserStore };
