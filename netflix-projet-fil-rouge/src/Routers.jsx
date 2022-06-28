import React from "react";
import {
    BrowserRouter,
    Outlet,
    Routes,
    Route,
} from 'react-router-dom';
import SignIn from './Views/SignInView/SignIn';
import SignUp from './Views/SignUp/SignUp';
import FAQ from './Views/FAQ/Faq';


const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/signin' element={<FAQ />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </div>
    );
};

export default Routers;
