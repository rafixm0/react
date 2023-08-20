const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");


describe('Pruebas en FirstApp />', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     // Le voy a tirar una foto a mi compoente y voy a ver si algo ha cambiado.
    //     const title = 'Hola, soy Vegeta';
    //     const {container} = render( <FirstApp title={title}/>);

    //     expect( container ).toMatchSnapshot();

    // })

    test('Debe de mostrar el título en un <h1>', () => {

        const title = 'Hola, soy Vegeta';
        const {container, getByText, getByTestId} = render( <FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect( h1.innerHTML ).toContain( title );
        
        expect(getByTestId('test-title').innerHTML ).toBe(title);

    })

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Vegeta';
        const subTitle = 'Rafa';
        const {container, getByText, getByTestId} = render( <FirstApp title={title} subtitle={subTitle}/>);

        expect( getByText(subTitle) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect( h1.innerHTML ).toContain( title );
        
        //expect(getByTestId('test-title').innerHTML ).toBe(title);

    })

})