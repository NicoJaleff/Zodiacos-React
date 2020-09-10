import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import zodiacos from "../assets/json/zodiaco.json";
export default function Detalle(props) {

    const [zodiaco, setZodiaco] = useState(undefined)

    useEffect(() => {
        function buscarZodiaco() {
            const zodiacoEncontrado = zodiacos.find(zodiaco => zodiaco.id === Number(props.match.params.id))
            setZodiaco(zodiacoEncontrado)
        }

        buscarZodiaco()
    }, [])

    function meses(meses) {
        if (meses.length !== 0) {
            let mes = [];
            console.log(meses)
            for (let index = 0; index < meses.length ; index++) {
                console.log("  Paso  " + index)
                if (meses[index] === 1) {
                    mes.push("• Enero ");
                } else if (meses[index] === 2) {
                    mes.push("• Febrero ");
                } else if (meses[index] === 3) {
                    mes.push("• Marzo ");
                } else if (meses[index] === 4) {
                    mes.push("• Abril ");
                } else if (meses[index] === 5) {
                    mes.push("• Mayo ");
                } else if (meses[index] === 6) {
                    mes.push("• Junio ");
                } else if (meses[index] === 7) {
                    mes.push("• Julio ");
                } else if (meses[index] === 8) {
                    mes.push("• Agosto ");
                } else if (meses[index] === 9) {
                    mes.push("• Septiembre ");
                } else if (meses[index] === 10) {
                    mes.push("• Octubre ");
                } else if (meses[index] === 11) {
                    mes.push("• Noviembre ");
                } else if (meses[index] === 12) {
                    mes.push("• Diciembre ");
                }

            }
            return mes;
        }
    }

    return (
        <React.Fragment>
            {zodiaco !== undefined && (
                <Table variant="dark" className="TarjetaDetalle">
                    <thead>
                        <tr>
                            <td>
                                <img className="imagen" variant="top" src={require(`../assets/img/${zodiaco.imagen}`)} alt="imagen-planeta" />
                                <td>
                                    <strong>Nombre:</strong> {zodiaco.signo}
                                </td>
                            </td>
                            <td>
                                <strong>Elemento:  </strong> {zodiaco.elemento} <br></br>
                                <strong>Simbolos:  </strong> {zodiaco.simbolo}  <br></br>
                                <strong>Meses:  </strong> {meses(zodiaco.meses)}  <br></br>
                                <strong>Descripcion: </strong> {zodiaco.descripcion}
                            </td>

                        </tr>

                    </thead>
                    <Button className="btn btn-warning btn-block" href="/Home" >Volver</Button>

                </Table>
            )}
        </React.Fragment>
    )
}