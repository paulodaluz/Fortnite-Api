import firebase from 'firebase'

/* var firebaseConfig = {
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
 */
export const isAuthenticated = () => {
    return sessionStorage.getItem("login") !== null
}

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                sessionStorage.setItem("login", "1")
                resolve()
            })
            .catch((erro) => {
                reject(erro)
            })
    })
}

export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                resolve("Usuário criado com sucesso!")
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const logoff = () => {
    sessionStorage.removeItem("login")
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => resolve())
    })
}