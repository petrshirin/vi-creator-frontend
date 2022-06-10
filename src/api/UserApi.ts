import BaseApi from "./BaseApi";


type UserInfoType = {
    firstName: string
    secondName: string
    birthDate: string
    email: string
    role: string
    token: string
}

type UserAuthType = {
    email: string
    password: string
}

class UserApi extends BaseApi {

    getUser() {
        return this.doRequest('/user/me/', 'get')
    }

    authUser(data: UserAuthType) {
        return this.doRequest('/user/auth/', 'post', null, data)
    }
}


export default UserApi
export type {UserInfoType}




