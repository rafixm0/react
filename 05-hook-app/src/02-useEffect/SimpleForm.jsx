import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'rafix',
        email: 'rafix@google.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name]: value
        });
    }


    useEffect( () => {
        //console.log('useEffect se llamó');

    }, []);
   
    useEffect( () => {
        //console.log('formState se llamó');

    }, [formState]);
    
    useEffect( () => {
        //console.log('email se llamó');

    }, [email]);



  
    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name= 'username'
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name= 'email'
                onChange={onInputChange}
            />

            {
                (username === 'rafix2') && <Message />
            }
        
        </>
  )
}
