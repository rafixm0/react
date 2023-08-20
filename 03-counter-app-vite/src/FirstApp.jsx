import PropTypes from 'prop-types';


const persona = {
    nombre: 'Rafa',
    subtitulo: 'Soy el mismo OBJ',
}

export const FirstApp = ({ title, subtitle }) => {
    
  return (
    <>
        <div data-testid="test-title">{ title }</div>
        <h1>{ persona.nombre }</h1>
        <p>{ persona.subtitulo }</p>
        {/* <code>{ JSON.stringify(persona) }</code> */}
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired   
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}