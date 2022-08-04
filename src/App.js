import React from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from './componentes/Input';

const App = () => {
  return (
    <main>
      <Formulario action=''>
        <ComponenteInput
          type="text"
          label="Usuario"
          placeholder="Usuario"
          name="usuario"
          errorLeyend="El usuario tiene que ser de 4-16 digitos y solo puede contener numeros, letras y guion bajo"
          regularExpresion=""
        />

        <ComponenteInput
          type="password"
          label="Contraseña"
          placeholder="Pon aqui tu contraseña"
          name="password"
          errorLeyend="La contraseña tiene que ser de 4-16 digitos y solo puede contener numeros, letras y guion bajo"
          regularExpresion=""
        />




        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>

        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b>Por Favor rellene el Formulario Correctamente
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type='submit'>
            Enviar
          </Boton>
          <MensajeExito>Formulario enviado correctamente</MensajeExito>
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
  );
}



export default App;