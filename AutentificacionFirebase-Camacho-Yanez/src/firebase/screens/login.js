import React, { useState } from "react";

import firebaseApp from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { getFirestore, doc, setDoc} from "firebase/firestore";
const auth = getAuth(firebaseApp);

function login(){
    const firestore = getFirestore(firebaseApp);
    const [isRegistrando, setIsRegistrando] = useState(false);
    
    async function registrarUsuario(email, password, rol){

        const infoUsuario = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).then((usuarioFirebase)=> {
            return usuarioFirebase;
        });

        console.log(infoUsuario.user.uid);
        const docuRef = doc(firestore, 'usuarios/${infoUsuario.user.uid}'); 
        setDoc(docuRef, {correo: email, rol: rol});
    }
    function submitHandler (e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;

        console.log("submit", email, password, rol);

        if (isRegistrando){
            //registrar
            registrarUsuario(email, password, rol);
        } else {
            //login
            signInWithEmailAndPassword(auth, email, pas);
        }
    }
    return (
    <div>
         <h1>{isRegistrando ? "Registrate" : "Inicia sesion"}</h1>
    <form onSubmmit={submitHandler}> 
        <label>
            Correo electronico:
            <input type="email" id="email"/>
        </label>

        <label>
            Contrasenia: 
            <input type="password" id="password"/>
        </label>
        
        <label>
            Rol: 
            <select id="rol">
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
            </select>
        </label>

        <input
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesion"}
          />
    </form>
    <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero Registrarme"}
    </button>
    </div>
    );
}

export default login;