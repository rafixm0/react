import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


//retornaArreglo

describe('Pruebas 07-deses-arr', () => {

    test('retornaArreglo debe de devolver un string y un número', () => {

        const lista = retornaArreglo();

        expect(lista.length).toEqual(2);
        expect(lista).toContain('ABC');
        expect(lista).toContain(123);

        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(typeof letters).toEqual(expect.any(String));
        expect(numbers).toEqual(expect.any(Number));

    })

})