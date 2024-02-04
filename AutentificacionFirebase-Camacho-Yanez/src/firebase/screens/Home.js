import React from "react";

import AdminView from "../components/AdminView";
import UserViewView from "../components/UserView";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut} from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({ user }){
    return(
        <div>
            Home
            <button OnClick={()=> signOut(auth)}>Cerrar sesion</button>
             {user.rol = "admin" ? <AdminView/> : <UserView/>}
        </div>
    );
}

export default Home;