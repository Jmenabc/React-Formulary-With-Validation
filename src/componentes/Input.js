import React from "react";
import { Input, Label, GrupoInput, LeyendaError, IconoValidacion } from './../elementos/Formularios';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ label, placeholder, type, name, errorLeyend, regularExpresion }) => {
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <GrupoInput>
                <Input type={type} placeholder={placeholder} id={name} />
                <IconoValidacion icon={faCheckCircle} />
            </GrupoInput>
            <LeyendaError>{errorLeyend}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;