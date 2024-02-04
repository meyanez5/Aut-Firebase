// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyD_4TwXEa-cBUKNHurf4qD0lxlU5B0vNok",
  authDomain: "autentificacion-cy.firebaseapp.com",
  projectId: "autentificacion-cy",
  storageBucket: "autentificacion-cy.appspot.com",
  messagingSenderId: "71261339225",
  appId: "1:71261339225:web:d2c866a20d2ea514fa7b48"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
