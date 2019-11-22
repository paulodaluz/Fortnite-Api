import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";

// Imports de Services
import { cadastraRecados } from '../../services/CrudErrands';

//Import CSS
import "../../App.css";
import "./ChangeErrands.css";

export default class ChangeErrands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensagem: ''
        };

    }

    sendFeedback() {
        var mensagem = this.state.mensagem
        cadastraRecados({ mensagem })

        alert('Recado enviado!')
    }

    render() {
        return (
            <div className='centralizando-pagina-contact'>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Digite sua mensagem"
                            onInput={(e) =>
                                this.setState({ mensagem: e.target.value })} />
                    </Form.Group>

                    <Button variant="primary" onClick={() => this.sendFeedback()}  >
                        Enviar
                    </Button>
                </Form>
            </div>
        )
    }
}
