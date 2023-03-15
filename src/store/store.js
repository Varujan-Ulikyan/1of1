import {  makeAutoObservable } from "mobx"
import authService from "../services/authServices"
import { API_URL } from "../http"
import axios from "axios"
export default class Store {
    user = {}
    isAuth = false

    constructor(){
        makeAutoObservable(this)
    }
    setAuth(bool){
        this.isAuth = bool
    }
    setUser(user){
        this.user = user
    }

    async login(email, password){
        try {
            const response = await authService.login(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async registration(email, password, phone, country, city){
        try {
            const response = await authService.registration(email, password, phone, country, city)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async logout(){
        try {
            const response = await authService.logout()
            console.log(response);
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`,{withCredentials: true})
           console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    }
}