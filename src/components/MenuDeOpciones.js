import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";


export default class MenuDeOpciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/agrupados">Agrupados por Elemento</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl name="text" value={this.state.text} onChange={this.handleChange.bind(this)} type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Link className="btn btn-warning " to={`/home/${"signo"}/${this.state.text}`} variant="dark" type="submit" >Buscar</Link>
                    </Form>
                </Navbar>
            </React.Fragment>
        );
    }
}