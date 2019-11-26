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
            nome: '',
            valor: 0,
            personagens: []
        };
    }

    componentDidMount() {
        this.atualizarDados();
    }


    atualizarDados = async (i) => {
        await PegarPersonagens(i)
            .then(dados => this.setState({ personagens: dados }))
            .catch(erro => this.props.history.push("/"))
    }

    limparDados = () => {
        this.setState({
            nome: '',
            valor: ''
        })
    }

    excluirPersonagem= async(personagem) => {
        await DeletarPersonagens(personagem)
        .then(dados => this.atualizarDados())
        .catch(erro => this.props.history.push("/"))
    }

    criarPesonagem = async () => {
        await cadastraPersonagens(this.state.nome, this.state.valor)
            .then(msg => this.setState({ successMessage: msg, errorMessage: "" }), this.atualizarDados(), this.limparDados())
            .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "" }))
    }

    render() {
        return (
            <div className="padding-principal">
                <div>
                    <Form className='formulario-caracters'>
                        <Form.Group>
                            <Form.Label>Skin</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome" onInput={e => this.setState({ nome: e.target.value })}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="text" placeholder="Digite o valor" onInput={e => this.setState({ valor: e.target.value })} />
                        </Form.Group>

                        <Button variant="primary" onClick={ () => this.criarPesonagem()}>
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
                                <th>Excluir</th>
                            </tr>

                            {this.state.personagens.map((item, i) => {
                            return <tr key={i}>
                                <th>{i + 1}</th>
                                <th>{item.nome}</th>
                                <th>{item.valor}</th>
                                <th onClick={() => this.excluirPersonagem(item.id)}>X</th>
                            </tr>
                        })}
                        </thead>
                    </Table>
                </div>
            </div>
        )
    }
}
