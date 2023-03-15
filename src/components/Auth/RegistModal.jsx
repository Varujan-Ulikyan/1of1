import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import "../added.css"
import { Context } from '../../main'
const Regist = ({Registactive, setRegistactive}) => {
    const { store } = useContext(Context)
    const [error, setError] = useState('')
    const {
        register, 
        formState: { errors },
        handleSubmit
    } = useForm()
    
    const onSubmit = async (data) => {
       try {
       await store.registration(data.email, data.password, data.phone, data.country, data.city)        
       } catch (error) {
        setError(error.response?.data?.message)
       }
        
    }
  return (
    <div className={Registactive ? "RegistModal active bg-hero-pattern bg-cover bg-no-repeat bg-center" : 'RegistModal'} onClick={() => setRegistactive(false)}>
    <div className='RegistModalContent' onClick={(e) => e.stopPropagation()}>
    <h3>Create an account</h3>
    <h2>{Error}</h2>
    <h4 color='red'>{error}</h4>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input 
        {...register('email', { required: true })}
        aria-invalid={errors.email ? "true" : "false"}
        type='text'
        placeholder='email'
    />
        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
     <input 
        {...register('password', { required: true })}
        aria-invalid={errors.password ? "true" : "false"}
        type='password'
        placeholder='password'
    />
        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}

    <input 
         {...register('phone')}
        aria-invalid={errors.phone ? "true" : "false"}
        type='text'
        placeholder='Your phone number'
    />
        {errors.phone?.type === 'required' && <p role="alert">Phone number is required</p>}

     <input 
         {...register('country', { required: true })}
        aria-invalid={errors.country ? "true" : "false"}
        type='text'
        placeholder='Your country'
    />
        {errors.country?.type === 'required' && <p role="alert">Country is required</p>}

    <input 
         {...register('city', { required: true })}
        aria-invalid={errors.city ? "true" : "false"}
        type='text'
        placeholder='Your city'
    />
        {errors.city?.type === 'required' && <p role="alert">City is required</p>}
    <input type="submit" className='submit'/>
    </form>
    </div>
</div>
  )
}

export default Regist