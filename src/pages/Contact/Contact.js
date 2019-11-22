import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";

// Imports de Services
import { cadastraMessage } from '../../services/CrudContact';

//Import CSS
import "../../App.css";
import "./Contact.css";

export default class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    };

  }

  sendFeedback() {
    var nome = this.state.nome
    var email = this.state.email
    var assunto = this.state.assunto
    var mensagem = this.state.mensagem
    cadastraMessage({nome, email, assunto, mensagem})

    alert('Recado enviado, agradecemos seu Feedback!')
  }
  
    render() {
        return (
          <div className='centralizando-pagina-contact'>
            <Form>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text-muted" placeholder="Digite seu nome" 
                  onInput={(e) =>
                    this.setState({ nome: e.target.value })}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail"
                  onInput={(e) =>
                    this.setState({ email: e.target.value })} />
                <Form.Text className="text-muted">
                  Para podermos dar um retorno!
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Assunto</Form.Label>
                <Form.Control
                  type="text-muted"
                  placeholder="Digite o assunto"
                  onInput={(e) =>
                    this.setState({ assunto: e.target.value })} />
              </Form.Group>

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
        );
    }
}
