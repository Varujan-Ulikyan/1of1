import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { styles } from "../../styles";
import Regist from "./RegistModal";
import { Context } from "../../main";
const LoginForm = ({active, setActive}) =>  {
    const { store } = useContext(Context)
    const { register, handleSubmit } = useForm()
    const [Registactive, setRegistactive] = useState(false)
    const onSubmit = (data) => {
        store.login(data.email, data.password);
        console.log(data);
    }
    return (
        <>
        <div className={active ? "LoginModal active bg-hero-pattern bg-cover bg-no-repeat bg-center w-full h-full" : "LoginModal"} onClick={() => setActive(false)}>  
            <div className="LoginMKodalContent" onClick={(e) => e.stopPropagation()}>
                <h3 className={`${styles.heroSubText}`}>Login to your account</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                First Name <br/>
                    <input {...register('email')} type="email" id="Email"/>
                </label>
                <label>First Namex <br/>
                    <input {...register('password')} type="password" id="password"/>
                </label>
                    <button type="submit" className="loginButton">Login</button>
                </form>
                <p>Don`t have an account? Create!</p>
                <button className="registButton" onClick={() => setRegistactive(true)}>Register</button>
            </div>
        </div>
        <Regist Registactive={Registactive} setRegistactive={setRegistactive}/>
        </>
    )
}

export default LoginForm