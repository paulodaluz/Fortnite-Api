import React, { Component } from 'react';
import * as apiEnem from '../../services/getEnemResults';
import { Table } from "react-bootstrap";

export default class AcessDenied extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: [],
            loading: true
        };
    }

    componentDidMount() {
        apiEnem.getNotes()
            .then(notas => {
                this.setState({ notas: notas[1] })
                this.setState({ loading: false })
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
                                <th>Ano Censo</th>
                                <th>cidade</th>
                                <th>dependenciaAdministrativaTxt</th>
                                <th>enemMediaGeral</th>
                                <th>nomeEscola</th>
                            </tr>

                             {this.state.notas.map((item, i) => {
                                return <tr key={i}>
                                    <th>{i + 1}</th>
                                    <th>{item.anoCenso}</th>
                                    <th>{item.cidade}</th>
                                    <th>{item.dependenciaAdministrativaTxt}</th>
                                    <th>{item.enemMediaGeral}</th>
                                    <th>{item.nome}</th>
                                </tr>
                            })}
                        </thead>
                    </Table>
                </div>
            </div>
        )
    }
}
