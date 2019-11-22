import firebase from 'firebase';

export const cadastraPersonagens = (dados) => {
    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`/personagens`)
            .push(dados)
    })
}

export const PegarPersonagens = () => {
    return new Promise((resolve, reject) => {
        firebase.database().ref(`/personagens`)
            .on('value', snapchot => {
                let recados = snapchot.val()
                resolve(recados)
            })
    })
}

export const DeletarPersonagens = () => {
    return new Promise((resolve, reject) => {
        
    })
}