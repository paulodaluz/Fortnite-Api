import React, { Component } from 'react';
import { PegarRecados } from '../../services/CrudErrands';
import { Table } from 'react-bootstrap';

//Import CSS
import "../../App.css";
import "./Errands.css.css";
export default class Errands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensagens: []
        };
    }

    componentDidMount() {
        PegarRecados().then(mensagens => {
            this.setState({ mensagens })
        })
        console.log(PegarRecados())
    }

    render() {
        return (
            <div className="padding-principal">
                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Recado</th>
                            </tr>

                            {/* {this.state.mensagens.map((item, i) => {
                            return <tr key={i}>
                                <th>{i + 1}</th>
                                <th>{item.mensagem}</th>
                            </tr>
                        })} */}
                        </thead>
                    </Table>
                </div>
            </div>
        )
    }
}
