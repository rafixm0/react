import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'GifExpertApp';
    const url = 'https://rafix.org';


    test('Debe de hacer match con el snapshoot', () => {

        const {container} = render ( <GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();

    })


})