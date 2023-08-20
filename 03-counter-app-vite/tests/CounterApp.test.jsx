import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas sobre el archivo CounterApp', () => {
    
    test('Debe de hacer match con el snapshoot.', () => {

        const { container } = render( <CounterApp value={100} />);

        expect( container ).toMatchSnapshot();

    })


    test('Probamos que el valor inicial del contador es 100', () => {

        render( <CounterApp value={100} />);

        expect( screen.getByText(100)).toBeTruthy();
        expect( screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');

    })


    test('Probamos que incremente el botón +1', () => {

        render( <CounterApp value={10} />);
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('11')).toBeTruthy();

    })


    test('Probamos que incremente el botón -1', () => {

        render( <CounterApp value={10} />);
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('9')).toBeTruthy();

    })


    test('Probamos que funciona el botón Reset', () => {

        render( <CounterApp value={10} />);
        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText('10')).toBeTruthy();

    })


})

