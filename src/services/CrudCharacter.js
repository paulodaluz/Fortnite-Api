import firebase from 'firebase';

export const cadastraPersonagens = (nome, valor) => {

    let dados = {
        nome,
        valor
    }

    console.log(dados)

    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/personagens/${user.uid}`)
            .push(dados)
            .then(() => resolve("Dados Salvos!"))
            .catch((erro) => reject(erro))
    })
}


export const DeletarPersonagens = (chave) => {
    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/personagens/${user.uid}/${chave}`)
            .remove()
            .then(() => resolve())
            .catch((erro) => reject(erro))
    })
}


export const PegarPersonagens = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .database()
                    .ref(`/personagens/${user.uid}`)
                    .on('value', snapchot => {
                        let dados = snapchot.val()
                        if (dados) {
                            const keys = Object.keys(dados)
                            const personagensLista = keys.map(id => {
                                return { ...dados[id], id }
                            })
                            resolve(personagensLista)
                        } else {
                            resolve([])
                        }
                    })
            } else reject()

        })

    })
}

export const PegarTodosPersonagens = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .database()
                    .ref(`/personagens`)
                    .on('value', snapchot => {
                        let dados = snapchot.val()
                        if (dados) {
                            const keys = Object.keys(dados)
                            const personagensLista = keys.map(id => {
                                return { ...dados[id], id }
                            })
                            resolve(personagensLista)
                        } else {
                            resolve([])
                        }
                    })
            } else reject()

        })

    })
}