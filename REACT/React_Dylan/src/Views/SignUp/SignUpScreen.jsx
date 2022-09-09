import "./SignUpScreen.scss"
import React from "react";
import SignUpFormScreen from "../SignUpForm/SignUpFormScreen";

function SignUpScreen() {

    const register = (e) => {
        e.SignUpScreen();
    };

    const signIn = (e) => {
        e.preventDefault();
    };

    return <div className="signupScreen">
        <form>
            <h1>S'identifier</h1>
            <input placeholder="Email" type="email" />
            <input placeholder="Mot de Passe" type="password" />
            <button type="submit" onClick={signIn}>S'identifier</button>

            <h4>
                <span className="signupScreen_grisatre" onClick={SignUpFormScreen}>Première visite sur Netflix ? </span>
                 <span className="signupScreen_lien" onClick={register}>Inscrivez-vous.</span>
            </h4>
        </form>
    </div>

}

export default SignUpScreen;