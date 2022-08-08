import React from "react";
import { Input, Label, GrupoInput, LeyendaError, IconoValidacion } from './../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ estado, cambiarEstado, label, placeholder, type, name, errorLeyend, regularExpresion, function2 }) => {
    const myOnChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validacion = () => {
        if (regularExpresion) {
            if (regularExpresion.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        }

        if (function2) {
            function2();
        }
    }

    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={myOnChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{errorLeyend}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;