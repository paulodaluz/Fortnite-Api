import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAlgnxTx3WJD8DLnpCUeC_un1wK4ZnrrK8",
    authDomain: "fortnite-api-d1b6d.firebaseapp.com",
    databaseURL: "https://fortnite-api-d1b6d.firebaseio.com",
    projectId: "fortnite-api-d1b6d",
    storageBucket: "fortnite-api-d1b6d.appspot.com",
    messagingSenderId: "322158175779",
    appId: "1:322158175779:web:1a85d75f8f3fddc9eeb396",
    measurementId: "G-81Z8BWSNLT"
};
firebase.initializeApp(firebaseConfig);

export const cadastraMessage = (dados) => {
    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`/contatoMessages`)
            .push(dados)
    })
}

export const getMensagens = () => {
    return new Promise((resolve, reject) => {
        const dados = [];
        firebase.database().ref(`/contatoMessages/`)
            .on('value', snapshot => {
                snapshot.forEach((doc) => {
                    var nome = doc.toJSON().nome
                    var email = doc.toJSON().email
                    var assunto = doc.toJSON().assunto
                    var mensagem = doc.toJSON().mensagem
                    dados.push({
                        nome, email, assunto, mensagem, 
                    }); 
                })
                resolve(dados)
            })
    })
}
