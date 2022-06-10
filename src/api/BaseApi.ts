import axios, {AxiosInstance} from "axios";

class BaseApi {
    baseUrl = '127.0.0.1:8000/api'
    axiosInstance: AxiosInstance
    token: string = ''

    constructor(token: string | null) {
        let headers = this.getHeaders()
        if (token) {
            headers.Authorization = `Token ${token}`
            this.token = token
        }
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: headers
        });
    }

    doRequest(path: string, type: string, params: object | null = null, data: object | null = null) {
        switch (type) {
            case 'get': return this._get(path, params)
            case 'post': return this._post(path, data)
        }

        return this._get(path, null)

    }

    _get(path: string, params: object | null) {
        return axios.get(this.baseUrl + path, {params: params})
    }

    _post(path: string, data: object | null) {
        return axios.post(this.baseUrl + path, data)
    }

    getHeaders() {
        return {
            'Content-type': 'application/json',
            'Authorization': `Token ${this.token}`
        }
    }
}


export default BaseApi


