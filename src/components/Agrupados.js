import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import zodiacos from '../assets/json/zodiaco.json';

export default function Agrupados(props) {


    return (
        <React.Fragment>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Planeta</th>
                        <th>Diametro</th>
                    </tr>
                </thead>
                <tbody>
                    {zodiacos.map((zodiaco, index) => (
                        <tr key={index}>
                            <td>{zodiaco.elemento}</td>
                            <td>{zodiaco.signo}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
}
