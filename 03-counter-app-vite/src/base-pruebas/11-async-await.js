
export const getImagen = async() => {

    try {

        const apiKey = 'x9KbNYaIDYQa95LkXa4tg67zkouQ6A5y';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontró la imagen.';
    }
    
}




