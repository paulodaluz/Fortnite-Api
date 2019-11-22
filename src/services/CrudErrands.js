import firebase from 'firebase';

export const cadastraRecados = (dados) => {    
    return new Promise((resolve, reject) => {
    firebase
        .database()
            .ref(`/recados`)
            .push(dados)
    })
}

export const PegarRecados = (dados) => {    
    return new Promise((resolve, reject) => {
        firebase.database().ref(`/recados`)
            .on('value', snapchot => {
                let recados = snapchot.val()
                resolve(recados)
            })
    })
}
