//firebase config
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyDtgAzkosEds-iGlshPv7BKbjUB9mIoVeY",
    authDomain: "mbo-vue.firebaseapp.com",
    databaseURL: "https://mbo-vue.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "920945447811"
}
let app = Firebase.initializeApp(config)
let db = app.database()

let objectsRef = db.ref('objects')

export default objectsRef