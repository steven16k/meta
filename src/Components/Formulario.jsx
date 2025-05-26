import React, { use, useState } from "react";


function Formulario() {
    const [Nombre, SetNombre] = useState(''); //div
    const [Edad, SetEdad] = useState('');//div
    const [Datos, SetDatos] = useState(false);
    const Mensaje = (e) => {
        e.preventDefault(); //evita que se cargue la pagina
        SetDatos(true)
        console.log('Nombre: ', Nombre); //mostrar mensajes en cuadro de diagolo de la web
        console - log('Edad: ', Edad);
    };
    return (
        <div>
            <h2>
                Login
            </h2>
            <form onChange={Mensaje}>
                <div>
                    <label>Nombre: </label>
                    <input type="text"
                        value={Nombre}
                        onChange={(e) => SetNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label>Edad: </label>
                    <input type="text"
                        value={Edad}
                        onChange={(e) => SetEdad(e.target.value)}
                    />
                </div>
                <button type="sumit">Enviar</button>
            </form>
            {Datos && (

                <div>
                    <h4>
                        tus datos:
                    </h4>
                    <p><strong>Nombre: </strong>{Nombre}</p>
                    <p><strong>Edad: </strong>{Edad}</p>
                </div>
            )}
        </div>
    );

};

export default Formulario;













// Como Funciona Usestate 
// Realizar 3 ejercicios sencillos