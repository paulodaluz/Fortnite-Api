import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";

export default class Contato extends Component {
    render() {
        return (
          <div>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text-muted" placeholder="Digite seu nome" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
                <Form.Text className="text-muted">
                  Para podermos dar um retorno!
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Assunto</Form.Label>
                <Form.Control
                  type="text-muted"
                  placeholder="Digite o assunto"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Digite sua mensagem"/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        );
    }
}
