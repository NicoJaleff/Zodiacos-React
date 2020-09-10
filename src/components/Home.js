import React, { useState, useEffect } from 'react'
import zodiacos from '../assets/json/zodiaco.json';
import CartaSigno from './CartaSigno';


export default function Home(props) {

    const [zodiaco2, setZodiaco2] = useState([])

    useEffect(() => {
        function buscador() {
            const zodiacoEncontrado = props.match.params.signo;
            const type = props.match.params.type;

            if (zodiacoEncontrado !== undefined) {
                console.log("ENTRO A if")
                if (type === "signo") {
                    console.log("ENTRO A SIGNO")
                    const zodiacoFiltrado = zodiacos.filter(zodiaco => {
                        if (zodiaco.signo === zodiacoEncontrado) {
                            return zodiaco
                        }
                    })
                    setZodiaco2(zodiacoFiltrado)
                    console.log(zodiacoFiltrado)
                }
            }
        }

        buscador()
    }, [props.match.params.signo, props.match.params.type])


    return (
        <div className="container">
            <div className="row">
                {props.match.params.signo === undefined ?
                    zodiacos.map((zodiaco, index) => (
                        <CartaSigno key={index} zodiaco={zodiaco}></CartaSigno>
                    )) :
                    zodiaco2.length !== 0 ?
                        zodiaco2.map((zodiaco, index) => (
                            <CartaSigno key={index} zodiaco={zodiaco}></CartaSigno>
                        )) :
                        <div>
                            <strong> NO SE ENCONTRO ZODIACO</strong>
                        </div>
                }
            </div>
        </div >
    )
}
