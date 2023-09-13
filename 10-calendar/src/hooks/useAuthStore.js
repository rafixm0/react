import { useDispatch, useSelector } from "react-redux";
import {calendarApi} from "../api";
import { onChecking, onLogin, onLogout, clearErrorMessage, onLogoutCalendar } from "../store";



export const useAuthStore = () => {
  
    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {

        dispatch( onChecking() ); // pone la app en estado de carga
        
        try {
            
            const { data } = await calendarApi.post('/auth', { email, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }


    const startRegister = async({ name, email, password, password2 }) => {

        dispatch( onChecking() ); // pone la app en estado de carga
        
        try {
            
            const { data } = await calendarApi.post('/auth/new', { name, email, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            console.log(error);
            if (!!error.response.data.errors){
                let errores = Object.values(error.response.data.errors);
                dispatch( onLogout( errores[0].msg) || '' );
            }else{
                dispatch( onLogout( error.response.data?.msg || '--' ) );
            }            
            
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    
    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');

        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogoutCalendar());
        dispatch( onLogout());
    }

  
    return {

        //* Propiedades
        status,
        user,
        errorMessage,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
  }
}
