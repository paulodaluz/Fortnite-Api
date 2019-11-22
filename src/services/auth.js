import firebase from 'firebase'

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