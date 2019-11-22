import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

import { logoff } from '../../../services/auth';

//Import CSS
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logado: false
    };
  }

  render() {
    return (
      <div>
        <header style={{ backgroundColor: "Black" }}>
          <div>
            <h1 className='titulo-header'><Link to="/" className='titulo-do-header'>Fortnite API</Link></h1>
            <div className='botoes-header'>
              <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Administrativo" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1"><Link to="/receivedMessages">Mensagens Recebidas</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="2"><Link to="/changeCharacter">Criar Personagens</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="3"><Link to="/changeErrands">Criar Recados</Link></Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Publico" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="4"><Link to="/login">Login</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="5"><Link to="/errands">Recados</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="6"><Link to="/charcacterList">Ver Personagens</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="7"><Link to="/contact">Contato</Link></Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <Button onClick={
                () => {
                  logoff()
                    .then(() => this.props.history.push("/"))
                }
              }>Sair</Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
