import React, { Component } from 'react';
import { PegarTodosPersonagens } from '../../services/CrudCharacter';
import { Form, Button, Table } from "react-bootstrap";

export default class CharcacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            valor: 0,
            personagens: []
        };
    }

    componentDidMount() {
        this.atualizarDados();
    }

    atualizarDados = async () => {
        await PegarTodosPersonagens()
            .then(dados => {this.setState({ personagens: dados })
            console.log(this.state.personagens)})
            .catch(erro => this.props.history.push("/"))
    }

    render() {
        return (
            <div className="padding-principal">
                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Nome</th>
                                <th>Valor</th>
                            </tr>

                            {this.state.personagens.map((item, i) => {
                                return <tr key={i}>
                                    <th>{i + 1}</th>
                                    <th>{item.nome}</th>
                                    <th>{item.valor}</th>
                                </tr>
                            })}
                        </thead>
                    </Table>
                </div>
            </div>
        )
    }
}
