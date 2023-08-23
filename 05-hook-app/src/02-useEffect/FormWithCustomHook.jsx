import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {


    const { formState, onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

  
    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name= 'username'
                value={ username }
                onChange={onInputChange}
            />
            <input 
                type="text"
                className="form-control mt-2"
                placeholder="email"
                name= "email"
                value={ email }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name= "password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2" >Borrar</button>
        
        </>
  )
}
