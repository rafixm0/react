import {getImagen} from '../../src/base-pruebas/11-async-await';

describe('Pruebas en el archivo 11-async-await', () => {

    test('Probando getImagen(), debería de devolver una url de la imagen.', async() => {
        
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');


    })

})
