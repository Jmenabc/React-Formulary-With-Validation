import React from "react";
import { Input, Label, GrupoInput, LeyendaError, IconoValidacion } from './../elementos/Formularios';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ estado, cambiarEstado, label, placeholder, type, name, errorLeyend, regularExpresion }) => {
     const myOnChange = (e) => {
         cambiarEstado({...estado, campo: e.target.value});
     }

     const validacion = () => {
         if(regularExpresion) {
             if(regularExpresion.test(estado.campo)) {
                 console.log('input correcto')
             } else {
                 console.log('input no valido')
             }
         }
     }
    
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <GrupoInput>
                <Input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    // value={estado.campo}
                     onChange={myOnChange}
                     onKeyUp={validacion}
                     onBlur={validacion}
                />
                <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>
            <LeyendaError>{errorLeyend}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;