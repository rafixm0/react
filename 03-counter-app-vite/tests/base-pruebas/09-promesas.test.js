import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe devolver un heroe', (done) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })

    })

    test('getHeroeByIdAsync debe devolver un error si no encuentra el héroe', (done) => {

        const id = 100;

        getHeroeByIdAsync( id )
            .catch( error => {
                
                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);

                done();
            })

    })

})
