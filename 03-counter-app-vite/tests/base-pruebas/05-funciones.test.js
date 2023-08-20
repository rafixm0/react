import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un Objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        expect(testUser).toStrictEqual(user);

    })

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Rafa';
        const user = getUsuarioActivo(nombre);
        const nombreUser = user.username;
        
        // 1) expect(nombreUser).toBe('Rafa'); --- Otra forma de hacerlo:
        // 2) 
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        })

    })


 })


