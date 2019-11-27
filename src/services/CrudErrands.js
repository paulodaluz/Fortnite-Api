import firebase from 'firebase';

export const cadastraRecados = (dados) => {    
    return new Promise((resolve, reject) => {
    firebase
        .database()
            .ref(`/recados`)
            .push(dados)
    })
}

export const PegarRecados = () => {    
    return new Promise((resolve, reject) => {
        const recados = [];
        firebase.database().ref(`/recados`)
            .on('value', snapshot => {
                snapshot.forEach((doc) => {
                    var mensagem = doc.toJSON().mensagem
                    recados.push({
                        mensagem
                    });
                })
                resolve(recados)
            })
    })
}
