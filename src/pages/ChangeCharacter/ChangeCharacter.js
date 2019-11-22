import React, { Component } from 'react';
import { cadastraPersonagens, PegarPersonagens, DeletarPersonagens } from '../../services/CrudCharacter';
import { Form, Button, Table } from "react-bootstrap";

//Import CSS
import "../../App.css";
import "./ChangeCharacter.css";

export default class ChangeCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: []
        };
    }

    componentDidMount() {
        PegarPersonagens().then(personagens => {
            this.setState({ personagens })
        })
    }

    excluirPersonagem() {}

    criarPesonagem(){}

    render() {
        return (
            <div className="padding-principal">
                <div>
                    <Form className='formulario-caracters'>
                        <Form.Group>
                            <Form.Label>Skin</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="text" placeholder="Digite o valor" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </div>

                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Nome</th>
                                <th>Valor</th>
                            </tr>

                           {/*  {this.state.personagens.map((item, i) => {
                            return <tr key={i}>
                                <th>{i + 1}</th>
                                <th>{item.nome}</th>
                                <th>{item.valor}</th>
                                <th onClick={() => this.excluirPersonagem()}>X</th>
                            </tr>
                        })} */}
                        </thead>
                    </Table>
                </div>
            </div>
        )
    }
}
