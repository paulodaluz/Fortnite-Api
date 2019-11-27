import React, { Component } from 'react';
import { getMensagens } from '../../services/CrudContact';
import { Table } from 'react-bootstrap';

//Import CSS
import "../../App.css";
import "./ReceivedMessages.css";

export default class ReceivedMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: []
        };
    }

    componentDidMount() {
        this.receberMensagens();
    }

    receberMensagens= async () => {
    await getMensagens().then(dados => {
        this.setState({ dados })
        console.log(this.state.mensagens)
    })
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
                            <th>Email</th>
                            <th>Assunto</th>
                            <th>Mensagem</th>
                        </tr>

                        {this.state.dados.map((item, i) => {
                            return <tr key={i}>
                                <th>{i + 1}</th>
                                <th>{item.nome}</th>
                                <th>{item.email}</th>
                                <th>{item.assunto}</th>
                                <th>{item.mensagem}</th>
                            </tr>
                        })}
                    </thead>
                </Table>
                </div>
            </div>
        )
    }
}
