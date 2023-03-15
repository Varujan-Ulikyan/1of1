import api from "../http"
export default class authService {
    static async login(email, password){
        return api.post('/login', {email, password})
    }

    static async registration(email, password, phone, country, city){
        return api.post('/registration', {email, password, phone, country, city})
    }

    static async logout(){
        return api.post('/logout')
    }
}
