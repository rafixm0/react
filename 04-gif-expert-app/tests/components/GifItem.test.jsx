import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'GifExpertApp';
    const url = 'https://rafix.org/goku.jpg';


    test('Debe de hacer match con el snapshoot', () => {

        const {container} = render ( <GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con el url y el ALT indicado', () => {

        render ( <GifItem title={ title } url={ url } />);
        //screen.debug();
        // expect( screen.getByRole( 'img').src).toBe( url );
        
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url);
        expect( alt ).toBe( title);
        
    })

    test('Debe de mostrar el titulo en el componente', () => {

        render ( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

    })


})