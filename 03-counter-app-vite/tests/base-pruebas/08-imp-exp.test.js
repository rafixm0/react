import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.test.js', () => {

    test('getHeroeById de de devolver un heroe correctamente', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    })

    test('getHeroeById debe de regresar undefined si no exite el heroe', () => {

        const id = 40;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();

    })



    test('getHeroesByOwner debe de devovler heroes asociasdos a DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(3);
        
    })
    
    test('getHeroesByOwner debe de devovler heroes asociasdos a Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
        expect( heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner));
        
    })


})

