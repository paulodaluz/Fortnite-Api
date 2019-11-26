import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
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
      errorMessage: '',
      checked: false
    };
  }

  componentWillMount(){
    var checkboxStorange = localStorage.getItem('checked');
    if (checkboxStorange === true || checkboxStorange === 'true'){
      this.setState({ checked: true })
    }
    if (checkboxStorange === false || checkboxStorange === 'false'){
      this.setState({ checked: false })
    }
    if (checkboxStorange === true || checkboxStorange === 'true') {
     var email = localStorage.getItem('email');
     this.setState({email: email})
    }
  }

  logar = async () => {
    var checkbox = this.state.checked
    if (checkbox === true || checkbox === 'true'){
      localStorage.setItem('checked', this.state.checked)
      localStorage.setItem('email', this.state.email)
    }else{
      localStorage.setItem('checked', this.state.checked)
    }
    await login(this.state.email, this.state.senha)
      .then(() => this.props.history.push("/"))
      .catch(erro => this.setState({ errorMessage: erro.message}))
  }

  changeState=()=> {
    this.setState({
      checked: !this.state.checked
    });
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
                value={this.state.email}
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
              <Form.Check defaultChecked={this.state.checked} onChange={this.changeState} type="checkbox" label="Lembre-me" />
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
