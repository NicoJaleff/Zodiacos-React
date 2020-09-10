import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function zodiacos({ zodiaco }) {
    return (
        < Card className="card col-3 text-center"  >
            <Card.Img src={require(`../assets/img/${zodiaco.imagen}`)} alt="imagen-zodiacos" />
            <Card.Title>{zodiaco.signo}</Card.Title>
            <Card.Text>
                <Link to={`/detalleZodiaco/${zodiaco.id}`}>Ver detalle</Link>
            </Card.Text>
        </Card>
    )
}