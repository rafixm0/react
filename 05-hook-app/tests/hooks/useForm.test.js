import { renderHook } from "@testing-library/react"
import { useForm } from '../../src/hooks/useForm'
import { act } from "react-dom/test-utils";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Rafa',
        email: 'rafix@google.com'
    }
    
    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({
              name: initialForm.name,
              email: initialForm.email,
              formState: initialForm,
              onResetForm: expect.any( Function ),
              onInputChange: expect.any( Function ),
          });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Carlos';
        const { result } = renderHook( () => useForm( initialForm ) );
        const {onInputChange, onResetForm} = result.current;
        
        act( () => {
            onInputChange({ target: { name: 'name', value: newValue}});
            onResetForm();
        });

        expect( result.current.name).toBe( initialForm.name);
        expect(result.current.formState.name).toBe( initialForm.name);      

    })

    


})