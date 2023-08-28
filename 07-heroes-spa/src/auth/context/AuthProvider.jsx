import { useReducer } from "react"

import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/types"


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user, // si el user existe
        user: user,
    }
}

export const AuthProvider = ({ children }) => {
  
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name }
        const action = { type: types.login, payload: { id: 'ABC', name: name } }

        localStorage.setItem('user', JSON.stringify(user) );

        dispatch( action );
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout};
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            //Methods
            login: login,
            logout: logout,
        }}>
            { children }
        </AuthContext.Provider>
  )
}