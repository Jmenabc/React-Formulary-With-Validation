import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from './componentes/Input';

const App = () => {
  const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [password, cambiarPassword] = useState({ campo: '', valido: null });
  const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  return (
    <main>
      <Formulario action=''>

        <ComponenteInput
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          type="text"
          label="Usuario"
          placeholder="Usuario"
          name="usuario"
          errorLeyend="El usuario tiene que ser de 4-16 digitos y solo puede contener numeros, letras y guion bajo"
          regularExpresion={expresiones.usuario}
        />

        <ComponenteInput
          estado={password}
          cambiarEstado={cambiarPassword}
          type="password"
          label="Contraseña"
          placeholder="password"
          name="password1"
          errorLeyend="La contraseña ha de ser de 4 a 12 digitos"
          regularExpresion={expresiones.password}
        />

        <ComponenteInput
          estado={password2}
          cambiarEstado={cambiarPassword2}
          type="password"
          label="Repetir Contraseña"
          placeholder="password2"
          name="password2"
          errorLeyend="Ambas contraseñas deben de ser iguales"
        />

        <ComponenteInput
          estado={correo}
          cambiarEstado={cambiarCorreo}
          type="email"
          label="Correo Electrónico"
          placeholder="test@gmail.com"
          name="correo"
          errorLeyend="el correo solo puede contener letras, numeros, puntos etc"
          regularExpresion={expresiones.correo}
        />

        <ComponenteInput
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          type="text"
          label="Teléfono"
          placeholder="123456789"
          name="telefono"
          errorLeyend="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          regularExpresion={expresiones.telefono}
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