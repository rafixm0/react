import { prettyDOM, render, screen } from "@testing-library/react"
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Rafa'

    }


    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect( preTag.innerHTML).toBe( 'null' );

    });


    test('debe de mostrar el componente CON el usuario', () => {

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect( preTag.innerHTML).toContain( user.name );
        expect( preTag.innerHTML).toContain( user.id.toString() );


    });


})