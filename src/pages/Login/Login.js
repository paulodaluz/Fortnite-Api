import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { login } from '../../services/auth';

//Import CSS
import "../../App.css";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      errorMessage: ''
    };
  }

  logar = async () => {
    this.setState({ loading: true })
    await login(this.state.email, this.state.senha)
      .then(() => this.props.history.push("/"))
      .catch(erro => this.setState({ errorMessage: erro.message, loading: false }))
  }

  teste () {
    this.setState({ email: localStorage.getItem('email')}) 
  }

  render() {
    return (
      <div className="padding-login imagem-background-login">
        <div className="painel">
          <h1 className="centraliza-titulo">Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Endereço de email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onInput={e => this.setState({ email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onInput={e => this.setState({ senha: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembre-me" />
            </Form.Group>

            <Button
              variant="dark"
              className="button-logar"
              onClick={() => this.logar()}
            >
              Logar
            </Button>
            <p style={{color: 'red', textAlign: "center", padding: '5px 0 0 0'}}>{this.state.errorMessage}</p>
            <div className="criar-cadastro">
              <Link to="/register">Voce ainda não possui uma conta?</Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
