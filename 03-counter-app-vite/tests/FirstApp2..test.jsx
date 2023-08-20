const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");


describe('Pruebas en FirstApp />', () => {

    test('Debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Vegeta';

        const { container } = render( <FirstApp title={title} />);

        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar el mensaje: "Hola, soy Vegeta"', () => {

        const title = 'Hola, soy Vegeta';

        render( <FirstApp title={title} />);
        //screen.debug();
        expect( screen.getByText(title) ).toBeTruthy();

    })


    test('Debe mostrar el título en un <h1>', () => {

        const title = 'Rafa';

        render( <FirstApp title={title} />);
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );

    })

    test('Debe de mostrar el subtítulo enviado por props', () => {

        const title = 'Rafa';
        const subTitle = 'Soy el mismo OBJ';

        render( <FirstApp title={title} subtitle={subTitle} />);
        expect( screen.getAllByText(subTitle).length).toBe(1);

    })


})