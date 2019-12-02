import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, DropdownButton } from 'react-bootstrap';
import { createHashHistory } from 'history';

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
              <ButtonGroup style={{ margin: '1px 15px 0px 0' }}>
                <DropdownButton as={ButtonGroup} title="Administrativo" id="bg-nested-dropdown">
                  <Button variant="light"><Link to="/receivedMessages">Mensagens Recebidas</Link></Button>
                  <Button variant="light"><Link to="/changeCharacter">Criar Personagens</Link></Button>
                  <Button variant="light"><Link to="/changeErrands">Criar Recados</Link></Button>
                </DropdownButton>
              </ButtonGroup>
              <ButtonGroup style={{ margin: '1px 15px 0px 0' }}>
                <DropdownButton as={ButtonGroup} title="Publico" id="bg-nested-dropdown">
                  <div><Button variant="light"><Link to="/login">Login</Link></Button></div>
                  <div><Button variant="light"><Link to="/errands">Recados</Link></Button></div>
                  <div><Button variant="light"><Link to="/charcacterList">Ver Personagens</Link></Button></div>
                  <div><Button variant="light"><Link to="/contact">Contato</Link></Button></div>
                </DropdownButton>
              </ButtonGroup>
              <Button style={{ margin: '1px 15px 0px 0' }} onClick={
                () => {
                  logoff()
                    .then(() => createHashHistory().push("/login"))
                }
              }>Sair</Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
