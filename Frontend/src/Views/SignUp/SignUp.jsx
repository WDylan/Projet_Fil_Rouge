import "./SignUp.scss";
import { useState } from 'react';
import HomeScreen from "../HomeScreen/HomeScreen";
import SignInScreen from '../SignIn/SignInScreen';

function SignUp() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='signUpScreen'>
            <div>
                <div className="signUpScreen_nav">
                    <a href={<HomeScreen />}>
                        <img className='signUpScreen_logo'
                            src='./img/logo.png' />
                    </a>
                    <button onClick={() => setSignIn(true)}
                        className='loginScreen_button'>
                        Sign In
                    </button>
                </div>
            </div>
            <div className="signUpScreen_container">
                <div className="signUpScreen_upper">
                    <h1 className="signUpScreen_titre">
                        Créer un compte pour commencer à regarder Netflix
                    </h1>
                </div>
                <div className="signUpScreen_body">
                    <div class="signupScreen_group">
                        <label for='prenom'>Prénom</label>
                        <input type="text" id='prenom' name="prenom" autoComplete="off" required></input>
                    </div>
                    <div class="signupScreen_group">
                        <label for='prenom'>Nom</label>
                        <input type="text" id='nom' name="nom" autoComplete="off" required></input>
                    </div>
                    <div class="signupScreen_group">
                        <label for='prenom'>Email</label>
                        <input type="text" id='email' name="email" autoComplete="off" required></input>
                    </div>
                    <div class="signupScreen_group">
                        <label for='prenom'>Mot de Passe</label>
                        <input type="text" id='mdp' name="motdepasse" autoComplete="off" required></input>
                    </div>
                </div>
            </div>
        </div>




    )
}


export default SignUp;